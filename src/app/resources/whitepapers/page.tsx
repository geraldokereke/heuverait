"use client";

import React, { useState } from 'react';
import { FileText, Download, Eye, Calendar, Clock, User, Search, Filter, ArrowRight } from 'lucide-react';

export default function WhitepapersPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Categories' },
    { id: 'ai', name: 'Artificial Intelligence' },
    { id: 'cloud', name: 'Cloud Computing' },
    { id: 'fintech', name: 'Financial Technology' },
    { id: 'manufacturing', name: 'Manufacturing 4.0' },
    { id: 'healthcare', name: 'Healthcare Tech' }
  ];

  const whitepapers = [
    {
      id: 1,
      title: "AI in Healthcare: Transforming Patient Outcomes Through Intelligent Systems",
      author: "Dr. Sarah Chen, Michael Rodriguez",
      date: "March 2024",
      readTime: "25 min",
      downloads: "2.3K",
      views: "15.8K",
      category: "healthcare",
      abstract: "This comprehensive study examines the implementation of artificial intelligence in healthcare systems, analyzing patient outcome improvements, cost reductions, and operational efficiency gains across 500+ medical institutions.",
      featured: true,
      slug: 'ai-in-healthcare'
    },
    {
      id: 2,
      title: "Cloud Migration Strategies: Enterprise-Grade Security and Scalability",
      author: "James Patterson, Lisa Wang",
      date: "February 2024",
      readTime: "32 min",
      downloads: "1.8K",
      views: "12.4K",
      category: "cloud",
      abstract: "A detailed framework for enterprise cloud migration, covering risk assessment, security protocols, cost optimization strategies, and performance benchmarking methodologies.",
      featured: true,
      slug: 'cloud-migration-strategies'
    },
    {
      id: 3,
      title: "The Future of Fintech: Blockchain Integration and Digital Transformation",
      author: "Robert Kim, Angela Torres",
      date: "January 2024",
      readTime: "28 min",
      downloads: "3.1K",
      views: "22.7K",
      category: "fintech",
      abstract: "An in-depth analysis of blockchain technology adoption in financial services, examining regulatory compliance, security implications, and market disruption patterns.",
      slug: 'future-of-fintech'
    },
    {
      id: 4,
      title: "Manufacturing 4.0: IoT Integration and Smart Factory Implementation",
      author: "David Miller, Sophie Anderson",
      date: "December 2023",
      readTime: "35 min",
      downloads: "1.5K",
      views: "9.8K",
      category: "manufacturing",
      abstract: "A comprehensive guide to implementing Industry 4.0 technologies, featuring case studies from leading manufacturers and ROI analysis frameworks.",
      slug: 'manufacturing-4-0'
    },
    {
      id: 5,
      title: "Neural Networks in Natural Language Processing: Advanced Applications",
      author: "Dr. Emily Zhang, Marcus Thompson",
      date: "November 2023",
      readTime: "42 min",
      downloads: "2.7K",
      views: "18.2K",
      category: "ai",
      abstract: "Exploring cutting-edge developments in NLP, including transformer architectures, multi-modal systems, and real-world deployment strategies.",
      slug: 'neural-networks-nlp'
    },
    {
      id: 6,
      title: "Cybersecurity in Cloud Environments: Zero Trust Architecture",
      author: "Jennifer Lee, Alex Rodriguez",
      date: "October 2023",
      readTime: "30 min",
      downloads: "2.1K",
      views: "14.6K",
      category: "cloud",
      abstract: "A technical deep-dive into implementing zero trust security models in cloud infrastructure, with practical implementation guidelines and security assessments.",
      slug: 'cybersecurity-cloud-environments'
    }
  ];

  const filteredWhitepapers = whitepapers.filter(paper => {
    const matchesSearch = paper.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         paper.author.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || paper.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPapers = whitepapers.filter(paper => paper.featured);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-black text-white py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="flex items-center mb-6">
              <FileText size={48} className="mr-4" />
              <span className="text-sm font-medium tracking-wider uppercase">Research & Insights</span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Whitepapers &<br />
              Technical Research
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-2xl">
              In-depth analysis, research findings, and technical insights from industry experts. 
              Access peer-reviewed publications and comprehensive studies on emerging technologies.
            </p>
            <div className="flex items-center space-x-8 text-sm">
              <div className="flex items-center">
                <Download size={16} className="mr-2" />
                <span>50+ Publications</span>
              </div>
              <div className="flex items-center">
                <Eye size={16} className="mr-2" />
                <span>500K+ Downloads</span>
              </div>
              <div className="flex items-center">
                <User size={16} className="mr-2" />
                <span>Expert Authors</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 items-center">
            <div className="flex-1 relative">
              <Search size={20} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search whitepapers by title, author, or keyword..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent text-lg"
              />
            </div>
            <div className="flex items-center space-x-4">
              <Filter size={20} className="text-gray-600" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent text-lg bg-white"
              >
                {categories.map(category => (
                  <option key={category.id} value={category.id}>{category.name}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Papers Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-black mb-4">Featured Research</h2>
            <p className="text-xl text-gray-600">Our most impactful and widely-cited publications</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {featuredPapers.map((paper) => (
              <article key={paper.id} className="bg-white border-2 border-gray-200 rounded-xl p-8 hover:border-black transition-all duration-300 hover:shadow-xl">
                <div className="flex items-start justify-between mb-4">
                  <span className="bg-black text-white text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide">
                    Featured
                  </span>
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <span className="flex items-center">
                      <Download size={14} className="mr-1" />
                      {paper.downloads}
                    </span>
                    <span className="flex items-center">
                      <Eye size={14} className="mr-1" />
                      {paper.views}
                    </span>
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-black mb-3 leading-tight hover:underline cursor-pointer">
                  <a href={`/resources/whitepapers/${paper.slug}`} className="hover:underline text-black">
                    {paper.title}
                  </a>
                </h3>
                
                <div className="flex items-center space-x-4 text-sm text-gray-600 mb-4">
                  <span className="flex items-center">
                    <User size={14} className="mr-1" />
                    {paper.author}
                  </span>
                  <span className="flex items-center">
                    <Calendar size={14} className="mr-1" />
                    {paper.date}
                  </span>
                  <span className="flex items-center">
                    <Clock size={14} className="mr-1" />
                    {paper.readTime}
                  </span>
                </div>
                
                <p className="text-gray-700 mb-6 leading-relaxed">
                  {paper.abstract}
                </p>
                
                <div className="flex items-center justify-between">
                  <button className="bg-black text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors flex items-center">
                    <Download size={16} className="mr-2" />
                    Download PDF
                  </button>
                  <a href={`/resources/whitepapers/${paper.slug}`} className="flex items-center hover:underline text-black">
                    Read Preview
                    <ArrowRight size={16} className="ml-2" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* All Papers Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-black mb-4">All Publications</h2>
            <p className="text-xl text-gray-600">
              {filteredWhitepapers.length} {filteredWhitepapers.length === 1 ? 'publication' : 'publications'} 
              {selectedCategory !== 'all' && ` in ${categories.find(c => c.id === selectedCategory)?.name}`}
            </p>
          </div>
          
          <div className="grid gap-6">
            {filteredWhitepapers.map((paper) => (
              <article key={paper.id} className="bg-white border border-gray-200 rounded-xl p-6 hover:border-black transition-all duration-300 hover:shadow-lg">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <span className="bg-gray-100 text-black text-xs font-semibold px-2 py-1 rounded uppercase tracking-wide">
                        {categories.find(c => c.id === paper.category)?.name}
                      </span>
                      {paper.featured && (
                        <span className="bg-black text-white text-xs font-semibold px-2 py-1 rounded uppercase tracking-wide">
                          Featured
                        </span>
                      )}
                    </div>
                    
                    <h3 className="text-xl font-bold text-black mb-2 hover:underline cursor-pointer">
                      <a href={`/resources/whitepapers/${paper.slug}`} className="hover:underline text-black">
                        {paper.title}
                      </a>
                    </h3>
                    
                    <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
                      <span className="flex items-center">
                        <User size={14} className="mr-1" />
                        {paper.author}
                      </span>
                      <span className="flex items-center">
                        <Calendar size={14} className="mr-1" />
                        {paper.date}
                      </span>
                      <span className="flex items-center">
                        <Clock size={14} className="mr-1" />
                        {paper.readTime}
                      </span>
                    </div>
                    
                    <p className="text-gray-700 mb-4 leading-relaxed">
                      {paper.abstract}
                    </p>
                  </div>
                  
                  <div className="lg:ml-8 flex flex-col lg:items-end space-y-3">
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <span className="flex items-center">
                        <Download size={14} className="mr-1" />
                        {paper.downloads}
                      </span>
                      <span className="flex items-center">
                        <Eye size={14} className="mr-1" />
                        {paper.views}
                      </span>
                    </div>
                    
                    <div className="flex space-x-3">
                      <button className="bg-black text-white px-4 py-2 rounded-lg font-medium hover:bg-gray-800 transition-colors flex items-center text-sm">
                        <Download size={14} className="mr-2" />
                        Download
                      </button>
                      <a href={`/resources/whitepapers/${paper.slug}`} className="flex items-center hover:underline text-black">
                        Read Preview
                        <ArrowRight size={14} className="ml-2" />
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
          
          {filteredWhitepapers.length === 0 && (
            <div className="text-center py-12">
              <FileText size={48} className="mx-auto text-gray-400 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No publications found</h3>
              <p className="text-gray-600">Try adjusting your search criteria or browse all categories.</p>
            </div>
          )}
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-black text-white py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Stay Updated</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Get notified when new research is published. Join our community of industry professionals and researchers.
          </p>
          <div className="flex flex-col sm:flex-row max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 rounded-l-lg sm:rounded-r-none rounded-r-lg border-0 focus:outline-none focus:ring-2 focus:ring-white text-black"
            />
            <button className="bg-white text-black px-6 py-3 rounded-r-lg sm:rounded-l-none rounded-l-lg font-medium hover:bg-gray-200 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}