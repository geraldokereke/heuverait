import { SolutionData, SolutionSection, CaseStudy } from '@/types/solutions';

export function transformSolutionData(data: any): SolutionData {
  return {
    slug: data.slug,
    name: data.name,
    icon: data.icon,
    description: data.description,
    heroImg: data.heroImg,
    heroTitle: data.heroTitle,
    heroDescription: data.heroDescription,
    sections: [
      {
        name: data.firstSectionName,
        title: data.firstSectionTitle,
        subtitle: data.firstSectionSubtitle,
        links: data.firstSectionLinks,
        image: data.firstSectionImage,
      },
      {
        name: data.secondSectionName,
        title: data.secondSectionTitle,
        subtitle: data.secondSectionSubtitle,
        links: data.secondSectionLinks,
        image: data.secondSectionImage,
      },
      {
        name: data.thirdSectionName,
        title: data.thirdSectionTitle,
        subtitle: data.thirdSectionSubtitle,
        links: data.thirdSectionLinks,
        image: data.thirdSectionImage,
      },
      {
        name: data.fourthSectionName,
        title: data.fourthSectionTitle,
        subtitle: data.fourthSectionSubtitle,
        links: data.fourthSectionLinks,
        image: data.fourthSectionInage || data.fourthSectionImage, // Handle the typo in the data
      },
    ].filter(section => section.name && section.title), // Only include sections with required fields
    caseStudies: [
      data.firstCaseStudyTitle ? {
        image: data.firstCaseStudyImage,
        title: data.firstCaseStudyTitle,
        description: data.firstCaseStudyDescription,
        links: data.firstCaseStudyLinks || [],
      } : null,
      data.secondCaseStudyTitle ? {
        image: data.secondCaseStudyImage,
        title: data.secondCaseStudyTitle,
        description: data.secondCaseStudyDescription,
        links: data.secondCaseStudyLinks || [],
      } : null,
    ].filter(Boolean) as CaseStudy[],
  };
}
