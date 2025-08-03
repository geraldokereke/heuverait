import { ArrowRight } from "lucide-react";
import Image from "next/image";
import SectionContainer from "../ui/sectionContainer";
import SectionTitle from "../ui/SectionTitle";
import { motion } from "framer-motion";

export const Stories = () => {

  const caseStudies = [
    {
      title: "AI-Powered Healthcare Platform",
      description: "Revolutionizing patient care with intelligent diagnostic tools and automated workflow management.",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80",
      industry: "Healthcare",
      results: "40% efficiency improvement"
    },
    {
      title: "Digital Banking Transformation",
      description: "Complete digital transformation of traditional banking operations with modern cloud-native solutions.",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2026&q=80",
      industry: "Financial Services",
      results: "60% faster processing"
    }
  ];

  return (
    <>
      <section className="relative py-10 xl:py-20">
        <motion.div
          className="absolute inset-0 w-full h-full"
        >
          <div className="absolute w-full h-full lg:h-screen inset-0">
            <Image
              src="/case.jpeg"
              alt="Hero Background"
              fill
              className="object-cover"
              priority
              quality={100}
            />
            {/* Darkened overlay */}
            <div className="absolute inset-0 bg-[#41a7ad90]" />
          </div>
        </motion.div>
        <SectionContainer>
          <div className="z-10 flex justify-between items-end mb-0 2xl:mb-12">
            <SectionTitle
              section="Case studies"
              sectionClassname="text-white"
              title="Success Stories"
              titleClassname="text-white"
              subtitle="Real impact, measurable results"
              subtitleClassname="text-white"
            />
            <button className="group text-[10px] xl:text-xs 2xl:text-base text-white font-semibold flex items-center hover:text-black transition-colors duration-300">
              View All Case Studies
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 z-10">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300">
                <div className="relative h-36 xl:h-52 2xl:h-64">
                  <Image
                    src={study.image}
                    alt={study.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4 xl:p-6 2xl:p-8">
                  <div className="flex justify-between items-center mb-2 2xl:mb-4">
                    <span className="px-3 py-1 bg-[#41a7ad]/10 text-[#41a7ad] text-[8px] xl:text-[10px] 2xl:text-sm font-semibold rounded-full">
                      {study.industry}
                    </span>
                    <span className="text-[10px] 2xl:text-sm font-semibold text-gray-600">
                      {study.results}
                    </span>
                  </div>
                  <h3 className="text-xs xl:text-base 2xl:text-2xl font-bold text-gray-900 mb-1.5 2xl:mb-3">
                    {study.title}
                  </h3>
                  <p className="text-[10px] xl:text-xs 2xl:text-base text-gray-600 mb-3 xl:mb-6">
                    {study.description}
                  </p>
                  <button className="text-[10px] xl:text-xs 2xl:text-base group text-[#41a7ad97] font-semibold flex items-center hover:text-[#41a7ad] transition-colors duration-300">
                    Read Case Study
                  </button>
                </div>
              </div>
            ))}
          </div>
        </SectionContainer>
      </section>
    </>
  );
};