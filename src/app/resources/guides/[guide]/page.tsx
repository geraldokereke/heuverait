'use client';

import { notFound } from "next/navigation";
import SectionContainer from "@/components/ui/sectionContainer";
import SectionTitle from "@/components/ui/SectionTitle";
import Text from "@/components/ui/text";
import Hero from "@/components/hero";

// Dummy data import or fetch logic here
const guides = [
  {
    slug: "quick-start-guide",
    title: "Quick Start Guide",
    description: "Get up and running in 5 minutes with our platform essentials.",
    readTime: "5 min",
    difficulty: "Beginner",
    tags: ["setup", "basics"],
    content: "This is a detailed quick start guide..."
  }
  // Add more guides as needed
];

import React from "react";

export default function GuideDetail({ params }: { params: Promise<{ guide: string }> }) {
  const { guide } = React.use(params);
  const guideObj = guides.find(g => g.slug === guide);
  if (!guideObj) return notFound();

  return (
    <div className="w-full bg-white text-black flex flex-col gap-16">
      {/* HERO HEADER */}
      <Hero
        imgLink="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80"
        section="Guide"
        title={guideObj.title}
        description={guideObj.difficulty + " \u2022 " + guideObj.readTime}
        height="h-[50vh] md:h-[60vh]"
      />
      <SectionContainer className="py-16 space-y-12">
        <SectionTitle
          section="Guide Details"
          title={guideObj.title}
          subtitle={guideObj.difficulty + " • " + guideObj.readTime}
        />
        <div>
          <Text size="lg" font="poppins" color="gray-700">{guideObj.description}</Text>
          <div className="flex flex-wrap gap-2 mt-4">
            {guideObj.tags.map((tag: string) => (
              <span key={tag} className="bg-primary text-white px-3 py-1 rounded-full text-xs font-semibold">{tag}</span>
            ))}
          </div>
          <div className="mt-8">
            <Text size="md" font="poppins" color="black">{guideObj.content}</Text>
          </div>
        </div>
      </SectionContainer>
    </div>
  );
}
