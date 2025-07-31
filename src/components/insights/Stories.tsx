import { ArrowRight } from "lucide-react";
import Image from "next/image";

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
    <section className="py-20 bg-blue-50">
      <div className="px-4 md:px-8 lg:px-16 xl:px-40 2xl:px-72">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-gray-600">
              Real impact, measurable results
            </p>
          </div>
          <button className="group text-[#2cd16c] font-semibold flex items-center hover:text-[#25b05c] transition-colors duration-300">
            View All Case Studies
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {caseStudies.map((study, index) => (
            <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300">
              <div className="relative h-64">
                <Image
                  src={study.image}
                  alt={study.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8">
                <div className="flex justify-between items-center mb-4">
                  <span className="px-3 py-1 bg-[#2cd16c]/10 text-[#2cd16c] text-sm font-semibold rounded-full">
                    {study.industry}
                  </span>
                  <span className="text-sm font-semibold text-gray-600">
                    {study.results}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {study.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {study.description}
                </p>
                <button className="group text-[#2cd16c] font-semibold flex items-center hover:text-[#25b05c] transition-colors duration-300">
                  Read Case Study
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};