'use client';

import { notFound } from "next/navigation";
import SectionContainer from "@/components/ui/sectionContainer";
import SectionTitle from "@/components/ui/SectionTitle";
import Text from "@/components/ui/text";

// Dummy data import or fetch logic here
const whitepapers = [
  {
    slug: "ai-in-healthcare",
    title: "AI in Healthcare: Transforming Patient Outcomes Through Intelligent Systems",
    author: "Dr. Sarah Chen, Michael Rodriguez",
    date: "March 2024",
    readTime: "25 min",
    downloads: "2.3K",
    views: "15.8K",
    abstract: "This comprehensive study examines the implementation of artificial intelligence in healthcare systems, analyzing patient outcome improvements, cost reductions, and operational efficiency gains across 500+ medical institutions.",
    content: "Full whitepaper content goes here..."
  }
  // Add more whitepapers as needed
];

import React from "react";

export default function WhitepaperDetail({ params }: { params: Promise<{ whitepaper: string }> }) {
  const { whitepaper } = React.use(params);
  // Add Unsplash Hero
  const heroImg = "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=1200&q=80";
  const paper = whitepapers.find(w => w.slug === whitepaper);
  if (!paper) return notFound();

  return (
    <div className="w-full bg-white text-black flex flex-col gap-16">
      {/* BACK LINK */}
      <SectionContainer className="pt-8 pb-0">
        <a href="/resources/whitepapers" className="inline-flex items-center text-primary hover:underline font-semibold text-sm md:text-base">
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7"/></svg>
          Back to Whitepapers
        </a>
      </SectionContainer>
      <SectionContainer className="py-16 space-y-12">
        <SectionTitle
          section="Whitepaper"
          title={paper.title}
          subtitle={paper.author + " • " + paper.date}
        />
        <div>
          <Text size="lg" font="poppins" color="gray-700">{paper.abstract}</Text>
          <div className="flex flex-wrap gap-4 mt-4">
            <span className="bg-black text-white px-3 py-1 rounded-full text-xs font-semibold">{paper.readTime}</span>
            <span className="bg-black text-white px-3 py-1 rounded-full text-xs font-semibold">{paper.downloads} downloads</span>
            <span className="bg-black text-white px-3 py-1 rounded-full text-xs font-semibold">{paper.views} views</span>
          </div>
          <div className="mt-8">
            <Text size="md" font="poppins" color="black">{paper.content}</Text>
          </div>
        </div>
      </SectionContainer>
      {/* RELATED RESOURCES */}
      <SectionContainer className="py-12 md:py-20">
        <SectionTitle
          section="Related Whitepapers"
          title="Explore More Publications"
          subtitle="Browse additional insights and research from our team."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {whitepapers.filter(async w => w.slug !== (await params).whitepaper).slice(0,3).map(paper => (
            <a key={paper.slug} href={`/resources/whitepapers/${paper.slug}`} className="block bg-white border border-gray-200 rounded-lg shadow hover:shadow-xl transition-shadow duration-300 overflow-hidden">
              <div className="h-32 bg-gradient-to-br from-gray-100 to-gray-200" />
              <div className="p-5">
                <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">{paper.author}</div>
                <h3 className="text-lg font-bold text-black mb-2">{paper.title}</h3>
                <p className="text-gray-600 text-sm mb-3">{paper.abstract.slice(0,90)}...</p>
                <span className="inline-block bg-primary text-white px-3 py-1 rounded-full text-xs font-semibold">Read Preview</span>
              </div>
            </a>
          ))}
        </div>
      </SectionContainer>
    </div>
  );
}
