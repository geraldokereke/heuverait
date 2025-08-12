import Link from 'next/link';
import Image from 'next/image';
import { SolutionsData } from '@/data/SolutionsData';
import { transformSolutionData } from '@/utils/solutions';

export const metadata = {
  title: 'Solutions | Heuver AI Technologies',
  description: 'Explore our comprehensive range of technology solutions designed to transform your business.',
};

export default function SolutionsPage() {
  const transformedSolutions = SolutionsData.map(transformSolutionData);

  return (
    <main className="min-h-screen py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Solutions</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how our technology solutions can help your business grow and thrive in the digital age.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {transformedSolutions.map((solution) => (
            <Link
              key={solution.slug}
              href={`/solutions/${solution.slug}`}
              className="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="h-48 relative overflow-hidden">
                <Image
                  src={solution.heroImg}
                  alt={solution.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <solution.icon className="h-12 w-12 text-white" />
                </div>
              </div>
              <div className="p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-2">{solution.name}</h2>
                <p className="text-gray-600 mb-4">{solution.description}</p>
                <span className="text-blue-600 font-medium group-hover:underline">
                  Learn more →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
