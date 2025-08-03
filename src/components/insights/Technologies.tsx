import React, { useState } from "react";
import {
  Smartphone,
  Globe,
  Layers,
  Gamepad2,
  Database,
  Cloud,
} from "lucide-react";
import { categoryData } from "../data/Technologies";
import SectionTitle from "../ui/SectionTitle";

const Technologies: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("Mobile Apps");

  const sidebarCategories = [
    { name: "Mobile Apps", icon: Smartphone },
    { name: "Web Platforms", icon: Globe },
    { name: "Cross Platforms", icon: Layers },
    { name: "Games", icon: Gamepad2 },
    { name: "Database", icon: Database },
    { name: "Cloud & DevOps", icon: Cloud },
  ];

  return (
    <div className="w-full max-w-2xl sm:max-w-3xl md:max-w-4xl lg:max-w-4xl xl:max-w-5xl 2xl:max-w-screen-2xl mx-auto px-4 md:px-10 xl:px-16 flex flex-col gap-14 sm:py-16 bg-white">
      {/* Header */}

      <SectionTitle
        section="Technologies"
        title="Technologies we use"
        subtitle="Hire from our pool of 350+ specialized experts in web, mobile, and
          software engineering, specializing in the latest technologies and
          frameworks, ready to scale your development teams effortlessly."
      />

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar */}
        <div className="w-full lg:w-64 flex-shrink-0 mb-6 lg:mb-0">
          <div className="flex lg:block gap-2 lg:space-y-2 overflow-x-auto">
            {sidebarCategories.map((category) => {
              const IconComponent = category.icon;
              return (
                <div
                  key={category.name}
                  onClick={() => setActiveCategory(category.name)}
                  className={`flex items-center gap-3 px-4 sm:px-6 py-3 sm:py-4 rounded-full text-base sm:text-lg font-medium transition-all duration-200 cursor-pointer whitespace-nowrap font-montserrat ${activeCategory === category.name
                      ? "bg-[#41a7ad40] text-gray-900 font-semibold"
                      : "text-gray-600 hover:bg-gray-50"
                    }`}
                >
                  <IconComponent size={20} />
                  {category.name}
                </div>
              );
            })}
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1">
          <div className="grid gap-8 sm:gap-12">
            {categoryData[activeCategory].sections.map((section) => (
              <div key={section.title}>
                <h2 className="text-2xl font-montserrat sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-8">
                  {section.title}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
                  {section.items.map((item) => {
                    const IconComponent = item.icon;
                    return (
                      <div
                        key={item.name}
                        className="flex items-center gap-3 px-4 sm:px-6 py-3 sm:py-4 rounded-full border transition-all duration-200 hover:bg-black hover:text-white cursor-pointer bg-gray-50 text-gray-700 border-gray-200"
                      >
                        <IconComponent size={20} />
                        <span className="font-medium font-poppins">{item.name}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technologies;
