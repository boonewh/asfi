import ContactForm from '@/components/ContactForm'

export const metadata = {
  title: 'Contact Us - ASFI Construction',
  description: 'Get in touch for your construction project quote.',
}

export default function ContactPage() {
  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Contact Us
          </h1>
          <p className="text-xl text-gray-600">
            Ready to start your project? Get in touch today.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-bold mb-6">CONTACT INFO</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-lg mb-2">Phone</h3>
                <p className="text-gray-700 text-lg">(432) 438-5806</p>
              </div>
              
              <div>
                <h3 className="font-semibold text-lg mb-2">Fax</h3>
                <p className="text-gray-700 text-lg">(940) 458-9073</p>
              </div>
              
              <div>
                <h3 className="font-semibold text-lg mb-2">Main Office</h3>
                <div className="text-gray-700 text-lg">
                  <p>201 Railroad Ave</p>
                  <p>Sanger, TX 76266</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  )
}