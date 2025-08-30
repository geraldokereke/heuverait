"use client";

import CultureSection from '@/components/about/team/culture';

import Stats from '@/components/about/team/stats';
import TeamMemberCard, { teamMembers } from '@/components/about/team/teamCard';
import Hero from '@/components/hero';
import Button from '@/components/ui/button';
import CTA from '@/components/ui/cta';
import SectionContainer from '@/components/ui/sectionContainer';
import SectionTitle from '@/components/ui/SectionTitle';
import React from 'react';

export default function OurTeam() {
    return (
        <div className="">
            <Hero
                imgLink='/team.jpg'
                section='Meet Our Team'
                title='Visionary Minds'
                description='Where brilliance meets passion, and innovation becomes reality through extraordinary collaboration.'
                height='h-[50vh]'
            />

            <SectionContainer className="py-20">
                <SectionTitle
                    section='Our Team'
                    title='Meet Our Development Architects'
                    subtitle='Each developer brings deep technical expertise and a passion for collaborative excellence.'
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