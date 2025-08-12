'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { FileText, ArrowLeft } from 'lucide-react';
import ComingSoonModal from '@/components/ComingSoonModal';

export default function WhitepapersPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsModalOpen(true);
  }, []);

  const handleClose = () => {
    setIsModalOpen(false);
    router.push('/resources');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <button
          onClick={() => router.push('/resources')}
          className="flex items-center text-gray-600 hover:text-gray-900 mb-8 transition-colors"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Resources
        </button>
        
        <div className="bg-white rounded-xl shadow-md p-8 text-center">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <FileText className="w-8 h-8 text-blue-600" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Whitepapers</h1>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Our in-depth whitepapers provide valuable insights and analysis on the latest technology trends and innovations.
          </p>
        </div>
      </div>

      <ComingSoonModal
        open={isModalOpen}
        onClose={handleClose}
        title="Whitepapers Coming Soon"
        message="Our library of whitepapers is currently under development. We're working hard to bring you valuable insights and analysis on the latest technology trends. Please check back soon!"
        emoji="📄"
      />
    </div>
  );
}
