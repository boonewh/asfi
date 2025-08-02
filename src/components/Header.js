'use client'
import { useState } from 'react'
import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import Image from 'next/image'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'SIPP/Culverts', href: '/culvert-rehabilitation' },
  { name: 'Bridge Waterproofing', href: '/bridge-waterproofing' },
  { name: 'Food Plants', href: '/food-plants' },
  { name: 'Contact', href: '/contact' }
]

export default function Header() {
  return (
    <Disclosure as="nav" className="bg-gradient-to-r from-slate-900 to-[#142142] shadow-lg sticky top-0 z-50">
      {({ open, close }) => (
        <>
          <div className="max-w-[90%] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-28">
              <div className="flex items-center">
                <Link href="/">
                  <Image
                    src="/images/logo.png"
                    alt="ASFI Construction LLC white logo featuring blue and gray modern lettering"
                    width={300}
                    height={160}
                    className="h-28 w-auto cursor-pointer"
                    priority
                  />
                </Link>
              </div>
              
              {/* Desktop menu */}
              <div className="hidden xl:flex space-x-6 xl:space-x-12 mx-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-gray-300 hover:text-orange-400 transition-colors font-medium text-med xl:text-lg"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              
              {/* Desktop contact & CTA */}
              <div className="hidden xl:flex items-center space-x-4">
                <a href="tel:(432) 438-5806" className="text-orange-400 hover:text-orange-300 font-semibold">
                  (432) 438-5806
                </a>
                <Link href="/contact" className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-2 rounded-lg hover:shadow-lg transition-all">
                  Get Quote
                </Link>
              </div>

              {/* Mobile menu button */}
              <div className="xl:hidden flex items-center">
                <Disclosure.Button className="text-gray-300 hover:text-orange-400 p-2">
                  {open ? (
                    <XMarkIcon className="h-6 w-6" />
                  ) : (
                    <Bars3Icon className="h-6 w-6" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          {/* Mobile menu */}
          <Disclosure.Panel className="xl:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-slate-900 border-t border-slate-700">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-gray-300 hover:text-orange-400 text-lg"
                  onClick={() => close()}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-3 py-2 border-t border-slate-700 mt-2 pt-4">
                <a href="tel:(432) 438-5806" className="block px-3 py-2 text-orange-400 font-semibold">
                  📞 (432) 438-5806
                </a>
                <Link 
                  href="/contact" 
                  className="block bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-2 rounded-lg text-center hover:shadow-lg transition-all mt-2"
                  onClick={() => close()}
                >
                  Get Quote
                </Link>
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}