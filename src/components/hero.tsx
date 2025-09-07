"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import SectionContainer from "./ui/sectionContainer";

interface HeroProps {
    imgLink: string;
    section: string;
    title: string;
    description?: string;
    height: string;
}

export default function Hero({ imgLink, section, title, description, height }: HeroProps) {
    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [0, 500], [0, 200]);
    const opacity = useTransform(scrollY, [0, 300], [1, 0]);
    const scale = useTransform(scrollY, [0, 500], [1, 1.1]);

    return (
        <div className={`relative ${height} overflow-hidden`}>
            {/* Parallax Background */}
            <motion.div
                style={{ y, scale }}
                className="absolute inset-0 w-full h-full"
            >
                <div className={`absolute w-full ${height} inset-0`}>
                    <Image
                        src={imgLink}
                        alt="Hero Background"
                        fill
                        className="object-cover"
                        priority
                        quality={100}
                    />
                    <div className="absolute inset-0 bg-[#00000099]" />
                </div>
            </motion.div>

            {/* Content */}
            <motion.div
                style={{ opacity }}
                className={`relative z-10 ${height} flex items-center justify-center`}
            >
                <SectionContainer className="w-full">
                    <div className="text-center flex flex-col justify-center items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="relative group mb-2"
                        >
                            <div className="flex items-center justify-center gap-2">
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
        </div>
    );
}