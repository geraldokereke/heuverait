'use client';
import React from 'react';
import { Mail } from 'lucide-react';
import SectionContainer from '@/components/ui/sectionContainer';
import SectionTitle from '@/components/ui/SectionTitle';

export default function ContactUs() {
  return (
    <>
      {/* HERO SECTION - Simple, Inviting, Professional */}
      <div className="relative min-h-[50vh] md:min-h-[60vh] flex items-center bg-gradient-to-br from-[#f8fafc] via-[#bae6fd] to-[#f8fafc] overflow-hidden">
        <SectionContainer className="z-10 w-full flex flex-col items-center justify-center text-center py-14 md:py-24">
          <Mail size={54} className="text-primary mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-4 drop-shadow-lg">Contact Us</h1>
          <p className="text-lg md:text-2xl font-light text-blue-800 max-w-2xl mx-auto mb-6 md:mb-8">
            Let's connect—reach out to discuss your project, request a demo, or learn more about our solutions.
          </p>
        </SectionContainer>
        <img src="/contact-hero.jpg" alt="Contact Us" className="absolute right-0 bottom-0 w-1/3 max-w-xs md:max-w-md opacity-70 hidden md:block" />
      </div>

      {/* CONTACT FORM SECTION */}
      <SectionContainer className="py-10 md:py-16">
        <SectionTitle
          section="Get in Touch"
          title="Send a Message"
          subtitle="We'll respond within one business day."
          className="mb-8 text-center"
        />
        <form className="max-w-xl mx-auto space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-2">Name</label>
            <input type="text" id="name" name="name" required className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary focus:outline-none" />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">Email</label>
            <input type="email" id="email" name="email" required className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary focus:outline-none" />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-2">Message</label>
            <textarea id="message" name="message" rows={5} required className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"></textarea>
          </div>
          <button type="submit" className="w-full py-3 px-6 bg-primary text-white font-semibold rounded-lg shadow hover:bg-primary-dark transition">Send Message</button>
        </form>
      </SectionContainer>
    </>
  );
}
