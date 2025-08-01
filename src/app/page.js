'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Phone, Mail, MapPin, Shield, Zap, Award, CheckCircle, ArrowRight, Clock, Users, Star } from 'lucide-react';

const HomePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Hero slider images with descriptions for alt text
  const heroSlides = [
    {
      image: 'hero1.jpg',
      alt: 'Spray Applied Pipe Lining operation showing technicians applying polyurea coating inside large concrete culvert',
      title: 'Advanced Spray Applied Pipe Lining',
      subtitle: 'Extending infrastructure life by 50+ years with cutting-edge polyurea technology'
    },
    {
      image: 'hero2.jpg', 
      alt: 'Bridge deck waterproofing application with specialized spray equipment creating seamless membrane coating',
      title: 'Bridge Deck Waterproofing',
      subtitle: 'Protecting critical infrastructure with rapid-cure, seamless membrane systems'
    },
    {
      image: 'hero3.jpg',
      alt: 'Food processing plant interior with bright white polyurea coating on walls and ceiling, showing clean industrial environment',
      title: 'Food Grade Facility Coatings',
      subtitle: 'Chemical-resistant, easy-clean polyurea solutions for food processing facilities'
    },
    {
      image: 'hero4.jpg',
      alt: 'Before and after comparison of corroded pipeline renovation showing dramatic improvement with polyurea lining',
      title: 'Infrastructure Rehabilitation',
      subtitle: 'Transforming deteriorated systems into long-lasting, corrosion-resistant infrastructure'
    }
  ];

  // Auto-advance slides
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation with Gradient Header */}
      <nav className="bg-gradient-to-r from-[#111111] to-[#142142] shadow-lg sticky top-0 z-50">
        <div className="max-w-[80%] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-24">
            <div className="flex items-center">
              <Image
                src="/images/logo.png"
                alt="ASFI Construction LLC white logo featuring blue and gray modern lettering"
                width={300}
                height={160}
                className="h-20 w-auto"
              />
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#services" className="text-gray-300 hover:text-orange-400 transition-colors font-medium">Services</a>
              <a href="#about" className="text-gray-300 hover:text-orange-400 transition-colors font-medium">About</a>
              <a href="#projects" className="text-gray-300 hover:text-orange-400 transition-colors font-medium">Projects</a>
              <a href="#contact" className="text-gray-300 hover:text-orange-400 transition-colors font-medium">Contact</a>
            </div>
            <div className="flex items-center space-x-4">
              <a href="tel:(555) 123-4567" className="text-orange-400 hover:text-orange-300 font-semibold">
                (555) 123-4567
              </a>
              <button className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-2 rounded-lg hover:shadow-lg transition-all">
                Get Quote
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section with Slider */}
      <section className="relative h-screen overflow-hidden">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={`/${slide.image}`}
              alt={slide.alt}
              fill
              className="object-cover"
              priority={index === 0}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-800/70 to-transparent" />
            
            {/* Hero Content */}
            <div className="absolute inset-0 flex items-center">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="max-w-3xl">
                  <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
                    {slide.title}
                  </h1>
                  <p className="text-xl md:text-2xl text-gray-200 mb-8 animate-slide-up">
                    {slide.subtitle}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 animate-scale-in">
                    <button className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:shadow-xl transition-all flex items-center">
                      Get Free Consultation
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </button>
                    <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-slate-800 transition-all">
                      View Our Work
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Slider Controls */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-all"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-all"
        >
          <ChevronRight className="h-6 w-6" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide ? 'bg-white' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Culvert Rehabilitation Highlight */}
      <section className="py-20 bg-gradient-to-br from-slate-950 to-[#142142] border-t-4 border-b-4 border-orange-500">
        <div className="max-w-[80%] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Culvert Rehabilitation
                <span className="block text-orange-600">That Works</span>
              </h2>
              <p className="text-xl text-white mb-8">
                Aging culverts lead to erosion, flooding, and costly road failures. Our polyurea spray coatings 
                provide a cost-effective alternative to full replacement—extending culvert life by decades 
                with minimal downtime.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="flex items-start">
                  <div className="bg-orange-100 rounded-lg p-2 mr-3 mt-1">
                    <Shield className="h-5 w-5 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-1">Fast-Curing Protection</h3>
                    <p className="text-white text-sm">Highly durable coatings that stop corrosion and restore structural integrity</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-orange-100 rounded-lg p-2 mr-3 mt-1">
                    <Clock className="h-5 w-5 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-1">Minimal Downtime</h3>
                    <p className="text-white text-sm">No highway closures or expensive full replacements required</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-orange-100 rounded-lg p-2 mr-3 mt-1">
                    <Zap className="h-5 w-5 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-1">Custom Engineering</h3>
                    <p className="text-white text-sm">Tailored systems based on culvert size, shape, and condition</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-orange-100 rounded-lg p-2 mr-3 mt-1">
                    <Award className="h-5 w-5 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-1">Long-Lasting</h3>
                    <p className="text-white text-sm">Resistant to corrosion, abrasion, and chemical exposure</p>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="/culvert-rehabilitation" 
                  className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:shadow-xl transition-all flex items-center justify-center"
                >
                  Learn About Culvert Solutions
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
                <button className="border-2 border-orange-600 text-orange-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-600 hover:text-white transition-all flex items-center justify-center">
                  <Phone className="mr-2 h-5 w-5" />
                  (214) 793-0545
                </button>
              </div>
            </div>
            
            {/* Image */}
            <div className="relative p-24">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/culvert-rehabilitation.jpg"
                  alt="ASFI robot applying polyurea coating inside large concrete culvert using specialized spray equipment"
                  width={600}
                  height={600}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Floating Stats Card */}
              <div className="absolute -bottom-0 -left-0 bg-white rounded-xl shadow-xl p-6 border border-gray-100">
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600 mb-1">Cost Effective,</div>
                  <div className="text-3xl font-bold text-orange-600 mb-1">Minimally Evasive</div>
                </div>
              </div>
              
              {/* Floating Stats Card 2 */}
              <div className="absolute -top-0 -right-0 bg-white rounded-xl shadow-xl p-6 border border-gray-100">
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600 mb-1">Restores</div>
                  <div className="text-3xl font-bold text-orange-600 mb-1">Structural Integrity</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section id="services" className="py-20 bg-[#3652A0]">
        <div className="max-w-[70%] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Polyurea Lining & Coating Solutions
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Specialized in advanced polyurea applications that extend infrastructure life, 
              reduce costs, and provide superior protection across multiple industries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Spray Applied Pipe Lining */}
            <div className="bg-[#DAE1E7] rounded-xl shadow-lg hover:shadow-xl transition-all p-8 group border border-slate-200">
              <div className="h-48 rounded-lg overflow-hidden mb-6">
                <Image
                  src="/service1.jpg"
                  alt="Cross-section view of spray applied pipe lining showing polyurea coating application inside deteriorated pipe"
                  width={400}
                  height={300}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="flex items-center mb-4">
                <Shield className="h-8 w-8 text-orange-600 mr-3" />
                <h3 className="text-2xl font-bold text-slate-800">Spray Applied Pipe Lining</h3>
              </div>
              <p className="text-slate-600 mb-6">
                Revolutionary trenchless technology that extends pipe life. 
                Our polymeric SAPL method is cost effective and minimally invasive.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-slate-600">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                  Culverts & Drainage Systems
                </li>
                <li className="flex items-center text-slate-600">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                  Water/Wastewater Pipelines
                </li>
                <li className="flex items-center text-slate-600">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                  Structural Enhancement
                </li>
              </ul>
              <button className="text-orange-600 font-semibold hover:text-orange-700 transition-colors flex items-center">
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </div>

            {/* Bridge Waterproofing */}
            <div className="bg-[#DAE1E7] rounded-xl shadow-lg hover:shadow-xl transition-all p-8 group border border-slate-200">
              <div className="h-48 rounded-lg overflow-hidden mb-6">
                <Image
                  src="/service2.jpg"
                  alt="Bridge deck waterproofing membrane application showing spray equipment and protective coating process"
                  width={400}
                  height={300}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="flex items-center mb-4">
                <Zap className="h-8 w-8 text-orange-600 mr-3" />
                <h3 className="text-2xl font-bold text-slate-800">Bridge Waterproofing</h3>
              </div>
              <p className="text-slate-600 mb-6">
                Rapid-cure elastomeric systems that protect rail and highway structures 
                from deicing chemicals, water damage, and accelerated deterioration.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-slate-600">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                  Highway & Rail Bridges
                </li>
                <li className="flex items-center text-slate-600">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                  Seamless Protection
                </li>
                <li className="flex items-center text-slate-600">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                  Fast Cure Technology
                </li>
              </ul>
              <button className="text-orange-600 font-semibold hover:text-orange-700 transition-colors flex items-center">
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </div>

            {/* Food Processing */}
            <div className="bg-[#DAE1E7] rounded-xl shadow-lg hover:shadow-xl transition-all p-8 group border border-slate-200">
              <div className="h-48 rounded-lg overflow-hidden mb-6">
                <Image
                  src="/service3.jpg"
                  alt="Food processing plant with bright white polyurea coating on walls and ceiling showing clean, hygienic environment"
                  width={400}
                  height={300}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="flex items-center mb-4">
                <Award className="h-8 w-8 text-orange-600 mr-3" />
                <h3 className="text-2xl font-bold text-slate-800">Food Grade Coatings</h3>
              </div>
              <p className="text-slate-600 mb-6">
                High-performance polyurea systems designed for food processing facilities. 
                Chemical-resistant, easy-clean solutions that meet strict industry standards.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-slate-600">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                  FDA Approved Materials
                </li>
                <li className="flex items-center text-slate-600">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                  Chemical Resistance
                </li>
                <li className="flex items-center text-slate-600">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                  Easy Maintenance
                </li>
              </ul>
              <button className="text-orange-600 font-semibold hover:text-orange-700 transition-colors flex items-center">
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
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
              <p className="opacity-90">Rapid-cure technology minimizes downtime and gets you back to operation quickly.</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-500/20 rounded-full p-4 inline-block mb-4">
                <Shield className="h-8 w-8 text-orange-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">Proven Durability</h3>
              <p className="opacity-90">Our polyurea solutions extend infrastructure life with superior protection.</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-500/20 rounded-full p-4 inline-block mb-4">
                <Users className="h-8 w-8 text-orange-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">Expert Team</h3>
              <p className="opacity-90">Certified specialists with decades of combined experience in advanced coating applications.</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-500/20 rounded-full p-4 inline-block mb-4">
                <Star className="h-8 w-8 text-orange-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">Quality Guarantee</h3>
              <p className="opacity-90">Highest ethical standards and commitment to exceeding client expectations every time.</p>
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
            Get a free consultation and discover how our polyurea solutions can 
            save you up to 70% compared to traditional methods.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:shadow-xl transition-all flex items-center justify-center">
              <Phone className="mr-2 h-5 w-5" />
              Call (555) 123-4567
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-600 hover:text-white transition-all flex items-center justify-center">
              <Mail className="mr-2 h-5 w-5" />
              Request Quote
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-slate-950 to-[#142142] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <Image
                src="/asfi-logo-white.jpg"
                alt="ASFI Construction LLC white logo for dark backgrounds"
                width={200}
                height={60}
                className="h-12 w-auto mb-4"
              />
              <p className="text-gray-300">
                Professional polyurea lining and coating services for infrastructure 
                protection and rehabilitation across the DFW area and nationwide.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Contact Info</h3>
              <div className="space-y-2">
                <div className="flex items-center">
                  <Phone className="h-5 w-5 mr-2 text-orange-400" />
                  (555) 123-4567
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 mr-2 text-orange-400" />
                  info@asficonstruction.com
                </div>
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 mr-2 text-orange-400" />
                  DFW Area, Texas
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Our Services</h3>
              <ul className="space-y-2 text-gray-300">
                <li>Spray Applied Pipe Lining</li>
                <li>Bridge Waterproofing</li>
                <li>Food Processing Coatings</li>
                <li>Infrastructure Rehabilitation</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 ASFI Construction LLC. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;