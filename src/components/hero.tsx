"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import SectionContainer from "../ui/sectionContainer";

interface HeroProps {
    imgLink: string;
    section: string;
    title: string;
    description: string;
}

export default function Hero({ imgLink, section, title, description }: HeroProps) {
    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [0, 500], [0, 200]);
    const opacity = useTransform(scrollY, [0, 300], [1, 0]);
    const scale = useTransform(scrollY, [0, 500], [1, 1.1]);

    return (
        <div className="relative min-h-screen overflow-hidden">
            {/* Parallax Background */}
            <motion.div
                style={{ y, scale }}
                className="absolute inset-0 w-full h-full"
            >
                <div className="absolute w-full h-screen inset-0">
                    <Image
                        src={imgLink}
                        alt="Hero Background"
                        fill
                        className="object-cover"
                        priority
                        quality={100}
                    />
                    {/* Enhanced gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/70" />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/20" />
                </div>
            </motion.div>

            {/* Content */}
            <motion.div
                style={{ opacity }}
                className="relative z-10 h-screen flex items-center"
            >
                <SectionContainer className="w-full">
                    <div className="max-w-4xl text-center lg:text-start">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="relative group mb-2"
                        >
                            <div className="flex items-center justify-center lg:justify-start gap-2">
                                <div className="relative">
                                    <div className="w-8 h-px bg-gradient-to-r from-transparent via-[#41a7ad] to-transparent"></div>
                                    <motion.div
                                        animate={{ scale: [1, 1.2, 1] }}
                                        transition={{ duration: 2, repeat: Infinity }}
                                        className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-[#41a7ad] rounded-full shadow-lg shadow-[#41a7ad]/50"
                                    />
                                </div>
                                <span className="text-white/80 text-xs lg:text-[10px] xl:text-xs font-light tracking-wider uppercase font-montserrat">
                                    {section}
                                </span>
                            </div>
                        </motion.div>
                        {/* Main heading */}
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="font-montserrat uppercase font-bold text-2xl md:text-4xl lg:text-2xl xl:text-3xl 2xl:text-4xl leading-tight text-white tracking-tight mb-5 lg:mb-2"
                        >
                            {title}
                        </motion.h1>

                        {/* Description */}
                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="text-sm sm:text-base md:text-lg lg:text-xs xl:text-sm 2xl:text-lg text-gray-200 leading-relaxed max-w lg:max-w-xl xl:max-w-3xl 2xl:max-w-4xl mx-auto lg:mx-0"
                        >
                            {description}
                        </motion.p>

                    </div>
                </SectionContainer>
            </motion.div>

            {/* Floating elements for visual interest */}
            <div className="absolute inset-0 pointer-events-none">
                <motion.div
                    animate={{
                        y: [0, -20, 0],
                        opacity: [0.3, 0.6, 0.3]
                    }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute top-1/4 right-1/4 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-full blur-xl"
                />

                <motion.div
                    animate={{
                        y: [0, 30, 0],
                        opacity: [0.2, 0.5, 0.2]
                    }}
                    transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 2
                    }}
                    className="absolute bottom-1/3 left-1/4 w-24 h-24 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-full blur-xl"
                />
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
            >
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="flex flex-col items-center text-white/70 hover:text-white transition-colors cursor-pointer"
                >
                    <span className="text-sm mb-2 font-medium">Scroll</span>
                    <div className="w-px h-12 bg-gradient-to-b from-white/70 to-transparent" />
                </motion.div>
            </motion.div>
        </div>
    );
}