import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'IT Strategy Consulting | Heuvera',
  description:
    'Align technology with business growth. IT consulting for enterprise architecture, operating model design, and transformation roadmaps that reduce risk and accelerate value.',
  keywords: [
    'IT consulting',
    'IT strategy',
    'enterprise architecture',
    'digital transformation',
    'technology roadmap',
    'Heuvera'
  ],
};

const ITConsultingPage = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold">IT Strategy Consulting</h1>
      <p className="text-lg mt-4 text-center max-w-3xl">
        Align technology with business growth. Heuvera delivers IT strategy, enterprise architecture, and transformation roadmaps that reduce risk and accelerate value—so you can modernize with confidence.
      </p>
    </main>
  );
};

export default ITConsultingPage; 