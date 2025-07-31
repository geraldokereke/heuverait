import { Globe } from "lucide-react";

export const Industries = () => {
  const industries = [
    "Financial Services",
    "Healthcare", 
    "Education",
    "Government & Public Sector",
    "Legal & Compliance",
    "E-commerce",
    "Engineering & Manufacturing",
    "Retail & Consumer"
  ];

  return (
    <section className="py-20 bg-white">
      <div className="px-4 md:px-8 lg:px-16 xl:px-40 2xl:px-72">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Industries We Serve
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Delivering specialized solutions across diverse industry verticals
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {industries.map((industry, index) => (
            <div key={index} className="group p-6 text-center hover:bg-gray-50 rounded-xl transition-all duration-300 cursor-pointer">
              <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#2cd16c]/10 transition-colors duration-300">
                <Globe className="w-8 h-8 text-blue-600 group-hover:text-[#2cd16c] transition-colors duration-300" />
              </div>
              <h3 className="font-semibold text-gray-900 group-hover:text-[#2cd16c] transition-colors duration-300">
                {industry}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};