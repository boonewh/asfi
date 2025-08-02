'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  ChevronLeft,
  ChevronRight,
  Phone,
  Mail,
  Shield,
  Zap,
  Award,
  CheckCircle,
  ArrowRight,
  Clock,
  Users,
  Star,
} from 'lucide-react';
import Header from '../components/Header';
  import Footer from '../components/Footer';

const HomePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Hero slider images with descriptions for alt text
  const heroSlides = [
    {
      image: 'sipp_robot.jpg',
      alt:
        'Spray In Place Pipe (SIPP) operation showing technicians applying polyurea coating inside large concrete culvert',
      title: 'Spray In Place Pipe (SIPP)',
      subtitle:
        'Extending infrastructure life with cutting-edge polyurea technology',
    },
    {
      image: 'bridge.jpg',
      alt:
        'Bridge deck waterproofing application with specialized spray equipment creating seamless membrane coating',
      title: 'Bridge Deck Waterproofing',
      subtitle:
        'Protecting critical infrastructure with rapid-cure, seamless membrane systems',
    },
    {
      image: 'foodandbev.jpg',
      alt:
        'Food processing plant interior with bright white polyurea coating on walls and ceiling, showing clean industrial environment',
      title: 'Food Grade Facility Coatings',
      subtitle:
        'Chemical-resistant, easy-clean polyurea solutions for food processing facilities',
    },
  ];

  // Auto-advance slides
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  const nextSlide = () =>
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section with Slider */}
      {/* Use variable heights/padding and center-align text on small screens */}
      <section className="relative h-[70vh] sm:h-[80vh] md:h-screen overflow-hidden pt-24 md:pt-28">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={`/images/${slide.image}`}
              alt={slide.alt}
              fill
              className="object-cover"
              priority={index === 0}
            />
            {/* Gradient overlay for legibility */}
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-800/30 to-transparent" />

            {/* Hero content, centered on small screens */}
            <div className="absolute inset-0 flex items-center md:items-end justify-center md:justify-start">
              <div className="w-full sm:w-[90%] mx-auto px-4 sm:px-6 lg:px-8 pb-20 md:pb-32 lg:pb-64">
                <div className="max-w-full md:max-w-3xl text-center md:text-left">
                  <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-4 sm:mb-6 animate-fade-in">
                    {slide.title}
                  </h1>
                    <p className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-6 sm:mb-8 animate-slide-up">
                    {slide.subtitle}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 animate-scale-in justify-center md:justify-start">
                    <Link
                      href="/contact"
                      className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold hover:shadow-xl transition-all flex items-center justify-center"
                    >
                      Get Free Consultation
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Slider Controls */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-all"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-all"
        >
          <ChevronRight className="h-6 w-6" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all ${
                index === currentSlide ? 'bg-white' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Culvert Rehabilitation Highlight */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-slate-950 to-[#142142] border-t-4 border-b-4 border-orange-500">
        {/* On small screens use full width; on md+ screens limit width to 80% */}
        <div className="max-w-full md:max-w-[80%] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            {/* Content */}
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
                Culvert Rehabilitation
                <span className="block text-orange-600">That Works</span>
              </h2>
              <p className="text-base sm:text-xl text-white mb-6 sm:mb-8">
                Aging culverts lead to erosion, flooding, and costly road failures.
                Our polyurea spray coatings provide a cost‑effective alternative
                to full replacement—extending culvert life by decades with minimal downtime.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
                {/* Fast-Curing Protection */}
                <div className="flex items-start">
                  <div className="bg-orange-100 rounded-lg p-2 mr-3 mt-1 flex-shrink-0">
                    <Shield className="h-5 w-5 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-1">Fast-Curing Protection</h3>
                    <p className="text-white text-sm">
                      Highly durable coatings that stop corrosion and restore structural integrity
                    </p>
                  </div>
                </div>

                {/* Minimal Downtime */}
                <div className="flex items-start">
                  <div className="bg-orange-100 rounded-lg p-2 mr-3 mt-1 flex-shrink-0">
                    <Clock className="h-5 w-5 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-1">Minimal Downtime</h3>
                    <p className="text-white text-sm">
                      No highway closures or expensive full replacements required
                    </p>
                  </div>
                </div>

                {/* Custom Engineering */}
                <div className="flex items-start">
                  <div className="bg-orange-100 rounded-lg p-2 mr-3 mt-1 flex-shrink-0">
                    <Zap className="h-5 w-5 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-1">Custom Engineering</h3>
                    <p className="text-white text-sm">
                      Tailored systems based on culvert size, shape, and condition
                    </p>
                  </div>
                </div>

                {/* Long-Lasting */}
                <div className="flex items-start">
                  <div className="bg-orange-100 rounded-lg p-2 mr-3 mt-1 flex-shrink-0">
                    <Award className="h-5 w-5 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-1">Long-Lasting</h3>
                    <p className="text-white text-sm">
                      Resistant to corrosion, abrasion, and chemical exposure
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/culvert-rehabilitation"
                  className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold hover:shadow-xl transition-all flex items-center justify-center"
                >
                  Learn About Culvert Solutions
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
                <a
                  href="tel:(432) 438-5806"
                  className="border-2 border-orange-600 text-orange-600 px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold hover:bg-orange-600 hover:text-white transition-all flex items-center justify-center"
                >
                  <Phone className="mr-2 h-4 w-4" />
                  (432) 438-5806
                </a>
              </div>
            </div>

            {/* Image with floating cards */}
            <div className="relative p-6 sm:p-12 md:p-16 lg:p-24">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/culvert-rehabilitation.jpg"
                  alt="ASFI robot applying polyurea coating inside large concrete culvert using specialized spray equipment"
                  width={600}
                  height={600}
                  className="w-full h-full object-cover"
                />
              </div>
              
             {/* Floating cards hidden on very small devices */}
              <div className="hidden sm:block absolute -bottom-0 left-0 bg-white rounded-xl shadow-xl p-6 border border-gray-100">
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600 mb-1">
                    Cost Effective,
                  </div>
                  <div className="text-3xl font-bold text-orange-600">
                    Minimally Invasive
                  </div>
                </div>
              </div>
              <div className="hidden sm:block absolute top-0 right-0 bg-white rounded-xl shadow-xl p-6 border border-gray-100">
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600 mb-1">
                    Restores
                  </div>
                  <div className="text-3xl font-bold text-orange-600">
                    Structural Integrity
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section id="services" className="py-16 sm:py-20 bg-[#3652A0]">
        {/* Full width on small devices; back to 70% on md+ screens */}
        <div className="max-w-full md:max-w-[70%] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
              Polyurea Lining & Coating Solutions
            </h2>
            <p className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto">
              Specialized in advanced polyurea applications that extend infrastructure life,
              reduce costs, and provide superior protection across multiple industries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {/* SIPP Card */}
            <div className="bg-[#DAE1E7] rounded-xl shadow-lg hover:shadow-xl transition-all p-6 sm:p-8 group border border-slate-200 flex flex-col">
              <div className="h-40 sm:h-48 rounded-lg overflow-hidden mb-4 sm:mb-6">
                <Image
                  src="/images/culvert-rehabilitation.jpg"
                  alt="Cross-section view of spray applied pipe lining showing polyurea coating application inside deteriorated pipe"
                  width={400}
                  height={300}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="flex items-center mb-3 sm:mb-4">
                <Shield className="h-7 w-7 sm:h-8 sm:w-8 text-orange-600 mr-3" />
                <h3 className="text-xl sm:text-2xl font-bold text-slate-800">
                  Spray In Place Pipe (SIPP)
                </h3>
              </div>
              <p className="text-slate-600 mb-4 sm:mb-6 flex-1">
                Revolutionary trenchless technology that extends pipe life. Our polymeric
                SIPP method is cost effective and minimally invasive.
              </p>
              <ul className="space-y-1.5 sm:space-y-2 mb-4 sm:mb-6">
                <li className="flex items-center text-slate-600 text-sm sm:text-base">
                  <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-600 mr-2" />
                  Culverts & Drainage Systems
                </li>
                <li className="flex items-center text-slate-600 text-sm sm:text-base">
                  <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-600 mr-2" />
                  Water/Wastewater Pipelines
                </li>
                <li className="flex items-center text-slate-600 text-sm sm:text-base">
                  <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-600 mr-2" />
                  Structural Enhancement
                </li>
              </ul>
              <button className="mt-auto text-orange-600 font-semibold hover:text-orange-700 transition-colors flex items-center">
                Learn More <ArrowRight className="ml-2 h-3.5 w-3.5 sm:h-4 sm:w-4" />
              </button>
            </div>

            {/* Bridge Waterproofing Card */}
            <div className="bg-[#DAE1E7] rounded-xl shadow-lg hover:shadow-xl transition-all p-6 sm:p-8 group border border-slate-200 flex flex-col">
              <div className="h-40 sm:h-48 rounded-lg overflow-hidden mb-4 sm:mb-6">
                <Image
                  src="/images/bridge2.jpg"
                  alt="Bridge deck waterproofing membrane application showing spray equipment and protective coating process"
                  width={400}
                  height={300}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="flex items-center mb-3 sm:mb-4">
                <Zap className="h-7 w-7 sm:h-8 sm:w-8 text-orange-600 mr-3" />
                <h3 className="text-xl sm:text-2xl font-bold text-slate-800">
                  Bridge Waterproofing
                </h3>
              </div>
              <p className="text-slate-600 mb-4 sm:mb-6 flex-1">
                Rapid‑cure elastomeric systems that protect rail and highway structures from
                deicing chemicals, water damage, and accelerated deterioration.
              </p>
              <ul className="space-y-1.5 sm:space-y-2 mb-4 sm:mb-6">
                <li className="flex items-center text-slate-600 text-sm sm:text-base">
                  <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-600 mr-2" />
                  Highway & Rail Bridges
                </li>
                <li className="flex items-center text-slate-600 text-sm sm:text-base">
                  <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-600 mr-2" />
                  Seamless Protection
                </li>
                <li className="flex items-center text-slate-600 text-sm sm:text-base">
                  <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-600 mr-2" />
                  Fast Cure Technology
                </li>
              </ul>
              <button className="mt-auto text-orange-600 font-semibold hover:text-orange-700 transition-colors flex items-center">
                Learn More <ArrowRight className="ml-2 h-3.5 w-3.5 sm:h-4 sm:w-4" />
              </button>
            </div>

            {/* Food Grade Coatings Card */}
            <div className="bg-[#DAE1E7] rounded-xl shadow-lg hover:shadow-xl transition-all p-6 sm:p-8 group border border-slate-200 flex flex-col">
              <div className="h-40 sm:h-48 rounded-lg overflow-hidden mb-4 sm:mb-6">
                <Image
                  src="/images/food-bev.jpg"
                  alt="Food processing plant with bright white polyurea coating on walls and ceiling showing clean, hygienic environment"
                  width={400}
                  height={300}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="flex items-center mb-3 sm:mb-4">
                <Award className="h-7 w-7 sm:h-8 sm:w-8 text-orange-600 mr-3" />
                <h3 className="text-xl sm:text-2xl font-bold text-slate-800">
                  Food Grade Coatings
                </h3>
              </div>
              <p className="text-slate-600 mb-4 sm:mb-6 flex-1">
                High‑performance polyurea systems designed for food processing facilities.
                Chemical‑resistant, easy‑clean solutions that meet strict industry standards.
              </p>
              <ul className="space-y-1.5 sm:space-y-2 mb-4 sm:mb-6">
                <li className="flex items-center text-slate-600 text-sm sm:text-base">
                  <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-600 mr-2" />
                  FDA Approved Materials
                </li>
                <li className="flex items-center text-slate-600 text-sm sm:text-base">
                  <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-600 mr-2" />
                  Chemical Resistance
                </li>
                <li className="flex items-center text-slate-600 text-sm sm:text-base">
                  <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-600 mr-2" />
                  Easy Maintenance
                </li>
              </ul>
              <button className="mt-auto text-orange-600 font-semibold hover:text-orange-700 transition-colors flex items-center">
                Learn More <ArrowRight className="ml-2 h-3.5 w-3.5 sm:h-4 sm:w-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose ASFI */}
      <section className="py-20 bg-gradient-to-br from-slate-950 to-[#142142] text-white border-t-4 border-b-4 border-orange-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why Choose ASFI Construction?
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              15 years of proven expertise in polyurea applications with a commitment
              to exceeding expectations and building long-term partnerships.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-orange-500/20 rounded-full p-4 inline-block mb-4">
                <Clock className="h-8 w-8 text-orange-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">Fast Turnaround</h3>
              <p className="opacity-90">
                Rapid-cure technology minimizes downtime and gets you back to operation quickly.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-orange-500/20 rounded-full p-4 inline-block mb-4">
                <Shield className="h-8 w-8 text-orange-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">Proven Durability</h3>
              <p className="opacity-90">
                Our polyurea solutions extend infrastructure life with superior protection.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-orange-500/20 rounded-full p-4 inline-block mb-4">
                <Users className="h-8 w-8 text-orange-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">Expert Team</h3>
              <p className="opacity-90">
                Certified specialists with decades of combined experience in advanced coating
                applications.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-orange-500/20 rounded-full p-4 inline-block mb-4">
                <Star className="h-8 w-8 text-orange-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">Quality Guarantee</h3>
              <p className="opacity-90">
                Highest ethical standards and commitment to exceeding client expectations every time.
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
          <p className="text-xl text-slate-600 mb-8">
            Get a free consultation and discover how our polyurea solutions can save you
            up to 70% compared to traditional methods.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:shadow-xl transition-all flex items-center justify-center">
              <Phone className="mr-2 h-5 w-5" />
              Call (432) 438-5806
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-600 hover:text-white transition-all flex items-center justify-center">
              <Mail className="mr-2 h-5 w-5" />
              Request Quote
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HomePage;
