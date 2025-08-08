'use client';
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, Clock, Users, Zap } from 'lucide-react';
import SectionContainer from '@/components/ui/sectionContainer';
import Hero from '@/components/hero';


export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <div className="bg-white">
      {/* HERO SECTION - Modern Unsplash background */}
      <Hero
        imgLink="https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=1200&q=80"
        section="Contact Us"
        title="Let's Build Something Great"
        description="Ready to transform your business with cutting-edge technology? Our expert team is here to turn your vision into reality."
        height="h-[50vh]"
      />

      {/* MAIN CONTENT SECTION */}
      <div className="py-20 bg-gray-50">
        <SectionContainer>
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            
            {/* CONTACT FORM */}
            <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-10 relative overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-teal-500 to-teal-600 rounded-bl-full opacity-10"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-black to-gray-800 rounded-tr-full opacity-5"></div>
              
              <div className="relative z-10">
                <div className="mb-8">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    Start Your Project
                  </h2>
                  <p className="text-gray-600 text-lg">
                    Fill out the form below and we'll get back to you within 24 hours.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-gray-800 mb-3">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:border-teal-500 focus:ring-0 transition-colors duration-200 text-gray-900 placeholder-gray-500"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-800 mb-3">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:border-teal-500 focus:ring-0 transition-colors duration-200 text-gray-900 placeholder-gray-500"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="company" className="block text-sm font-semibold text-gray-800 mb-3">
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:border-teal-500 focus:ring-0 transition-colors duration-200 text-gray-900 placeholder-gray-500"
                        placeholder="Your Company"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-gray-800 mb-3">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:border-teal-500 focus:ring-0 transition-colors duration-200 text-gray-900 placeholder-gray-500"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-semibold text-gray-800 mb-3">
                      Service Needed
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:border-teal-500 focus:ring-0 transition-colors duration-200 text-gray-900"
                    >
                      <option value="">Select a service</option>
                      <option value="web-development">Web Development</option>
                      <option value="mobile-apps">Mobile Applications</option>
                      <option value="cloud-solutions">Cloud Solutions</option>
                      <option value="data-analytics">Data Analytics</option>
                      <option value="cybersecurity">Cybersecurity</option>
                      <option value="consulting">IT Consulting</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-800 mb-3">
                      Project Description *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={5}
                      required
                      className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:border-teal-500 focus:ring-0 transition-colors duration-200 text-gray-900 placeholder-gray-500 resize-none"
                      placeholder="Tell us about your project, timeline, and any specific requirements..."
                    ></textarea>
                  </div>

                  <button
                    onClick={handleSubmit}
                    className="w-full bg-gradient-to-r from-teal-500 to-teal-600 text-white font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200 flex items-center justify-center gap-3 text-lg"
                  >
                    {isSubmitted ? (
                      <>
                        <CheckCircle size={24} />
                        Message Sent!
                      </>
                    ) : (
                      <>
                        <Send size={24} />
                        Send Message
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* CONTACT INFO & CTA */}
            <div className="space-y-8">
              {/* Contact Cards */}
              <div className="grid gap-6">
                <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300 border border-gray-100">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-teal-500 rounded-xl flex items-center justify-center">
                      <Phone size={24} className="text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 text-lg">Call Us</h3>
                      <p className="text-gray-600">Mon-Fri 9AM-6PM EST</p>
                    </div>
                  </div>
                  <p className="text-2xl font-bold text-gray-900">+1 (555) 123-4567</p>
                </div>

                <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300 border border-gray-100">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-teal-500 rounded-xl flex items-center justify-center">
                      <Mail size={24} className="text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 text-lg">Email Us</h3>
                      <p className="text-gray-600">Quick response guaranteed</p>
                    </div>
                  </div>
                  <p className="text-xl font-bold text-gray-900">hello@itconsult.com</p>
                </div>

                <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300 border border-gray-100">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-teal-500 rounded-xl flex items-center justify-center">
                      <MapPin size={24} className="text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 text-lg">Visit Us</h3>
                      <p className="text-gray-600">Schedule an appointment</p>
                    </div>
                  </div>
                  <p className="text-lg font-semibold text-gray-900">
                    123 Tech Avenue<br />
                    Suite 100<br />
                    San Francisco, CA 94105
                  </p>
                </div>
              </div>

              {/* Why Choose Us */}
              <div className="bg-gradient-to-br from-black to-gray-900 rounded-3xl p-8 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500 rounded-full opacity-20 -translate-y-16 translate-x-16"></div>
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-6">Why Choose Us?</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Zap size={20} className="text-teal-400 flex-shrink-0" />
                      <span className="font-medium">Lightning-fast project delivery</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Users size={20} className="text-teal-400 flex-shrink-0" />
                      <span className="font-medium">Dedicated expert team</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle size={20} className="text-teal-400 flex-shrink-0" />
                      <span className="font-medium">100% satisfaction guarantee</span>
                    </div>
                  </div>
                  <div className="mt-8 p-4 bg-white bg-opacity-10 rounded-xl">
                    <p className="text-teal-300 font-semibold text-lg mb-2">Free Consultation</p>
                    <p className="text-sm opacity-90">Let's discuss your project with no strings attached</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SectionContainer>
      </div>

      {/* BOTTOM CTA SECTION */}
      <div className="bg-gradient-to-r from-teal-500 to-teal-600 py-16">
        <SectionContainer>
          <div className="text-center text-white">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Join hundreds of satisfied clients who've accelerated their growth with our solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-teal-600 font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200">
                Schedule Free Consultation
              </button>
              <button className="border-2 border-white text-white font-bold py-4 px-8 rounded-xl hover:bg-white hover:text-teal-600 transition-all duration-200">
                View Our Portfolio
              </button>
            </div>
          </div>
        </SectionContainer>
      </div>
    </div>
  );
}