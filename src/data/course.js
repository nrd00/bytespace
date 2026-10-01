// src/data/coursesData.js

export const creators = [
  {
    id: "creator-1",
    name: "PurePearl Studio",
    title: "Passionate UI/UX, Web designer",
    role: "Professional Creator",
    avatar: "https://i.pravatar.cc/150?img=12",
    badge: "Creator",
    bio: "Welcome to the creative world of PurePearl Studio! Here you'll discover the passion, expertise, and inspiration that drive my creative journey.",
    followersCount: 12,
    productsCount: 3,
    isFollowing: false,
    works: [
      { id: "w1", title: "Mobile App Redesign", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500" },
      { id: "w2", title: "Design System UI Kit", image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=500" },
      { id: "w3", title: "SaaS Dashboard Concept", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500" }
    ]
  },
  {
    id: "creator-2",
    name: "Aura Design Lab",
    title: "Senior Product Designer & Brand Strategist",
    role: "Design Lead",
    avatar: "https://i.pravatar.cc/150?img=32",
    badge: "Top Rated",
    bio: "Crafting meaningful digital experiences and teaching human-centric design across the globe.",
    followersCount: 45,
    productsCount: 5,
    isFollowing: true,
    works: [
      { id: "w4", title: "E-Commerce App", image: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?w=500" },
      { id: "w5", title: "Fintech Web App", image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=500" }
    ]
  },
  {
    id: "creator-3",
    name: "CodeCraft Academy",
    title: "Full-Stack Software Engineer",
    role: "Senior Instructor",
    avatar: "https://i.pravatar.cc/150?img=60",
    badge: "Verified",
    bio: "Simplifying modern web development, data analysis, and software engineering for beginners.",
    followersCount: 89,
    productsCount: 4,
    isFollowing: false,
    works: [
      { id: "w6", title: "React Boilerplate", image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=500" }
    ]
  }
];

export const courses = [
  // Course 1
  {
    id: "build-digital-asset",
    slug: "build-digital-asset",
    title: "Build Digital Asset: A Comprehensive Guide",
    subtitle: "Unlock the Power of Digital Creation with Expert Guidance",
    category: "UI/UX Design",
    level: "Intermediate",
    rating: 4.7,
    totalRatingsCount: 885,
    studentsCount: 199,
    totalLessons: 112,
    totalHours: "24 hours",
    commentsCount: 59,
    price: 25,
    originalPrice: 50,
    currency: "$",
    pricingModel: "lifetime",
    thumbnail: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=800",
    previewVideoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    creator: creators[0],
    includes: [
      { id: 1, text: "Learning Resources" },
      { id: 2, text: "Quality Lesson Videos" },
      { id: 3, text: "Certificate of Completion" },
      { id: 4, text: "Private Consultation" }
    ],
    sneakPeekImages: [
      "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=400",
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=400",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400"
    ],
    keyPoints: [
      "Foundational Concepts",
      "Design Principles Mastery",
      "Advanced Techniques in Digital Creation",
      "Project Showcase and Critique"
    ],
    description: {
      paragraphs: [
        "Embark on an enlightening exploration into the world of digital creation with our comprehensive course, 'Build Digital Assets: A Comprehensive Guide.' This transformative learning experience invites you to delve deep into the intricacies of crafting impactful digital content.",
        "In the initial modules, you'll establish a solid foundation by immersing yourself in the core principles that form the backbone of modern digital design."
      ]
    },
    curriculum: {
      introNote: "Immerse yourself in the course content as we break down each module into comprehensive lessons.",
      modules: [
        { id: "m1", title: "Module 1: Introduction to Digital Assets", summary: "Lay the groundwork with lessons like 'Understanding Digital Elements'." },
        { id: "m2", title: "Module 2: Design Principles for Impact", summary: "Master color theory, typography, and visual hierarchy." }
      ]
    },
    reviewsData: {
      overallRating: 4.7,
      totalCount: 885,
      reviews: [
        {
          id: "rev-1",
          user: "Albert Flores",
          role: "UI/UX Designer",
          avatar: "https://i.pravatar.cc/150?img=33",
          rating: 5,
          date: "a year ago",
          comment: "This course transformed my approach to digital design. The combination of theory and hands-on exercises made it a truly enriching experience!"
        }
      ]
    }
  },

  // Course 2
  {
    id: "learn-figma-from-basic",
    slug: "learn-figma-from-basic",
    title: "Learn Figma from Basic",
    subtitle: "Master the premier UI/UX design tool from scratch",
    category: "Featured",
    level: "Beginner",
    rating: 4.5,
    totalRatingsCount: 240,
    studentsCount: 1000,
    totalLessons: 17,
    totalHours: "2 hours 16 mins",
    commentsCount: 89,
    price: 25,
    originalPrice: 45,
    currency: "$",
    pricingModel: "lifetime",
    thumbnail: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800",
    previewVideoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    creator: creators[0],
    includes: [
      { id: 1, text: "Figma File Templates" },
      { id: 2, text: "Certificate of Completion" }
    ],
    keyPoints: ["Auto Layout 3.0", "Design Systems", "Interactive Prototyping"],
    description: {
      paragraphs: ["Learn how to design modern web and mobile application interfaces using Figma from absolute scratch."]
    }
  },

  // Course 3
  {
    id: "the-power-of-big-data",
    slug: "the-power-of-big-data",
    title: "The Power of Big Data",
    subtitle: "Unlock insights and analytics from massive datasets",
    category: "Data Science",
    level: "Beginner",
    rating: 4.5,
    totalRatingsCount: 310,
    studentsCount: 850,
    totalLessons: 17,
    totalHours: "2 hours 16 mins",
    commentsCount: 59,
    price: 25,
    originalPrice: 60,
    currency: "$",
    pricingModel: "lifetime",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",
    creator: creators[2],
    keyPoints: ["Python & Pandas", "Data Visualization", "SQL Databases"]
  },

  // Course 4
  {
    id: "balancing-productivity",
    slug: "balancing-productivity",
    title: "Balancing Productivity and Well-being",
    subtitle: "Optimize your workflow without burning out",
    category: "Productivity",
    level: "Beginner",
    rating: 4.8,
    totalRatingsCount: 180,
    studentsCount: 620,
    totalLessons: 14,
    totalHours: "1 hour 45 mins",
    commentsCount: 34,
    price: 20,
    originalPrice: 40,
    currency: "$",
    pricingModel: "lifetime",
    thumbnail: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800",
    creator: creators[1],
    keyPoints: ["Time Blocking", "Mindfulness Techniques", "Goal Setting"]
  },

  // Course 5
  {
    id: "mastering-money-management",
    slug: "mastering-money-management",
    title: "Mastering Money Management",
    subtitle: "Take control of your personal and business finances",
    category: "Finance",
    level: "Beginner",
    rating: 4.6,
    totalRatingsCount: 420,
    studentsCount: 1200,
    totalLessons: 20,
    totalHours: "3 hours 10 mins",
    commentsCount: 78,
    price: 25,
    originalPrice: 55,
    currency: "$",
    pricingModel: "lifetime",
    thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800",
    creator: creators[1],
    keyPoints: ["Budgeting Frameworks", "Investment Basics", "Tax Strategies"]
  },

  // Course 6
  {
    id: "from-idea-to-startup-success",
    slug: "from-idea-to-startup-success",
    title: "From Idea to Startup Success",
    subtitle: "Turn concepts into scalable, profitable businesses",
    category: "Freelance & Entrepreneurship",
    level: "Intermediate",
    rating: 4.9,
    totalRatingsCount: 530,
    studentsCount: 1450,
    totalLessons: 28,
    totalHours: "5 hours 30 mins",
    commentsCount: 92,
    price: 35,
    originalPrice: 80,
    currency: "$",
    pricingModel: "lifetime",
    thumbnail: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800",
    creator: creators[1],
    keyPoints: ["Market Research", "MVP Building", "Pitch Deck Design"]
  },

  // Course 7
  {
    id: "creative-3d-animation-blender",
    slug: "creative-3d-animation-blender",
    title: "Creative 3D Animation in Blender",
    subtitle: "Model, texture, and render stunning 3D assets",
    category: "Animation",
    level: "Intermediate",
    rating: 4.8,
    totalRatingsCount: 390,
    studentsCount: 780,
    totalLessons: 32,
    totalHours: "8 hours 15 mins",
    commentsCount: 65,
    price: 30,
    originalPrice: 70,
    currency: "$",
    pricingModel: "lifetime",
    thumbnail: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800",
    creator: creators[0],
    keyPoints: ["3D Mesh Modeling", "Lighting & Textures", "Keyframe Animation"]
  },

  // Course 8
  {
    id: "social-media-growth-mastery",
    slug: "social-media-growth-mastery",
    title: "Social Media Strategy & Content Growth",
    subtitle: "Build a loyal audience and grow your brand organically",
    category: "Marketing",
    level: "Beginner",
    rating: 4.4,
    totalRatingsCount: 195,
    studentsCount: 510,
    totalLessons: 15,
    totalHours: "2 hours 45 mins",
    commentsCount: 41,
    price: 22,
    originalPrice: 45,
    currency: "$",
    pricingModel: "lifetime",
    thumbnail: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800",
    creator: creators[1],
    keyPoints: ["Content Planning", "Analytics & Insights", "Viral Copywriting"]
  },

  // Course 9
  {
    id: "fullstack-react-nextjs-guide",
    slug: "fullstack-react-nextjs-guide",
    title: "Full-Stack Development with React & Next.js",
    subtitle: "Build modern, fast server-rendered web applications",
    category: "Web Development",
    level: "Advanced",
    rating: 4.9,
    totalRatingsCount: 640,
    studentsCount: 2100,
    totalLessons: 45,
    totalHours: "12 hours 00 mins",
    commentsCount: 112,
    price: 40,
    originalPrice: 99,
    currency: "$",
    pricingModel: "lifetime",
    thumbnail: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800",
    creator: creators[2],
    keyPoints: ["Server Components", "API Routes", "Database Integration"]
  },

  // Course 10
  {
    id: "digital-illustration-for-beginners",
    slug: "digital-illustration-for-beginners",
    title: "Digital Illustration: Finding Your Style",
    subtitle: "Express your creativity through modern digital drawing",
    category: "Drawing & Painting",
    level: "Beginner",
    rating: 4.7,
    totalRatingsCount: 285,
    studentsCount: 940,
    totalLessons: 18,
    totalHours: "3 hours 20 mins",
    commentsCount: 53,
    price: 25,
    originalPrice: 50,
    currency: "$",
    pricingModel: "lifetime",
    thumbnail: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800",
    creator: creators[0],
    keyPoints: ["Color Palette Selection", "Brush Techniques", "Character Sketching"]
  }
];

export const courseCategories = [
  "Featured",
  "UI/UX Design",
  "Web Development",
  "Data Science",
  "Marketing",
  "Animation",
  "Productivity",
  "Finance",
  "Freelance & Entrepreneurship",
  "Drawing & Painting"
];