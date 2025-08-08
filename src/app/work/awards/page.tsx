'use client';

import React from 'react';
import { Trophy, Award, Star, Users, Calendar, ExternalLink } from 'lucide-react';
import SectionContainer from '@/components/ui/sectionContainer';
import SectionTitle from '@/components/ui/SectionTitle';
import Hero from '@/components/hero';

export default function AwardsWork() {
  return (
    <>
      {/* HERO SECTION - Prestigious, Uplifting, Distinct */}

      <Hero
        imgLink='https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        section='awards'
        title='Awards & Recognition'
        height='h-[50vh]'
        description='Celebrating our achievements and industry recognition for excellence in digital solutions.'
      />


      {/* SECTION 1: Recent Major Awards */}
      <SectionContainer className="py-10 md:py-16 border-b">
        <SectionTitle
          section="Latest Honors"
          title="Recent Major Awards"
          subtitle="Our most prestigious recognitions from the past year."
          className="mb-12 text-center"
        />
        <div className="grid md:grid-cols-3 gap-8">
          {/* Award 1 */}
          <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center hover:shadow-2xl transition-shadow duration-300">
            <img
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
              alt="Innovation in AI"
              className="w-20 h-20 object-cover rounded-full mb-4 shadow-md"
            />
            <Trophy size={40} className="text-[#41a7ad] mb-3" />
            <h3 className="text-xl font-semibold mb-2 text-center">AI Innovation of the Year 2024</h3>
            <span className="text-slate-800 mb-2 font-medium">Future Tech Awards</span>
            <p className="text-slate-700 text-center text-sm mb-4">Honored for developing an AI-powered customer service solution with 95% accuracy rate.</p>
            <div className="flex items-center text-black text-sm">
              <Calendar size={16} className="mr-2" />
              <span>February 2024</span>
            </div>
          </div>

          {/* Award 2 */}
          <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center hover:shadow-2xl transition-shadow duration-300">
            <img
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
              alt="Innovation in AI"
              className="w-20 h-20 object-cover rounded-full mb-4 shadow-md"
            />
            <Trophy size={40} className="text-[#41a7ad] mb-3" />
            <h3 className="text-xl font-semibold mb-2 text-center">AI Innovation of the Year 2024</h3>
            <span className="text-slate-800 mb-2 font-medium">Future Tech Awards</span>
            <p className="text-slate-700 text-center text-sm mb-4">Honored for developing an AI-powered customer service solution with 95% accuracy rate.</p>
            <div className="flex items-center text-black text-sm">
              <Calendar size={16} className="mr-2" />
              <span>February 2024</span>
            </div>
          </div>

          {/* Award 3 */}
          <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center hover:shadow-2xl transition-shadow duration-300">
            <img
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
              alt="Innovation in AI"
              className="w-20 h-20 object-cover rounded-full mb-4 shadow-md"
            />
            <Trophy size={40} className="text-[#41a7ad] mb-3" />
            <h3 className="text-xl font-semibold mb-2 text-center">AI Innovation of the Year 2024</h3>
            <span className="text-slate-800 mb-2 font-medium">Future Tech Awards</span>
            <p className="text-slate-700 text-center text-sm mb-4">Honored for developing an AI-powered customer service solution with 95% accuracy rate.</p>
            <div className="flex items-center text-black text-sm">
              <Calendar size={16} className="mr-2" />
              <span>February 2024</span>
            </div>
          </div>
        </div>
      </SectionContainer>

      {/* SECTION 2: Industry Recognition Timeline - 3D Concept */}
      <SectionContainer className="py-16 md:py-24 border-b relative overflow-hidden">

        <SectionTitle
          section="Our Journey"
          title="Recognition Timeline"
          subtitle="A decade of consistent excellence and industry leadership."
          className="mb-16 text-center relative z-10"
        />

        <div className="max-w-6xl mx-auto relative z-10">
          {/* 3D Timeline Container */}
          <div className="relative">
            {/* Central Timeline Line - 3D Effect */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-2 bg-gradient-to-b from-black to-[#41a7ad] rounded-full shadow-lg" style={{ height: '100%', top: '0' }}></div>
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-black to-[#41a7ad] rounded-full" style={{ height: '100%', top: '0', marginLeft: '0.5px' }}></div>

            <div className="space-y-16">
              {/* 2024 - Right Side */}
              <div className="flex items-center">
                <div className="w-1/2 pr-12">
                  {/* Empty space for right alignment */}
                </div>

                {/* Central Node - 3D */}
                <div className="flex-shrink-0 relative z-20">
                  <div className="w-24 h-24 bg-black/50 rounded-full flex items-center justify-center shadow-2xl border-4 border-white transform hover:scale-110 transition-all duration-300 hover:rotate-3">
                    <div className="w-20 h-20 bg-black rounded-full flex items-center justify-center shadow-inner">
                      <span className="font-black text-white text-lg drop-shadow-md">2024</span>
                    </div>
                  </div>
                  {/* Floating particles */}
                  <div className="absolute -top-2 -right-2 w-3 h-3 bg-yellow-400 rounded-full animate-bounce delay-100"></div>
                  <div className="absolute -bottom-3 -left-3 w-2 h-2 bg-amber-400 rounded-full animate-bounce delay-300"></div>
                </div>

                <div className="w-1/2 pl-12">
                  <div className="bg-white rounded-2xl p-8 shadow-2xl transform hover:-translate-y-2 hover:shadow-3xl transition-all duration-500 border border-yellow-100 relative overflow-hidden group">
                    {/* Card background gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-yellow-50 to-transparent opacity-50 group-hover:opacity-80 transition-opacity duration-300"></div>

                    {/* 3D Trophy Icon */}
                    <div className="absolute top-4 right-4 transform rotate-12 group-hover:rotate-0 group-hover:scale-110 transition-all duration-300">
                      <Trophy className="w-8 h-8 text-[#41a7ad] drop-shadow-md" />
                    </div>

                    <div className="relative z-10">
                      <h4 className="font-bold text-2xl mb-4 text-black drop-shadow-sm">Outstanding Year of Innovation</h4>
                      <div className="space-y-3">
                        <div className="flex items-center group-hover:translate-x-2 transition-transform duration-300">
                          <div className="w-3 h-3 bg-[#41a7ad] rounded-full mr-3 shadow-md"></div>
                          <span className="text-slate-800 font-medium">Best Digital Transformation - Tech Leaders Summit</span>
                        </div>
                        <div className="flex items-center group-hover:translate-x-2 transition-transform duration-300 delay-75">
                          <div className="w-3 h-3 bg-[#41a7ad] rounded-full mr-3 shadow-md"></div>
                          <span className="text-slate-800 font-medium">Top UX Design Excellence - Global Web Awards</span>
                        </div>
                        <div className="flex items-center group-hover:translate-x-2 transition-transform duration-300 delay-150">
                          <div className="w-3 h-3 bg-[#41a7ad] rounded-full mr-3 shadow-md"></div>
                          <span className="text-slate-800 font-medium">AI Innovation of the Year - Future Tech Awards</span>
                        </div>
                        <div className="flex items-center group-hover:translate-x-2 transition-transform duration-300 delay-225">
                          <div className="w-3 h-3 bg-[#41a7ad] rounded-full mr-3 shadow-md"></div>
                          <span className="text-slate-800 font-medium">Client Satisfaction Award - Business Excellence Forum</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 2023 - Left Side */}
              <div className="flex items-center">
                <div className="w-1/2 pr-12">
                  <div className="bg-white rounded-2xl p-8 shadow-2xl transform hover:-translate-y-2 hover:shadow-3xl transition-all duration-500 border border-yellow-100 relative overflow-hidden group">
                    {/* Card background gradient */}
                    <div className="absolute inset-0 bg-gradient-to-bl from-amber-50 to-transparent opacity-50 group-hover:opacity-80 transition-opacity duration-300"></div>

                    {/* 3D Award Icon */}
                    <div className="absolute top-4 left-4 transform -rotate-12 group-hover:rotate-0 group-hover:scale-110 transition-all duration-300">
                      <Award className="w-8 h-8 text-amber-500 drop-shadow-md" />
                    </div>

                    <div className="relative z-10">
                      <h4 className="font-bold text-2xl mb-4 text-amber-900 drop-shadow-sm">Growth & Excellence</h4>
                      <div className="space-y-3">
                        <div className="flex items-center group-hover:translate-x-2 transition-transform duration-300">
                          <div className="w-3 h-3 bg-gradient-to-r from-amber-400 to-amber-500 rounded-full mr-3 shadow-md"></div>
                          <span className="text-amber-800 font-medium">Rising Star Company - Tech Innovation Awards</span>
                        </div>
                        <div className="flex items-center group-hover:translate-x-2 transition-transform duration-300 delay-75">
                          <div className="w-3 h-3 bg-gradient-to-r from-amber-400 to-amber-500 rounded-full mr-3 shadow-md"></div>
                          <span className="text-amber-800 font-medium">Best Mobile App Development - Digital Excellence</span>
                        </div>
                        <div className="flex items-center group-hover:translate-x-2 transition-transform duration-300 delay-150">
                          <div className="w-3 h-3 bg-gradient-to-r from-amber-400 to-amber-500 rounded-full mr-3 shadow-md"></div>
                          <span className="text-amber-800 font-medium">Outstanding Customer Service - Service Quality Awards</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Central Node - 3D */}
                <div className="flex-shrink-0 relative z-20">
                  <div className="w-24 h-24 bg-gradient-to-br from-amber-300 to-amber-500 rounded-full flex items-center justify-center shadow-2xl border-4 border-white transform hover:scale-110 transition-all duration-300 hover:-rotate-3">
                    <div className="w-20 h-20 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center shadow-inner">
                      <span className="font-black text-white text-lg drop-shadow-md">2023</span>
                    </div>
                  </div>
                  {/* Floating particles */}
                  <div className="absolute -top-3 -left-2 w-2 h-2 bg-amber-400 rounded-full animate-bounce delay-200"></div>
                  <div className="absolute -bottom-2 -right-3 w-3 h-3 bg-yellow-400 rounded-full animate-bounce delay-400"></div>
                </div>

                <div className="w-1/2 pl-12">
                  {/* Empty space for left alignment */}
                </div>
              </div>

              {/* 2022 - Right Side */}
              <div className="flex items-center">
                <div className="w-1/2 pr-12">
                  {/* Empty space for right alignment */}
                </div>

                {/* Central Node - 3D */}
                <div className="flex-shrink-0 relative z-20">
                  <div className="w-24 h-24 bg-gradient-to-br from-orange-300 to-orange-500 rounded-full flex items-center justify-center shadow-2xl border-4 border-white transform hover:scale-110 transition-all duration-300 hover:rotate-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center shadow-inner">
                      <span className="font-black text-white text-lg drop-shadow-md">2022</span>
                    </div>
                  </div>
                  {/* Floating particles */}
                  <div className="absolute -top-1 -right-4 w-2 h-2 bg-orange-400 rounded-full animate-bounce delay-500"></div>
                  <div className="absolute -bottom-4 -left-1 w-3 h-3 bg-amber-400 rounded-full animate-bounce delay-100"></div>
                </div>

                <div className="w-1/2 pl-12">
                  <div className="bg-white rounded-2xl p-8 shadow-2xl transform hover:-translate-y-2 hover:shadow-3xl transition-all duration-500 border border-orange-100 relative overflow-hidden group">
                    {/* Card background gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-transparent opacity-50 group-hover:opacity-80 transition-opacity duration-300"></div>

                    {/* 3D Star Icon */}
                    <div className="absolute top-4 right-4 transform rotate-45 group-hover:rotate-0 group-hover:scale-110 transition-all duration-300">
                      <Star className="w-8 h-8 text-orange-500 drop-shadow-md fill-current" />
                    </div>

                    <div className="relative z-10">
                      <h4 className="font-bold text-2xl mb-4 text-orange-900 drop-shadow-sm">Foundation of Success</h4>
                      <div className="space-y-3">
                        <div className="flex items-center group-hover:translate-x-2 transition-transform duration-300">
                          <div className="w-3 h-3 bg-gradient-to-r from-orange-400 to-orange-500 rounded-full mr-3 shadow-md"></div>
                          <span className="text-orange-800 font-medium">Emerging Technology Leader - StartupTech Awards</span>
                        </div>
                        <div className="flex items-center group-hover:translate-x-2 transition-transform duration-300 delay-75">
                          <div className="w-3 h-3 bg-gradient-to-r from-orange-400 to-orange-500 rounded-full mr-3 shadow-md"></div>
                          <span className="text-orange-800 font-medium">Best New Business Solution - Innovation Hub</span>
                        </div>
                        <div className="flex items-center group-hover:translate-x-2 transition-transform duration-300 delay-150">
                          <div className="w-3 h-3 bg-gradient-to-r from-orange-400 to-orange-500 rounded-full mr-3 shadow-md"></div>
                          <span className="text-orange-800 font-medium">Quality Assurance Excellence - Tech Quality Forum</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionContainer>

      {/* SECTION 3: Client Testimonials & Success Stories */}
      <SectionContainer className="py-10 md:py-16 border-b">
        <SectionTitle
          section="Client Success"
          title="Testimonials & Success Stories"
          subtitle="Real results from our valued partners and clients."
          className="mb-12 text-center"
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Testimonial 1 */}
          <div className="rounded-xl shadow-lg p-8 flex flex-col hover:shadow-2xl transition-shadow duration-300">
            <div className="flex items-center mb-4">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
                alt="CEO testimonial"
                className="w-12 h-12 rounded-full object-cover mr-3"
              />
              <div>
                <h4 className="font-semibold text-black">John Mitchell</h4>
                <p className="text-sm text-slate-700">CEO, Fintech Startup</p>
              </div>
            </div>
            <p className="text-lg text-slate-800 mb-4 italic">"Their expertise and creativity won us industry awards and increased our customer retention by 45%."</p>
            <div className="flex text-yellow-500 mb-2">
              {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="rounded-xl shadow-lg p-8 flex flex-col hover:shadow-2xl transition-shadow duration-300">
            <div className="flex items-center mb-4">
              <img
                src="https://images.unsplash.com/photo-1494790108755-2616b332c717?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
                alt="Director testimonial"
                className="w-12 h-12 rounded-full object-cover mr-3"
              />
              <div>
                <h4 className="font-semibold text-black">Sarah Chen</h4>
                <p className="text-sm text-slate-700">Director, Manufacturing Group</p>
              </div>
            </div>
            <p className="text-lg text-slate-800 mb-4 italic">"Their solutions set a new standard for our industry. We reduced operational costs by 30%."</p>
            <div className="flex text-yellow-500 mb-2">
              {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className="rounded-xl shadow-lg p-8 flex flex-col hover:shadow-2xl transition-shadow duration-300">
            <div className="flex items-center mb-4">
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
                alt="CTO testimonial"
                className="w-12 h-12 rounded-full object-cover mr-3"
              />
              <div>
                <h4 className="font-semibold text-black">Michael Rodriguez</h4>
                <p className="text-sm text-slate-700">CTO, Healthcare Solutions</p>
              </div>
            </div>
            <p className="text-lg text-slate-800 mb-4 italic">"Outstanding technical excellence. Our app now serves 100K+ users daily with 99.9% uptime."</p>
            <div className="flex text-yellow-500 mb-2">
              {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
            </div>
          </div>
        </div>
      </SectionContainer>

      {/* SECTION 4: Certifications & Partnerships */}
      <SectionContainer className="py-10 md:py-16">
        <SectionTitle
          section="Credentials"
          title="Certifications & Partnerships"
          subtitle="Validated expertise through industry certifications and strategic partnerships."
          className="mb-12 text-center"
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Certification 1 */}
          <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow duration-300">
            <img
              src="https://images.unsplash.com/photo-1633409361618-c73427e4e206?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
              alt="AWS certification"
              className="w-16 h-16 mx-auto mb-4 rounded-lg shadow-sm"
            />
            <h4 className="font-semibold text-black mb-2">AWS Certified</h4>
            <p className="text-sm text-slate-800">Solutions Architect Professional</p>
          </div>

          {/* Certification 2 */}
          <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow duration-300">
            <img
              src="https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
              alt="Microsoft certification"
              className="w-16 h-16 mx-auto mb-4 rounded-lg shadow-sm"
            />
            <h4 className="font-semibold text-black mb-2">Microsoft Partner</h4>
            <p className="text-sm text-slate-800">Gold Cloud Platform</p>
          </div>

          {/* Certification 3 */}
          <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow duration-300">
            <img
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
              alt="Google Cloud certification"
              className="w-16 h-16 mx-auto mb-4 rounded-lg shadow-sm"
            />
            <h4 className="font-semibold text-black mb-2">Google Cloud</h4>
            <p className="text-sm text-slate-800">Premier Partner</p>
          </div>

          {/* Certification 4 */}
          <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow duration-300">
            <img
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
              alt="ISO certification"
              className="w-16 h-16 mx-auto mb-4 rounded-lg shadow-sm"
            />
            <h4 className="font-semibold text-black mb-2">ISO 27001</h4>
            <p className="text-sm text-slate-800">Security Certified</p>
          </div>
        </div>
      </SectionContainer>

      {/* SECTION 5: Featured Media Coverage */}
      <SectionContainer className="py-10 md:py-16 border-b">
        <SectionTitle
          section="In The News"
          title="Media Coverage & Features"
          subtitle="Our achievements recognized by leading industry publications."
          className="mb-12 text-center"
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Media 1 */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
            <img
              src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
              alt="Tech magazine feature"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h4 className="font-semibold text-lg text-black mb-2">TechCrunch Feature</h4>
              <p className="ttext-slate-800 mb-4">"Rising Stars in Digital Transformation: How This Company is Revolutionizing Enterprise Solutions"</p>
              <div className="flex items-center text-black text-sm">
                <ExternalLink size={16} className="mr-2" />
                <span>Read Full Article</span>
              </div>
            </div>
          </div>

          {/* Media 2 */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
            <img
              src="https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
              alt="Business journal"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h4 className="font-semibold text-lg text-black mb-2">Forbes Mention</h4>
              <p className="text-slate-800 mb-4">"The Next Generation of Digital Agencies: Innovation Meets Excellence"</p>
              <div className="flex items-center text-black text-sm">
                <ExternalLink size={16} className="mr-2" />
                <span>View Coverage</span>
              </div>
            </div>
          </div>

          {/* Media 3 */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
            <img
              src="https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
              alt="Industry report"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h4 className="font-semibold text-lg text-black mb-2">Industry Report</h4>
              <p className="text-slate-800 mb-4">"Case Study: How AI Integration Transformed Client Operations by 40%"</p>
              <div className="flex items-center text-black text-sm">
                <ExternalLink size={16} className="mr-2" />
                <span>Download Report</span>
              </div>
            </div>
          </div>
        </div>
      </SectionContainer>

      {/* SECTION 6: Call to Action */}
      <SectionContainer className="py-16 md:py-20 bg-gradient-to-r from-yellow-100 to-yellow-50">
        <div className="text-center max-w-3xl mx-auto">
          <Trophy size={48} className="text-yellow-600 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold text-[#41a7ad]/90 mb-4">
            Ready to Win Together?
          </h2>
          <p className="text-lg text-[#41a7ad]/80 mb-8">
            Join our award-winning team and let's create solutions that earn recognition and drive real results for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-yellow-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-yellow-700 transition-colors duration-200">
              Start Your Project
            </button>
            <button className="border border-yellow-600 text-yellow-700 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-50 transition-colors duration-200">
              View Our Portfolio
            </button>
          </div>
        </div>
      </SectionContainer>
    </>
  );
}