import SectionTitle from '@/components/ui/SectionTitle';
import { BarChart2, HandshakeIcon, RocketIcon, LucideIcon, ChartNoAxesCombined } from 'lucide-react';
import React, { useState, useEffect } from 'react';
import { BiBarChart } from 'react-icons/bi';

interface ValueItem {
    title: string;
    description: string;
    icon: LucideIcon;
    color: string;
    bgColor: string;
    textColor: string;
    position: { x: number; y: number };
}

const CultureSection: React.FC = () => {
    const [selectedValue, setSelectedValue] = useState<number>(0);
    const [isAnimating, setIsAnimating] = useState<boolean>(true);

    const values: ValueItem[] = [
        {
            title: "Innovation First",
            description: "We embrace bold ideas and calculated risks, fostering an environment where breakthrough thinking thrives and impossibilities become possibilities.",
            icon: RocketIcon,
            color: "from-cyan-500 to-[#41a7ad]",
            bgColor: "bg-[#41a7ad50]",
            textColor: "text-[#41a7ad]",
            position: { x: 20, y: 15 }
        },
        {
            title: "Collaborative Excellence",
            description: "Our strength lies in diverse perspectives working in harmony toward shared ambitious goals that reshape industries.",
            icon: HandshakeIcon,
            color: "from-cyan-500 to-[#41a7ad]",
            bgColor: "bg-[#41a7ad50]",
            textColor: "text-[#41a7ad]",
            position: { x: 80, y: 35 }
        },
        {
            title: "Continuous Evolution",
            description: "We invest in our people's development, believing that personal growth drives organizational success and societal impact.",
            icon: ChartNoAxesCombined,
            color: "from-cyan-500 to-[#41a7ad]",
            bgColor: "bg-[#41a7ad50]",
            textColor: "text-[#41a7ad]",
            position: { x: 20, y: 65 }
        }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            if (isAnimating) {
                setSelectedValue((prev) => (prev + 1) % values.length);
            }
        }, 3000);
        return () => clearInterval(interval);
    }, [isAnimating, values.length]);

    const handleValueClick = (index: number): void => {
        setSelectedValue(index);
        setIsAnimating(false);
        setTimeout(() => setIsAnimating(true), 5000);
    };

    return (
        <div className="">
            <SectionTitle
                section='OUR DNA'
                title='Our Core Identity'
                subtitle='The core values that drive everything we do and define who we are as a collective force of innovation.'
            />

            <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* DNA Helix Visualization */}
                <div className="relative">
                    <div className="relative w-full h-96 mx-auto">
                        {/* DNA Helix Background */}
                        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 300">
                            <defs>
                                <linearGradient id="helixGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" stopColor="#000000" stopOpacity="0.3" />
                                    <stop offset="50%" stopColor="#41a7ad" stopOpacity="0.5" />
                                    <stop offset="100%" stopColor="#000000" stopOpacity="0.3" />
                                </linearGradient>
                            </defs>

                            {/* Left Helix Strand */}
                            <path
                                d="M60 20 Q40 60 60 100 Q80 140 60 180 Q40 220 60 260"
                                stroke="url(#helixGradient)"
                                strokeWidth="3"
                                fill="none"
                                className="animate-pulse"
                            />

                            {/* Right Helix Strand */}
                            <path
                                d="M140 20 Q160 60 140 100 Q120 140 140 180 Q160 220 140 260"
                                stroke="url(#helixGradient)"
                                strokeWidth="3"
                                fill="none"
                                className="animate-pulse"
                            />

                            {/* Connecting Base Pairs */}
                            {[0, 1, 2].map((index) => {
                                const y = 80 + index * 60;
                                const isActive = selectedValue === index;
                                return (
                                    <g key={index}>
                                        <line
                                            x1="60"
                                            y1={y}
                                            x2="140"
                                            y2={y}
                                            stroke={isActive ? '#000000' : '#e2e8f0'}
                                            strokeWidth={isActive ? '4' : '2'}
                                            className={`transition-all duration-500 ${isActive ? 'animate-pulse' : ''}`}
                                        />
                                        <circle
                                            cx="60"
                                            cy={y}
                                            r={isActive ? '8' : '5'}
                                            fill={isActive ? '#000000' : '#94a3b8'}
                                            className="transition-all duration-500"
                                        />
                                        <circle
                                            cx="140"
                                            cy={y}
                                            r={isActive ? '8' : '5'}
                                            fill={isActive ? '#41a7ad' : '#94a3b8'}
                                            className="transition-all duration-500"
                                        />
                                    </g>
                                );
                            })}
                        </svg>

                        {/* Value Points */}
                        {values.map((value, index) => {
                            const IconComponent = value.icon;
                            return (
                                <div
                                    key={index}
                                    className={`absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-all duration-500 ${selectedValue === index ? 'scale-110 z-10' : 'scale-100 hover:scale-105'
                                        }`}
                                    style={{
                                        left: `${value.position.x}%`,
                                        top: `${value.position.y}%`
                                    }}
                                    onClick={() => handleValueClick(index)}
                                >
                                    <div
                                        className={`size-14 2xl:size-16 rounded-full flex items-center justify-center text-2xl shadow-lg border-4 transition-all duration-500 ${selectedValue === index
                                            ? `${value.bgColor} border-current ${value.textColor} shadow-xl`
                                            : 'bg-white border-slate-200 hover:shadow-lg'
                                            }`}
                                    >
                                        <IconComponent className='size-5 2xl:size-6' />
                                    </div>

                                    {/* Connection Lines */}
                                    <div
                                        className={`absolute w-1 bg-gradient-to-b transition-all duration-500 ${selectedValue === index ? value.color : 'from-slate-300 to-slate-300'
                                            }`}
                                        style={{
                                            height: '60px',
                                            left: '50%',
                                            transform: 'translateX(-50%)',
                                            top: selectedValue === index ? '70px' : '65px'
                                        }}
                                    />
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Interactive Content */}
                <div className="space-y-8">
                    {values.map((value, index) => {
                        const IconComponent = value.icon;
                        return (
                            <div
                                key={index}
                                className={`relative p-6 rounded-2xl border-2 cursor-pointer transition-all duration-500 ${selectedValue === index
                                    ? `${value.bgColor} border-current ${value.textColor} shadow-lg scale-105`
                                    : 'bg-white border-slate-200 hover:border-slate-300 hover:shadow-md'
                                    }`}
                                onClick={() => handleValueClick(index)}
                            >
                                <div className="flex items-start space-x-4">
                                    <div
                                        className={`transition-all duration-300 ${selectedValue === index ? 'scale-110' : ''
                                            }`}
                                    >
                                        <IconComponent className='size-5 2xl:size-6' />
                                    </div>
                                    <div className="flex-1">
                                        <h3
                                            className={`text-sm 2xl:text-xl font-bold mb-1 2xl:mb-3 transition-colors duration-300 ${selectedValue === index ? value.textColor : 'text-slate-900'
                                                }`}
                                        >
                                            {value.title}
                                        </h3>
                                        <p
                                            className={`text-xs 2xl:text-base leading-relaxed transition-colors duration-300 ${selectedValue === index ? 'text-slate-700' : 'text-slate-600'
                                                }`}
                                        >
                                            {value.description}
                                        </p>
                                    </div>
                                </div>

                                {/* Selection Indicator */}
                                <div
                                    className={`absolute right-4 top-4 size-2 2xl:size-3 rounded-full transition-all duration-300 ${selectedValue === index ? `bg-gradient-to-r ${value.color}` : 'bg-slate-300'
                                        }`}
                                />
                            </div>
                        );
                    })}

                    {/* Progress Indicator */}
                    <div className="flex justify-center space-x-2 pt-4">
                        {values.map((_, index) => (
                            <button
                                key={index}
                                className={`size-1.5 2xl:size-2 rounded-full transition-all duration-300 ${selectedValue === index ? 'bg-[#41a7ad] w-6 2xl:w-8' : 'bg-[#41a7ad30]'
                                    }`}
                                onClick={() => handleValueClick(index)}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CultureSection;