'use client'

import React, { useState } from 'react'
import { ChevronDownIcon, ChevronUpIcon } from 'lucide-react'
import Link from 'next/link'

interface AccordionItem {
  id: string
  title: string
  content: string
}

const TermsOfService: React.FC = () => {
  const [openAccordion, setOpenAccordion] = useState<string | null>(null)

  const toggleAccordion = (id: string) => {
    setOpenAccordion(openAccordion === id ? null : id)
  }

  const accordionItems: AccordionItem[] = [
    {
      id: 'parties',
      title: 'Parties',
      content: `This agreement is entered into between DYU Cycle ("Company", "we", "us", or "our") and you ("Customer", "you", or "your"). By purchasing from DYU Cycle, you acknowledge that you have read, understood, and agree to be bound by these terms of service. The Company is responsible for the sale and distribution of electric bicycles and related accessories. The Customer is responsible for providing accurate information during the purchase process and compliance with all applicable laws and regulations regarding the use of electric bicycles.`
    },
    {
      id: 'payment',
      title: 'Payment',
      content: `Payment must be made in full at the time of purchase unless otherwise agreed upon in writing. We accept major credit cards, PayPal, and other approved payment methods. All prices are listed in USD and are subject to change without notice. Payment processing is handled through secure, encrypted channels to protect your financial information. In case of payment failure, your order may be cancelled automatically. Refunds will be processed to the original payment method within 5-10 business days after approval.`
    },
    {
      id: 'delivery',
      title: 'Delivery',
      content: `Standard delivery takes 2-7 business days within the continental United States. Express shipping options are available for an additional fee. Delivery times may vary based on location and product availability. We partner with FedEx, UPS, and DPD for reliable shipping services. Customers will receive tracking information via email once the order has shipped. Delivery to remote areas may take additional time. International shipping is available to select countries with additional customs fees that are the responsibility of the customer.`
    },
    {
      id: 'right-of-withdrawal',
      title: 'Right of withdrawal',
      content: `You have the right to withdraw from this contract within 14 days without giving any reason. The withdrawal period will expire after 14 days from the day you acquire physical possession of the goods. To exercise the right of withdrawal, you must inform us of your decision to withdraw from this contract by an unambiguous statement. You may use the contact information provided on our website. If you withdraw from this contract, we shall reimburse to you all payments received from you, including the costs of delivery, without undue delay and in any event not later than 14 days from the day we are informed about your decision to withdraw.`
    },
    {
      id: 'return',
      title: 'Return',
      content: `Items can be returned within 30 days of purchase in their original condition and packaging. The customer is responsible for return shipping costs unless the return is due to our error or defective products. All returns must be authorized by contacting our customer service team first. Returned items must be unused, unassembled (if applicable), and in resalable condition. Upon receipt and inspection of returned items, refunds will be processed within 5-10 business days. Custom or personalized items may not be eligible for return unless defective.`
    },
    {
      id: 'complaints-handling',
      title: 'Complaints handling',
      content: `We are committed to providing excellent customer service and resolving any issues promptly. If you have a complaint about our products or services, please contact our customer service team at service@dyucycle.com within 30 days of the issue occurring. We will acknowledge receipt of your complaint within 2 business days and provide a resolution within 14 business days. If you are not satisfied with our response, you may escalate the matter through our internal review process. We maintain detailed records of all complaints and resolutions for quality improvement purposes.`
    },
    {
      id: 'conflict-resolution',
      title: 'Conflict resolution',
      content: `Any disputes arising from this agreement shall first be addressed through good faith negotiations between the parties. If a resolution cannot be reached through direct communication, disputes shall be resolved through binding arbitration in accordance with the rules of the American Arbitration Association. The arbitration shall take place in the jurisdiction where the Company is headquartered. Each party shall bear their own costs and fees associated with the arbitration process. The decision of the arbitrator shall be final and binding on both parties. This agreement is governed by the laws of the United States and the state in which the Company is incorporated.`
    }
  ]

  return (
    <div className="min-h-screen mt-52 md:mt-36">
         <nav aria-label="Breadcrumb" className="border-b border-gray-200">
        <ol className="mx-auto flex max-w-7xl items-center gap-2 px-4 sm:px-2 py-3 text-sm">
          <li>
            <Link href="/" className="text-gray-600 hover:text-black transition">
              Hjem
            </Link>
          </li>
          <li aria-hidden="true" className="text-gray-400">/</li>
          <li className="text-black font-medium">Terms</li>
        </ol>
      </nav>
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-gray-900 text-center mb-2">Terms of Service</h1>
          <p className="text-gray-600 text-center">
            Please read these terms carefully before using our services
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-4 py-12">
        <div className="bg-white rounded-lg shadow-sm">
          {accordionItems.map((item, index) => (
            <div key={item.id} className={`border-b border-gray-200 ${index === accordionItems.length - 1 ? 'border-b-0' : ''}`}>
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 focus:outline-none focus:bg-gray-50 transition-colors duration-200"
                onClick={() => toggleAccordion(item.id)}
                aria-expanded={openAccordion === item.id}
                aria-controls={`accordion-content-${item.id}`}
              >
                <h3 className="text-lg font-semibold text-gray-900 uppercase tracking-wide">
                  {item.title}
                </h3>
                <div className="flex-shrink-0 ml-4">
                  {openAccordion === item.id ? (
                    <ChevronUpIcon className="h-5 w-5 text-gray-500" />
                  ) : (
                    <ChevronDownIcon className="h-5 w-5 text-gray-500" />
                  )}
                </div>
              </button>
              
              {openAccordion === item.id && (
                <div
                  id={`accordion-content-${item.id}`}
                  className="px-6 pb-6 pt-2 animate-fade-in"
                >
                  <div className="prose prose-gray max-w-none">
                    <p className="text-gray-700 leading-relaxed">
                      {item.content}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Footer Note */}
        {/* <div className="mt-8 p-6 bg-blue-50 rounded-lg border border-blue-200">
          <p className="text-sm text-blue-800">
            <strong>Last Updated:</strong> {new Date().toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </p>
          <p className="text-sm text-blue-700 mt-2">
            If you have any questions about these Terms of Service, please contact us at{' '}
            <a href="mailto:service@dyucycle.com" className="underline hover:text-blue-900">
              service@dyucycle.com
            </a>
          </p>
        </div> */}
      </div>

      <style jsx>{`
        .animate-fade-in {
          animation: fadeIn 0.3s ease-in-out;
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  )
}

export default TermsOfService