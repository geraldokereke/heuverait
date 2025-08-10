"use client";

import { motion, AnimatePresence, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

interface SideImageProps {
    imgsrc: string;
    className?: string;
    borderSide: 'left' | 'right' | 'top' | 'bottom' | 'none' | 'all';
    height?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full' | 'auto';
}

export default function SideImage({ imgsrc, className = "", borderSide, height = "md" }: SideImageProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const getRoundedClasses = (side: string) => {
        switch (side) {
            case 'left':
                return 'rounded-tl-4xl rounded-bl-4xl';
            case 'right':
                return 'rounded-tr-4xl rounded-br-4xl';
            case 'top':
                return 'rounded-tl-4xl rounded-tr-4xl';
            case 'bottom':
                return 'rounded-bl-4xl rounded-br-4xl';
            case 'none':
                return '';
            case 'all':
                return 'rounded-2xl';
            default:
                return 'rounded-tr-4xl rounded-bl-4xl';
        }
    };

    const getHeightClasses = (heightSize: string) => {
        switch (heightSize) {
            case 'sm':
                return 'h-[200px] md:h-[300px] lg:h-[250px] xl:h-[280px] 2xl:h-[350px]';
            case 'md':
                return 'h-[350px] md:h-[700px] lg:h-[360px] xl:h-[400px] 2xl:h-[600px]';
            case 'lg':
                return 'h-[400px] md:h-[300px] lg:h-[200px] xl:h-[250px] 2xl:h-[400px]';
            case 'xl':
                return 'h-[600px] md:h-[350px] lg:h-[250px] xl:h-[300px] 2xl:h-[450px]';
            case '2xl':
                return 'h-[600px] md:h-[1000px] lg:h-[650px] xl:h-[700px] 2xl:h-[900px]';
            case 'full':
                return 'h-full';
            case 'auto':
                return 'h-auto';
            default:
                return 'h-[600px] md:h-[350px] lg:h-[250px] xl:h-[350px] 2xl:h-[450px]';
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

    return (
        <motion.div
            ref={ref}
            variants={imageVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className={`lg:col-span-1 relative h-full ${className}`}
        >
            <div className="relative group h-full">
                <div className={`relative w-full ${getHeightClasses(height)}`}>
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={1}
                            variants={imageTransitionVariants}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate="enter"
                            exit="exit"
                            className="absolute inset-0"
                        >
                            <Image
                                src={imgsrc}
                                alt="Side image"
                                fill
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                unoptimized
                                className={`object-cover group-hover:scale-110 transition-transform duration-700 ${getRoundedClasses(borderSide)}`}
                            />
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </motion.div>
    );
}