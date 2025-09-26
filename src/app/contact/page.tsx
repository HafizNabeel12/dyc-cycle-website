'use client'

import React, { useState } from 'react'
import { 
  MapPinIcon, 
  PhoneIcon, 
  Mail, 
  ClockIcon 
} from 'lucide-react'
import Link from 'next/link'

const ContactUs: React.FC = () => {
    const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    message: ''
  })

  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitStatus('success')
      setFormData({
        fullName: '',
        email: '',
        phoneNumber: '',
        message: ''
      })
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus('idle')
      }, 5000)
    }, 1000)
  }





  return (
    <div className="min-h-screen bg-gray-50 mt-36">
         <nav aria-label="Breadcrumb" className="border-b border-gray-200">
        <ol className="mx-auto flex max-w-7xl items-center gap-2 px-4 sm:px-2 py-3 text-sm">
          <li>
            <Link href="/" className="text-gray-600 hover:text-black transition">
              Hjem
            </Link>
          </li>
          <li aria-hidden="true" className="text-gray-400">/</li>
          <li className="text-black font-medium">Kontakt</li>
        </ol>
      </nav>
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-12 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Kontakt oss</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Har du spørsmål om våre el-sykler? Vi er her for å hjelpe! Ta kontakt med vårt team av eksperter for personlig assistanse.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Send oss en melding</h2>
              
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <p className="text-green-800">
                    Takk for din melding! Vi kommer tilbake til deg innen 24 timer.
                  </p>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-red-800">
                    Beklager, det oppstod en feil ved sending av meldingen. Vennligst prøv igjen.
                  </p>
                </div>
              )}

              <form action="https://formspree.io/f/moqgylzg" method="POST" onSubmit={handleSubmit} className="space-y-6 text-gray-600">
                <style jsx>{`
                  input,
                  textarea {
                    border-color: #d1d5db !important;
                    box-shadow: none !important;
                    outline: none !important;
                  }
                  input:focus,
                  input:active,
                  input:hover,
                  textarea:focus,
                  textarea:active,
                  textarea:hover {
                    border-color: #d1d5db !important;
                    box-shadow: none !important;
                    outline: none !important;
                  }
                  input:invalid,
                  input:invalid:focus,
                  input:invalid:hover,
                  textarea:invalid,
                  textarea:invalid:focus,
                  textarea:invalid:hover {
                    border-color: #d1d5db !important;
                    box-shadow: none !important;
                    outline: none !important;
                  }
                `}</style>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
                      Fullt navn *
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      required
                      value={formData.fullName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-0 focus:border-gray-300 focus:outline-none transition-colors"
                      placeholder="Skriv inn ditt fulle navn"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      E-postadresse *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-0 focus:border-gray-300 focus:outline-none transition-colors invalid:border-gray-300 focus:invalid:border-gray-300"
                      placeholder="Skriv inn din e-post"
                      style={{ boxShadow: 'none' }}
                      onInvalid={(e) => e.preventDefault()}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-2">
                    Telefonnummer
                  </label>
                  <input
                    type="tel"
                    id="phoneNumber"
                    name="phoneNumber"
                    required
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-0 focus:border-gray-300 focus:outline-none transition-colors"
                    placeholder="Skriv inn ditt telefonnummer"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Melding *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-0 focus:border-gray-300 focus:outline-none transition-colors resize-vertical"
                    placeholder="Fortell oss hvordan vi kan hjelpe deg..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-4 px-6 rounded-lg font-semibold text-white transition-all duration-200 ${
                    isSubmitting
                      ? 'bg-gray-400 cursor-not-allowed'
                      : 'bg-yellow-500 hover:bg-yellow-400 focus:ring-4 focus:ring-blue-200 shadow-lg hover:shadow-xl'
                  }`}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sender...
                    </span>
                  ) : (
                    'Send melding'
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Kontaktinformasjon</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <MapPinIcon className="h-6 w-6 text-yellow-500" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Adresse</h4>
                    <p className="text-gray-600 mt-1">
                     
                       Oslo Norge
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <PhoneIcon className="h-6 w-6 text-yellow-500" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Telefon</h4>
                    <p className="text-gray-600 mt-1">
                      <a href="tel:+4722334455" className="hover:text-yellow-500 transition-colors">
                        +47 405 56 333
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <Mail className="h-6 w-6 text-yellow-500" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">E-post</h4>
                    <div className="text-gray-600 mt-1">
                      <p>
                        <a href="mailto:support@sykkellageret.no" className="hover:text-yellow-500 transition-colors">
                          support@sykkellageret.no
                        </a>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <ClockIcon className="h-6 w-6 text-yellow-500" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Åpningstider</h4>
                    <div className="text-gray-600 mt-1 space-y-1">
                      <p>Mandag - Fredag: 09:00 - 18:00</p>
                      <p>Lørdag: 10:00 - 16:00</p>
                      <p>Søndag: Stengt</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>



            {/* Quick Response Note */}
            {/* <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
              <h4 className="font-semibold text-blue-900 mb-2">Quick Response Guarantee</h4>
              <p className="text-blue-800 text-sm">
                We respond to all messages within 8-24 hours on business days. For urgent matters, please call us directly.
              </p>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactUs