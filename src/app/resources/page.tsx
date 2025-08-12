import { Metadata } from 'next';
import Link from 'next/link';
import { BookOpen, FileText, BarChart2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Resources | Heuverait',
  description: 'Access our library of resources including whitepapers, case studies, and guides.',
};

export default function ResourcesPage() {
  const resourceTypes = [
    {
      title: 'Whitepapers',
      description: 'In-depth technical documents and research papers.',
      icon: <FileText className="w-8 h-8 text-blue-600" />,
      href: '/resources/whitepapers',
    },
    {
      title: 'Case Studies',
      description: 'Real-world examples of our successful implementations.',
      icon: <BarChart2 className="w-8 h-8 text-green-600" />,
      href: '/resources/case-studies',
    },
    {
      title: 'Guides',
      description: 'Step-by-step tutorials and best practices.',
      icon: <BookOpen className="w-8 h-8 text-purple-600" />,
      href: '/resources/guides',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Resources</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Access our library of resources to help you get the most out of our solutions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resourceTypes.map((resource, index) => (
            <Link 
              key={index} 
              href={resource.href}
              className="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="p-6">
                <div className="mb-4">
                  <div className="w-16 h-16 flex items-center justify-center bg-blue-50 rounded-lg group-hover:bg-blue-100 transition-colors duration-300">
                    {resource.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{resource.title}</h3>
                <p className="text-gray-600">{resource.description}</p>
                <div className="mt-4 text-blue-600 font-medium flex items-center group-hover:text-blue-700 transition-colors duration-300">
                  Explore
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
