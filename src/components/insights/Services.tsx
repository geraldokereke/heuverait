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
      <div className="container mx-auto px-4 md:px-8 lg:px-16 xl:px-40">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <motion.h2
            variants={fadeInUp}
            custom={0.2}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            Our Services
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            custom={0.4}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Comprehensive technology solutions to drive your business forward
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={fadeInUp}
              custom={0.2 + index * 0.1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="group bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-[#2cd16c]/10 rounded-lg">
                  <service.icon className="w-6 h-6 text-[#2cd16c]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {service.description}
                  </p>
                  <div className="h-0 group-hover:h-auto overflow-hidden transition-all duration-300">
                    <p className="text-gray-500 text-sm">
                      {service.summary}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          variants={fadeInUp}
          custom={0.8}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <button className="group items-center inline-flex px-6 py-3 bg-[#2cd16c] text-sm rounded-full text-black font-semibold transition-all duration-300 hover:bg-[#25b05c]">
            View All Services
            <ArrowRight className="size-4 ml-2 transition-transform group-hover:translate-x-1" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services; 