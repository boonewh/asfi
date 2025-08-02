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
  Thermometer,
  Star,
  ChevronDown,
  ChevronUp,
  Sparkles,
  FlaskConical,
  Building2,
  Waves,
  Timer,
  Eye,
  Snowflake,
  Factory,
  MapPin,
  ShieldCheck
} from 'lucide-react';

const FoodPlantsPage = () => {
  const [expandedFaq, setExpandedFaq] = useState(null);

  const toggleFaq = (index) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  const keyBenefits = [
    {
      icon: Clock,
      title: "Fast Drying",
      description: "Quick re-coat times and fast return-to-service minimize production downtime"
    },
    {
      icon: Sparkles,
      title: "Easy Maintenance", 
      description: "Wipes clean effortlessly and maintains bright, pristine appearance"
    },
    {
      icon: Waves,
      title: "Superior Flexibility",
      description: "Limits need for sealants and accommodates building movement"
    },
    {
      icon: Shield,
      title: "Chemical Resistance",
      description: "Resistant against many cleaning agents, sanitizers, and disinfectants"
    },
    {
      icon: Star,
      title: "Outstanding Abrasion Resistance", 
      description: "Maintains high gloss appearance even with frequent cleaning"
    },
    {
      icon: ShieldCheck,
      title: "Fire Safety Rated",
      description: "Tested to ASTM E-84, meets Class A/Class 1 flame spread requirements"
    },
    {
      icon: Award,
      title: "Food Contact Approved",
      description: "Suitable for incidental food contact applications with proper certifications"
    },
    {
      icon: Droplets,
      title: "Ultra-Low VOC",
      description: "Environmentally friendly formulation <17 g/L VOC content"
    },
    {
      icon: Building2,
      title: "High Film Build",
      description: "Covers porosities and surface imperfections, improves cleanability"
    }
  ];

  const applications = [
    {
      icon: Snowflake,
      title: "Cold Storage Facilities",
      description: "Temperature-resistant coatings that maintain integrity in freezer environments"
    },
    {
      icon: Factory,
      title: "Food Processing Plants",
      description: "Seamless, hygienic surfaces for meat, dairy, beverage, and packaged food facilities"
    },
    {
      icon: FlaskConical,
      title: "Pharmaceutical Facilities", 
      description: "Clean room compatible coatings meeting pharmaceutical industry standards"
    },
    {
      icon: Building2,
      title: "Commercial Kitchens",
      description: "Durable, easy-clean surfaces for high-volume food service operations"
    }
  ];

  const faqItems = [
    {
      question: "Are these coatings FDA approved for food facilities?",
      answer: "Yes, our coating systems are suitable for incidental food contact applications and meet FDA requirements. They are specifically engineered for food processing environments where hygiene and safety are paramount."
    },
    {
      question: "How do these coatings handle frequent washdowns?",
      answer: "Our polyurea systems are specifically designed to withstand frequent cleaning with harsh chemicals including sanitizers, disinfectants, and industrial cleaning agents. The seamless finish prevents moisture penetration and bacterial growth."
    },
    {
      question: "What's the downtime for application in active facilities?",
      answer: "Our fast-curing technology minimizes production disruption. Depending on the area size, most applications can be completed during scheduled maintenance windows with quick return-to-service times."
    },
    {
      question: "Can these coatings work in freezer environments?",
      answer: "Absolutely. Our polyurea systems maintain flexibility and adhesion even in extreme cold storage environments, making them ideal for freezers and refrigerated processing areas."
    },
    {
      question: "How do you ensure fire safety compliance?",
      answer: "Our coatings are tested to ASTM E-84 standards for flame spread and smoke development, meeting Class A or Class 1 requirements in accordance with International Building Code (IBC) and NFPA 101® Life Safety Code®."
    }
  ];

  return (
    <div className="min-h-screen bg-white">

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-50 via-white to-blue-50 py-24 md:py-32 pt-32 md:pt-40 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-orange-400 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                FDA Approved • Fire Rated • Ultra-Low VOC
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
                <span className="text-slate-800">Food Grade</span>
                <span className="block text-blue-600">Facility Coatings</span>
              </h1>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                High-performance polyurea spray coating systems engineered for food processing, 
                pharmaceutical, and cold storage facilities. Pristine, seamless surfaces that 
                maintain hygiene standards while standing up to the harshest cleaning protocols.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link
                  href="/contact"
                  className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:shadow-xl transition-all flex items-center justify-center"
                >
                  Get Facility Assessment
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <a
                  href="tel:(432) 438-5806"
                  className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-600 hover:text-white transition-all flex items-center justify-center"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  (432) 438-5806
                </a>
              </div>

              {/* Key Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">&lt;17 g/L</div>
                  <div className="text-sm text-gray-600">Ultra-Low VOC</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">Class A</div>
                  <div className="text-sm text-gray-600">Fire Rating</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">Fast</div>
                  <div className="text-sm text-gray-600">Return to Service</div>
                </div>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl bg-white border-4 border-white">
                <Image
                  src="/images/food-bev.jpg"
                  alt="Pristine food processing facility with bright white polyurea coating on walls and ceiling, showing clean sterile environment"
                  width={600}
                  height={450}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Floating benefit cards */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-6 border border-blue-100">
                <div className="flex items-center space-x-3">
                  <Sparkles className="h-8 w-8 text-blue-600" />
                  <div>
                    <div className="font-bold text-slate-800">Pristine Clean</div>
                    <div className="text-sm text-slate-600">Easy maintenance</div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -top-6 -right-6 bg-white rounded-xl shadow-xl p-6 border border-blue-100">
                <div className="flex items-center space-x-3">
                  <ShieldCheck className="h-8 w-8 text-blue-600" />
                  <div>
                    <div className="font-bold text-slate-800">FDA Approved</div>
                    <div className="text-sm text-slate-600">Food contact safe</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Food Processing Overview */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-slate-50 border-t-4 border-b-4 border-blue-500">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-slate-800 mb-6">
                Engineered for Food Safety Excellence
              </h2>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                ASFI Construction uses a high-build, flame-resistant polyurea spray coating system 
                specifically designed for high-performance facility applications and interior building surfaces. 
                This advanced system combines an aromatic polyurea high-build base coat with an aliphatic 
                polyurea finish coat for superior performance.
              </p>
              
              <div className="prose prose-lg text-slate-600 mb-8">
                <p>
                  Our coating system offers fast return to service, exceptional ease of cleaning, and 
                  remarkable flexibility. Designed for challenging applications like transition zones, 
                  cracks, and porous substrates, these coatings stand up to frequent washdowns with 
                  harsh chemicals including cleaning agents, sanitizers, and disinfectants.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg border border-blue-100">
                <h3 className="text-xl font-bold text-slate-800 mb-4">Application Areas Include:</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                    <span className="text-slate-700">Walls & Ceilings</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                    <span className="text-slate-700">Storage Areas</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                    <span className="text-slate-700">Processing Zones</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                    <span className="text-slate-700">Clean Rooms</span>
                  </div>
                </div>
                <p className="text-sm text-slate-500 mt-4 italic">
                  *Note: This coating system is ideal for surfaces but not designed for direct equipment applications.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl bg-white border-4 border-white">
                <Image
                  src="/images/foodandbev.jpg"
                  alt="Clean food processing facility showing seamless white polyurea coating application on walls and ceiling with worker in protective gear"
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
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-6">
              Advanced Performance Features
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Engineered to prevent issues like peeling paint, flaking rust, and porous substrates 
              while maintaining the highest standards of cleanliness and safety.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {keyBenefits.map((benefit, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all group border border-blue-100">
                <div className="bg-blue-100 rounded-full p-3 inline-block mb-4 group-hover:bg-blue-200 transition-colors">
                  <benefit.icon className="h-7 w-7 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">{benefit.title}</h3>
                <p className="text-slate-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 border-t-4 border-b-4 border-blue-500">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-6">
              Specialized Facility Applications
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              From cold storage to pharmaceutical clean rooms, our coating systems deliver 
              unmatched performance across diverse food-grade environments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {applications.map((app, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all p-6 text-center group border border-blue-100">
                <div className="bg-blue-100 rounded-full p-4 inline-block mb-4 group-hover:bg-blue-200 transition-colors">
                  <app.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">{app.title}</h3>
                <p className="text-slate-600">{app.description}</p>
              </div>
            ))}
          </div>

          {/* Detailed Applications Grid */}
          <div className="mt-16 bg-white rounded-2xl shadow-xl p-8 border border-blue-100">
            <h3 className="text-2xl font-bold text-slate-800 mb-6 text-center">
              Complete Facility Solutions
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="space-y-3">
                <h4 className="font-bold text-blue-600 mb-3">Food Processing</h4>
                <div className="space-y-2">
                  {[
                    "Meat Processing Plants",
                    "Dairy Facilities", 
                    "Beverage Production",
                    "Packaged Food Manufacturing",
                    "Bakeries & Confectioneries"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                      <span className="text-slate-700 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="font-bold text-blue-600 mb-3">Cold Storage & Freezer</h4>
                <div className="space-y-2">
                  {[
                    "Refrigerated Warehouses",
                    "Blast Freezers",
                    "Temperature-Controlled Storage",
                    "Loading Dock Areas",
                    "Processing Cold Rooms"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                      <span className="text-slate-700 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="font-bold text-blue-600 mb-3">Pharmaceutical & Clean Rooms</h4>
                <div className="space-y-2">
                  {[
                    "Pharmaceutical Manufacturing",
                    "Laboratory Facilities",
                    "Clean Room Environments",
                    "Research & Development Labs",
                    "Quality Control Areas"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                      <span className="text-slate-700 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-6">
              Technical Excellence & Compliance
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Our coating systems meet and exceed the most stringent industry standards 
              for safety, performance, and environmental responsibility.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-green-50 to-white rounded-xl p-6 shadow-lg border border-green-100">
              <div className="bg-green-100 rounded-full p-3 inline-block mb-4">
                <Award className="h-7 w-7 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Food Contact Approved</h3>
              <p className="text-slate-600 mb-4">
                Suitable for incidental food contact applications with full FDA compliance 
                and certification for food processing environments.
              </p>
              <div className="text-sm text-green-700 font-semibold">✓ FDA Compliant</div>
            </div>

            <div className="bg-gradient-to-br from-red-50 to-white rounded-xl p-6 shadow-lg border border-red-100">
              <div className="bg-red-100 rounded-full p-3 inline-block mb-4">
                <Shield className="h-7 w-7 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Fire Safety Rated</h3>
              <p className="text-slate-600 mb-4">
                Tested to ASTM E-84 for Flame Spread and Smoke Development Index. 
                Meets Class A or Class 1 requirements.
              </p>
              <div className="text-sm text-red-700 font-semibold">✓ IBC & NFPA 101® Compliant</div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-6 shadow-lg border border-blue-100">
              <div className="bg-blue-100 rounded-full p-3 inline-block mb-4">
                <Droplets className="h-7 w-7 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Ultra-Low VOC</h3>
              <p className="text-slate-600 mb-4">
                Environmentally responsible formulation with less than 17 g/L VOC content, 
                ensuring safe application in occupied facilities.
              </p>
              <div className="text-sm text-blue-700 font-semibold">✓ &lt;17 g/L VOC</div>
            </div>
          </div>

          <div className="mt-12 bg-gradient-to-r from-slate-50 to-blue-50 rounded-2xl p-8 border border-blue-200">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-slate-800 mb-4">
                  Excellent Color & Gloss Retention
                </h3>
                <p className="text-slate-600 mb-4">
                  Our bright white finish maintains its pristine appearance even after years 
                  of frequent cleaning and harsh chemical exposure. The high-gloss surface 
                  reflects light effectively, creating a bright, clean working environment.
                </p>
                <div className="flex items-center space-x-2">
                  <Eye className="h-5 w-5 text-blue-600" />
                  <span className="text-slate-700 font-semibold">Maintains Bright White Appearance</span>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-white rounded-full w-32 h-32 mx-auto flex items-center justify-center shadow-lg border-4 border-blue-200">
                  <Star className="h-16 w-16 text-yellow-500" />
                </div>
                <p className="text-slate-600 mt-4 font-semibold">High-Gloss Finish</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 border-t-4 border-b-4 border-blue-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-slate-600">
              Common questions about food-grade facility coatings and applications
            </p>
          </div>

          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg border border-blue-100">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-blue-50 transition-colors"
                >
                  <span className="font-semibold text-slate-800">{item.question}</span>
                  {expandedFaq === index ? (
                    <ChevronUp className="h-5 w-5 text-slate-600" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-slate-600" />
                  )}
                </button>
                {expandedFaq === index && (
                  <div className="px-6 pb-4 border-t border-blue-100">
                    <p className="text-slate-600 leading-relaxed pt-4">{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Leadership */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-6">
              Industry-Leading Food Safety Solutions
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              18+ years of experience delivering pristine, compliant coating solutions 
              for the most demanding food processing environments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full p-4 inline-block mb-4">
                <ShieldCheck className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Certified Applications</h3>
              <p className="text-slate-600">
                Our specialists are trained in food-grade applications with deep understanding 
                of hygiene protocols and regulatory compliance.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 rounded-full p-4 inline-block mb-4">
                <Timer className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Minimal Downtime</h3>
              <p className="text-slate-600">
                Fast-curing technology allows for application during maintenance windows 
                with quick return to production schedules.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 rounded-full p-4 inline-block mb-4">
                <Award className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Quality Assurance</h3>
              <p className="text-slate-600">
                Rigorous quality control ensures every application meets the highest 
                standards for food safety and performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 border-t-4 border-b-4 border-blue-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Upgrade Your Facility?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Transform your food processing facility with pristine, compliant coating solutions 
            that maintain the highest standards of cleanliness and safety.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-gradient-to-r from-white to-blue-50 text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:shadow-xl transition-all flex items-center justify-center"
            >
              Get Facility Assessment
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <a
              href="tel:(432) 438-5806"
              className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-600 transition-all flex items-center justify-center"
            >
              <Phone className="mr-2 h-5 w-5" />
              Call (432) 438-5806
            </a>
          </div>

        {/* Contact info */}
          <div className="mt-8 pt-8 border-t border-blue-500">
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-blue-100">
              <a href="mailto:john@asficonstruction.com" className="flex items-center hover:text-white transition-colors">
                <Mail className="h-4 w-4 mr-2" />
                john@asficonstruction.com
              </a>
              <span className="hidden sm:block">•</span>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2" />
                Serving Food Processing Facilities Nationwide
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default FoodPlantsPage;