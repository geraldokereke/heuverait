import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Enterprise Software Development | Heuvera',
  description:
    'Enterprise software development with modern architectures and DevSecOps. Build secure, scalable systems that improve reliability, performance, and time-to-market.',
  keywords: [
    'enterprise software development',
    'DevSecOps',
    'microservices',
    'scalable applications',
    'Heuvera'
  ],
};

const SoftwareDevelopmentPage = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 animate-fade-in">
      <h1 className="text-4xl font-bold">Enterprise Software Development</h1>
      <p className="text-lg mt-4 text-center max-w-3xl">
        Build secure, scalable systems—faster. We design and deliver enterprise-grade applications using modern architectures and DevSecOps best practices to improve reliability, performance, and time-to-market.
      </p>
    </main>
  );
};

export default SoftwareDevelopmentPage; 