'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Award,
  Users,
  Target,
  Shield,
  Star,
  Phone,
  Mail,
  ArrowRight,
  CheckCircle,
  Building2,
  Calendar,
  Trophy
} from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="min-h-screen">

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-950 to-[#142142] text-white py-24 md:py-32 pt-32 md:pt-40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              About ASFI Construction
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Woman-owned, WBENC certified leader in polyurea coating solutions since 2006
            </p>
            <div className="w-24 h-1 bg-orange-500 mx-auto mt-8"></div>
          </div>
        </div>
      </section>

      {/* Company Story Section */}
      <section className="py-20 bg-white border-t-4 border-b-4 border-orange-500">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Content */}
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-6">
                Our Story
              </h2>
              <div className="prose prose-lg text-slate-600 space-y-6">
                <p>
                  ASFI Construction, LLC was founded by Rachel Corbin in 2006 and has been a 
                  <strong className="text-orange-600"> WBENC Certified and Woman Owned business</strong> in 
                  the Dallas-Fort Worth area. Over the past 18 years, ASFI Construction has enjoyed 
                  success providing quality lining and coating services for infrastructure projects 
                  across multiple industries.
                </p>
                <p>
                  Our company believes the most important core value is having the 
                  <strong className="text-orange-600"> highest ethical standards</strong> and being 
                  dedicated to reducing costs through our engineering expertise. ASFI Construction 
                  is committed to serving each client&apos;s best interest and is dedicated to not only 
                  meeting their expectations but exceeding them whenever possible.
                </p>
                <p>
                  Each client receives our utmost respect as we develop and cultivate 
                  <strong className="text-orange-600"> long-term alliances</strong> built on trust, 
                  quality, and innovation.
                </p>
              </div>
            </div>

            {/* Image */}
            <div className="lg:order-first">
              <div className="relative">
                <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/rachel.jpg"
                    alt="Rachel Corbin, President and Founder of ASFI Construction, professional headshot"
                    width={500}
                    height={625}
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Floating credential badges */}
                <div className="absolute -bottom-4 -right-4 bg-white rounded-xl shadow-lg p-4 border border-gray-100">
                  <div className="flex items-center space-x-2">
                    <Award className="h-6 w-6 text-orange-600" />
                    <div>
                      <div className="text-sm font-bold text-slate-800">WBENC</div>
                      <div className="text-xs text-slate-600">Certified</div>
                    </div>
                  </div>
                </div>
                <div className="absolute -top-4 -left-4 bg-white rounded-xl shadow-lg p-4 border border-gray-100">
                  <div className="flex items-center space-x-2">
                    <Building2 className="h-6 w-6 text-orange-600" />
                    <div>
                      <div className="text-sm font-bold text-slate-800">Founded</div>
                      <div className="text-xs text-slate-600">2006</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-20 bg-[#3652A0]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Leadership
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Dedicated leadership driving innovation and excellence in polyurea coating solutions
            </p>
          </div>

          {/* Rachel's Profile */}
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-slate-800 mb-2">
                Rachel Corbin
              </h3>
              <p className="text-xl text-orange-600 font-semibold mb-4">
                President & Founder
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a 
                  href="mailto:Rachel@asficontruction.com"
                  className="flex items-center text-slate-600 hover:text-orange-600 transition-colors"
                >
                  <Mail className="h-4 w-4 mr-2" />
                  Rachel@asficontruction.com
                </a>
                {/* <a 
                  href="tel:(940) 391-1230"
                  className="flex items-center text-slate-600 hover:text-orange-600 transition-colors"
                >
                  <Phone className="h-4 w-4 mr-2" />
                  (940) 391-1230
                </a> */}
              </div>
            </div>

            <div className="text-center text-slate-600 mb-8">
              <p className="text-lg leading-relaxed max-w-3xl mx-auto">
                Mrs. Corbin founded ASFI Construction in 2006 with a vision to provide exceptional 
                polyurea coating solutions while maintaining the highest ethical standards. As the 
                company has grown, Mrs. Corbin has secured many important certifications for ASFI Construction, 
                including Certified Women&apos;s Business Enterprise, North Central Texas Regional 
                Certification Agency, and Women Owned status.
              </p>
            </div>

            {/* Certifications */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gray-50 rounded-lg p-6 text-center">
                <Trophy className="h-8 w-8 text-orange-600 mx-auto mb-3" />
                <h4 className="font-bold text-slate-800 mb-2">WBENC Certified</h4>
                <p className="text-sm text-slate-600">
                  Women&apos;s Business Enterprise certification
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6 text-center">
                <Award className="h-8 w-8 text-orange-600 mx-auto mb-3" />
                <h4 className="font-bold text-slate-800 mb-2">NCTRCA Certified</h4>
                <p className="text-sm text-slate-600">
                  Certified by the North Central Texas Regional Certification Agency
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6 text-center">
                <Users className="h-8 w-8 text-orange-600 mx-auto mb-3" />
                <h4 className="font-bold text-slate-800 mb-2">Woman Owned</h4>
                <p className="text-sm text-slate-600">
                  100% woman-owned small business
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-white border-t-4 border-b-4 border-orange-500">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-6">
              Our Core Values
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              The principles that guide everything we do at ASFI Construction
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="bg-orange-100 rounded-full p-4 inline-block mb-4 group-hover:bg-orange-200 transition-colors">
                <Shield className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Highest Ethics</h3>
              <p className="text-slate-600">
                Maintaining the highest ethical standards in all our business practices and relationships.
              </p>
            </div>

            <div className="text-center group">
              <div className="bg-orange-100 rounded-full p-4 inline-block mb-4 group-hover:bg-orange-200 transition-colors">
                <Target className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Cost Reduction</h3>
              <p className="text-slate-600">
                Dedicated to reducing costs through our engineering expertise and innovative solutions.
              </p>
            </div>

            <div className="text-center group">
              <div className="bg-orange-100 rounded-full p-4 inline-block mb-4 group-hover:bg-orange-200 transition-colors">
                <Star className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Exceed Expectations</h3>
              <p className="text-slate-600">
                Committed to not only meeting client expectations but exceeding them whenever possible.
              </p>
            </div>

            <div className="text-center group">
              <div className="bg-orange-100 rounded-full p-4 inline-block mb-4 group-hover:bg-orange-200 transition-colors">
                <Users className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Long-term Alliances</h3>
              <p className="text-slate-600">
                Building lasting partnerships based on trust, respect, and mutual success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose ASFI */}
      <section className="py-20 bg-gradient-to-br from-slate-950 to-[#142142] text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Why Choose ASFI Construction?
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              18 years of proven expertise with a commitment to excellence and innovation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
              <CheckCircle className="h-8 w-8 text-orange-400 mb-4" />
              <h3 className="text-xl font-bold mb-3">WBENC Certified</h3>
              <p className="opacity-90">
                Officially certified Women&apos;s Business Enterprise providing opportunities for diversity contracting.
              </p>
            </div>

            <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
              <Calendar className="h-8 w-8 text-orange-400 mb-4" />
              <h3 className="text-xl font-bold mb-3">18+ Years Experience</h3>
              <p className="opacity-90">
                Nearly two decades of expertise in polyurea coating applications across multiple industries.
              </p>
            </div>

            <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
              <Trophy className="h-8 w-8 text-orange-400 mb-4" />
              <h3 className="text-xl font-bold mb-3">Engineering Excellence</h3>
              <p className="opacity-90">
                Cost-effective solutions through advanced engineering expertise and innovative application methods.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-[#3652A0] border-t-4 border-b-4 border-orange-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Work with a Trusted Partner?
          </h2>
          <p className="text-xl text-slate-600 mb-8">
            Experience the ASFI difference - where quality, ethics, and innovation come together 
            to deliver exceptional results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:shadow-xl transition-all flex items-center justify-center"
            >
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <a
              href="tel:(432) 438-5806"
              className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-[#3652A0] transition-all flex items-center justify-center"
            >
              <Phone className="mr-2 h-5 w-5" />
              Call (432) 438-5806
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};

export default AboutPage;