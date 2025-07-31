'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code, 
  Brain, 
  Smartphone, 
  Cloud, 
  MessageSquare, 
  Shield 
} from 'lucide-react';
import { ArrowRight } from 'lucide-react';
import FAQ from '../faq/FAQ';

const services = [
  {
    icon: Code,
    title: 'Custom Software Development',
    description: 'Tailored solutions designed to meet your unique business needs',
    summary: 'From concept to deployment, we build scalable, maintainable software that drives your business forward.'
  },
  {
    icon: Brain,
    title: 'AI & Machine Learning',
    description: 'Intelligent solutions that learn and adapt',
    summary: 'Leverage the power of AI to automate processes, gain insights, and make data-driven decisions.'
  },
  {
    icon: Smartphone,
    title: 'Web & Mobile Development',
    description: 'Responsive and native applications for all platforms',
    summary: 'Create engaging user experiences across web and mobile platforms with modern technologies.'
  },
  {
    icon: Cloud,
    title: 'Cloud & DevOps',
    description: 'Scalable infrastructure and automated workflows',
    summary: 'Optimize your operations with cloud solutions and streamlined development processes.'
  },
  {
    icon: MessageSquare,
    title: 'IT Consulting',
    description: 'Strategic technology guidance for your business',
    summary: 'Expert advice on technology adoption, digital transformation, and IT strategy.'
  },
  {
    icon: Shield,
    title: 'Cybersecurity',
    description: 'Protect your digital assets and data',
    summary: 'Comprehensive security solutions to safeguard your business from threats.'
  }
];

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

const Services = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="px-4 md:px-8 lg:px-16 xl:px-40 2xl:px-72">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Solutions We Deliver
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We IT-enable all kinds of B2B, B2C interactions and internal operations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <div key={index} className="group bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-blue-50 rounded-lg group-hover:bg-[#2cd16c]/10 transition-colors duration-300">
                  <service.icon className="w-8 h-8 text-blue-600 group-hover:text-[#2cd16c] transition-colors duration-300" />
                </div>
                <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-[#2cd16c] group-hover:translate-x-1 transition-all duration-300" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="group bg-[#2cd16c] hover:bg-[#25b05c] text-black px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 flex items-center mx-auto">
            View All Services
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};



export default Services; 