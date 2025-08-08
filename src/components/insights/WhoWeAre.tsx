'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowRight, CheckCircle } from 'lucide-react';
import ServicesMarquee from './ServicesMarquee';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay,
      type: "spring",
      stiffness: 60,
      damping: 18,
    },
  }),
};

const WhoWeAre = () => {
  return (
    <section className="py-20 bg-white">
      <div className="px-4 md:px-8 lg:px-16 xl:px-40 2xl:px-72">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Architects of Intelligent Solutions
            </h2>
            <p className="text-lg text-black/70 mb-8 leading-relaxed">
              At Heuvera, we are passionate technologists dedicated to transforming businesses through innovative digital solutions. With expertise spanning software development, artificial intelligence, and cloud technologies, we help organizations achieve their digital transformation goals.
            </p>
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-6 h-6 text-[#2cd16c]" />
                <span className="text-gray-700">15+ Years Experience</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-6 h-6 text-[#2cd16c]" />
                <span className="text-gray-700">Global Reach</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-6 h-6 text-[#2cd16c]" />
                <span className="text-gray-700">24/7 Support</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-6 h-6 text-[#2cd16c]" />
                <span className="text-gray-700">Agile Methodology</span>
              </div>
            </div>
            <button className="group bg-[#2cd16c] hover:bg-[#25b05c] text-black px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center">
              Learn More About Us
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
          
          <div className="relative h-[500px] rounded-2xl overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
              alt="Our Team"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre; 