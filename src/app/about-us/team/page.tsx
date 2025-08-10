"use client";

import CultureSection from '@/components/about/team/culture';
import Hero from '@/components/about/team/hero';
import Stats from '@/components/about/team/stats';
import TeamMemberCard, { teamMembers } from '@/components/about/team/teamCard';
import Button from '@/components/ui/button';
import CTA from '@/components/ui/cta';
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
            </SectionContainer>

            <CTA
                bgColor='black'
                headerText='Shape The Future'
                headerTextColor='white'
                subHeaderText='Join a team where your potential meets unlimited possibilities. Where every idea matters and every contribution shapes tomorrow.'
                subHeaderTextColor='white'
            >
                <Button textColor='black' backgroundColor='white' type='default'>Explore Opportunities</Button>
            </CTA>
        </div>
    );
}