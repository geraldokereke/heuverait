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


export const teamMembers: TeamMember[] = [
    {
        id: "1",
        name: "Maduabuchi Gerald",
        role: "Co-Founder | Head of Growth",
        department: "Growth & Strategy",
        image: "/gerald.jpeg",
        bio: "Driving company growth through strategic partnerships, market expansion, and operational excellence.",
        expertise: ["System Architecture", "AI/ML", "Cloud Infrastructure", "DevOps"],
        social: {
            linkedin: "https://www.linkedin.com/in/gerald-ogbonnaya-61bb29233/",
            twitter: "#",
            email: "mgeraldoj@gmail.com"
        }
    },
    {
        id: "2",
        name: "Fabunmi George",
        role: "Co-Founder | Head of Product",
        department: "Product & Engineering",
        image: "/george.jpg",
        bio: "Leading product vision and client-focused engineering to deliver high-performing web and mobile applications.",
        expertise: ["NextJS", "Flutter/React Native", "UI/UX Design", "Performance Optimization"],
        social: {
            linkedin: "https://www.linkedin.com/in/oluwatosin-fabunmi-86bb8323b/",
            twitter: "https://x.com/gary_ftg?s=21",
            email: "ftgeorge@gmail.com"
        }
    },
    {
        id: "3",
        name: "Edward Sarah",
        role: "Team Lead | Project Delivery",
        department: "Project Delivery",
        image: "/sarah.jpeg",
        bio: "Ensuring seamless project execution by aligning technical teams with client objectives and timelines.",
        expertise: ["Project Management", "React JS", "Creative Direction & Strategy"],
        social: {
            linkedin: "https://www.linkedin.com/in/sarah-edward-621728306?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
            email: "sarahedward699@gmail.com"
        }
    },
    {
        id: "4",
        name: "Achara Favour",
        role: "Frontend Engineer",
        department: "Engineering",
        image: "/favour.jpeg",
        bio: "Building interactive, high-performance user interfaces using React.js and modern web technologies.",
        expertise: ["AI/ML", "React JS"],
        social: {
            linkedin: "#",
            twitter: "https://twitter.com/favour2207",
            email: "acharafavour01@gmail.com"
        }
    },
    {
        id: "5",
        name: "Godwin Praise",
        role: "UX Engineer",
        department: "Design & Experience",
        image: "/praise.jpeg",
        bio: "Combining design and data insights to create seamless and intuitive user experiences.",
        expertise: ["Figma", "Python", "Pandas", "Data Visualization"],
        social: {
            linkedin: "https://www.linkedin.com/in/praise-godwin-a6a339263?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
            twitter: "https://x.com/oungel30489?s=21",
            email: "praiseg203@gmail.com"
        }
    },
    {
        id: "6",
        name: "Efetobore Emmanuel",
        role: "UX Designer",
        department: "Design & Experience",
        image: "/emmanuel.jpeg",
        bio: "Designing clean, user-centered interfaces with a focus on usability and accessibility.",
        expertise: ["UI/UX Design", "Prototyping", "Figma"],
        social: {
            linkedin: "https://www.linkedin.com/in/emmanuel-akpojiyovwi-ba202937a/",
            email: "emmxy5ty5@gmail.com"
        }
    }


];

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ member, index, className }) => {
    const [isFlipped, setIsFlipped] = useState<boolean>(false);
    const [imageLoaded, setImageLoaded] = useState<boolean>(false);
    const [imageError, setImageError] = useState<boolean>(false);

    const handleImageLoad = () => {
        setImageLoaded(true);
        setImageError(false);
    };

    const handleImageError = () => {
        setImageError(true);
        setImageLoaded(true); // Still set to true to show fallback
    };

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
                                <div className="w-72 h-72 md:w-32 md:h-32 xl:w-40 xl:h-40 2xl:w-60 2xl:h-60 mx-auto rounded-full overflow-hidden border-4 border-white shadow-lg bg-slate-200">
                                    {!imageError ? (
                                        <img
                                            src={member.image}
                                            alt={member.name}
                                            className={`w-full h-full object-cover transition-all duration-500`}
                                            onLoad={handleImageLoad}
                                            onError={handleImageError}
                                        />
                                    ) : (
                                        /* Fallback Avatar */
                                        <div className="w-full h-full bg-gradient-to-br from-slate-400 to-slate-500 flex items-center justify-center text-white text-2xl md:text-lg xl:text-xl 2xl:text-3xl font-bold">
                                            {member.name.split(' ').map(n => n[0]).join('')}
                                        </div>
                                    )}
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

                        {/* Dark Overlay */}
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
                                <p className="text-[10px] xl:text-sm 2xl:text-md">{member.bio}</p>
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
                                    <a href={member.social.linkedin} className="w-8 h-8 2xl:w-10 2xl:h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors duration-200 backdrop-blur-sm">
                                        <span className="text-xs md:text-[10px] 2xl:text-sm font-bold">in</span>
                                    </a>
                                )}
                                {member.social.twitter && (
                                    <a href={member.social.twitter} className="w-8 h-8 2xl:w-10 2xl:h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors duration-200 backdrop-blur-sm">
                                        <span className="text-xs md:text-[10px] 2xl:text-sm font-bold">𝕏</span>
                                    </a>
                                )}
                                {member.social.email && (
                                    <a href={`mailto:${member.social.email}`} className="w-8 h-8 2xl:w-10 2xl:h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors duration-200 backdrop-blur-sm">
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