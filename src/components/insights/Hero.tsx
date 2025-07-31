import { useScroll, useTransform, motion } from "framer-motion";
import { ArrowRight, CalendarDays } from "lucide-react";
import { useState, useEffect } from "react";
import BlogPreview from "./BlogPreview";
import CaseStudies from "./CaseStudies";
import Services from "./Services";
import WhoWeAre from "./WhoWeAre";
import WhyChooseUs from "./WhyChooseUs";
import Image from "next/image"
const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (delay = 0) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay,
            type: "spring",
            stiffness: 60,
            damping: 18,
        },
    }),
};

export default function Hero() {
    const [mounted, setMounted] = useState(false);
    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [0, 500], [0, 200]);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <div className="relative min-h-screen overflow-hidden inset-0 z-0">
            {/* Parallax Background */}
            <motion.div
                style={{ y }}
                className="absolute inset-0 w-full h-full"
            >
                <div className="absolute w-full h-screen inset-0">
                    <Image
                        src="/hero.jpg"
                        alt="Hero Background"
                        fill
                        className="object-cover"
                        priority
                        quality={100}
                    />
                    <div className="absolute inset-0 bg-black/50" />
                </div>
            </motion.div>

            {/* Content */}
            <div className="relative min-h-screen flex items-center pb-20 px-4 md:px-8 lg:px-16 xl:px-40">
                <div className="w-full max-w-4xl mx-auto">
                    <div className="items-center">
                        {/* Left Content */}
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            className="text-white space-y-8 text-center"
                        >
                            <motion.h1
                                variants={fadeInUp}
                                custom={0.2}
                                className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
                            >
                                <span className="text-[#2cd16c]">Empowering Innovation</span>
                                <br />
                                <span className="text-white">Through Intelligent Technology</span>
                            </motion.h1>

                            <motion.p
                                variants={fadeInUp}
                                custom={0.4}
                                className="text-lg md:text-xl text-gray-200 leading-relaxed"
                            >
                                We design, develop, and deliver custom software, AI solutions, and IT consulting services that transform businesses and drive measurable growth across industries.
                            </motion.p>

                            <motion.div
                                variants={fadeInUp}
                                custom={0.6}
                                className="flex flex-wrap gap-4 mx-auto w-full max-w-md justify-center"
                            >
                                <button className="group items-center flex px-6 py-3 bg-[#2cd16c] text-sm rounded-full text-black font-semibold transition-all duration-300 hover:bg-[#25b05c]">
                                    Explore Our Solutions
                                    <ArrowRight className="size-4 ml-2 transition-transform group-hover:translate-x-1" />
                                </button>

                                <button className="group items-center flex px-6 py-3 bg-white/10 backdrop-blur-sm text-white text-sm rounded-full font-semibold transition-all duration-300 hover:bg-white/20">
                                    Book a Consultation
                                    <CalendarDays className="size-4 ml-2 transition-transform group-hover:translate-x-1" />
                                </button>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </div>
            <div className="flex items-center gap-2 absolute bottom-10 left-44">
                <div className="size-3 rounded-full bg-[#2CD16C]" />
                <h1 className="text-white font-semibold">Clients We've Served</h1>
            </div>
        </div>
    );
};
