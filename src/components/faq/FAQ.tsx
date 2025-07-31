'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

const FAQItem = ({ question, answer, isOpen, onToggle }: FAQItemProps) => {
  return (
    <div className="border-b border-gray-200 last:border-b-0">
      <button
        className="w-full py-6 px-0 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200 focus:outline-none focus:bg-gray-50"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <span className="text-lg font-medium text-gray-800 pr-4">
          {question}
        </span>
        <div className="flex-shrink-0">
          {isOpen ? (
            <ChevronUp className="w-5 h-5 text-gray-600" />
          ) : (
            <ChevronDown className="w-5 h-5 text-gray-600" />
          )}
        </div>
      </button>
      
      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="pb-6 text-gray-600 leading-relaxed">
          {answer}
        </div>
      </div>
    </div>
  );
};

const FAQ = () => {
  const [openItems, setOpenItems] = useState(new Set());

  const faqData = [
    {
      id: 1,
      question: "Does ScienceSoft cover all stages of the SDLC?",
      answer: "Yes, ScienceSoft provides comprehensive software development services covering all stages of the Software Development Life Cycle (SDLC). This includes requirements analysis, system design, implementation, testing, deployment, and ongoing maintenance and support. Our experienced team ensures seamless transitions between each phase while maintaining high quality standards throughout the entire development process."
    },
    {
      id: 2,
      question: "Can ScienceSoft speed up the delivery of projects?",
      answer: "Absolutely! ScienceSoft employs various strategies to accelerate project delivery without compromising quality. We use agile methodologies, DevOps practices, automated testing, and continuous integration/continuous deployment (CI/CD) pipelines. Our experienced teams, proven frameworks, and efficient project management approaches help reduce development time while ensuring robust, scalable solutions."
    },
    {
      id: 3,
      question: "What's the cost for your software development services?",
      answer: "Our pricing is tailored to each project's specific requirements, scope, and complexity. We offer flexible engagement models including fixed-price projects, time and materials, and dedicated team arrangements. Factors affecting cost include project size, technology stack, timeline, and level of customization required. Contact us for a detailed quote based on your specific needs and requirements."
    },
    {
      id: 4,
      question: "What's your post-launch policy?",
      answer: "ScienceSoft provides comprehensive post-launch support to ensure your software continues to perform optimally. Our post-launch services include bug fixes, performance monitoring, security updates, feature enhancements, and technical support. We offer various maintenance packages ranging from basic support to full-scale managed services, with SLA guarantees and 24/7 monitoring options available."
    },
    {
      id: 5,
      question: "What is your preferred development methodology?",
      answer: "We primarily use Agile methodologies, particularly Scrum and Kanban, as they provide flexibility, transparency, and faster delivery cycles. However, we adapt our approach based on project requirements and client preferences. For larger, more complex projects, we might incorporate elements of scaled agile frameworks. We also use DevOps practices to ensure seamless integration between development and operations teams."
    },
    {
      id: 6,
      question: "How do you control the quality of the software you deliver?",
      answer: "Quality assurance is integral to our development process. We implement multi-layered quality control measures including code reviews, automated testing (unit, integration, and end-to-end tests), continuous integration pipelines, and manual testing by dedicated QA specialists. We follow industry best practices, coding standards, and use static code analysis tools. Regular quality audits and client feedback loops ensure we maintain the highest standards throughout development."
    }
  ];

  const toggleItem = (id: number) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(id)) {
      newOpenItems.delete(id);
    } else {
      newOpenItems.add(id);
    }
    setOpenItems(newOpenItems);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white">
      {/* Header */}
      <div className="mb-8">
        <div className="bg-blue-50 p-6 rounded-lg">
          <h1 className="text-3xl font-bold text-blue-800 mb-2">
            FAQ on Software Engineering
          </h1>
        </div>
      </div>

      {/* FAQ Items */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        {faqData.map((item) => (
          <FAQItem
            key={item.id}
            question={item.question}
            answer={item.answer}
            isOpen={openItems.has(item.id)}
            onToggle={() => toggleItem(item.id)}
          />
        ))}
      </div>

      {/* Footer Button */}
      <div className="mt-8 text-center">
        <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium">
          Contact our team
        </button>
      </div>
    </div>
  );
};

export default FAQ;