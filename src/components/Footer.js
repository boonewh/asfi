import Image from 'next/image';
import Link from 'next/link';
import { Phone, Mail, MapPin, Printer } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-slate-950 to-[#142142] text-white py-12 w-full">
      <div className="w-full">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Change grid proportions to better balance visual weight */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">

            {/* Company Info - Keep left aligned but reduce width */}
            <div className="lg:col-span-1">
              <div className="mb-6">
                <Image
                  src="/images/logo.png"
                  alt="ASFI Construction LLC white logo for dark backgrounds"
                  width={240}
                  height={80}
                  className="h-32 w-auto mb-4"
                />
                <div className="w-16 h-1 bg-orange-500 mb-4"></div>
              </div>
              <p className="text-gray-300 text-base leading-relaxed mb-6">
                Professional polyurea lining and coating services for infrastructure 
                protection and rehabilitation across the DFW area and nationwide.
              </p>
            </div>

            {/* Contact Info & Services - Center column */}
            <div className="lg:col-span-1 pl-24">
              <h4 className="text-xl font-bold text-white mb-4">Contact Info</h4>
              
              <div className="flex items-center space-x-3 mb-4">
                <Phone className="h-5 w-5 text-orange-400 flex-shrink-0" />
                <div>
                  <p className="text-white font-semibold">(940) 391-1230</p>
                  <p className="text-gray-400 text-sm">Sales - Call for a free quote</p>
                </div>
              </div>

              <div className="flex items-center space-x-3 mb-4">
                <Phone className="h-5 w-5 text-orange-400 flex-shrink-0" />
                <div>
                  <p className="text-white font-semibold">(940) 391-1230</p>
                  <p className="text-gray-400 text-sm">Office - General inquiries</p>
                </div>
              </div>

              <div className="flex items-center space-x-3 mb-4">
                <Printer className="h-5 w-5 text-orange-400 flex-shrink-0" />
                <div>
                  <p className="text-white font-semibold">(940) 458-9073</p>
                  <p className="text-gray-400 text-sm">Fax number</p>
                </div>
              </div>

              <div className="flex items-center space-x-3 mb-4">
                <Mail className="h-5 w-5 text-orange-400 flex-shrink-0" />
                <div>
                  <p className="text-white font-semibold">rachel@asficonstruction.com</p>
                  <p className="text-gray-400 text-sm">Get a quick response</p>
                </div>
              </div>

              <div className="flex items-center space-x-3 mb-6">
                <MapPin className="h-5 w-5 text-orange-400 flex-shrink-0" />
                <div>
                  <p className="text-white font-semibold">Main Office</p>
                  <p className="text-gray-400 text-sm">5390 Sam Bass Rd., Sanger, TX. 76266</p>
                  <p className="text-gray-400 text-sm">Serving Texas and beyond</p>
                </div>
              </div>
            </div>

            {/* Connect With Us - Right aligned content */}
            <div className="lg:col-span-1 lg:text-right">
              <h4 className="text-xl font-bold text-white mb-4">Connect With Us</h4>
              
              <div className="flex space-x-4 mb-8 lg:justify-end">
                <a 
                  href="#" 
                  className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors duration-200"
                  aria-label="Facebook"
                >
                  <span className="text-white text-xl font-bold">f</span>
                </a>
                <a 
                  href="#" 
                  className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors duration-200"
                  aria-label="LinkedIn"
                >
                  <span className="text-white text-xl font-bold">in</span>
                </a>
              </div>
              
              <div className="lg:flex lg:justify-end">
                <Link 
                  href="/contact" 
                  className="inline-block bg-orange-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-orange-600 transition-all duration-200 transform hover:scale-105"
                >
                  Get Free Quote
                </Link>
              </div>

              {/* Additional visual balance - maybe a testimonial or certification */}
              <div className="mt-8 lg:text-right">
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              &copy; 2025 ASFI Construction LLC. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;