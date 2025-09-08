import { useScroll, useTransform, motion, AnimatePresence } from "framer-motion";
import { ArrowRight, CalendarDays, Code, Brain, Globe, Shield, Database, Smartphone, Cloud, Cog, Zap } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import Image from "next/image"
import Button from "../ui/button";

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

const smoothCardVariants = {
    hidden: {
        opacity: 0,
        y: 20,
        scale: 0.95,
        filter: "blur(4px)"
    },
    visible: (delay = 0) => ({
        opacity: 1,
        y: 0,
        scale: 1,
        filter: "blur(0px)",
        transition: {
            delay,
            type: "spring",
            stiffness: 80,
            damping: 25,
            duration: 0.8,
        },
    }),
};

const services = [
    {
        icon: Code,
        title: "Custom Software Development",
        description: "Tailored solutions built for your unique needs",
        color: "#41a7ad"
    },
    {
        icon: Brain,
        title: "AI & Machine Learning",
        description: "Intelligent automation and data-driven insights",
        color: "#3b82f6"
    },
    {
        icon: Globe,
        title: "Web Development",
        description: "Modern, responsive websites and applications",
        color: "#f59e0b"
    },
    {
        icon: Smartphone,
        title: "Mobile Apps",
        description: "Native and cross-platform mobile solutions",
        color: "#ef4444"
    },
    {
        icon: Database,
        title: "Data Analytics",
        description: "Transform data into actionable business intelligence",
        color: "#8b5cf6"
    },
    {
        icon: Shield,
        title: "IT Consulting",
        description: "Strategic technology guidance and support",
        color: "#06b6d4"
    },
    {
        icon: Cloud,
        title: "Cloud Solutions",
        description: "Scalable cloud infrastructure and migration services",
        color: "#ec4899"
    },
    {
        icon: Cog,
        title: "DevOps & Automation",
        description: "Streamlined deployment and continuous integration",
        color: "#10b981"
    },
    {
        icon: Zap,
        title: "Performance Optimization",
        description: "Enhanced speed and efficiency for existing systems",
        color: "#f97316"
    }
];

