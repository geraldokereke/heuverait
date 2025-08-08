'use client';

import React, { useState } from 'react';
import { Book, Search, Clock, User, ChevronRight, Download, ExternalLink, Filter } from 'lucide-react';
import { resourceGuides as guides } from '@/components/data/Reesources'; // Import guides data

export default function GuidesResources() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const filteredGuides = guides.filter(guide => {
    // Since there's no category property, we'll filter by difficulty or tags
    const matchesCategory = selectedCategory === 'all' || 
      guide.difficulty.toLowerCase() === selectedCategory.toLowerCase() ||
      guide.tags.some(tag => tag.toLowerCase() === selectedCategory.toLowerCase());
    const matchesSearch = guide.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      guide.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      guide.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  // Since there's no featured property, let's show the first 3 guides as featured
  const featuredGuides = guides.slice(0, 3);

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-gradient-to-r from-green-400 to-emerald-500 text-white shadow-lg';
      case 'Intermediate': return 'bg-gradient-to-r from-yellow-400 to-orange-500 text-white shadow-lg';
      case 'Advanced': return 'bg-gradient-to-r from-red-400 to-pink-500 text-white shadow-lg';
      default: return 'bg-gradient-to-r from-gray-400 to-gray-500 text-white shadow-lg';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50">
      {/* HERO SECTION */}
      <div className="relative bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 via-transparent to-yellow-300/20"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-20 h-20 bg-yellow-300 rounded-full opacity-60 animate-pulse"></div>
          <div className="absolute top-32 right-20 w-12 h-12 bg-cyan-300 rounded-full opacity-40 animate-bounce"></div>
          <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-pink-300 rounded-full opacity-50"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-gradient-to-br from-yellow-300 to-orange-400 rounded-full shadow-lg animate-pulse">
                <Book size={48} className="text-white drop-shadow-md" />
              </div>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-200 to-pink-200 bg-clip-text text-transparent drop-shadow-lg">
              Guides & Documentation
            </h1>
            <p className="text-xl lg:text-2xl text-yellow-100 max-w-3xl mx-auto mb-8 drop-shadow-sm">
              Comprehensive guides, tutorials, and resources to help you master our platform
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-yellow-500 hover:to-orange-600 transition-all shadow-lg flex items-center gap-2 transform hover:scale-105">
                <Download size={20} />
                Download PDF Guide
              </button>
              <button className="border-2 border-yellow-300 text-yellow-100 bg-white/10 backdrop-blur-sm px-8 py-3 rounded-lg font-semibold hover:bg-yellow-300 hover:text-purple-900 transition-colors flex items-center gap-2 shadow-lg">
                <ExternalLink size={20} />
                API Documentation
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* FEATURED GUIDES */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-8">Featured Guides</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredGuides.map((guide) => (
              <div key={guide.slug} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group border-2 border-transparent hover:border-gradient-to-r hover:from-purple-400 hover:to-pink-400">
                <div className="relative">
                  <img src='https://images.unsplash.com/photo-1481487196290-c152efe083f5?auto=format&fit=crop&w=800&q=80' alt={guide.title} className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300" />
                  <div className="absolute top-4 left-4">
                    <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg animate-pulse">
                      ⭐ Featured
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6 bg-gradient-to-br from-white to-purple-50/30">
                  <div className="flex items-center gap-2 mb-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium shadow-md ${getDifficultyColor(guide.difficulty)}`}>
                      {guide.difficulty}
                    </span>
                    <div className="flex items-center text-purple-600 text-sm font-medium">
                      <Clock size={16} className="mr-1" />
                      {guide.readTime}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                    {guide.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{guide.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {guide.tags.map((tag, index) => (
                      <span key={index} className="bg-gradient-to-r from-cyan-100 to-blue-100 text-cyan-800 px-2 py-1 rounded-full text-sm font-medium shadow-sm">
                        #{tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href={`/resources/guides/${guide.slug}`}
                    className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all shadow-md flex items-center gap-2 group-hover:gap-3 transform hover:scale-105 inline-flex"
                  >
                    Read Guide
                    <ChevronRight size={16} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SEARCH AND FILTER */}
        <section className="mb-12">
          <div className="bg-gradient-to-r from-white to-purple-50/50 rounded-xl shadow-lg border border-purple-100 p-6">
            <div className="flex flex-col lg:flex-row gap-6">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-purple-400" size={20} />
                <input
                  type="text"
                  placeholder="Search guides..."
                  className="w-full pl-10 pr-4 py-3 border-2 border-purple-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-400 transition-all bg-white/80 backdrop-blur-sm"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div className="flex items-center gap-2">
                <Filter size={20} className="text-purple-500" />
                <select
                  className="border-2 border-purple-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-purple-500 focus:border-purple-400 bg-gradient-to-r from-white to-purple-50 font-medium text-purple-900 transition-all"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                >
                  <option value="all">All Guides</option>
                  <option value="beginner">Beginner</option>
                  <option value="intermediate">Intermediate</option>
                  <option value="advanced">Advanced</option>
                  {/* Add more options based on common tags */}
                  {Array.from(new Set(guides.flatMap(guide => guide.tags))).map(tag => (
                    <option key={tag} value={tag.toLowerCase()}>{tag}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </section>

        {/* ALL GUIDES */}
        <section>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              All Guides ({filteredGuides.length})
            </h2>
          </div>

          {filteredGuides.length === 0 ? (
            <div className="text-center py-12 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl border-2 border-purple-100">
              <div className="text-purple-400 mb-4">
                <Search size={48} className="mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-purple-600 mb-2">No guides found</h3>
              <p className="text-purple-500">Try adjusting your search or filter criteria</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredGuides.map((guide) => (
                <div key={guide.slug} className="bg-gradient-to-br from-white to-purple-50/30 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 group border border-purple-100 hover:border-purple-300">
                  <div className="relative overflow-hidden rounded-t-xl">
                    <img src='https://images.unsplash.com/photo-1481487196290-c152efe083f5?auto=format&fit=crop&w=800&q=80' alt={guide.title} className="w-full h-40 object-cover group-hover:scale-110 transition-transform duration-300" />
                    <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className={`px-3 py-1 rounded-full text-xs font-bold ${getDifficultyColor(guide.difficulty)}`}>
                        {guide.difficulty}
                      </span>
                      <div className="flex items-center text-purple-600 text-sm font-medium">
                        <Clock size={14} className="mr-1" />
                        {guide.readTime}
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                      {guide.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">{guide.description}</p>
                    <div className="flex flex-wrap gap-1 mb-4">
                      {guide.tags.slice(0, 2).map((tag, index) => (
                        <span key={index} className="bg-gradient-to-r from-cyan-100 to-blue-100 text-cyan-700 px-2 py-1 rounded-full text-xs font-medium shadow-sm">
                          #{tag}
                        </span>
                      ))}
                      {guide.tags.length > 2 && (
                        <span className="text-purple-400 text-xs font-medium">+{guide.tags.length - 2} more</span>
                      )}
                    </div>
                    <a
                      href={`/resources/guides/${guide.slug}`}
                      className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all shadow-md flex items-center gap-2 text-sm group-hover:gap-3 transform hover:scale-105 inline-flex"
                    >
                      Read Guide
                      <ChevronRight size={14} />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* HELP SECTION */}
        <section className="mt-20 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 lg:p-12">
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-blue-100 rounded-full">
                <User size={32} className="text-blue-600" />
              </div>
            </div>
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              Need Additional Help?
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Can't find what you're looking for? Our support team is here to help you succeed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Contact Support
              </button>
              <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors">
                Join Community
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}