import { motion, useAnimation } from "framer-motion";
import { Code, Brain, Globe, Smartphone, Database, Shield, Zap, Cog } from "lucide-react";
import { useState, useEffect } from "react";

const orbitingServices = [
    { icon: Code, title: "Custom Dev", color: "#00FFFF" },
    { icon: Brain, title: "AI & ML", color: "#00FFFF" },
    { icon: Globe, title: "Web Apps", color: "#00FFFF" },
    { icon: Smartphone, title: "Mobile", color: "#00FFFF" },
    { icon: Database, title: "Data Analytics", color: "#00FFFF" },
    { icon: Shield, title: "Security", color: "#00FFFF" },
    { icon: Zap, title: "Performance", color: "#00FFFF" },
    { icon: Cog, title: "DevOps", color: "#00FFFF" },
];

export default function OrbitingCloudHero() {
    const [hoveredCard, setHoveredCard] = useState<number | null>(null);
    const [activeIconIndex, setActiveIconIndex] = useState(0);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const cloudControls = useAnimation();

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({
                x: (e.clientX / window.innerWidth - 0.5) * 30,
                y: (e.clientY / window.innerHeight - 0.5) * 30,
            });
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    const handleCardHover = (index: number | null) => {
        setHoveredCard(index);
        if (index !== null) {
            cloudControls.start({
                scale: [1, 1.12, 1],
                transition: { duration: 0.8, ease: "easeInOut" },
            });
        } else {
            cloudControls.start({
                scale: 1,
                transition: { duration: 0.5 },
            });
        }
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIconIndex((prev) => (prev + 1) % orbitingServices.length);
        }, 5000); // Slowed down from 2000ms to 5000ms
        return () => clearInterval(interval);
    }, []);

    const radius = 240; // Increased for more spread
    const angleStep = (2 * Math.PI) / orbitingServices.length;
    const ActiveIcon = orbitingServices[activeIconIndex].icon;

    return (
        <div className="relative w-full h-full flex items-center justify-center overflow-visible">

            {/* Main container - adjusted sizing */}
            <div className="relative w-full max-w-[650px] aspect-square flex items-center justify-center">
                {/* Central Cloud */}
                <motion.div
                    className="absolute z-20 flex items-center justify-center"
                    initial={{ opacity: 0, scale: 0.3, y: 50 }}
                    animate={{
                        opacity: 1,
                        scale: 1,
                        y: [0, -15, 0],
                        rotateX: [0, 8, 0, -8, 0],
                        rotateY: [0, 15, 0, -15, 0],
                        x: mousePosition.x * 0.5,
                    }}
                    transition={{
                        opacity: { duration: 1 },
                        scale: { duration: 1 },
                        y: {
                            duration: 5,
                            repeat: Infinity,
                            ease: "easeInOut",
                        },
                        rotateX: {
                            duration: 10,
                            repeat: Infinity,
                            ease: "easeInOut",
                        },
                        rotateY: {
                            duration: 12,
                            repeat: Infinity,
                            ease: "easeInOut",
                        },
                        x: { duration: 0.6, ease: "easeOut" },
                    }}
                    style={{
                        transformStyle: "preserve-3d",
                        perspective: "1200px",
                    }}
                >
                    <motion.div
                        className="relative"
                        animate={cloudControls}
                        style={{
                            transformStyle: "preserve-3d",
                        }}
                    >
                        <div className="relative size-[340px]">

                            {/* Central Icon Display - reduced size */}
                            <motion.div
                                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
                                style={{
                                    transform: "translateZ(80px)",
                                }}
                            >
                                <motion.div
                                    animate={{
                                        filter: [
                                            "drop-shadow(0 0 30px rgba(0,255,255,0.9)) drop-shadow(0 0 60px rgba(0,255,255,0.5))",
                                            "drop-shadow(0 0 50px rgba(0,255,255,1)) drop-shadow(0 0 90px rgba(0,255,255,0.7))",
                                            "drop-shadow(0 0 30px rgba(0,255,255,0.9)) drop-shadow(0 0 60px rgba(0,255,255,0.5))",
                                        ],
                                    }}
                                    transition={{
                                        duration: 2.5,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                    }}
                                >
                                    <motion.div
                                        key={activeIconIndex}
                                        initial={{ scale: 0, rotate: -180, opacity: 0, y: 20 }}
                                        animate={{ 
                                            scale: 1, 
                                            rotate: 0, 
                                            opacity: 1,
                                            y: 0,
                                        }}
                                        exit={{ scale: 0, rotate: 180, opacity: 0, y: -20 }}
                                        transition={{ 
                                            duration: 0.7,
                                            ease: "easeOut",
                                            type: "spring",
                                            stiffness: 200,
                                        }}
                                    >
                                        <ActiveIcon
                                            className="w-32 h-32"
                                            strokeWidth={1.2}
                                            style={{
                                                color: "#00FFFF",
                                            }}
                                        />
                                    </motion.div>
                                </motion.div>
                            </motion.div>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Orbiting Cards - adjusted size */}
                {orbitingServices.map((service, index) => {
                    const angle = index * angleStep - Math.PI / 2;
                    const x = Math.cos(angle) * radius;
                    const y = Math.sin(angle) * radius;
                    const IconComponent = service.icon;
                    const isHovered = hoveredCard === index;
                    const isActive = activeIconIndex === index;

                    return (
                        <motion.div
                            key={`${service.title}-${index}`}
                            className="absolute z-10"
                            initial={{
                                opacity: 0,
                                scale: 0.3,
                                x: 0,
                                y: 0,
                            }}
                            animate={{
                                opacity: 1,
                                scale: 1,
                                x: x + (isHovered ? mousePosition.x * 0.1 : 0),
                                y: y + (isHovered ? mousePosition.y * 0.1 : 0),
                            }}
                            transition={{
                                duration: 0.9,
                                delay: index * 0.12,
                                type: "spring",
                                stiffness: 120,
                                damping: 25,
                            }}
                            style={{
                                left: "50%",
                                top: "50%",
                                marginLeft: "-60px",
                                marginTop: "-60px",
                            }}
                        >
                            <motion.div
                                className="relative group cursor-pointer"
                                whileHover={{
                                    scale: 1.25,
                                    z: 60,
                                    transition: {
                                        type: "spring",
                                        stiffness: 300,
                                        damping: 15,
                                    },
                                }}
                                onHoverStart={() => handleCardHover(index)}
                                onHoverEnd={() => handleCardHover(null)}
                            >
                                <motion.div
                                    className="relative backdrop-blur-2xl rounded-2xl p-5 w-28 h-28 flex flex-col items-center justify-center gap-2 transition-all duration-500 overflow-hidden"
                                    style={{
                                        background: isHovered || isActive 
                                            ? "linear-gradient(135deg, rgba(0,255,255,0.2), rgba(0,200,200,0.1))"
                                            : "linear-gradient(135deg, rgba(15,15,15,0.9), rgba(8,8,8,0.95))",
                                        border: isHovered || isActive 
                                            ? "2px solid rgba(0,255,255,0.7)"
                                            : "1.5px solid rgba(255,255,255,0.12)",
                                    }}
                                    transition={{ 
                                        duration: isHovered || isActive ? 2.5 : 0.5,
                                        repeat: isHovered || isActive ? Infinity : 0,
                                    }}
                                >
                                    {/* Shine sweep */}
                                    <motion.div
                                        className="absolute inset-0 opacity-0 rounded-2xl"
                                        style={{
                                            background: "linear-gradient(120deg, transparent 35%, rgba(0,255,255,0.4) 50%, transparent 65%)",
                                        }}
                                        animate={{
                                            opacity: isHovered ? [0, 0.6, 0] : 0,
                                            x: isHovered ? ["-150%", "250%"] : "0%",
                                        }}
                                        transition={{
                                            duration: 2,
                                            repeat: isHovered ? Infinity : 0,
                                            ease: "easeInOut",
                                        }}
                                    />
                                    
                                    <motion.div
                                        className="relative z-10"
                                        animate={{
                                            filter: isHovered || isActive
                                                ? [
                                                    "drop-shadow(0 0 15px #00FFFF) drop-shadow(0 0 25px #00FFFF80)",
                                                    "drop-shadow(0 0 25px #00FFFF) drop-shadow(0 0 40px #00FFFF80)",
                                                    "drop-shadow(0 0 15px #00FFFF) drop-shadow(0 0 25px #00FFFF80)",
                                                ]
                                                : "drop-shadow(0 0 5px #00FFFF40)",
                                            scale: isHovered || isActive ? [1, 1.15, 1] : 1,
                                            rotate: isHovered ? [0, 5, -5, 0] : 0,
                                        }}
                                        transition={{
                                            duration: isHovered || isActive ? 2.5 : 0.4,
                                            repeat: isHovered || isActive ? Infinity : 0,
                                        }}
                                    >
                                        <IconComponent
                                            className="w-9 h-9"
                                            strokeWidth={1.5}
                                            style={{ color: service.color }}
                                        />
                                    </motion.div>

                                    <motion.p
                                        className="text-[10px] font-bold text-center leading-tight z-10 tracking-wide"
                                        animate={{
                                            color: isHovered || isActive ? "#00FFFF" : "rgba(255, 255, 255, 0.9)",
                                        }}
                                        transition={{ duration: 0.4 }}
                                    >
                                        {service.title}
                                    </motion.p>
                                </motion.div>
                            </motion.div>
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
}