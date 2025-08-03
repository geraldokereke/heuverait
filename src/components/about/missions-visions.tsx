"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import SectionTitle from "../ui/SectionTitle";

export default function MissionsVisions() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [currentView, setCurrentView] = useState('mission');

    // Auto-cycle between mission and vision every 15 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentView(prev => prev === 'mission' ? 'vision' : 'mission');
        }, 15000);

        return () => clearInterval(interval);
    }, []);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                duration: 0.6
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        }
    };

    const imageVariants = {
        hidden: { opacity: 0, scale: 0.95 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 1,
                ease: "easeOut"
            }
        }
    };

    const contentVariants = {
        enter: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        },
        exit: {
            opacity: 0,
            y: -20,
            transition: {
                duration: 0.5,
                ease: "easeIn"
            }
        }
    };

    const imageTransitionVariants = {
        enter: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 1,
                ease: "easeOut"
            }
        },
        exit: {
            opacity: 0,
            scale: 0.95,
            transition: {
                duration: 0.5,
                ease: "easeIn"
            }
        }
    };

    const missionContent = {
        title: "Our Mission",
        description: "To empower organizations through innovative digital transformation solutions, delivering cutting-edge technology services that drive growth, efficiency, and competitive advantage in an ever-evolving digital landscape.",
        points: [
            "Deliver exceptional value through technology excellence",
            "Foster long-term partnerships with our clients",
            "Drive innovation in every solution we create",
            "Transform businesses through strategic digital solutions",
            "Lead the future of enterprise technology consulting"
        ],
        image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        alt: "Digital transformation and technology consulting at Heuvera"
    };

    const visionContent = {
        title: "Our Vision",
        description: "To be the global leader in digital transformation, recognized for our innovative solutions, exceptional client partnerships, and our ability to turn technological possibilities into business realities that shape the future.",
        points: [
            "Shape the future of digital business landscapes",
            "Set industry standards for technology excellence",
            "Build lasting relationships that transcend transactions",
            "Create solutions that drive meaningful global impact",
            "Pioneer the next generation of enterprise innovation"
        ],
        image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        alt: "Future vision and innovation in technology consulting"
    };

    const currentContent = currentView === 'mission' ? missionContent : visionContent;

    return (
        <section ref={ref} className="py-32 bg-gradient-to-b from-white via-gray-50/30 to-white relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0">
                <div className="absolute top-20 right-10 w-72 h-72 bg-[#41a7ad]/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#41a7ad]/3 rounded-full blur-3xl"></div>
            </div>

            <div className="relative">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className=""
                >
                    <motion.div variants={itemVariants}>
                        <SectionTitle
                            section="Purpose & Vision"
                            title="Driving Digital Excellence"
                            subtitle="At Heuvera, we believe in the transformative power of technology to reshape businesses
                            and create meaningful impact in the digital age."
                        />
                    </motion.div>
                </motion.div>

                {/* Mission/Vision with Image */}
                <div className="grid lg:grid-cols-2 gap-16 items-center mt-10 2xl:mt-0 mb-24">
                    {/* Content Container */}
                    <motion.div
                        variants={itemVariants}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        className="lg:col-span-1"
                    >
                        <div className="relative group">
                            <div className="relative bg-white">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={currentView}
                                        variants={contentVariants}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate="enter"
                                        exit="exit"
                                    >
                                        <div className="flex items-start mb-2 2xl:mb-8">
                                            <div>
                                                <h3 className="text-xl xl:text-2xl 2xl:text-3xl font-bold text-gray-900">{currentContent.title}</h3>
                                            </div>
                                        </div>

                                        <p className="text-gray-700 leading-relaxed mb-2 xl:mb-3 2xl:mb-10 text-[10px] xl:text-sm 2xl:text-xl font-light">
                                            {currentContent.description}
                                        </p>

                                        <div className="space-y-0 xl:space-y-1 2xl:space-y-5">
                                            {currentContent.points.map((item, index) => (
                                                <motion.div
                                                    key={`${currentView}-${index}`}
                                                    initial={{ opacity: 0, x: -20 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    transition={{ duration: 0.6, delay: 0.2 + (index * 0.1) }}
                                                    className="flex items-start group/item"
                                                >
                                                    <div className="size-1 xl:size-2 bg-[#41a7ad] rounded-full mt-1 xl:mt-2.5 mr-2 xl:mr-5 flex-shrink-0 group-hover/item:scale-125 transition-transform duration-200"></div>
                                                    <span className="text-gray-600 leading-relaxed text-[10px] xl:text-xs 2xl:text-lg">{item}</span>
                                                </motion.div>
                                            ))}
                                        </div>
                                    </motion.div>
                                </AnimatePresence>
                            </div>
                        </div>
                    </motion.div>

                    {/* Side Image */}
                    <motion.div
                        variants={imageVariants}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        className="lg:col-span-1 relative h-full"
                    >
                        <div className="relative group h-full">
                            {/* Main image container with unique shape */}
                            <div className="relative h-[350px] md:h-[700px] lg:h-[360px] xl:h-[400px] 2xl:h-[600px] w-full">

                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={`${currentView}-image`}
                                        variants={imageTransitionVariants}
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate="enter"
                                        exit="exit"
                                        className="absolute inset-0"
                                    >
                                        <Image
                                            src={currentContent.image}
                                            alt={currentContent.alt}
                                            fill
                                            className="object-cover group-hover:scale-110 transition-transform duration-700 rounded-tr-4xl rounded-bl-4xl"
                                        />
                                    </motion.div>
                                </AnimatePresence>

                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}