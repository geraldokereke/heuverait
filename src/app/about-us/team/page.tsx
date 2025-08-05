"use client";

import CultureSection from '@/components/about/team/culture';
import Hero from '@/components/about/team/hero';
import Stats from '@/components/about/team/stats';
import TeamMemberCard, { teamMembers } from '@/components/about/team/teamCard';
import SectionContainer from '@/components/ui/sectionContainer';
import SectionTitle from '@/components/ui/SectionTitle';
import React from 'react';

export default function OurTeam() {
    return (
        <div className="">
            <Hero />

            <SectionContainer className="py-20">
                <SectionTitle
                    section='Leadership Excellence'
                    title='Meet the Visionaries'
                    subtitle='The extraordinary individuals who transform ambitious visions into groundbreaking realities.
                        Each leader brings unparalleled expertise and an unwavering commitment to excellence.'
                />

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                    {teamMembers.map((member, index) => (
                        <TeamMemberCard key={member.id} member={member} index={index} />
                    ))}
                </div>

                <Stats />
                <CultureSection />
                <div className="text-center mt-0 xl:mt-20 bg-gradient-to-r from-gray-900 to-black rounded-2xl p-12 text-white overflow-hidden">
                    <h3 className="text-2xl md:text-3xl lg:text-base xl:text-2xl 2xl:text-4xl text-white font-bold mb-1 xl:mb-4">
                        Shape The Future
                    </h3>
                    <p className="text-gray-300 mb-5 xl:mb-8 max-w-2xl mx-auto text-[10px] xl:text-xs 2xl:text-lg">
                        Join a team where your potential meets unlimited possibilities.
                        Where every idea matters and every contribution shapes tomorrow.
                    </p>
                    <button
                        className="bg-white text-black mx-auto flex items-center px-3 md:px-4 lg:px-2 xl:px-3 2xl:px-6 py-2 md:py-1.5 lg:py-1 xl:py-1.5 2xl:py-2.5 text-[8px] md:text-xs lg:text-[6px] xl:text-[8px] 2xl:text-sm font-semibold rounded-full transition-all duration-300 whitespace-nowrap uppercase"
                    >
                        Explore Opportunities
                    </button>
                </div>

            </SectionContainer>

        </div>
    );
}