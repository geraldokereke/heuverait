import Hero from "@/components/about/hero";
import Industries from "@/components/about/Industries";
import LogoMarquee from "@/components/about/LogoMarquee";
import MissionsVisions from "@/components/about/missions-visions";
import SectionContainer from "@/components/ui/sectionContainer";

export default function WhoWeAre() {
    return (
        <>
            <Hero />
            <SectionContainer className="pb-20">
                <MissionsVisions />
                <LogoMarquee/>
                <Industries />
            </SectionContainer>
        </>
    )
}