"use client";

import { useState } from "react";

interface TeamMember {
    id: string;
    name: string;
    role: string;
    department: string;
    image: string;
    bio: string;
    expertise: string[];
    social: {
        linkedin?: string;
        twitter?: string;
        email?: string;
    };
}


interface TeamMemberCardProps {
    member: TeamMember;
    index: number;
    className?: string;
}

export const executiveMembers: TeamMember[] = [
    {
        id: "1",
        name: "Maduabuchi Gerald",
        role: "Chief Executive Officer",
        department: "Leadership",
        image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
        bio: "Engineering architect passionate about scalable solutions. Marcus has pioneered breakthrough technologies that power millions of users worldwide.",
        expertise: ["System Architecture", "AI/ML", "Cloud Infrastructure", "DevOps"],
        social: {
            linkedin: "#",
            twitter: "#",
            email: "mgeraldoj@heuvera.com"
        },
    },
    {
        id: "2",
        name: "Fabunmi George",
        role: "Chief Technology Officer",
        department: "Technology",
        image: "/george.jpeg",
        bio: "Engineering architect passionate about scalable solutions. Marcus has pioneered breakthrough technologies that power millions of users worldwide.",
        expertise: ["System Architecture", "AI/ML", "Cloud Infrastructure", "DevOps"],
        social: {
            linkedin: "#",
            twitter: "#",
            email: "ftgeorge@heuvera.com"
        },
    },
];


export const teamMembers: TeamMember[] = [
    {
        id: "1",
        name: "Edward Sarah",
        role: "Project Manager",
        department: "null",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
        bio: "null",
        expertise: ["Brand Strategy", "UX Design", "Creative Direction", "Design Systems"],
        social: {
            linkedin: "#",
            twitter: "#",
            email: "sarahedward699@gmail.com"
        },

    },
    {
        id: "2",
        name: "Achara Favour",
        role: "Frontend Developer",
        department: "Web Design",
        image: "/favour.jpeg",
        bio: "A passionate Software Engineer passionate about crafting pixel‑perfect, responsive interfaces with React.js, Next.js while integrating AI models and tools",
        expertise: ["Next JS", "React JS"],
        social: {
            linkedin: "#",
            twitter: "https://twitter.com/favour2207",
            email: "acharafavour01@gmail.com"
        },

    },
    {
        id: "3",
        name: "Godwin Praise",
        role: "UI/UX Designer",
        department: "Design",
        image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop&crop=face",
        bio: "Aspiring Data Scientist and a UI/UX designer passionate about creating intuitive digital experiences and transforming data into actionable insights.",
        expertise: ["Figma", "Python", "Pandas", "Data Visualization"],
        social: {
            linkedin: "#",
            twitter: "https://x.com/oungel30489?s=21",
            email: "praiseg203@gmail.com.com"
        },

    },
    {
        id: "4",
        name: "Efetobore Emmanuel",
        role: "UI/UX Designer",
        department: "Design",
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face",
        bio: "Passionate about building secure, user0fruebdly digital experiences. Skilled in interface design, and innovative tech solutions, with a growing portfolio spanning mobile apps, web platforms and abstract designs.",
        expertise: ["UI?UX Design", "Prototyping", "Figma"],
        social: {
            linkedin: "#",
            email: "emmxy5ty5@gmail.com"
        },

    }
];


