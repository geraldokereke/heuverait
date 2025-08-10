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
    stats: {
        experience: string;
        projects: string;
        achievements: string;
    };
}


interface TeamMemberCardProps {
    member: TeamMember;
    index: number;
}

export const teamMembers: TeamMember[] = [
    {
        id: "1",
        name: "Alexandra Chen",
        role: "Chief Executive Officer",
        department: "Leadership",
        image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
        bio: "Visionary leader with 15+ years transforming digital landscapes. Alexandra's strategic insight has guided Fortune 500 companies through revolutionary growth phases.",
        expertise: ["Strategic Planning", "Digital Transformation", "Leadership", "Innovation"],
        social: {
            linkedin: "#",
            twitter: "#",
            email: "alexandra@company.com"
        },
        stats: {
            experience: "15+ Years",
            projects: "200+ Projects",
            achievements: "50+ Awards"
        }
    },
    {
        id: "2",
        name: "Marcus Rodriguez",
        role: "Chief Technology Officer",
        department: "Technology",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
        bio: "Engineering architect passionate about scalable solutions. Marcus has pioneered breakthrough technologies that power millions of users worldwide.",
        expertise: ["System Architecture", "AI/ML", "Cloud Infrastructure", "DevOps"],
        social: {
            linkedin: "#",
            twitter: "#",
            email: "marcus@company.com"
        },
        stats: {
            experience: "12+ Years",
            projects: "150+ Systems",
            achievements: "25+ Patents"
        }
    },
    {
        id: "3",
        name: "Sarah Williams",
        role: "Creative Director",
        department: "Design",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
        bio: "Award-winning designer crafting experiences that resonate. Sarah's creative vision has redefined brand identities for leading global companies.",
        expertise: ["Brand Strategy", "UX Design", "Creative Direction", "Design Systems"],
        social: {
            linkedin: "#",
            twitter: "#",
            email: "sarah@company.com"
        },
        stats: {
            experience: "10+ Years",
            projects: "300+ Designs",
            achievements: "40+ Awards"
        }
    },
    {
        id: "4",
        name: "David Park",
        role: "Head of Operations",
        department: "Operations",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
        bio: "Operations strategist optimizing performance at scale. David's methodical approach has streamlined processes across multi-billion dollar enterprises.",
        expertise: ["Process Optimization", "Team Management", "Strategic Planning", "Analytics"],
        social: {
            linkedin: "#",
            email: "david@company.com"
        },
        stats: {
            experience: "14+ Years",
            projects: "100+ Optimizations",
            achievements: "30+ Certifications"
        }
    },
    {
        id: "5",
        name: "Emma Johnson",
        role: "Head of Research",
        department: "Innovation",
        image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop&crop=face",
        bio: "Research pioneer exploring tomorrow's possibilities today. Emma's groundbreaking work has resulted in 12 patents and numerous industry recognitions.",
        expertise: ["Research & Development", "Innovation Strategy", "Product Vision", "AI Ethics"],
        social: {
            linkedin: "#",
            twitter: "#",
            email: "emma@company.com"
        },
        stats: {
            experience: "11+ Years",
            projects: "80+ Research",
            achievements: "12+ Patents"
        }
    },
    {
        id: "6",
        name: "James Thompson",
        role: "VP of Business Development",
        department: "Growth",
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face",
        bio: "Growth catalyst building meaningful partnerships. James has orchestrated strategic alliances that have expanded market reach across four continents.",
        expertise: ["Partnership Development", "Market Expansion", "Strategic Alliances", "Sales"],
        social: {
            linkedin: "#",
            email: "james@company.com"
        },
        stats: {
            experience: "13+ Years",
            projects: "500+ Partnerships",
            achievements: "100M+ Revenue"
        }
    }
];


const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ member, index }) => {
    const [isFlipped, setIsFlipped] = useState<boolean>(false);
    const [imageLoaded, setImageLoaded] = useState<boolean>(false);

    return (
        <div
            className="group relative h-96 md:h-56 xl:h-64 2xl:h-96"
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