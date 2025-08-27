import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Digital Innovation | Heuvera',
  description:
    'Digital innovation services powered by AI/ML, automation, and data. Prototype, test, and scale new products to turn opportunities into measurable outcomes.',
  keywords: [
    'digital innovation',
    'AI',
    'machine learning',
    'prototyping',
    'product discovery',
    'Heuvera'
  ],
};

const AIMLPage = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold">Digital Innovation</h1>
      <p className="text-lg mt-4 text-center max-w-3xl">
        Prototype, test, and scale new digital products powered by AI/ML, automation, and data. We help you validate ideas quickly and turn opportunities into measurable outcomes and revenue.
      </p>
    </main>
  );
};

export default AIMLPage; 