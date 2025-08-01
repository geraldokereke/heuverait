import {
  Code,
  Palette,
  Activity,
  GitBranch,
  Box,
  Globe,
  Database,
  Zap,
  Smartphone,
  Monitor,
  Gamepad2,
  Cloud,
  Layers,
  ServerIcon,
} from "lucide-react";

interface TechSection {
  title: string;
  items: TechItem[];
}

interface TechItem {
  name: string;
  icon: React.ComponentType<any>;
  highlighted?: boolean;
}

interface CategoryData {
  sections: TechSection[];
}

export const categoryData: Record<string, CategoryData> = {
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
          { name: "Core Data", icon: Database },
        ],
      },
      {
        title: "Android",
        items: [
          { name: "Kotlin", icon: Code },
          { name: "MVVM", icon: Box },
          { name: "RxJava", icon: Activity },
          { name: "Java", icon: Code },
          { name: "Retrofit", icon: Globe },
          { name: "Jetpack", icon: Zap },
        ],
      },
    ],
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
          { name: "Tailwind CSS", icon: Palette },
        ],
      },
      {
        title: "Backend",
        items: [
          { name: "Node.js", icon: ServerIcon },
          { name: "Express", icon: ServerIcon },
          { name: "Python", icon: Code },
          { name: "Django", icon: ServerIcon },
          { name: "PHP", icon: Code },
          { name: "Laravel", icon: ServerIcon },
        ],
      },
    ],
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
          { name: "Cordova", icon: Smartphone },
        ],
      },
      {
        title: "Desktop",
        items: [
          { name: "Electron", icon: Monitor },
          { name: "Tauri", icon: Monitor },
          { name: "Qt", icon: Monitor },
          { name: ".NET MAUI", icon: Monitor },
        ],
      },
    ],
  },
  Games: {
    sections: [
      {
        title: "Game Engines",
        items: [
          { name: "Unity", icon: Gamepad2, highlighted: true },
          { name: "Unreal Engine", icon: Gamepad2 },
          { name: "Godot", icon: Gamepad2 },
          { name: "Cocos2d", icon: Gamepad2 },
        ],
      },
      {
        title: "Languages",
        items: [
          { name: "C#", icon: Code },
          { name: "C++", icon: Code },
          { name: "JavaScript", icon: Code },
          { name: "Lua", icon: Code },
        ],
      },
    ],
  },
  Database: {
    sections: [
      {
        title: "SQL Databases",
        items: [
          { name: "PostgreSQL", icon: Database, highlighted: true },
          { name: "MySQL", icon: Database },
          { name: "SQL Server", icon: Database },
          { name: "Oracle", icon: Database },
        ],
      },
      {
        title: "NoSQL Databases",
        items: [
          { name: "MongoDB", icon: Database },
          { name: "Redis", icon: Database },
          { name: "Cassandra", icon: Database },
          { name: "DynamoDB", icon: Database },
        ],
      },
    ],
  },
  "Cloud & DevOps": {
    sections: [
      {
        title: "Cloud Platforms",
        items: [
          { name: "AWS", icon: Cloud, highlighted: true },
          { name: "Azure", icon: Cloud },
          { name: "Google Cloud", icon: Cloud },
          { name: "DigitalOcean", icon: Cloud },
        ],
      },
      {
        title: "DevOps Tools",
        items: [
          { name: "Docker", icon: Box },
          { name: "Kubernetes", icon: Layers },
          { name: "Jenkins", icon: GitBranch },
          { name: "Terraform", icon: ServerIcon },
        ],
      },
    ],
  },
};