export default function Hero() {
    const [mounted, setMounted] = useState(false);
    const [shuffledServices, setShuffledServices] = useState(services);
    const [isShuffling, setIsShuffling] = useState(false);
    const [hoveredCard, setHoveredCard] = useState<number | null>(null);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);
    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [0, 500], [0, 200]);

    const shuffleServices = () => {
        if (isShuffling) return; // Prevent multiple shuffles at once

        setIsShuffling(true);
        const shuffled = [...services].sort(() => Math.random() - 0.5);

        // Use a more reliable timeout
        const timeoutId = setTimeout(() => {
            setShuffledServices(shuffled);
            setTimeout(() => {
                setIsShuffling(false);
            }, 100); // Small delay to ensure state update
        }, 400);

        return () => clearTimeout(timeoutId);
    };

    useEffect(() => {
        setMounted(true);

        // Start the shuffle animation loop with more reliable interval
        const startShuffleInterval = () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }

            intervalRef.current = setInterval(() => {
                if (!isShuffling) { // Only shuffle if not already shuffling
                    shuffleServices();
                }
            }, 8000);
        };

        // Start after a short delay to ensure component is fully mounted
        const initTimeout = setTimeout(startShuffleInterval, 1000);

        return () => {
            clearTimeout(initTimeout);
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        };
    }, [isShuffling]);

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
                    {/* Darkened overlay */}
                    <div className="absolute inset-0 bg-black/40" />
                </div>
            </motion.div>

            {/* Content */}
            <div className="relative min-h-screen flex items-center justify-center">
                <div className="w-full max-w-2xl md:max-w-4xl lg:max-w-4xl xl:max-w-7xl 2xl:max-w-screen-2xl mx-auto px-4 md:px-10 lg:px-20 xl:px-24">
                    <div className="flex flex-col lg:flex-row items-center w-full gap-6 lg:gap-8">
                        {/* Left Content */}
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            className="text-white space-y-4 sm:space-y-6 text-center lg:text-left w-full lg:w-1/2 order-2 lg:order-1"
                        >
                            <motion.h1
                                variants={fadeInUp}
                                custom={0.2}
                                className="font-montserrat uppercase font-bold text-2xl md:text-4xl lg:text-2xl xl:text-3xl 2xl:text-4xl leading-tight text-white tracking-tight"
                            >
                                <span className="text-white">Accelerate Growth</span>
                                <br />
                                <span className="text-white">with Enterprise Technology Solutions</span>
                            </motion.h1>

                            <motion.p
                                variants={fadeInUp}
                                custom={0.4}
                                className="text-sm sm:text-base md:text-lg lg:text-xs xl:text-sm 2xl:text-lg text-gray-200 leading-relaxed max-w-xl mx-auto lg:mx-0"
                            >
                                Heuvera delivers IT consulting for digital transformation, cloud consulting, enterprise software, and cybersecurity solutions—helping global organizations modernize, secure, and scale.
                            </motion.p>

                            <motion.div
                                variants={fadeInUp}
                                custom={0.6}
                                className="flex flex-row gap-3 justify-center lg:justify-start items-center"
                            >
                                <Button
                                    backgroundColor="primary"
                                    textColor="black"
                                    type="default"
                                    onClick="/contact-us"
                                >
                                    Request a Consultation
                                </Button>
                                <Button
                                    backgroundColor="white/20"
                                    textColor="white"
                                    type="default"
                                    onClick="/"
                                >
                                    Explore Services
                                </Button>
                            </motion.div>
                        </motion.div>

                        {/* Right Content - Enhanced Service Cards Grid */}
                        <div className="hidden md:block w-full lg:w-1/2 relative order-1 lg:order-2 max-w-sm lg:max-w-md xl:max-w-md 2xl:max-w-2xl mx-auto">
                            {/* Enhanced floating particles background */}
                            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                                {[...Array(12)].map((_, i) => (
                                    <motion.div
                                        key={i}
                                        className="absolute rounded-full hidden sm:block"
                                        style={{
                                            width: Math.random() * 3 + 1,
                                            height: Math.random() * 3 + 1,
                                            backgroundColor: i % 3 === 0 ? '#41a7ad' : i % 3 === 1 ? '#3b82f6' : '#f59e0b',
                                            opacity: 0.4,
                                        }}
                                        animate={{
                                            x: [0, Math.random() * 200 - 100],
                                            y: [0, Math.random() * 200 - 100],
                                            opacity: [0, 0.6, 0],
                                            scale: [0, 1, 0],
                                        }}
                                        transition={{
                                            duration: Math.random() * 4 + 3,
                                            repeat: Infinity,
                                            delay: Math.random() * 3,
                                            ease: "easeInOut",
                                        }}
                                        initial={{
                                            left: `${Math.random() * 100}%`,
                                            top: `${Math.random() * 100}%`,
                                        }}
                                    />
                                ))}
                            </div>

                            {/* Ambient glow effect */}
                            {/* <motion.div
                                className="absolute inset-0 rounded-3xl"
                                animate={{
                                    background: [
                                        "radial-gradient(circle at 20% 20%, rgba(44, 209, 108, 0.1) 0%, transparent 50%)",
                                        "radial-gradient(circle at 80% 80%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)",
                                        "radial-gradient(circle at 50% 50%, rgba(245, 158, 11, 0.1) 0%, transparent 50%)",
                                        "radial-gradient(circle at 20% 20%, rgba(44, 209, 108, 0.1) 0%, transparent 50%)",
                                    ],
                                }}
                                transition={{
                                    duration: 8,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                            /> */}

                            <motion.div
                                initial="hidden"
                                animate={isShuffling ? {
                                    rotateY: [0, 2, -2, 0],
                                    scale: [1, 1.02, 1]
                                } : "visible"}
                                transition={{
                                    duration: 0.8,
                                    ease: "easeInOut",
                                }}
                                className="grid grid-cols-3 gap-3 sm:gap-4 relative z-10"
                            >

                                <AnimatePresence mode="wait">
                                    {shuffledServices.map((service, index) => {
                                        const IconComponent = service.icon;
                                        const isHovered = hoveredCard === index;

                                        return (
                                            <motion.div
                                                key={`${service.title}-${index}`}
                                                layout
                                                variants={smoothCardVariants}
                                                custom={0.1 + index * 0.08}
                                                initial={{
                                                    opacity: 0,
                                                    y: 30,
                                                    scale: 0.9,
                                                    filter: "blur(8px)",
                                                    rotateX: -10
                                                }}
                                                animate={{
                                                    opacity: isShuffling ? 0.3 : 1,
                                                    y: 0,
                                                    scale: 1,
                                                    filter: "blur(0px)",
                                                    rotateX: 0
                                                }}
                                                exit={{
                                                    opacity: 0,
                                                    y: -30,
                                                    scale: 0.9,
                                                    filter: "blur(8px)",
                                                    rotateX: 10
                                                }}
                                                whileHover={{
                                                    y: -3,
                                                    scale: 1.02,
                                                    rotateX: 1,
                                                    rotateY: 1,
                                                    transition: {
                                                        type: "spring",
                                                        stiffness: 400,
                                                        damping: 25
                                                    }
                                                }}
                                                transition={{
                                                    duration: 0.7,
                                                    delay: index * 0.1,
                                                    type: "spring",
                                                    stiffness: 100,
                                                    damping: 25,
                                                }}
                                                className="group relative cursor-pointer transform-gpu aspect-square"
                                                onMouseEnter={() => setHoveredCard(index)}
                                                onMouseLeave={() => setHoveredCard(null)}
                                                style={{
                                                    transformStyle: 'preserve-3d',
                                                }}
                                            >
                                                {/* Main card with glassmorphism effect */}
                                                <motion.div
                                                    className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-lg sm:rounded-xl p-2 sm:p-3 transition-all duration-500 overflow-hidden w-full h-full flex flex-col justify-center"
                                                    animate={{
                                                        backgroundColor: isHovered ? "rgba(255, 255, 255, 0.15)" : "rgba(255, 255, 255, 0.08)",
                                                        borderColor: isHovered ? "rgba(255, 255, 255, 0.4)" : "rgba(255, 255, 255, 0.2)",
                                                        boxShadow: isHovered
                                                            ? `0 20px 40px rgba(${service.color === '#41a7ad' ? '44, 209, 108' : '255, 255, 255'}, 0.15), 0 0 0 1px ${service.color}40`
                                                            : `0 8px 32px rgba(0, 0, 0, 0.1)`,
                                                    }}
                                                >
                                                    {/* Animated background gradient */}
                                                    <motion.div
                                                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                                                        animate={{
                                                            background: [
                                                                `linear-gradient(135deg, ${service.color}10 0%, transparent 70%)`,
                                                                `linear-gradient(225deg, ${service.color}15 0%, transparent 70%)`,
                                                                `linear-gradient(135deg, ${service.color}10 0%, transparent 70%)`,
                                                            ],
                                                        }}
                                                        transition={{
                                                            duration: 3,
                                                            repeat: Infinity,
                                                            ease: "easeInOut",
                                                        }}
                                                    />

                                                    <div className="flex flex-col items-center text-center relative z-10 h-full justify-center space-y-5">
                                                        {/* Enhanced icon with floating animation */}
                                                        <motion.div
                                                            className="relative p-1 sm:p-1.5 rounded-md sm:rounded-lg transition-all duration-500 flex-shrink-0"
                                                            style={{
                                                                backgroundColor: `${service.color}20`,
                                                            }}
                                                            animate={isHovered ? {
                                                                y: [-1, 1, -1], // Reduced floating distance
                                                                rotate: [0, 3, -3, 0], // Reduced rotation
                                                                scale: 1.05, // Reduced scale
                                                            } : {
                                                                y: 0,
                                                                rotate: 0,
                                                                scale: 1,
                                                            }}
                                                            transition={{
                                                                duration: isHovered ? 2 : 0.5,
                                                                repeat: isHovered ? Infinity : 0,
                                                                ease: "easeInOut",
                                                            }}
                                                        >
                                                            {/* Pulsing glow */}
                                                            <motion.div
                                                                className="absolute inset-0 rounded-md sm:rounded-lg"
                                                                animate={{
                                                                    boxShadow: isHovered
                                                                        ? [
                                                                            `0 0 15px ${service.color}50`, // Reduced glow intensity
                                                                            `0 0 25px ${service.color}70`,
                                                                            `0 0 15px ${service.color}50`,
                                                                        ]
                                                                        : `0 0 8px ${service.color}30`,
                                                                }}
                                                                transition={{
                                                                    duration: 2,
                                                                    repeat: isHovered ? Infinity : 0,
                                                                    ease: "easeInOut",
                                                                }}
                                                            />

                                                            <IconComponent
                                                                className="size-3 sm:size-4 relative z-10 transition-all duration-300"
                                                                style={{ color: service.color }}
                                                            />
                                                        </motion.div>

                                                        <div className="flex flex flex-col justify-center space-y-0.5"> {/* Added small top margin */}
                                                            <motion.h3
                                                                className="text-white font-semibold text-[9px] sm:text-[10px] leading-tight line-clamp-2"
                                                                animate={{
                                                                    color: isHovered ? service.color : "#ffffff",
                                                                }}
                                                                transition={{ duration: 0.3 }}
                                                            >
                                                                {service.title}
                                                            </motion.h3>

                                                            <motion.p
                                                                className="text-gray-300 text-[7px] sm:text-[8px] leading-relaxed transition-all duration-300 line-clamp-2"
                                                                animate={{
                                                                    opacity: isHovered ? 1 : 0.8,
                                                                    y: isHovered ? 0 : 1, // Reduced movement
                                                                }}
                                                            >
                                                                {service.description}
                                                            </motion.p>
                                                        </div>
                                                    </div>

                                                    {/* Shimmer effect on hover */}
                                                    <motion.div
                                                        className="absolute inset-0 opacity-0 group-hover:opacity-100"
                                                        animate={{
                                                            background: [
                                                                "linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.1) 50%, transparent 100%)",
                                                                "linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.1) 50%, transparent 100%)",
                                                            ],
                                                            x: [-100, 400],
                                                        }}
                                                        transition={{
                                                            duration: 1.5,
                                                            repeat: Infinity,
                                                            repeatDelay: 3,
                                                            ease: "easeInOut",
                                                        }}
                                                    />
                                                </motion.div>

                                                {/* Enhanced depth shadow */}
                                                <motion.div
                                                    className="absolute inset-0 rounded-lg sm:rounded-xl -z-10"
                                                    animate={{
                                                        boxShadow: isHovered
                                                            ? `0 25px 50px rgba(${service.color === '#41a7ad' ? '44, 209, 108' : '0, 0, 0'}, 0.2)`
                                                            : "0 10px 25px rgba(0, 0, 0, 0.1)",
                                                        y: isHovered ? 4 : 2,
                                                        scale: isHovered ? 1.02 : 1,
                                                    }}
                                                    transition={{ duration: 0.3 }}
                                                />
                                            </motion.div>
                                        );
                                    })}
                                </AnimatePresence>
                            </motion.div>
                        </div>

                        {/* Enhanced 3D Grid Lines with animation */}
                        <div className="absolute inset-0 pointer-events-none opacity-5 hidden lg:block">
                            <motion.svg
                                className="w-full h-full"
                                viewBox="0 0 300 300"
                                animate={{
                                    opacity: [0.05, 0.15, 0.05],
                                }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                            >
                                <defs>
                                    <pattern id="grid" width="100" height="100" patternUnits="userSpaceOnUse">
                                        <path d="M 100 0 L 0 0 0 100" fill="none" stroke="#41a7ad" strokeWidth="0.5" />
                                    </pattern>
                                    <pattern id="dots" width="50" height="50" patternUnits="userSpaceOnUse">
                                        <circle cx="25" cy="25" r="1" fill="#41a7ad" opacity="0.3" />
                                    </pattern>
                                </defs>
                                <rect width="100%" height="100%" fill="url(#grid)" />
                                <rect width="100%" height="100%" fill="url(#dots)" />
                            </motion.svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};