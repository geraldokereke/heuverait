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
                title="We Build the Future of Enterprise IT"
                description="Heuvera is a global IT consulting partner helping enterprises accelerate digital transformation with secure, scalable, and future-ready technology solutions. We combine strategic insight with hands-on engineering to deliver results—on time and on budget." />
            <SectionContainer className="sm:gap-2 md:gap-4 lg:gap-6 xl:gap-8 2xl:gap-10 pb-20">
                <MissionsVisions />
                <LogoMarquee />
                <Industries />
            </SectionContainer>
        </>
    )
}