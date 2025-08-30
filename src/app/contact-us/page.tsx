// src/app/contact-us/page.tsx
'use client';

import { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send,
  MessageCircle,
  Headphones,
  Building,
  Users,
  Globe,
  CheckCircle,
  AlertCircle,
  Loader2,
  ArrowRight,
  Star,
  Shield,
  Truck,
  Heart
} from 'lucide-react';

// Types
interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
  inquiryType: string;
}

interface OfficeLocation {
  country: string;
  address: string;
  email: string;
  phone?: string;
  hours?: string;
}

interface ContactMethod {
  title: string;
  description: string;
  email: string;
  icon: React.ComponentType<any>;
  bgColor: string;
  textColor: string;
}

// Hero Section Component
const HeroSection: React.FC = () => {
  return (
    <section className="relative bg-white text-black py-24 mt-16 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 bg-yellow-400 rounded-full blur-xl opacity-20"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-yellow-400 rounded-full blur-xl opacity-20"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-yellow-400 rounded-full blur-3xl opacity-5"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center bg-yellow-400 text-black px-6 py-3 rounded-full text-sm font-bold">
                <MessageCircle className="w-4 h-4 mr-2" />
                WE&apos;RE HERE TO HELP
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                Get in
                <span className="text-yellow-400"> Touch</span>
              </h1>
              
              <p className="text-xl text-black leading-relaxed max-w-lg">
                Have questions about our electric bikes? Need support? Want to explore partnerships? 
                We&apos;re here to help you every step of the way.
              </p>
            </div>
            
            {/* Quick Contact Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400">24/7</div>
                <div className="text-sm text-gray-400 uppercase tracking-wider">Support</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400">&lt;2hrs</div>
                <div className="text-sm text-gray-400 uppercase tracking-wider">Response</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400">Global</div>
                <div className="text-sm text-gray-400 uppercase tracking-wider">Reach</div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-yellow-400 text-black px-8 py-4 rounded-lg font-bold hover:bg-yellow-300 transition-all transform hover:scale-105 flex items-center justify-center group">
                <Mail className="w-5 h-5 mr-2" />
                Email Us
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-black transition-all flex items-center justify-center">
                <Phone className="w-5 h-5 mr-2" />
                Call Support
              </button>
            </div>
          </div>

          {/* Right Content - Contact Visual */}
          <div className="relative">
            <div className="relative z-10">
              <div className="w-full h-96 bg-gray-800 rounded-2xl flex items-center justify-center">
                <p className="text-gray-400"> Contact Support Team Image Here</p>
              </div>
            </div>
            {/* Floating Contact Info */}
            <div className="absolute -top-4 -right-4 bg-yellow-400 text-black px-4 py-2 rounded-full text-sm font-bold animate-bounce">
              We Reply Fast!
            </div>
            <div className="absolute -bottom-4 -left-4 bg-white text-black px-4 py-2 rounded-full text-sm font-semibold">
              Global Support
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Contact Methods Section
const ContactMethodsSection: React.FC = () => {
  const contactMethods: ContactMethod[] = [
    {
      title: "Customer Support",
      description: "Get help with your DYU bike, warranty claims, or technical issues",
      email: "service@dyucycle.com",
      icon: Headphones,
      bgColor: "bg-yellow-400",
      textColor: "text-black"
    },
    {
      title: "Business Cooperation",
      description: "Partnership opportunities, wholesale inquiries, and business collaborations",
      email: "official@dyucycle.com", 
      icon: Building,
      bgColor: "bg-black",
      textColor: "text-yellow-400"
    },
    {
      title: "General Inquiries",
      description: "Questions about products, shipping, returns, or general information",
      email: "info@dyucycle.com",
      icon: MessageCircle,
      bgColor: "bg-gray-100",
      textColor: "text-black"
    }
  ];

  return (
    <section className="bg-white py-20 mt-28">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-bold text-black mb-4">
            How Can We <span className="text-yellow-400">Help?</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose the best way to reach us based on your needs
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {contactMethods.map((method, index) => (
            <div key={index} className={`${method.bgColor} ${method.textColor} p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group`}>
              <div className="space-y-6">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <method.icon className="w-8 h-8" />
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold mb-3">{method.title}</h3>
                  <p className={`${method.textColor === 'text-black' ? 'text-gray-600' : 'text-gray-300'} mb-4 leading-relaxed`}>
                    {method.description}
                  </p>
                </div>

                <div className="space-y-3">
                  <a 
                    href={`mailto:${method.email}`}
                    className={`inline-flex items-center ${method.textColor === 'text-black' ? 'text-gray-800' : 'text-white'} font-semibold hover:underline`}
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    {method.email}
                  </a>
                  
                  <button className={`w-full ${method.textColor === 'text-black' ? 'bg-black text-white' : 'bg-yellow-400 text-black'} py-3 rounded-lg font-bold hover:opacity-90 transition-all flex items-center justify-center group`}>
                    Contact Now
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Contact Form Section
const ContactFormSection: React.FC = () => {
  const [formData, setFormData] = useState<ContactForm>({
    name: '',
    email: '',
    subject: '',
    message: '',
    inquiryType: 'general'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
        inquiryType: 'general'
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-gray-50 py-20 mt-28">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-6xl font-bold text-black mb-4">
              Send Us a <span className="text-yellow-400">Message</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Use the form below to send us a message and we&apos;ll get back to you within 24 hours
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            {submitStatus === 'success' && (
              <div className="mb-8 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center">
                <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                <p className="text-green-800 font-semibold">Thank you! Your message has been sent successfully.</p>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="mb-8 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center">
                <AlertCircle className="w-5 h-5 text-red-600 mr-3" />
                <p className="text-red-800 font-semibold">Sorry, there was an error sending your message. Please try again.</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Inquiry Type */}
              <div>
                <label htmlFor="inquiryType" className="block text-sm font-semibold text-gray-800 mb-2">
                  Inquiry Type
                </label>
                <select
                  id="inquiryType"
                  name="inquiryType"
                  value={formData.inquiryType}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all"
                  required
                >
                  <option value="general">General Inquiry</option>
                  <option value="support">Customer Support</option>
                  <option value="business">Business Cooperation</option>
                  <option value="warranty">Warranty Claim</option>
                  <option value="technical">Technical Support</option>
                </select>
              </div>

              {/* Name and Email Row */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-800 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all"
                    required
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-800 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all"
                    required
                    placeholder="Enter your email address"
                  />
                </div>
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-gray-800 mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all"
                  required
                  placeholder="Brief description of your inquiry"
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-800 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all resize-none"
                  required
                  placeholder="Please provide detailed information about your inquiry..."
                ></textarea>
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-yellow-400 text-black py-4 px-8 rounded-lg font-bold hover:bg-yellow-300 transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                      Sending Message...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

// Office Locations Section
const OfficeLocationsSection: React.FC = () => {
  const offices: OfficeLocation[] = [
    {
      country: "China Headquarters",
      address: "26th Floor, Block B, Hongrongyuan North Station Center, Beizhan Community, Minzhi Street, Longhua District, Shenzhen, Guangdong",
      email: "official@dyucycle.com",
      phone: "+86-xxx-xxxx-xxxx",
      hours: "9:00 AM - 6:00 PM (CST)"
    },
    {
      country: "United States",
      address: "4250 Shirley Ave, El Monte, CA 91731",
      email: "us@dyucycle.com", 
      phone: "+1-xxx-xxx-xxxx",
      hours: "9:00 AM - 5:00 PM (PST)"
    },
    {
      country: "United Kingdom",
      address: "London Operation Center (Address Details)",
      email: "uk@dyucycle.com",
      hours: "9:00 AM - 5:00 PM (GMT)"
    },
    {
      country: "Netherlands",
      address: "Amsterdam Operation Center (Address Details)",
      email: "eu@dyucycle.com",
      hours: "9:00 AM - 5:00 PM (CET)"
    }
  ];

  return (
    <section className="bg-black text-white py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-bold mb-4">
            Our <span className="text-yellow-400">Global</span> Offices
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            We have operation centers worldwide to serve you better
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {offices.map((office, index) => (
            <div key={index} className="bg-gray-800 p-8 rounded-2xl hover:bg-gray-700 transition-all duration-300">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-black" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-yellow-400 mb-2">{office.country}</h3>
                    <p className="text-gray-300 mb-4 leading-relaxed">{office.address}</p>
                  </div>
                </div>

                <div className="space-y-3 pl-16">
                  <div className="flex items-center text-gray-300">
                    <Mail className="w-4 h-4 mr-3" />
                    <a href={`mailto:${office.email}`} className="hover:text-yellow-400 transition-colors">
                      {office.email}
                    </a>
                  </div>
                  
                  {office.phone && (
                    <div className="flex items-center text-gray-300">
                      <Phone className="w-4 h-4 mr-3" />
                      <a href={`tel:${office.phone}`} className="hover:text-yellow-400 transition-colors">
                        {office.phone}
                      </a>
                    </div>
                  )}
                  
                  {office.hours && (
                    <div className="flex items-center text-gray-300">
                      <Clock className="w-4 h-4 mr-3" />
                      <span>{office.hours}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// FAQ Section
const FAQSection: React.FC = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    {
      question: "How quickly do you respond to inquiries?",
      answer: "We typically respond to all inquiries within 24 hours during business days. For urgent technical support issues, we aim to respond within 2 hours."
    },
    {
      question: "What information should I include in my support request?",
      answer: "Please include your bike model, serial number, purchase date, and a detailed description of the issue. Photos or videos can be very helpful for technical problems."
    },
    {
      question: "Do you offer phone support?",
      answer: "Yes, we offer phone support during business hours. Email us first to schedule a call or for immediate assistance with urgent matters."
    },
    {
      question: "Can I visit your offices?",
      answer: "Our offices are primarily operation centers. For sales or service, please contact us first to schedule an appointment or visit our authorized dealers."
    },
    {
      question: "What languages do you support?",
      answer: "We provide support in English, Chinese, and other local languages depending on your region. Our global team ensures you get help in your preferred language."
    }
  ];

  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-6xl font-bold text-black mb-4">
              Frequently Asked <span className="text-yellow-400">Questions</span>
            </h2>
            <p className="text-xl text-gray-600">
              Quick answers to common questions about contacting us
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                  className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-black pr-4">{faq.question}</h3>
                  <div className={`transform transition-transform ${openFAQ === index ? 'rotate-180' : ''}`}>
                    <ArrowRight className="w-5 h-5 text-gray-400" />
                  </div>
                </button>
                {openFAQ === index && (
                  <div className="px-8 pb-6">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Support Promise Section
const SupportPromiseSection: React.FC = () => {
  const promises = [
    {
      icon: Shield,
      title: "Dedicated Support",
      description: "Professional customer service team ready to help"
    },
    {
      icon: Clock,
      title: "Quick Response",
      description: "24-hour response time guarantee"
    },
    {
      icon: Globe,
      title: "Global Coverage",
      description: "Support in multiple languages and time zones"
    },
    {
      icon: Heart,
      title: "Customer First",
      description: "Your satisfaction is our top priority"
    }
  ];

  return (
    <section className="bg-white text-black py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-bold mb-4">
            Our Support Promise
          </h2>
          <p className="text-xl font-semibold max-w-2xl mx-auto">
            We&apos;re committed to providing exceptional support every step of the way
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {promises.map((promise, index) => (
            <div key={index} className="text-center space-y-4">
              <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center mx-auto">
                <promise.icon className="w-8 h-8 text-yellow-400" />
              </div>
              <h3 className="text-xl font-bold">{promise.title}</h3>
              <p className="text-gray-800">{promise.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <button className="bg-black text-yellow-400 px-10 py-5 rounded-lg font-bold text-lg hover:bg-gray-800 transition-all transform hover:scale-105">
            Contact Us Today
          </button>
        </div>
      </div>
    </section>
  );
};

// Main Page Component
export default function ContactUsPage(): React.JSX.Element {
  return (
    <main className="min-h-screen">
      {/* <HeroSection /> */}
      <ContactMethodsSection />
      {/* <ContactFormSection /> */}
      {/* <OfficeLocationsSection /> */}
      <FAQSection />
      <SupportPromiseSection />
    </main>
  );
}