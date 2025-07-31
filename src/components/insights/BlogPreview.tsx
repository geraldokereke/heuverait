'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowRight, Clock } from 'lucide-react';

const blogPosts = [
  {
    title: 'The Future of AI in Business',
    excerpt: 'Exploring how artificial intelligence is transforming modern business operations and decision-making processes.',
    image: '/blog-1.jpg',
    readTime: '5 min read',
    category: 'Artificial Intelligence'
  },
  {
    title: 'Cloud Migration Best Practices',
    excerpt: 'A comprehensive guide to successfully migrating your infrastructure to the cloud while minimizing risks.',
    image: '/blog-2.jpg',
    readTime: '8 min read',
    category: 'Cloud Computing'
  },
  {
    title: 'Cybersecurity Trends 2024',
    excerpt: 'Stay ahead of the curve with the latest cybersecurity trends and threats to watch out for in 2024.',
    image: '/blog-3.jpg',
    readTime: '6 min read',
    category: 'Security'
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

const BlogPreview = () => {
  const insights = [
    {
      category: "AI",
      title: "A Complete Guide to Engineering Artificial Intelligence Software",
      description: "AI revolutionizes the way people live and work. Explore the steps, skills, costs, and best practices to create powerful AI software.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
    },
    {
      category: "BIG DATA",
      title: "End-to-End Big Data Applications: Use Cases, Architecture, Gains",
      description: "Learn how end-to-end big data applications enable smooth operation of data-rich systems and timely analytics results.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
    },
    {
      category: "SECURITY TESTING",
      title: "Security Testing Guide: Setup Plan with Time and Costs",
      description: "Considering a security checkup? Our guide will help you make optimal decisions for your project's success.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="px-4 md:px-8 lg:px-16 xl:px-40 2xl:px-72">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Featured Insights
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {insights.map((insight, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative h-48 rounded-2xl overflow-hidden mb-6">
                <Image
                  src={insight.image}
                  alt={insight.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="space-y-3">
                <span className="text-sm font-semibold text-orange-500 uppercase tracking-wide">
                  {insight.category}
                </span>
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#2cd16c] transition-colors duration-300">
                  {insight.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {insight.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="group bg-[#2cd16c] hover:bg-[#25b05c] text-black px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 flex items-center mx-auto">
            View All Insights
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};
export default BlogPreview; 