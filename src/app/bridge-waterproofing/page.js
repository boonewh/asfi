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
  Droplets,
  Layers,
  Timer,
  Thermometer,
  Wind,
  Target,
  ChevronDown,
  ChevronUp,
  Truck,
  HardHat,
  Building2,
  MapPin,
  Star
} from 'lucide-react';

const BridgeWaterproofingPage = () => {
  const [expandedStep, setExpandedStep] = useState(0);
  const [expandedFaq, setExpandedFaq] = useState(null);

  const toggleStep = (index) => {
    setExpandedStep(expandedStep === index ? null : index);
  };

  const toggleFaq = (index) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  const waterproofingSteps = [
    {
      number: "01",
      title: "Surface Preparation",
      icon: HardHat,
      description: "Surface preparation methods are performed in accordance with SSPC-SP10/NACE No. 6 standards. Shot blasting, abrasive blasting, or surface milling are standard preparation methods.",
      details: "Proper surface preparation is critical for membrane adhesion and long-term performance. Our certified technicians ensure optimal surface conditions for maximum durability."
    },
    {
      number: "02", 
      title: "Primer Application",
      icon: Droplets,
      description: "Primer is applied to the prepared deck. The primer is water thin and can be applied by pump or hand-mixed and spread by squeegee.",
      details: "The primer creates optimal adhesion between the substrate and membrane system, ensuring a bond that will last for decades."
    },
    {
      number: "03",
      title: "Membrane Application", 
      icon: Layers,
      description: "The membrane is applied through specialized spray equipment, and is typically applied to a thickness of 80 mils.",
      details: "Our advanced spray equipment ensures uniform thickness and seamless coverage, even on irregular surfaces and complex geometries."
    },
    {
      number: "04",
      title: "Aggregate Top Coat",
      icon: Target,
      description: "To maximize adhesion between the waterproofing membrane and asphalt overlay, the top coat is applied with an aggregate broadcast.",
      details: "The aggregate broadcast ensures maximum mechanical bond with the asphalt wearing course for long-term performance."
    },
    {
      number: "05",
      title: "Sweeping Aggregate",
      icon: Wind,
      description: "Aggregate is broadcast into the wet membrane until refusal. After the initial set of the membrane, excess aggregate is swept and removed from the bridge deck surface.",
      details: "Proper aggregate management ensures optimal surface texture while maintaining the integrity of the waterproof membrane."
    },
    {
      number: "06",
      title: "Tack Coat Application",
      icon: Truck,
      description: "Application of a tack coat is used to ensure maximum adhesion between the waterproofing membrane and asphalt wearing course.",
      details: "The tack coat creates the final bonding layer that integrates the waterproofing system with the roadway surface."
    },
    {
      number: "07",
      title: "Asphalt Placement",
      icon: Timer,
      description: "A minimum one (1) hour cure time of the membrane is required before installation of the asphalt wearing course.",
      details: "Fast cure times minimize traffic disruption while ensuring the membrane has achieved sufficient strength for overlay installation."
    }
  ];

  const keyBenefits = [
    {
      icon: Droplets,
      title: "Environmentally Friendly",
      description: "100% solids, NO VOCs - environmentally friendly formula that meets the strictest environmental standards"
    },
    {
      icon: Clock,
      title: "Fast Cure",
      description: "Cures in seconds, even in temperatures well below freezing. Can accept ballast and asphalt overlays within one hour"
    },
    {
      icon: Shield,
      title: "Crack Bridging Capable", 
      description: "Has passed the ASTM C 1305 Standard Test Method for Crack Bridging Ability of Liquid-Applied Waterproofing Membrane at 40 cycles"
    },
    {
      icon: Layers,
      title: "Seamless Protection",
      description: "Provides continuous seamless waterproofing membrane, even on irregular surfaces and complex bridge geometries"
    },
    {
      icon: Star,
      title: "Made in America",
      description: "Proudly manufactured in the USA with the highest quality standards and material consistency"
    },
    {
      icon: Thermometer,
      title: "All-Weather Application",
      description: "Can be applied in extreme weather conditions, ensuring project schedules stay on track"
    }
  ];

  const faqItems = [
    {
      question: "How long does bridge waterproofing last?",
      answer: "Our high-performance waterproofing membranes are designed to last 25+ years when properly applied. The rapid-cure elastomeric systems provide long-term protection against deicing chemicals, water intrusion, and structural deterioration."
    },
    {
      question: "Can waterproofing be applied in cold weather?",
      answer: "Yes! Our specialized membrane systems cure in seconds even in temperatures well below freezing. This allows for year-round installation and emergency repairs regardless of weather conditions."
    },
    {
      question: "What types of bridges can be waterproofed?",
      answer: "We specialize in both highway and railway bridges of all sizes. Our systems work on concrete, steel, and composite bridge decks, adapting to various geometries and structural configurations."
    },
    {
      question: "How does this compare to traditional waterproofing methods?",
      answer: "Our spray-applied systems offer superior performance with faster installation, better crack-bridging ability, and seamless coverage. Unlike sheet membranes, there are no seams or joints that can fail over time."
    }
  ];

  return (
    <div className="min-h-screen bg-white">

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-950 to-[#142142] text-white py-24 md:py-32 pt-32 md:pt-40 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-orange-500 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-orange-500/20 text-orange-400 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                Highway & Railway Bridge Protection
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
                Bridge Deck
                <span className="block text-orange-400">Waterproofing</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Rapid-cure elastomeric systems that permanently protect rail and highway structures 
                from deicing chemicals, water damage, and accelerated deterioration.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link
                  href="/contact"
                  className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:shadow-xl transition-all flex items-center justify-center"
                >
                  Get Bridge Assessment
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

              {/* Key Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-700">
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-400 mb-2">1 Hour</div>
                  <div className="text-sm text-gray-400">Cure Time</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-400 mb-2">25+</div>
                  <div className="text-sm text-gray-400">Year Lifespan</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-400 mb-2">0</div>
                  <div className="text-sm text-gray-400">VOCs</div>
                </div>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/bridge1.jpg"
                  alt="ASFI Construction crew applying waterproofing membrane to highway bridge deck using specialized spray equipment"
                  width={600}
                  height={450}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Floating benefit cards */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-6 border border-gray-100">
                <div className="flex items-center space-x-3">
                  <Clock className="h-8 w-8 text-orange-600" />
                  <div>
                    <div className="font-bold text-slate-800">Fast Cure</div>
                    <div className="text-sm text-slate-600">Even below freezing</div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -top-6 -right-6 bg-white rounded-xl shadow-xl p-6 border border-gray-100">
                <div className="flex items-center space-x-3">
                  <Shield className="h-8 w-8 text-orange-600" />
                  <div>
                    <div className="font-bold text-slate-800">Seamless</div>
                    <div className="text-sm text-slate-600">Protection</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bridge Protection Overview */}
      <section className="py-20 bg-white border-t-4 border-b-4 border-orange-500">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-slate-800 mb-6">
                Bridge Deck Waterproofing
              </h2>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                Specializing in the rail and highway markets, ASFI Construction spray applies waterproofing 
                membrane systems designed to permanently protect rail and highway structures. These rapid 
                setting high build elastomeric spray applied waterproofing systems are impervious to deicing 
                chemicals, water, ballast, stray current and other factors that contribute to accelerated 
                deterioration and wear of elevated structures.
              </p>
              
              <div className="prose prose-lg text-slate-600 mb-8">
                <p>
                  This product is used as a waterproof membrane with dielectric properties for protection 
                  against corrosion conditions that exist on many rail and DOT structures. Our advanced 
                  application methods ensure consistent coverage and optimal performance in all weather conditions.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start">
                  <div className="bg-blue-100 rounded-lg p-2 mr-3 mt-1">
                    <Building2 className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-800 mb-1">Highway Bridges</h3>
                    <p className="text-slate-600 text-sm">Complete protection for DOT and municipal bridge infrastructure</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-100 rounded-lg p-2 mr-3 mt-1">
                    <Truck className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-800 mb-1">Railway Bridges</h3>
                    <p className="text-slate-600 text-sm">Specialized systems for rail infrastructure and ballast protection</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/bridge2.jpg"
                  alt="Railway bridge waterproofing application showing membrane installation process with ASFI Construction crew"
                  width={600}
                  height={450}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="py-20 bg-[#3652A0]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Key Benefits of Our Waterproofing Systems
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Advanced membrane technology that delivers superior performance in the most demanding conditions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {keyBenefits.map((benefit, index) => (
              <div key={index} className="bg-white/10 rounded-xl p-6 backdrop-blur-sm hover:bg-white/15 transition-all group">
                <div className="bg-orange-500/20 rounded-full p-3 inline-block mb-4 group-hover:bg-orange-500/30 transition-colors">
                  <benefit.icon className="h-7 w-7 text-orange-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-slate-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Waterproofing Process Section */}
      <section className="py-20 bg-gray-50 border-t-4 border-b-4 border-orange-500">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-6">
              Our 7-Step Waterproofing Process
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Each step is critical to ensuring long-term performance and protection of your bridge infrastructure
            </p>
          </div>

          <div className="space-y-4">
            {waterproofingSteps.map((step, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <button
                  onClick={() => toggleStep(index)}
                  className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center">
                    <div className="bg-orange-100 rounded-full p-3 mr-4">
                      <step.icon className="h-6 w-6 text-orange-600" />
                    </div>
                    <div>
                      <div className="flex items-center mb-1">
                        <span className="text-2xl font-bold text-orange-600 mr-3">{step.number}</span>
                        <h3 className="text-xl font-bold text-slate-800">{step.title}</h3>
                      </div>
                      <p className="text-slate-600">{step.description}</p>
                    </div>
                  </div>
                  {expandedStep === index ? (
                    <ChevronUp className="h-5 w-5 text-slate-600 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-slate-600 flex-shrink-0" />
                  )}
                </button>
                {expandedStep === index && (
                  <div className="px-6 pb-6">
                    <div className="ml-16 pt-4 border-t border-gray-200">
                      <p className="text-slate-600 leading-relaxed">{step.details}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Gallery */}
      <section className="py-20 bg-gradient-to-br from-slate-950 to-[#142142]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Bridge Waterproofing in Action
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              See our expert crews applying waterproofing systems to protect critical infrastructure
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group">
              <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/images/bridge-prep.jpg"
                  alt="Highway bridge deck preparation and surface treatment before waterproof membrane application"
                  width={400}
                  height={300}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-bold text-slate-300 mb-2">Surface Preparation</h3>
                <p className="text-slate-300">Proper surface prep ensures optimal membrane adhesion and performance</p>
              </div>
            </div>

            <div className="group">
              <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/images/bridge-spray.jpg"
                  alt="Specialized spray equipment applying waterproofing membrane to bridge deck surface"
                  width={400}
                  height={300}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-bold text-slate-300 mb-2">Membrane Application</h3>
                <p className="text-slate-300">Advanced spray equipment ensures uniform coverage and thickness</p>
              </div>
            </div>

            <div className="group">
              <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/images/bridge.jpg"
                  alt="Completed bridge deck waterproofing project showing finished membrane surface ready for overlay"
                  width={400}
                  height={300}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-bold text-slate-300 mb-2">Project Completion</h3>
                <p className="text-slate-300">Finished membrane ready for overlay installation</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50 border-t-4 border-b-4 border-orange-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-slate-600">
              Common questions about bridge deck waterproofing systems
            </p>
          </div>

          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
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

      {/* Expertise Section */}
      <section className="py-20 bg-gradient-to-br from-slate-950 to-[#142142] text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Specialized Expertise in Bridge Protection
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              18+ years of experience protecting critical infrastructure across Texas and beyond
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-orange-500/20 rounded-full p-4 inline-block mb-4">
                <Award className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Certified Applications</h3>
              <p className="text-slate-300">
                SSPC-SP10/NACE No. 6 compliant surface preparation and certified application techniques
              </p>
            </div>

            <div className="text-center">
              <div className="bg-orange-500/20 rounded-full p-4 inline-block mb-4">
                <Thermometer className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">All-Weather Capability</h3>
              <p className="text-slate-300">
                Advanced materials that cure even in extreme cold, ensuring year-round project capability
              </p>
            </div>

            <div className="text-center">
              <div className="bg-orange-500/20 rounded-full p-4 inline-block mb-4">
                <Target className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Precision Application</h3>
              <p className="text-slate-300">
                State-of-the-art spray equipment ensures uniform thickness and seamless coverage
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-[#3652A0] border-t-4 border-b-4 border-orange-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Protect Your Bridge Infrastructure Today
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            Get a comprehensive assessment and discover how our advanced waterproofing systems 
            can extend the life of your bridge infrastructure while reducing long-term maintenance costs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:shadow-xl transition-all flex items-center justify-center"
            >
              Get Bridge Assessment
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
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2" />
                Serving Rail & Highway Markets Nationwide
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default BridgeWaterproofingPage;