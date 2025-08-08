'use client';
import React, { useState } from 'react';
import { ArrowRight, Clock, Calendar, User, Eye, ChevronRight } from 'lucide-react';
import SectionContainer from '../ui/sectionContainer';
import SectionTitle from '../ui/SectionTitle';
import Image from 'next/image';

interface BlogPost {
  category: string;
  title: string;
  description: string;
  image: string;
  readTime?: string;
  date?: string;
  author?: string;
  views?: string;
}

const BlogPreview = () => {
  const [hoveredPost, setHoveredPost] = useState<number | null>(null);

  const insights: BlogPost[] = [
    {
      category: "AI & MACHINE LEARNING",
      title: "A Complete Guide to Engineering Artificial Intelligence Software",
      description: "AI revolutionizes the way people live and work. Explore the comprehensive steps, essential skills, implementation costs, and industry best practices to create powerful AI software solutions.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      readTime: "8 min read",
      date: "Dec 15, 2024",
      author: "Sarah Chen",
      views: "2.3k"
    },
    {
      category: "BIG DATA & ANALYTICS",
      title: "End-to-End Big Data Applications: Use Cases, Architecture, and Business Gains",
      description: "Discover how end-to-end big data applications enable seamless operation of data-rich systems, deliver timely analytics results, and drive measurable business outcomes.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      readTime: "12 min read",
      date: "Dec 12, 2024",
      author: "Michael Rodriguez",
      views: "1.8k"
    },
    {
      category: "CYBERSECURITY",
      title: "Security Testing Guide: Strategic Setup Plan with Timeline and Cost Analysis",
      description: "Planning a comprehensive security assessment? Our detailed guide provides optimal decision-making frameworks, cost breakdowns, and implementation strategies for your project's success.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      readTime: "10 min read",
      date: "Dec 10, 2024",
      author: "David Kim",
      views: "3.1k"
    }
  ];

  const featuredPost: BlogPost = {
    category: "DIGITAL TRANSFORMATION",
    title: "The Complete Roadmap to Enterprise Digital Transformation in 2025",
    description: "Navigate the complexities of digital transformation with our comprehensive guide. Learn proven strategies, avoid common pitfalls, and accelerate your organization's digital evolution with actionable insights from industry leaders.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2426&q=80",
    readTime: "15 min read",
    date: "Dec 18, 2024",
    author: "Alexandra Bennett",
    views: "4.7k"
  };

  const categoryColors: { [key: string]: string } = {
    "AI & MACHINE LEARNING": "#8b5cf6",
    "BIG DATA & ANALYTICS": "#3b82f6",
    "CYBERSECURITY": "#ef4444",
    "DIGITAL TRANSFORMATION": "#41a7ad"
  };

  const BlogCard = ({ post, index, isFeatured = false }: { post: BlogPost; index: number; isFeatured?: boolean }) => (
    <article
      className={`group cursor-pointer transition-all duration-500 ${isFeatured ? 'md:col-span-2 lg:col-span-3' : ''
        } ${hoveredPost === index ? 'scale-[1.02]' : ''}`}
      onMouseEnter={() => setHoveredPost(index)}
      onMouseLeave={() => setHoveredPost(null)}
    >
      <div className={`bg-white rounded-2xl shadow-sm hover:shadow-lg border border-gray-100 overflow-hidden transition-all duration-500 ${isFeatured ? 'lg:flex lg:items-center' : ''
        }`}>
        {/* Image Section */}
        <div className={`relative overflow-hidden ${isFeatured ? 'lg:w-1/2 h-64 lg:h-68 xl:h-80 2xl:h-96' : 'h-40 2xl:h-60'
          }`}>
          <Image
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            width={600}
            height={1024}
          />

          {/* Category Badge */}
          <div className="absolute top-4 left-4">
            <span
              className="px-3 py-1 text-[6px] 2xl:text-xs font-bold text-white rounded-full uppercase tracking-wider shadow-lg"
              style={{ backgroundColor: categoryColors[post.category] || '#6b7280' }}
            >
              {post.category}
            </span>
          </div>

          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
            <div className="transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
              <div className="bg-white rounded-full p-3 shadow-lg">
                <ArrowRight className="w-6 h-6 text-black" />
              </div>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className={`p-3 2xl:p-6 ${isFeatured ? 'lg:w-1/2 lg:p-8' : ''}`}>
          {/* Meta Information */}
          <div className="flex items-center gap-4 text-[10px] xl:text-xs 2xl:text-sm text-black/60 mb-4">
            {post.date && (
              <div className="flex items-center gap-1">
                <Calendar className="size-3 2xl:size-4" />
                <span>{post.date}</span>
              </div>
            )}
            {post.readTime && (
              <div className="flex items-center gap-1">
                <Clock className="size-3 2xl:size-4" />
                <span>{post.readTime}</span>
              </div>
            )}
            {post.views && (
              <div className="flex items-center gap-1">
                <Eye className="size-3 2xl:size-4" />
                <span>{post.views}</span>
              </div>
            )}
          </div>

          {/* Title */}
          <h3 className={`font-bold text-black mb-2 xl:mb-4 group-hover:text-black/80 transition-colors duration-300 leading-tight ${isFeatured ? 'text-xl lg:text-base xl:text-xl 2xl:text-3xl' : 'text-sm 2xl:text-xl'
            }`}>
            {post.title}
          </h3>

          {/* Description */}
          <p className={`text-black/70 leading-relaxed mb-4 2xl:mb-6 ${isFeatured ? 'text-xs xl:text-sm 2xl:text-lg' : 'text-[10px] 2xl:text-base'
            }`}>
            {post.description}
          </p>

          {/* Author & Read More */}
          <div className="flex items-center justify-between">
            {post.author && (
              <div className="flex items-center gap-2">
                <div className="size-6 2xl:size-8 bg-[#41a7ad] rounded-full flex items-center justify-center">
                  <User className="size-3 2xl:size-4 text-white" />
                </div>
                <span className="text-xs 2xl:text-sm font-medium text-black/80">{post.author}</span>
              </div>
            )}

            <div className="flex items-center text-xs 2xl:text-sm font-semibold text-black/70 group-hover:text-black transition-colors">
              <span>Read More</span>
              <ChevronRight className="ml-1 size-3 2xl:size-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>
      </div>
    </article>
  );

  return (
    <section className="py-24 bg-gray-50">
      <SectionContainer>
        {/* Header */}
        <SectionTitle
          section='Latest Insights'
          title='Featured Insights & Expertise'
          subtitle='Stay ahead with our latest insights on technology trends, best practices, and industry innovations.'
        />

        {/* Featured Post */}
        <div className="mb-0 md:mb-16">
          <BlogCard post={featuredPost} index={-1} isFeatured={true} />
        </div>
        <div className='w-full'>
          <h1 className='font-montserrat text-xl font-semibold mb-4 block md:hidden '>More Posts</h1>
          {/* Regular Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {insights.map((insight, index) => (
              <BlogCard key={index} post={insight} index={index} />
            ))}
          </div>
        </div>


        {/* CTA Section */}
        <div className="text-center mt-0 2xl:mt-20 bg-gradient-to-r from-gray-900 to-black rounded-2xl p-12 text-white overflow-hidden">
          <h3 className="text-2xl md:text-3xl lg:text-base xl:text-2xl 2xl:text-4xl text-white font-bold mb-1 xl:mb-4">
            Never Miss an Update
          </h3>
          <p className="text-gray-300 mb-5 xl:mb-8 max-w-2xl mx-auto text-[10px] xl:text-xs 2xl:text-lg">
            Subscribe to our newsletter and get the latest insights, trends, and best practices delivered to your inbox.
          </p>
          <div className="flex flex-col md:flex-row gap-2 2xl:gap-4 justify-center max-w-xs 2xl:max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 2xl:px-6 py-1.5 2xl:py-2.5 text-xs 2xl:text-sm rounded-full text-white focus:outline-none bg-white/5"
            />
            <button className="bg-white text-black mx-auto flex items-center px-3 md:px-4 lg:px-2 xl:px-3 2xl:px-6 py-2 md:py-1.5 lg:py-1 xl:py-1.5 2xl:py-2.5 text-[8px] md:text-xs lg:text-[6px] xl:text-[8px] 2xl:text-sm font-semibold rounded-full transition-all duration-300 whitespace-nowrap uppercase">
              Subscribe
            </button>
          </div>
        </div>

        {/* View All Button */}
        <div className="text-center mt-0 2xl:mt-12">
          <button className="bg-black text-white mx-auto flex items-center px-3 md:px-4 lg:px-2 xl:px-3 2xl:px-6 py-2 md:py-1.5 lg:py-1 xl:py-1.5 2xl:py-2.5 text-[8px] md:text-xs lg:text-[6px] xl:text-[8px] 2xl:text-sm font-semibold rounded-full transition-all duration-300 whitespace-nowrap uppercase">
            View All Insights
          </button>
        </div>
      </SectionContainer>
    </section>
  );
};

export default BlogPreview;