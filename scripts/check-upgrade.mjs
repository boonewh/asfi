// All form POSTs are intercepted, including hosted checks. No real messages.
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {spawn} from 'node:child_process';
import {fileURLToPath} from 'node:url';
const {chromium,devices}=await import(process.env.PLAYWRIGHT_MODULE||'playwright');
const root=fileURLToPath(new URL('../',import.meta.url)),output=root+'test-results/';fs.mkdirSync(output,{recursive:true});
const base=process.env.SITE_CHECK_BASE_URL||'http://127.0.0.1:3435',stage=process.env.CHECK_STAGE||'after',baseline=stage==='baseline',local=!process.env.SITE_CHECK_BASE_URL;
const paths=['/','/about','/culvert-rehabilitation','/bridge-waterproofing','/food-plants','/contact'];
const faqs={'/culvert-rehabilitation':'Do you handle large diameter culvert repair?','/bridge-waterproofing':'What types of bridges do you provide bridge waterproofing for?','/food-plants':'Are these coatings USDA approved for food facilities?'};
let server,browser;
try{
 if(local){server=spawn(process.execPath,['node_modules/next/dist/bin/next','start','-H','127.0.0.1','-p','3435'],{cwd:root,env:{...process.env,NEXT_TELEMETRY_DISABLED:'1'},stdio:'ignore',windowsHide:true});let ready=false;for(let i=0;i<80;i++){if(server.exitCode!==null)throw Error('App exited');try{if((await fetch(base,{signal:AbortSignal.timeout(1000)})).ok){ready=true;break;}}catch{}await new Promise(r=>setTimeout(r,250));}assert(ready);}
 const pages=[],images=new Set(),missingSchemaAssets=[];
 for(const path of paths){
  const response=await fetch(base+path);assert.equal(response.status,200,path);const html=await response.text();
  const title=html.match(/<title>(.*?)<\/title>/s)?.[1],description=html.match(/<meta name="description" content="([^"]+)"/)?.[1];assert(title);assert(description);assert(html.includes('enterprise52.com/js/813387.js'));assert(html.includes('enterprise52.com/813387.png'));
  for(const name of ['x-content-type-options','x-frame-options','referrer-policy'])assert(response.headers.get(name),name);
  const schema=[...html.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>(.*?)<\/script>/gs)].map(match=>JSON.parse(match[1]));assert(schema.length>=2);
  for(const match of html.matchAll(/<img\b[^>]*\bsrc="([^"]+)"/g)){const url=new URL(match[1].replaceAll('&amp;','&'),base);const asset=url.pathname==='/_next/image'?url.searchParams.get('url'):url.pathname;if(asset?.startsWith('/images/'))images.add(asset);}
  const embeds=[...html.matchAll(/<iframe\b[^>]*\bsrc="([^"]+)"/g)].map(match=>match[1]);
  pages.push({path,title,description,schema,embeds});
 }
 const schemaAssets=new Set(pages.flatMap(page=>JSON.stringify(page.schema).match(/https:\/\/www\.asficonstruction\.com\/images\/[^"\\]+/g)||[]));
 for(const url of schemaAssets){const pathname=new URL(url).pathname,response=await fetch(base+pathname);if(response.status!==200){missingSchemaAssets.push(pathname);assert(baseline,'Broken structured-data image '+pathname);}else images.add(pathname);}
 for(const image of images){const response=await fetch(base+image);assert.equal(response.status,200,image);assert.match(response.headers.get('content-type'),/^image\//);assert((await response.arrayBuffer()).byteLength>100);}
 const optimized=await fetch(base+'/_next/image?url=%2Fimages%2Flogo.png&w=640&q=75');assert.equal(optimized.status,200);assert.match(optimized.headers.get('content-type'),/^image\//);
 const sitemap=await fetch(base+'/sitemap.xml');assert.equal(sitemap.status,200);const xml=await sitemap.text();for(const path of paths)assert(xml.includes('https://www.asficonstruction.com'+(path==='/'?'':path)));
 assert.equal((await fetch(base+'/robots.txt')).status,200);assert.equal((await fetch(base+'/favicon.ico')).status,200);assert.equal((await fetch(base+'/upgrade-check-missing')).status,404);
 browser=await chromium.launch({headless:true});const ui=[];
 for(const [name,options]of[['desktop',{viewport:{width:1440,height:1000}}],['mobile',devices['iPhone 13']]]){
  const context=await browser.newContext({...options,serviceWorkers:'block'});const page=await context.newPage();page.setDefaultTimeout(15000);
  const errors=[],unexpected=[],failed=[],submissions=[];let mode='error',release;
  page.on('pageerror',error=>errors.push(error.message));page.on('response',response=>{if(new URL(response.url()).origin===base&&response.status()>=400)failed.push(response.url());});
  await context.route('**/*',async route=>{
   const request=route.request(),url=new URL(request.url());if(url.origin===base)return route.continue();
   if(url.hostname==='enterprise52.com')return route.fulfill({status:200,contentType:'application/javascript',body:''});
   if(url.hostname==='www.youtube.com'&&url.pathname.startsWith('/embed/'))return route.fulfill({status:200,contentType:'text/html',body:'<!doctype html><title>Embedded video fixture</title>'});
   if(url.origin==='https://formspree.io'&&url.pathname==='/f/xovlrjrp'){
    assert.equal(request.method(),'POST');const data=request.postData();assert(data.includes('upgrades@example.test'));assert(data.includes(baseline?'All Seasons Foam Contact Form Submission':'ASFI Construction Contact Form Submission'));assert(data.includes('Synthetic local verification'));submissions.push({mode});
    if(mode==='pending')await new Promise(resolve=>{release=resolve;});if(mode==='network')return route.abort('failed');
    return route.fulfill({status:mode==='error'?503:200,contentType:'application/json',body:mode==='error'?JSON.stringify({errors:[{message:'Synthetic Formspree service unavailable'}]}):JSON.stringify({next:'https://formspree.io/thanks'})});
   }
   unexpected.push(url.origin);return route.abort();
  });
  const layout=[];
  for(const path of paths){
   assert.equal((await page.goto(base+path,{waitUntil:'networkidle'})).status(),200);await page.locator('h1').first().waitFor();assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth+1),false,path);
   layout.push(await page.evaluate(()=>({path:location.pathname,headings:[...document.querySelectorAll('h1')].map(node=>node.textContent),bodyFont:getComputedStyle(document.body).fontFamily,headingSize:getComputedStyle(document.querySelector('h1')).fontSize,headingColor:getComputedStyle(document.querySelector('h1')).color,navColor:getComputedStyle(document.querySelector('nav')).backgroundColor})));
   if(faqs[path]){const question=page.getByRole('button',{name:faqs[path],exact:true}),container=question.locator('..');assert.equal(await container.locator('p').count(),0);await question.click();assert.equal(await container.locator('p').count(),1);await question.click();assert.equal(await container.locator('p').count(),0);}
  }
  const send=page.getByRole('button',{name:'Send Message',exact:true});await send.click();assert.equal(submissions.length,0);assert.equal(await page.locator('form').evaluate(form=>form.checkValidity()),false);
  await page.getByLabel('Name *',{exact:true}).fill('Fictional upgrade fixture');await page.getByLabel('Email *',{exact:true}).fill('upgrades@example.test');await page.getByLabel('Message *',{exact:true}).fill('Synthetic local verification; no real message.');
  await Promise.all([page.waitForResponse(response=>response.url()==='https://formspree.io/f/xovlrjrp'),send.click()]);await page.waitForFunction(()=>!document.querySelector('button[type="submit"]').disabled);
  const formWideErrorVisible=await page.getByText('Synthetic Formspree service unavailable',{exact:true}).isVisible();if(!baseline)assert(formWideErrorVisible);
  assert.equal(await page.getByLabel('Name *',{exact:true}).inputValue(),'Fictional upgrade fixture');assert.equal(await page.getByLabel('Message *',{exact:true}).inputValue(),'Synthetic local verification; no real message.');
  mode='network';await send.click();await page.waitForFunction(()=>!document.querySelector('button[type="submit"]').disabled);if(!baseline){await page.getByText(/Failed to fetch/i).waitFor();assert((await page.locator('form').getByRole('alert').innerText()).trim());}
  mode='pending';await send.click();for(let i=0;!release&&i<80;i++)await new Promise(resolve=>setTimeout(resolve,25));assert(release);assert.equal(await send.isEnabled(),false);mode='success';release();await page.getByText('Thank you! We’ll get back to you soon.',{exact:true}).waitFor();assert.equal(submissions.length,3);
  await page.goto(base,{waitUntil:'networkidle'});const hero=page.locator('main section').first();const active=()=>hero.evaluate(section=>[...section.children].findIndex(node=>node.classList.contains('opacity-100')));
  const first=await active();await hero.locator('button').nth(1).click();assert.equal(await active(),(first+1)%3);await hero.locator('button').nth(0).click();assert.equal(await active(),first);
  const ctaTargets=[];
  if(!baseline){for(const [index,path]of['/culvert-rehabilitation','/bridge-waterproofing','/food-plants'].entries()){await page.getByRole('link',{name:'Learn More',exact:true}).nth(index).click();await page.waitForURL(base+path);ctaTargets.push(path);await page.goto(base,{waitUntil:'networkidle'});}const quote=page.getByRole('link',{name:'Request Quote',exact:true});assert.equal(await quote.getAttribute('href'),'/contact');assert.equal(await page.getByRole('link',{name:'Call (940) 391-1230',exact:true}).getAttribute('href'),'tel:+19403911230');await quote.click();await page.waitForURL(base+'/contact');await page.goto(base,{waitUntil:'networkidle'});}
  const nav=page.locator('nav'),menu=nav.getByRole('button').first();if(await menu.isVisible())await menu.click();await nav.getByRole('link',{name:'Contact',exact:true}).click();await page.waitForURL(base+'/contact');if(name==='mobile')assert.equal(await menu.getAttribute('aria-expanded'),'false');
  if(process.env.BASELINE_CHECKS_PATH){const before=JSON.parse(fs.readFileSync(process.env.BASELINE_CHECKS_PATH));const normalize=styles=>page.evaluate(styles=>{const canvas=document.createElement('canvas'),ctx=canvas.getContext('2d',{colorSpace:'srgb'});const pixel=color=>{ctx.clearRect(0,0,1,1);ctx.fillStyle=color;ctx.fillRect(0,0,1,1);return [...ctx.getImageData(0,0,1,1).data];};return styles.map(style=>({...style,headingColor:pixel(style.headingColor),navColor:pixel(style.navColor)}));},styles);assert.deepEqual(await normalize(layout),await normalize(before.ui.find(item=>item.name===name).layout),'Original typography and rendered colors retained');}
  assert.deepEqual(errors,[]);assert.deepEqual(unexpected,[]);assert.deepEqual(failed,[]);await page.screenshot({path:output+stage+'-'+name+'.png',fullPage:true});ui.push({name,layout,formWideErrorVisible,formErrorAndNetworkRetry:true,draftPreserved:true,pendingDisabled:true,success:true,faqToggles:3,sliderControls:true,navigation:true,ctaTargets,interceptedSubmissions:submissions.length});await context.close();
 }
 if(process.env.BASELINE_CHECKS_PATH){const before=JSON.parse(fs.readFileSync(process.env.BASELINE_CHECKS_PATH));const expected=JSON.parse(JSON.stringify(before.pages).replaceAll('/images/asfi-logo.png','/images/logo.png'));assert.deepEqual(pages,expected,'Metadata/schema retained except corrected logo');}
 const result={stage,base,pages,images:[...images],missingSchemaAssets,ui,realMessages:0,trackingStubbed:true};fs.writeFileSync(output+stage+'-checks.json',JSON.stringify(result,null,2)+'\n');console.log(JSON.stringify({stage,pages:pages.length,images:images.size,missingSchemaAssets,ui:ui.map(({name,formWideErrorVisible})=>({name,formWideErrorVisible})),realMessages:0}));
}catch(error){console.error(error);process.exitCode=1;}finally{await browser?.close();server?.kill();}
