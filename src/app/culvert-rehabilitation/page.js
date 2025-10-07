'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Shield,
  Clock,
  Zap,
  Award,
  CheckCircle,
  ArrowRight,
  Phone,
  Mail,
  Users,
  Wrench,
  Target,
  Gauge,
  ChevronDown,
  ChevronUp,
  Building2,
  Droplets,
  HardHat,
  Truck
} from 'lucide-react';

const CulvertRehabilitationPage = () => {
  const [expandedFaq, setExpandedFaq] = useState(null);

  const toggleFaq = (index) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  const faqItems = [
    {
      question: "What is SIPP (Spray In Place Pipe) technology?",
      answer: "SIPP is a trenchless pipe renewal method that sprays polymeric linings inside deteriorated pipes. This provides both corrosion protection and structural enhancement, extending service life by decades while being more cost-effective than traditional replacement methods."
    },
    {
      question: "How long does a SIPP rehabilitation project take?",
      answer: "SIPP applications cure rapidly, typically allowing projects to be completed in days rather than weeks. The fast-cure technology minimizes downtime and reduces traffic disruption compared to traditional open-cut methods."
    },
    {
      question: "What types of pipes can be rehabilitated with SIPP?",
      answer: "SIPP technology works on various pipe materials including concrete, steel, and cast iron. It's compatible with different shapes and sizes, from small drainage pipes to large culverts and complex geometries."
    },
    {
      question: "How does SIPP compare to pipe replacement costs?",
      answer: "SIPP is significantly more cost-effective than traditional open-cut replacement methods. It eliminates the need for extensive excavation, reduces labor costs, and minimizes traffic disruption and restoration expenses."
    }
  ];

  const applications = [
    {
      icon: Building2,
      title: "Culverts",
      description: "Highway and railway culverts of all sizes and shapes"
    },
    {
      icon: Droplets,
      title: "Water/Wastewater Pipelines",
      description: "Municipal and industrial water distribution and collection systems"
    },
    {
      icon: Truck,
      title: "Drainage Systems",
      description: "Storm water management and flood control infrastructure"
    },
    {
      icon: HardHat,
      title: "Manholes & Storage",
      description: "Access points, tanks, and specialized containment structures"
    }
  ];

  return (
    <div className="min-h-screen bg-white">

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-950 to-[#142142] text-white py-24 md:py-32 pt-32 md:pt-40 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-orange-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-orange-500/20 text-orange-400 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                Spray In Place Pipe (SIPP) Technology
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
                Culvert Rehabilitation
                <span className="block text-orange-400">That Works</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Cost-effective, minimally invasive solutions that extend culvert life by decades 
                without full replacement. Advanced polyurea spray coatings that stop corrosion 
                and restore structural integrity.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link
                  href="/contact"
                  className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:shadow-xl transition-all flex items-center justify-center"
                >
                  Get Free Assessment
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <a
                  href="tel:(940) 391-1230"
                  className="border-2 border-orange-400 text-orange-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-400 hover:text-white transition-all flex items-center justify-center"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  (940) 391-1230
                </a>
              </div>

              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-700">
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-400 mb-2">18+</div>
                  <div className="text-sm text-gray-400">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-400 mb-2">Fast</div>
                  <div className="text-sm text-gray-400">Curing Process</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-400 mb-2">Minimal</div>
                  <div className="text-sm text-gray-400">Downtime</div>
                </div>
              </div>
            </div>

            {/* Hero Video (cover-cropped YouTube) */}
            <div className="relative">
              <div className="h-[500px] rounded-2xl overflow-hidden">
                <div className="relative w-full h-full overflow-hidden">
                  {/* Make iframe “cover” the box (crops sides, removes black bars) */}
                  <iframe
                    className="absolute top-0 left-1/2 -translate-x-1/2 h-full" 
                    /* 177.78% ≈ 16/9, forces width > container to crop */
                    src="https://www.youtube.com/embed/iSr6xIM1_zc?autoplay=1&mute=1&loop=1&playlist=iSr6xIM1_zc&controls=0&modestbranding=1&rel=0&playsinline=1"
                    title="ASFI Culvert Rehabilitation"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                    referrerPolicy="strict-origin-when-cross-origin"
                  />
                </div>
              </div>

              {/* Floating benefit cards */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-6 border border-gray-100">
                <div className="flex items-center space-x-3">
                  <Clock className="h-8 w-8 text-orange-600" />
                  <div>
                    <div className="font-bold text-slate-800">Minimal Downtime</div>
                    <div className="text-sm text-slate-600">Fast application</div>
                  </div>
                </div>
              </div>

              <div className="absolute -top-6 -right-6 bg-white rounded-xl shadow-xl p-6 border border-gray-100">
                <div className="flex items-center space-x-3">
                  <Award className="h-8 w-8 text-orange-600" />
                  <div>
                    <div className="font-bold text-slate-800">Cost Effective</div>
                    <div className="text-sm text-slate-600">vs. Replacement</div>
                  </div>
                </div>
              </div>
            </div>
            {/* End hero video */}
          </div>
        </div>
      </section>


      {/* Why Culvert Rehabilitation Matters */}
      <section className="py-20 bg-white border-t-4 border-b-4 border-orange-500">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-6">
              Why Culvert Rehabilitation Matters
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Aging and damaged culverts can lead to erosion, flooding, road failures, and safety hazards. 
              ASFI Construction offers cost-effective, minimally invasive solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="bg-orange-100 rounded-full p-4 inline-block mb-4 group-hover:bg-orange-200 transition-colors">
                <Zap className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Fast-Curing Protection</h3>
              <p className="text-slate-600">
                Highly durable lining systems that stop corrosion and restore structural integrity
              </p>
            </div>

            <div className="text-center group">
              <div className="bg-orange-100 rounded-full p-4 inline-block mb-4 group-hover:bg-orange-200 transition-colors">
                <Wrench className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Custom Engineering</h3>
              <p className="text-slate-600">
                Tailored systems based on culvert size, shape, and condition
              </p>
            </div>

            <div className="text-center group">
              <div className="bg-orange-100 rounded-full p-4 inline-block mb-4 group-hover:bg-orange-200 transition-colors">
                <Clock className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Minimal Downtime</h3>
              <p className="text-slate-600">
                Disruptive highway closures and expensive replacements are a thing of the past
              </p>
            </div>

            <div className="text-center group">
              <div className="bg-orange-100 rounded-full p-4 inline-block mb-4 group-hover:bg-orange-200 transition-colors">
                <Shield className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Long-Lasting Protection</h3>
              <p className="text-slate-600">
                Resistant to corrosion, abrasion, and chemical exposure
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SIPP Technology Deep Dive */}
      <section className="py-20 bg-[#3652A0]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">
                Advanced SIPP Technology
              </h2>
              <p className="text-xl text-slate-300 mb-8">
                Spray In Place Pipe (SIPP) is a trenchless technology pipe renewal method that 
                sprays layers of polymeric lining inside deteriorated pipes to provide extended service life.
              </p>

              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <div className="bg-orange-500/20 rounded-lg p-2 mr-4 mt-1">
                    <Target className="h-6 w-6 text-orange-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Superior Performance</h3>
                    <p className="text-slate-300">
                      Polymeric SIPP materials offer higher chemical resistance, corrosion protection, 
                      and tensile strength compared to traditional methods.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-orange-500/20 rounded-lg p-2 mr-4 mt-1">
                    <Gauge className="h-6 w-6 text-orange-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Structural Enhancement</h3>
                    <p className="text-slate-300">
                      Research shows polymeric SIPP can increase the service load carrying capacity 
                      of fully corroded culverts by up to 800%.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-orange-500/20 rounded-lg p-2 mr-4 mt-1">
                    <Users className="h-6 w-6 text-orange-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Environmental Benefits</h3>
                    <p className="text-slate-300">
                      Environmentally friendly with smaller construction footprint and 
                      compatibility with complex geometries.
                    </p>
                  </div>
                </div>
              </div>

              <Link
                href="/contact"
                className="inline-flex items-center bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:shadow-xl transition-all"
              >
                Learn More About Our Process
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>

            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/culvert-rehabilitation.jpg"
                  alt="SIPP robotic equipment in action applying polyurea coating technology inside pipe infrastructure"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50 border-t-4 border-orange-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-slate-600">
              Common questions about SIPP technology and culvert rehabilitation
            </p>
          </div>

          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <div key={index} className="bg-gray-50 rounded-lg overflow-hidden">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-100 transition-colors"
                >
                  <span className="font-semibold text-slate-800">{item.question}</span>
                  {expandedFaq === index ? (
                    <ChevronUp className="h-5 w-5 text-slate-600" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-slate-600" />
                  )}
                </button>
                {expandedFaq === index && (
                  <div className="px-6 pb-4">
                    <p className="text-slate-600 leading-relaxed">{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Leadership Section */}
      <section className="py-20 bg-gradient-to-br from-slate-950 to-[#142142] text-white border-t-4 border-b-4 border-orange-500">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Industry-Leading Materials & Expertise
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              We proudly partner with segment leading vendors, giving our clients access to the 
              most advanced coating technologies on the market.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-orange-500/20 rounded-full p-4 inline-block mb-4">
                <Award className="h-8 w-8 text-orange-400" />
              </div>
              <h3 className="text-xl font-bold mb-3">Certified Teams</h3>
              <p className="text-slate-300">
                Our specialists are trained to deliver precision applications with a focus on safety, quality, and performance.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-orange-500/20 rounded-full p-4 inline-block mb-4">
                <Target className="h-8 w-8 text-orange-400" />
              </div>
              <h3 className="text-xl font-bold mb-3">Advanced Technology</h3>
              <p className="text-slate-300">
                Access to the most advanced coating technologies and application methods in the industry.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-orange-500/20 rounded-full p-4 inline-block mb-4">
                <Shield className="h-8 w-8 text-orange-400" />
              </div>
              <h3 className="text-xl font-bold mb-3">Quality Assurance</h3>
              <p className="text-slate-300">
                Rigorous quality control processes ensure every project meets the highest standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-[#3652A0] border-b-4 border-orange-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Extend Your Infrastructure Life?
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            Get a free consultation and discover how our SIPP solutions can provide 
            cost-effective rehabilitation for your culvert and pipeline needs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:shadow-xl transition-all flex items-center justify-center"
            >
              Get Free Assessment
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <a
              href="tel:(940) 391-1230"
              className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-[#3652A0] transition-all flex items-center justify-center"
            >
              <Phone className="mr-2 h-5 w-5" />
              Call (940) 391-1230
            </a>
          </div>

          {/* Contact info */}
          <div className="mt-8 pt-8 border-t border-slate-600">
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-slate-300">
              <a href="mailto:rachel@asficonstruction.com" className="flex items-center hover:text-white transition-colors">
                <Mail className="h-4 w-4 mr-2" />
                rachel@asficonstruction.com
              </a>
              <span className="hidden sm:block">•</span>
              <span>Serving Texas and Beyond</span>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default CulvertRehabilitationPage;