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
import SectionContainer from "../ui/sectionContainer";

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
    <SectionContainer className="py-16">

      <SectionTitle
        section="Technologies"
        title="Technologies we use"
        subtitle="Hire from our pool of 350+ specialized experts in web, mobile, and
          software engineering, specializing in the latest technologies and
          frameworks, ready to scale your development teams effortlessly."
      />

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar */}
        <div className="w-full lg:w-48 xl:w-56 2xl:w-64 flex-shrink-0 mb-6 lg:mb-0">
          <div className="flex lg:block gap-2 lg:space-y-2 overflow-x-auto">
            {sidebarCategories.map((category) => {
              const IconComponent = category.icon;
              return (
                <div
                  key={category.name}
                  onClick={() => setActiveCategory(category.name)}
                  className={`flex items-center gap-3 px-4 xl:px-6 py-3 xl:py-4 rounded-full text-xs lg:text-[10px] xl:text-sm 2xl:text-lg font-medium transition-all duration-200 cursor-pointer whitespace-nowrap font-montserrat ${activeCategory === category.name
                      ? "bg-[#41a7ad40] text-gray-900 font-semibold"
                      : "text-gray-600 hover:bg-gray-50"
                    }`}
                >
                  <IconComponent className="size-3 xl:size-5" />
                  {category.name}
                </div>
              );
            })}
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1">
          <div className="grid sm:gap-12">
            {categoryData[activeCategory].sections.map((section) => (
              <div key={section.title}>
                <h2 className="text-sm xl:text-2xl font-montserrat xl:text-2xl 2xl:text-3xl font-bold text-gray-900 mb-4 xl:mb-8">
                  {section.title}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
                  {section.items.map((item) => {
                    const IconComponent = item.icon;
                    return (
                      <div
                        key={item.name}
                        className="flex items-center gap-3 px-4 xl:px-6 py-2 xl:py-4 rounded-full border transition-all duration-200 hover:bg-black hover:text-white cursor-pointer bg-gray-50 text-gray-700 border-gray-200 text-xs xl:text-sm 2xl:text-base"
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
    </SectionContainer>
  );
};

export default Technologies;
