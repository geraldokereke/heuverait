'use client';

import Industries from "@/components/about/Industries";
import LogoMarquee from "@/components/about/LogoMarquee";
import MissionsVisions from "@/components/about/missions-visions";
import Hero from "@/components/hero";
import SectionContainer from "@/components/ui/sectionContainer";

export default function WhoWeAre() {
    return (
        <>
            <Hero
                height="min-h-screen"
                imgLink="/wwa.jpg"
                section="Who We Are"
                title="About Heuvera"
                description="We are a digital transformation consultancy and engineering company that delivers cutting-edge solutions for global organisations and technology startups. Since 2024 we have been helping companies and established brands reimagine their business through digitalisation." />
            <SectionContainer className="pb-20">
                <MissionsVisions />
                <LogoMarquee />
                <Industries />
            </SectionContainer>
        </>
    )
}