export const guides = [
  {
    id: 1,
    title: "Quick Start Guide",
    description:
      "Get up and running in 5 minutes with our platform essentials.",
    category: "getting-started",
    readTime: "5 min",
    difficulty: "Beginner",
    image:
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&q=80",
    tags: ["setup", "basics"],
    featured: true,
  },
  {
    id: 2,
    title: "User Account Setup",
    description:
      "Complete guide to creating and configuring your user account.",
    category: "getting-started",
    readTime: "8 min",
    difficulty: "Beginner",
    image:
      "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&q=80",
    tags: ["account", "profile"],
  },
  {
    id: 3,
    title: "Dashboard Navigation",
    description:
      "Master the main dashboard and learn about all available features.",
    category: "getting-started",
    readTime: "10 min",
    difficulty: "Beginner",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&q=80",
    tags: ["navigation", "ui"],
  },
  {
    id: 4,
    title: "First Project Setup",
    description:
      "Step-by-step guide to creating your first project from scratch.",
    category: "getting-started",
    readTime: "15 min",
    difficulty: "Beginner",
    image:
      "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&q=80",
    tags: ["project", "setup"],
  },
  {
    id: 5,
    title: "API Authentication",
    description:
      "Secure your API integrations with proper authentication methods.",
    category: "advanced",
    readTime: "20 min",
    difficulty: "Advanced",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&q=80",
    tags: ["api", "security"],
    featured: true,
  },
  {
    id: 6,
    title: "Custom Workflows",
    description:
      "Build complex automated workflows to streamline your processes.",
    category: "advanced",
    readTime: "25 min",
    difficulty: "Advanced",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&q=80",
    tags: ["automation", "workflows"],
  },
  {
    id: 7,
    title: "Performance Optimization",
    description:
      "Advanced techniques to optimize performance and reduce load times.",
    category: "advanced",
    readTime: "30 min",
    difficulty: "Advanced",
    image:
      "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=400&q=80",
    tags: ["performance", "optimization"],
  },
  {
    id: 8,
    title: "Third-Party Integrations",
    description: "Connect with popular third-party services and APIs.",
    category: "integration",
    readTime: "18 min",
    difficulty: "Intermediate",
    image:
      "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&q=80",
    tags: ["integration", "api"],
  },
  {
    id: 9,
    title: "Webhook Configuration",
    description: "Set up webhooks for real-time data synchronization.",
    category: "integration",
    readTime: "12 min",
    difficulty: "Intermediate",
    image:
      "https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=400&q=80",
    tags: ["webhooks", "real-time"],
    featured: true,
  },
  {
    id: 10,
    title: "Database Migration",
    description: "Safely migrate your data from existing systems.",
    category: "integration",
    readTime: "35 min",
    difficulty: "Advanced",
    image:
      "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=400&q=80",
    tags: ["database", "migration"],
  },
  {
    id: 11,
    title: "Common Error Solutions",
    description: "Quick fixes for the most frequently encountered issues.",
    category: "troubleshooting",
    readTime: "10 min",
    difficulty: "Beginner",
    image:
      "https://images.unsplash.com/photo-1581287053822-fd7bf4f4bfec?w=400&q=80",
    tags: ["errors", "debugging"],
  },
  {
    id: 12,
    title: "Advanced Debugging",
    description: "In-depth troubleshooting techniques for complex problems.",
    category: "troubleshooting",
    readTime: "22 min",
    difficulty: "Advanced",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&q=80",
    tags: ["debugging", "advanced"],
  },
];

export const categories = [
  { id: "all", name: "All Guides", count: 12 },
  { id: "getting-started", name: "Getting Started", count: 4 },
  { id: "advanced", name: "Advanced", count: 3 },
  { id: "integration", name: "Integration", count: 3 },
  { id: "troubleshooting", name: "Troubleshooting", count: 2 },
];

export const resourceGuides = [
  {
    slug: "quick-start-guide",
    title: "Quick Start Guide",
    description:
      "Get up and running in 5 minutes with our platform essentials.",
    readTime: "5 min",
    difficulty: "Beginner",
    tags: ["setup", "basics"],
    content: "This is a detailed quick start guide...",
  },
  // Add more guides as needed
];
