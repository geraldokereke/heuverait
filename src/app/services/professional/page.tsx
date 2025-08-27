import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cybersecurity Solutions | Heuvera',
  description:
    'Enterprise cybersecurity solutions: risk assessments, Zero Trust architectures, compliance, and managed detection and response to reduce exposure and strengthen resilience.',
  keywords: [
    'cybersecurity solutions',
    'Zero Trust',
    'managed detection and response',
    'compliance',
    'Heuvera'
  ],
};

const ProfessionalServicesPage = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold">Cybersecurity Solutions</h1>
      <p className="text-lg mt-4 text-center max-w-3xl">
        Protect your enterprise with end-to-end security: risk assessments, Zero Trust architectures, compliance, and managed detection and response. Reduce exposure and strengthen resilience across cloud, applications, and data.
      </p>
    </main>
  );
};

export default ProfessionalServicesPage; 