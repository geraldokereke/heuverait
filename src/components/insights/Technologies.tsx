import React, { useState } from 'react';
import {
    Smartphone,
    Globe,
    Layers,
    Gamepad2,
    Database,
    Cloud,
    Code,
    Cpu,
    Server,
    Monitor,
    Palette,
    Zap,
    Box,
    GitBranch,
    Shield,
    Activity
} from 'lucide-react';

interface TechItem {
    name: string;
    icon: React.ComponentType<any>;
    highlighted?: boolean;
}

interface TechSection {
    title: string;
    items: TechItem[];
}

interface CategoryData {
    sections: TechSection[];
}

const Technologies: React.FC = () => {
    const [activeCategory, setActiveCategory] = useState("Mobile Apps");

    const categoryData: Record<string, CategoryData> = {
        "Mobile Apps": {
            sections: [
                {
                    title: "iOS",
                    items: [
                        { name: "Swift", icon: Code },
                        { name: "UI Kit", icon: Palette, highlighted: true },
                        { name: "RxSwift", icon: Activity },
                        { name: "Combine", icon: GitBranch },
                        { name: "MVVM", icon: Box },
                        { name: "Alamofire", icon: Globe },
                        { name: "Core Data", icon: Database }
                    ]
                },
                {
                    title: "Android",
                    items: [
                        { name: "Kotlin", icon: Code },
                        { name: "MVVM", icon: Box },
                        { name: "RxJava", icon: Activity },
                        { name: "Java", icon: Code },
                        { name: "Retrofit", icon: Globe },
                        { name: "Jetpack", icon: Zap }
                    ]
                }
            ]
        },
        "Web Platforms": {
            sections: [
                {
                    title: "Frontend",
                    items: [
                        { name: "React", icon: Code, highlighted: true },
                        { name: "Next.js", icon: Zap },
                        { name: "TypeScript", icon: Code },
                        { name: "Vue.js", icon: Code },
                        { name: "Angular", icon: Code },
                        { name: "Tailwind CSS", icon: Palette }
                    ]
                },
                {
                    title: "Backend",
                    items: [
                        { name: "Node.js", icon: Server },
                        { name: "Express", icon: Server },
                        { name: "Python", icon: Code },
                        { name: "Django", icon: Server },
                        { name: "PHP", icon: Code },
                        { name: "Laravel", icon: Server }
                    ]
                }
            ]
        },
        "Cross Platforms": {
            sections: [
                {
                    title: "Mobile",
                    items: [
                        { name: "React Native", icon: Smartphone },
                        { name: "Flutter", icon: Smartphone, highlighted: true },
                        { name: "Xamarin", icon: Smartphone },
                        { name: "Ionic", icon: Smartphone },
                        { name: "Cordova", icon: Smartphone }
                    ]
                },
                {
                    title: "Desktop",
                    items: [
                        { name: "Electron", icon: Monitor },
                        { name: "Tauri", icon: Monitor },
                        { name: "Qt", icon: Monitor },
                        { name: ".NET MAUI", icon: Monitor }
                    ]
                }
            ]
        },
        "Games": {
            sections: [
                {
                    title: "Game Engines",
                    items: [
                        { name: "Unity", icon: Gamepad2, highlighted: true },
                        { name: "Unreal Engine", icon: Gamepad2 },
                        { name: "Godot", icon: Gamepad2 },
                        { name: "Cocos2d", icon: Gamepad2 }
                    ]
                },
                {
                    title: "Languages",
                    items: [
                        { name: "C#", icon: Code },
                        { name: "C++", icon: Code },
                        { name: "JavaScript", icon: Code },
                        { name: "Lua", icon: Code }
                    ]
                }
            ]
        },
        "Database": {
            sections: [
                {
                    title: "SQL Databases",
                    items: [
                        { name: "PostgreSQL", icon: Database, highlighted: true },
                        { name: "MySQL", icon: Database },
                        { name: "SQL Server", icon: Database },
                        { name: "Oracle", icon: Database }
                    ]
                },
                {
                    title: "NoSQL Databases",
                    items: [
                        { name: "MongoDB", icon: Database },
                        { name: "Redis", icon: Database },
                        { name: "Cassandra", icon: Database },
                        { name: "DynamoDB", icon: Database }
                    ]
                }
            ]
        },
        "Cloud & DevOps": {
            sections: [
                {
                    title: "Cloud Platforms",
                    items: [
                        { name: "AWS", icon: Cloud, highlighted: true },
                        { name: "Azure", icon: Cloud },
                        { name: "Google Cloud", icon: Cloud },
                        { name: "DigitalOcean", icon: Cloud }
                    ]
                },
                {
                    title: "DevOps Tools",
                    items: [
                        { name: "Docker", icon: Box },
                        { name: "Kubernetes", icon: Layers },
                        { name: "Jenkins", icon: GitBranch },
                        { name: "Terraform", icon: Server }
                    ]
                }
            ]
        }
    };

    const sidebarCategories = [
        { name: "Mobile Apps", icon: Smartphone },
        { name: "Web Platforms", icon: Globe },
        { name: "Cross Platforms", icon: Layers },
        { name: "Games", icon: Gamepad2 },
        { name: "Database", icon: Database },
        { name: "Cloud & DevOps", icon: Cloud }
    ];

    return (
        <div className="max-w-7xl mx-auto px-6 py-16 bg-white">
            {/* Header */}
            <div className="mb-16">
                <h1 className="text-5xl font-bold text-gray-900 mb-6">
                    Technologies we use
                </h1>
                <p className="text-xl text-gray-600 max-w-4xl leading-relaxed">
                    Hire from our pool of 350+ specialized experts in web, mobile, and software
                    engineering, specializing in the latest technologies and frameworks, ready to
                    scale your development teams effortlessly.
                </p>
            </div>

            <div className="flex gap-8">
                {/* Sidebar */}
                <div className="w-64 flex-shrink-0">
                    <div className="space-y-2">
                        {sidebarCategories.map((category) => {
                            const IconComponent = category.icon;
                            return (
                                <div
                                    key={category.name}
                                    onClick={() => setActiveCategory(category.name)}
                                    className={`flex items-center gap-3 px-6 py-4 rounded-full text-lg font-medium transition-all duration-200 cursor-pointer ${activeCategory === category.name
                                            ? 'bg-green-100 text-gray-900 font-semibold'
                                            : 'text-gray-600 hover:bg-gray-50'
                                        }`}
                                >
                                    <IconComponent size={20} />
                                    {category.name}
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Main Content */}
                <div className="flex-1">
                    <div className="grid gap-12">
                        {categoryData[activeCategory].sections.map((section) => (
                            <div key={section.title}>
                                <h2 className="text-3xl font-bold text-gray-900 mb-8">
                                    {section.title}
                                </h2>
                                <div className="grid grid-cols-3 gap-4">
                                    {section.items.map((item) => {
                                        const IconComponent = item.icon;
                                        return (
                                            <div
                                                key={item.name}
                                                className={`flex items-center gap-3 px-6 py-4 rounded-full border transition-all duration-200 hover:bg-black hover:text-white cursor-pointer bg-gray-50 text-gray-700 border-gray-200`}
                                            >
                                                <IconComponent size={20} />
                                                <span className="font-medium">{item.name}</span>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Technologies;