ASFI Construction's public site at [asficonstruction.com](https://www.asficonstruction.com).

Use **Node 24.22.1** and **npm 11.17.0**, pinned in the runtime files/package metadata.

```sh
npm ci --ignore-scripts
npm run lint
npm run build
npx playwright install chromium
npm run check:upgrade
```

The browser check runs against a local production server by default. All Formspree
submissions, tracking and the existing YouTube embed are intercepted: it sends no
real inquiries. Six pages, images/schema, navigation, homepage links, FAQs, slider
controls and contact error/retry/success behavior are checked on desktop/mobile.
See [October maintenance notes](docs/SECURITY-MAINTENANCE-2026-10.md).

The sections below are the original framework starter instructions.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
