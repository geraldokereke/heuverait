import React from 'react';
import { Trophy } from 'lucide-react';
import SectionContainer from '@/components/ui/sectionContainer';
import SectionTitle from '@/components/ui/SectionTitle';

export default function AwardsWork() {
  return (
    <>
      {/* HERO SECTION - Prestigious, Uplifting, Distinct */}
      <div className="relative min-h-[60vh] md:min-h-[70vh] flex items-center bg-gradient-to-br from-[#fef9c3] via-[#fde68a] to-[#fef9c3] overflow-hidden">
        <SectionContainer className="z-10 w-full flex flex-col items-center justify-center text-center py-16 md:py-28">
          <Trophy size={54} className="text-primary mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-extrabold text-yellow-900 mb-4 drop-shadow-lg">Awards & Recognition</h1>
          <p className="text-lg md:text-2xl font-light text-yellow-800 max-w-2xl mx-auto mb-6 md:mb-8">
            Celebrating our achievements and industry recognition for excellence in digital solutions.
          </p>
        </SectionContainer>
        <img src="/work-awards-hero.jpg" alt="Awards" className="absolute right-0 bottom-0 w-1/3 max-w-xs md:max-w-md opacity-70 hidden md:block" />
      </div>

      {/* SECTION 1: Industry Awards */}
      <SectionContainer className="py-10 md:py-16 border-b">
        <SectionTitle
          section="Honors"
          title="Industry Awards"
          subtitle="Our work has been recognized by leading organizations."
          className="mb-12 text-center"
        />
        <div className="grid md:grid-cols-2 gap-8">
          {/* Award 1 */}
          <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center">
            <Trophy size={40} className="text-yellow-500 mb-3" />
            <h3 className="text-xl font-semibold mb-2">Best Digital Transformation 2024</h3>
            <span className="text-yellow-800 mb-2">Tech Leaders Summit</span>
            <p className="text-yellow-800 text-center">Awarded for our innovative cloud migration project for a global enterprise.</p>
          </div>
          {/* Award 2 */}
          <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center">
            <Trophy size={40} className="text-yellow-500 mb-3" />
            <h3 className="text-xl font-semibold mb-2">Top UX Design 2023</h3>
            <span className="text-yellow-800 mb-2">Global Web Awards</span>
            <p className="text-yellow-800 text-center">Recognized for our user-centric healthcare portal design and accessibility.</p>
          </div>
        </div>
      </SectionContainer>

      {/* SECTION 2: Client Accolades */}
      <SectionContainer className="py-10 md:py-16">
        <SectionTitle
          section="Client Accolades"
          title="What Our Clients Say"
          subtitle="Proud moments shared by our valued partners."
          className="mb-12 text-center"
        />
        <div className="grid md:grid-cols-2 gap-8">
          {/* Accolade 1 */}
          <div className="bg-yellow-50 rounded-xl shadow-lg p-8 flex flex-col">
            <p className="text-lg text-yellow-900 mb-4">“The team’s expertise and creativity won us industry awards and customer loyalty.”</p>
            <span className="font-semibold text-yellow-800">— CEO, Fintech Startup</span>
          </div>
          {/* Accolade 2 */}
          <div className="bg-yellow-50 rounded-xl shadow-lg p-8 flex flex-col">
            <p className="text-lg text-yellow-900 mb-4">“Their solutions set a new standard for our industry. We’re proud to be their partner.”</p>
            <span className="font-semibold text-yellow-800">— Director, Manufacturing Group</span>
          </div>
        </div>
      </SectionContainer>
    </>
  );
}
