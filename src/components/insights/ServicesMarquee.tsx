'use client';
import React from 'react';
import { motion } from 'framer-motion';

const services = [
    'UX Design',
    'SAAS',
    'Web Design',
    'IOT',
    'BlockChain',
    'Android',
    'IOS', 
    'Consulting',
    'CyberSecurity',
    'Cloud',
    'DevOps'
];

const ServicesMarquee = () => {
    return (
        <div className="w-full overflow-hidden bg-white py-8">
            <div className="relative flex items-center">
                {/* First set of services */}
                <motion.div
                    className="flex items-center whitespace-nowrap"
                    animate={{
                        x: [0, -2000],
                    }}
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 20,
                            ease: "linear",
                        },
                    }}
                >
                    {services.map((service, index) => (
                        <div
                            key={`first-${index}`}
                            className="flex items-center"
                        >
                            <span className="text-6xl font-bold text-gray-900">
                                {service}
                            </span>
                            <span className="text-6xl font-bold text-[#2cd16c] mx-4">•</span>
                        </div>
                    ))}
                </motion.div>

                {/* Duplicate set of services for seamless loop */}
                <motion.div
                    className="flex items-center whitespace-nowrap"
                    animate={{
                        x: [0, -2000],
                    }}
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 20,
                            ease: "linear",
                        },
                    }}
                >
                    {services.map((service, index) => (
                        <div
                            key={`second-${index}`}
                            className="flex items-center"
                        >
                            <span className="text-6xl font-bold text-gray-900">
                                {service}
                            </span>
                            <span className="text-6xl font-bold text-[#2cd16c] mx-4">•</span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default ServicesMarquee; 