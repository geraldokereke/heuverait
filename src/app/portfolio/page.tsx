import React from 'react';
import Link from 'next/link';
import { projectsData } from '@/data/projectsData';
import Image from 'next/image';

const PortfolioPage = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-12">
      <h1 className="text-4xl font-bold mb-8">Our Portfolio</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
        {projectsData.map((project) => (
          <Link
            key={project.slug}
            href={`/portfolio/${project.slug}`}
            className="border rounded-lg shadow-md p-6 flex flex-col hover:shadow-xl transition-shadow bg-white"
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            {project.image && (
              <Image
                src={project.image}
                alt={project.name}
                width={400}
                height={200}
                className="rounded mb-4 object-cover"
                style={{ width: '100%', height: 'auto', maxHeight: 200 }}
              />
            )}
            <h2 className="text-2xl font-semibold mb-2">{project.name}</h2>
            <p className="text-sm text-gray-500 mb-2">{project.type}</p>
            <p className="mb-4">{project.description}</p>
            <span className="text-blue-600 hover:underline mt-auto">View Details →</span>
          </Link>
        ))}
      </div>
    </main>
  );
};

export default PortfolioPage;