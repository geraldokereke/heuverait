import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cloud Consulting | Heuvera',
  description:
    'Cloud consulting for strategy, migration, optimization, and governance. Improve performance, resilience, and cost control across cloud environments.',
  keywords: [
    'cloud consulting',
    'cloud migration',
    'cloud governance',
    'cost optimization',
    'Heuvera'
  ],
};

const HardwareInfraPage = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold">Cloud Consulting</h1>
      <p className="text-lg mt-4 text-center max-w-3xl">
        Modernize with cloud securely and cost-effectively. We guide strategy, migration, optimization, and governance to improve performance, resilience, and cost control across your cloud environments.
      </p>
    </main>
  );
};

export default HardwareInfraPage; 