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
  return (
    <section className="py-20 bg-white">
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
            Latest Insights
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            custom={0.4}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Stay informed with our latest articles and industry insights
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.title}
              variants={fadeInUp}
              custom={0.2 + index * 0.1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="relative h-48">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-[#2cd16c] text-white text-sm rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center text-gray-500 text-sm mb-4">
                  <Clock className="size-4 mr-2" />
                  {post.readTime}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {post.excerpt}
                </p>
                <button className="text-[#2cd16c] font-semibold flex items-center hover:text-[#25b05c] transition-colors duration-300">
                  Read Article
                  <ArrowRight className="size-4 ml-2" />
                </button>
              </div>
            </motion.article>
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
            Visit Blog
            <ArrowRight className="size-4 ml-2 transition-transform group-hover:translate-x-1" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogPreview; 