const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ member, index, className }) => {
    const [isFlipped, setIsFlipped] = useState<boolean>(false);
    const [imageLoaded, setImageLoaded] = useState<boolean>(false);

    return (
        <div
            className={`group relative h-96 md:h-56 xl:h-64 2xl:h-96 ${className}`}
            style={{
                perspective: '1000px',
                animationDelay: `${index * 150}ms`
            }}
            onMouseEnter={() => setIsFlipped(true)}
            onMouseLeave={() => setIsFlipped(false)}
        >
            {/* Card Container */}
            <div
                className="relative w-full h-full transition-transform duration-700"
                style={{
                    transformStyle: 'preserve-3d',
                    transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)'
                }}
            >

                {/* Front Side */}
                <div
                    className="absolute inset-0 w-full h-full"
                    style={{ backfaceVisibility: 'hidden' }}
                >
                    <div className="relative h-full bg-gradient-to-br from-white to-slate-50 rounded-2xl 2xl:rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-slate-200/50">
                        <div className="relative p-4 xl:p-6 2xl:p-8 h-full flex flex-col">
                            {/* Profile Image Section */}
                            <div className="relative mb-4 2xl:mb-6 mx-auto">
                                <div className="size-72 md:size-32 xl:size-40 2xl:size-60 mx-auto rounded-full overflow-hidden border-4 border-white shadow-lg">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className={`w-full h-full object-cover transition-all duration-500 ${imageLoaded ? 'scale-100 opacity-100' : 'scale-110 opacity-0'}`}
                                        onLoad={() => setImageLoaded(true)}
                                        onError={(e) => {
                                            const target = e.target as HTMLImageElement;
                                            target.style.display = 'none';
                                            const fallback = target.nextElementSibling as HTMLElement;
                                            if (fallback) fallback.classList.remove('hidden');
                                        }}
                                    />
                                    {/* Fallback Avatar */}
                                    <div className="hidden w-full h-full bg-slate-400 flex items-center justify-center text-white text-lg font-bold">
                                        {member.name.split(' ').map(n => n[0]).join('')}
                                    </div>
                                </div>
                            </div>

                            {/* Member Info */}
                            <div className="text-center flex-1 flex flex-col justify-between">
                                <div>
                                    <h3 className="text-xl md:text-sm 2xl:text-xl font-bold font-montserrat text-slate-900 mb-0 2xl:mb-2 transition-colors duration-300">
                                        {member.name}
                                    </h3>
                                    <p className="text-slate-600 font-medium font-poppins text-xs md:text-[10px] 2xl:text-sm tracking-wide mb-4">
                                        {member.role}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Back Side */}
                <div
                    className="absolute inset-0 w-full h-full"
                    style={{
                        backfaceVisibility: 'hidden',
                        transform: 'rotateY(180deg)'
                    }}
                >
                    <div className="relative h-full rounded-2xl 2xl:rounded-3xl shadow-2xl overflow-hidden text-white">
                        {/* Background Image */}
                        <div
                            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                            style={{
                                backgroundImage: `url(${member.image})`
                            }}
                        />

                        {/* Teal Overlay */}
                        <div
                            className="absolute inset-0"
                            style={{
                                backgroundColor: '#000000',
                                opacity: 0.5
                            }}
                        />

                        {/* Background Pattern */}
                        <div className="absolute inset-0 opacity-10">
                            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/20 to-transparent"></div>
                            <div className="absolute top-4 right-4 w-32 h-32 border border-white/20 rounded-full"></div>
                            <div className="absolute bottom-4 left-4 w-24 h-24 border border-white/20 rounded-full"></div>
                        </div>

                        <div className="relative p-4 xl:p-6 2xl:p-8 h-full flex flex-col justify-between z-10">
                            {/* Header */}
                            <div className="text-center">
                                <h3 className="text-xl md:text-sm 2xl:text-2xl font-bold mb-0 2xl:mb-2">{member.name}</h3>
                                <p className="text-xs md:text-[10px] 2xl:text-base text-slate-200 font-medium">{member.role}</p>
                            </div>

                            {/* Expertise */}
                            <div>
                                <h4 className="text-sm md:text-[10px] 2xl:text-sm font-semibold text-slate-200 mb-3 text-center">EXPERTISE</h4>
                                <div className="grid grid-cols-2 gap-2">
                                    {member.expertise.map((skill, skillIndex) => (
                                        <div
                                            key={skillIndex}
                                            className="text-center p-2 bg-white/10 rounded-sm 2xl:rounded-lg text-[8px] md:text-[5px] 2xl:text-[10px] font-medium backdrop-blur-sm border border-white/20"
                                        >
                                            {skill}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Social Links */}
                            <div className="flex justify-center space-x-3 2xl:space-x-4">
                                {member.social.linkedin && (
                                    <a href={member.social.linkedin} className="size-8 2xl:size-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors duration-200 backdrop-blur-sm">
                                        <span className="text-xs md:text-[10px] 2xl:text-sm font-bold">in</span>
                                    </a>
                                )}
                                {member.social.twitter && (
                                    <a href={member.social.twitter} className="size-8 2xl:size-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors duration-200 backdrop-blur-sm">
                                        <span className="text-xs md:text-[10px] 2xl:text-sm font-bold">𝕏</span>
                                    </a>
                                )}
                                {member.social.email && (
                                    <a href={`mailto:${member.social.email}`} className="size-8 2xl:size-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors duration-200 backdrop-blur-sm">
                                        <span className="text-xs md:text-[10px] 2xl:text-sm font-bold">@</span>
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TeamMemberCard;