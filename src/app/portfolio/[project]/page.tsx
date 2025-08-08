import { notFound } from "next/navigation";
import { projectsData } from "@/data/projectsData";
import Hero from "@/components/hero";
import SectionContainer from "@/components/ui/sectionContainer";
import SideImage from "@/components/ui/SideImage";
import Text from "@/components/ui/text";
import CTA from "@/components/ui/cta";

interface ProjectPageProps {
  params: Promise<{ project: string }>;
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { project: projectSlug } = await params;
  
  const project = projectsData.find(
    (p) => p.slug === projectSlug
  );

  if (!project) return notFound();

  return (
    <div className="w-full bg-white text-black flex flex-col gap-16">
      <Hero
        imgLink={project.image || "/default-project-image.jpg"} // Fix: Handle undefined image
        section={project.type}
        title={project.name}
        description={project.description}
        height="h-[60vh]"
      />

      <SectionContainer className="py-16 space-y-20">
        {/* Project Overview */}
        <div className="">
          <div className="mb-12 flex flex-col gap-6">
            <Text
              size="3xl"
              font="montserrat"
              weight="bold">Project Details</Text>

            <Text size="lg" font="poppins" leading="relaxed" color="gray-700">
              {project.details}
            </Text>
          </div>
          {project.links && (
            <div className="mb-12 flex flex-col gap-6">
              <Text size="2xl" font="montserrat" weight="bold">Project Links</Text>
              <div className="flex flex-wrap gap-4">
                {project.links.map((link) => (
                  <a
                    key={link.url}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 bg-black text-white rounded-full font-poppins font-medium hover:bg-gray-800 transition-colors"
                  >
                    {link.label}
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          )}

          {project.technologies && (
            <div className="mb-12 flex flex-col gap-6">
              <Text size="2xl" font="montserrat" weight="bold">Technologies Used</Text>
              <div className="flex flex-wrap gap-3">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 border border-black text-black rounded-full font-poppins text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Quote Section */}
          <div className="bg-gray-50 p-8 rounded-2xl shadow-md mb-16">
            <blockquote className="text-xl font-poppins italic text-center text-gray-700">
              {project.quote}
            </blockquote>
            <cite className="block text-center mt-4 font-montserrat font-semibold">— {project.quoteCite}</cite>
          </div>
        </div>
      </SectionContainer>

      {/* Challenges Section */}
      <div className="bg-black text-white p-12">
        <SectionContainer>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <SideImage
              key={project.challengesImage}
              imgsrc={project.challengesImage}
              borderSide="left"
              height="xl"
            />
            <div className="flex flex-col gap-6">
              <Text size="4xl" font="montserrat" weight="bold" color="white">The Challenge</Text>
              <Text size="lg" font="poppins" leading="relaxed" color="gray-300">
                {project.challenges}
              </Text>
            </div>
          </div>
        </SectionContainer>
      </div>

      {/* Solution Section */}
      <div className="bg-white">
        <SectionContainer>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col gap-6">
              <Text size="4xl" font="montserrat" weight="bold" color="black">Our Solution</Text>
              <Text size="lg" font="poppins" leading="relaxed" color="gray-700">
                {project.solutions}
              </Text>
            </div>
            <div>
              <SideImage
                key={project.solutionsImage}
                imgsrc={project.solutionsImage}
                borderSide="right"
                height="xl"
              />
            </div>
          </div>
        </SectionContainer>
      </div>

      {/* Design Process Section */}
      <div className="mt-20">
        <SectionContainer>
          <div className="text-center flex flex-col gap-6">
            <Text size="4xl" font="montserrat" weight="bold">Designing Our Solution</Text>
            <Text size="lg" font="poppins" color="gray-700" className="max-w-3xl mx-auto">
              Our design process follows industry best practices to ensure optimal user experience and functionality.
            </Text>
          </div>

          {/* User Flow */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col gap-4">
              <Text size="2xl" font="montserrat" weight="bold">User Flow Mapping</Text>
              <Text size="lg" font="poppins" color="gray-700" leading="relaxed">
                {project.userFlow}
              </Text>
            </div>
            <div>
              <SideImage
                imgsrc={project.userFlowImage}
                key={project.userFlowImage}
                borderSide="right"
                height="xl"
              />
            </div>
          </div>
        </SectionContainer>
      </div>

      {/* Wireframing Section */}
      <div className="bg-gray-50 p-12">
        <SectionContainer>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <SideImage
              height="xl"
              imgsrc={project.wireFramingImage}
              key={project.wireFramingImage}
              borderSide="left"
            />
            <div className="flex flex-col gap-4">
              <Text size="2xl" font="montserrat" weight="bold">Wireframing</Text>
              <p className="font-poppins text-gray-700 leading-relaxed">
                {project.wireFraming}
              </p>
            </div>
          </div>
        </SectionContainer>
      </div>

      {/* Story Mapping Section */}
      <SectionContainer>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-4">
            <Text size="2xl" font="montserrat" weight="bold">Story Mapping</Text>
            <Text size="lg" font="poppins" color="gray-700" leading="relaxed">
              {project.storyMapping}
            </Text>
          </div>
          <SideImage
            height="xl"
            imgsrc={project.storyMappingImage}
            key={project.storyMappingImage}
            borderSide="right"
          />
        </div>
      </SectionContainer>

      {/* Development Section */}
      <div className="bg-black text-white pt-28">
        <SectionContainer>
          <div className="text-center mb-16 flex flex-col gap-4">
            <Text size="4xl" font="montserrat" weight="bold" color="white">Developing Our Solution</Text>
            <Text size="lg" font="poppins" color="gray-300" className="max-w-3xl mx-auto">
              Our development process emphasizes quality, scalability, and maintainability at every stage.
            </Text>
          </div>

          <div className="space-y-20">
            {/* Architecture */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="flex flex-col gap-4">
                <Text size="2xl" font="montserrat" weight="bold" color="white">System Architecture</Text>
                <p className="font-poppins text-gray-300 leading-relaxed">
                  {project.architecture}
                </p>
              </div>
              <SideImage
                key={project.architectureImage}
                imgsrc={project.architectureImage}
                borderSide="right"
                height="xl"
              />
            </div>

            {/* Development */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <SideImage
                key={project.developmentImage}
                imgsrc={project.developmentImage}
                height="xl"
                borderSide="left"
              />
              <div className="flex flex-col gap-4">
                <Text size="2xl" font="montserrat" weight="bold" color="white">Development Process</Text>
                <Text size="lg" font="poppins" leading="relaxed" color="gray-300">
                  {project.development}
                </Text>
              </div>
            </div>

            {/* Testing & QA */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="flex flex-col gap-4">
                <Text size="2xl" font="montserrat" weight="bold" color="white">Testing & Quality Assurance</Text>
                <Text size="lg" font="poppins" leading="relaxed" color="gray-300">
                  {project.testing}
                </Text>
              </div>
              <SideImage
                key={project.testingImage}
                imgsrc={project.testingImage}
                height="xl"
                borderSide="right"
              />
            </div>

            {/* Deployment */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <SideImage
                key={project.deploymentImage}
                imgsrc={project.deploymentImage}
                height="xl"
                borderSide="left"
              />
              <div className="flex flex-col gap-4">
                <Text size="2xl" font="montserrat" weight="bold" color="white">Deployment & Launch</Text>
                <Text size="lg" font="poppins" leading="relaxed" color="gray-300">
                  {project.deployment}
                </Text>
              </div>
            </div>
          </div>
        </SectionContainer>

        <CTA
          bgColor="white"
          headerText="We're Open for Business"
          headerTextColor="black"
          subHeaderText="Transform your ideas into reality with our expert team. Contact us today to start your next project."
          subHeaderTextColor="gray-700"
        >
          <button className="bg-black text-white px-8 py-4 rounded-full font-montserrat font-semibold hover:bg-gray-800 transition-colors">
            Start Your Project
          </button>
          <button className="border-2 border-black text-black px-8 py-4 rounded-full font-montserrat font-semibold hover:bg-black hover:text-white transition-colors">
            View Portfolio
          </button>
        </CTA>

      </div>
    </div>
  );
}