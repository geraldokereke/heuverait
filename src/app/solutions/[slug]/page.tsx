import { notFound } from 'next/navigation';
import { SolutionsData } from '@/data/SolutionsData';
import { Metadata } from 'next';
import { transformSolutionData } from '@/utils/solutions';

export async function generateStaticParams() {
  return SolutionsData.map((solution) => ({
    slug: solution.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const solution = SolutionsData.find((s) => s.slug === params.slug);
  
  if (!solution) {
    return {
      title: 'Solution Not Found',
    };
  }

  return {
    title: `${solution.name} | Heuver AI Technologies`,
    description: solution.description,
    openGraph: {
      title: solution.name,
      description: solution.description,
      images: [solution.heroImg],
    },
  };
}

export default function SolutionPage({ params }: { params: { slug: string } }) {
  const solutionData = SolutionsData.find((s) => s.slug === params.slug);

  if (!solutionData) {
    notFound();
  }
  
  const solution = transformSolutionData(solutionData);

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center bg-black/50">
        <div 
          className="absolute inset-0 -z-10 bg-cover bg-center"
          style={{ backgroundImage: `url(${solution.heroImg})` }}
        />
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">{solution.heroTitle || solution.name}</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            {solution.heroDescription || solution.description}
          </p>
        </div>
      </section>

      {/* Sections */}
      {solution.sections.map((section, index) => (
        <section 
          key={section.name}
          className={`py-16 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
        >
          <div className="container mx-auto px-4">
            <div className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
              <div className="md:w-1/2">
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">{section.name}</h2>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">{section.title}</h3>
                <p className="text-lg text-gray-600 mb-6">{section.subtitle}</p>
                <ul className="space-y-3">
                  {section.links.map((link, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span className="text-gray-700">{link}</span>
                    </li>
                  ))}
                </ul>
              </div>
              {section.image && (
                <div className="md:w-1/2">
                  <img
                    src={section.image}
                    alt={section.title}
                    className="rounded-lg shadow-xl w-full h-auto max-h-96 object-cover"
                  />
                </div>
              )}
            </div>
          </div>
        </section>
      ))}
    </main>
  );
}
