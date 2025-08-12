'use client'
import { useForm, ValidationError } from '@formspree/react'

export default function ContactForm() {
  const [state, handleSubmit] = useForm("xovlrjrp") // Replace with your Formspree form ID;

  if (state.succeeded) {
    return <p className="text-green-600 font-semibold">Thank you! We’ll get back to you soon.</p>
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Hidden subject for email notifications */}
      <input type="hidden" name="_subject" value="All Seasons Foam Contact Form Submission" />

      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
          Name *
        </label>
        <input
          type="text"
          name="name"
          id="name"
          required
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
          Email *
        </label>
        <input
          type="email"
          name="email"
          id="email"
          required
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </div>
      
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
          Phone
        </label>
        <input
          type="tel"
          name="phone"
          id="phone"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      
      <div>
        <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-2">
          Address
        </label>
        <input
          type="text"
          name="address"
          id="address"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-2">
            City
          </label>
          <input
            type="text"
            name="city"
            id="city"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        
        <div>
          <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-2">
            State
          </label>
          <input
            type="text"
            name="state"
            id="state"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        
        <div>
          <label htmlFor="postalCode" className="block text-sm font-medium text-gray-700 mb-2">
            Postal Code
          </label>
          <input
            type="text"
            name="postalCode"
            id="postalCode"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>
      
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
          Message *
        </label>
        <textarea
          name="message"
          id="message"
          rows={4}
          required
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <ValidationError prefix="Message" field="message" errors={state.errors} />
      </div>
      
      <button
        type="submit"
        disabled={state.submitting}
        className="w-full bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition-colors font-semibold"
      >
        Send Message
      </button>
    </form>
  )
}

