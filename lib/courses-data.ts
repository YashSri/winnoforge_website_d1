export interface CourseItem {
  id: string;
  slug: string;
  title: string;
  duration: "1 Year" | "6 Months" | "3 Months" | "45 Days";
  durationCategory: "1-year" | "6-months" | "3-months" | "45-days";
  durationWeeks: string;
  domain: string;
  domainCategory:
    | "ai"
    | "engineering"
    | "data"
    | "cloud"
    | "foundations"
    | "iot"
    | "marketing";
  deliveryMode: "Hybrid" | "Online" | "In-Person";
  description: string;
  pdfPath: string;
  fileName: string;
  illustrationPath?: string;
  imagePath?: string;
  featured?: boolean;
  highlights: string[];
}

export const COURSE_CATALOG: CourseItem[] = [
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // 1 YEAR DURATION PROGRAMS (Comprehensive Mastery)
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  {
    id: "1y-genai",
    slug: "generative-ai",
    title: "Generative AI & LLM Engineering",
    duration: "1 Year",
    durationCategory: "1-year",
    durationWeeks: "52 Weeks",
    domain: "Artificial Intelligence",
    domainCategory: "ai",
    deliveryMode: "Hybrid",
    description:
      "Comprehensive 1-year immersion in Generative AI: Large Language Models, prompt architecture, LangChain, RAG systems, diffusion models, fine-tuning, and production AI agent orchestration.",
    pdfPath: "/courses/1-year/1_Year_Generative_AI_Brochure.pdf",
    fileName: "1_Year_Generative_AI_Brochure.pdf",
    featured: true,
    highlights: [
      "LLM Architectures & Transformers",
      "Retrieval-Augmented Generation (RAG)",
      "Fine-tuning & LoRA on Custom Data",
      "Autonomous AI Agents & Multi-Agent Swarms",
    ],
  },
  {
    id: "1y-fullstack",
    slug: "full-stack",
    title: "Full Stack Web Development",
    duration: "1 Year",
    durationCategory: "1-year",
    durationWeeks: "52 Weeks",
    domain: "Software Engineering",
    domainCategory: "engineering",
    deliveryMode: "Hybrid",
    description:
      "Enterprise-grade full-stack engineering covering React, Next.js, Node.js, TypeScript, PostgreSQL, microservices, cloud deployments, and production CI/CD pipelines.",
    pdfPath: "/courses/1-year/1_Year_Full_Stack_Web_Development_Brochure.pdf",
    fileName: "1_Year_Full_Stack_Web_Development_Brochure.pdf",
    featured: true,
    highlights: [
      "Modern TypeScript & React/Next.js 15",
      "Scalable REST & GraphQL Microservices",
      "Distributed Database Architectures",
      "Production CI/CD & Cloud Containerization",
    ],
  },
  {
    id: "1y-datascience",
    slug: "data-science",
    title: "Data Science & Machine Learning",
    duration: "1 Year",
    durationCategory: "1-year",
    durationWeeks: "52 Weeks",
    domain: "Data Science",
    domainCategory: "data",
    deliveryMode: "Hybrid",
    description:
      "Deep mathematical statistics, predictive modeling, machine learning pipelines, deep neural networks, computer vision, NLP, and real-world industrial capstone deployments.",
    pdfPath: "/courses/1-year/1_Year_Data_Science_Brochure.pdf",
    fileName: "1_Year_Data_Science_Brochure.pdf",
    featured: true,
    highlights: [
      "Advanced Applied Statistics & Probability",
      "Supervised & Unsupervised Machine Learning",
      "PyTorch Deep Learning & Computer Vision",
      "End-to-End MLOps & Production Model Serving",
    ],
  },
  {
    id: "1y-dataanalytics",
    slug: "data-analytics",
    title: "Data Analytics & Business Intelligence",
    duration: "1 Year",
    durationCategory: "1-year",
    durationWeeks: "52 Weeks",
    domain: "Analytics & BI",
    domainCategory: "data",
    deliveryMode: "Hybrid",
    description:
      "Master the full analytics stack: complex SQL query engineering, data warehousing, PowerBI/Tableau executive dashboards, predictive analytics, and executive business storytelling.",
    pdfPath: "/courses/1-year/1_Year_Data_Analytics_Brochure.pdf",
    fileName: "1_Year_Data_Analytics_Brochure.pdf",
    featured: true,
    highlights: [
      "Advanced SQL & Complex Data Modeling",
      "PowerBI & Tableau Enterprise Dashboards",
      "Data Warehousing with Snowflake/BigQuery",
      "Executive Storytelling & KPI Strategy",
    ],
  },
  {
    id: "1y-cloud",
    slug: "cloud-computing",
    title: "Cloud Computing & DevOps Architecture",
    duration: "1 Year",
    durationCategory: "1-year",
    durationWeeks: "52 Weeks",
    domain: "Cloud & DevOps",
    domainCategory: "cloud",
    deliveryMode: "Hybrid",
    description:
      "Multi-cloud enterprise architecture across AWS, Azure, and GCP. Master Docker containerization, Kubernetes cluster orchestration, Terraform IaC, and DevSecOps pipelines.",
    pdfPath: "/courses/1-year/1_Year_Cloud_Computing_Brochure.pdf",
    fileName: "1_Year_Cloud_Computing_Brochure.pdf",
    featured: true,
    highlights: [
      "AWS & Multi-Cloud Architecture",
      "Kubernetes & Docker Microservices",
      "Infrastructure as Code with Terraform",
      "Site Reliability Engineering (SRE) & Observability",
    ],
  },
  {
    id: "1y-dsa",
    slug: "dsa",
    title: "Data Structures & Algorithms (DSA)",
    duration: "1 Year",
    durationCategory: "1-year",
    durationWeeks: "52 Weeks",
    domain: "Computer Science Foundations",
    domainCategory: "foundations",
    deliveryMode: "Online",
    description:
      "Elite competitive programming and core computer science fundamentals. Master complex algorithms, graph theory, dynamic programming, and FAANG-level technical interview problem-solving.",
    pdfPath: "/courses/1-year/1_Year_DSA_Brochure.pdf",
    fileName: "1_Year_DSA_Brochure.pdf",
    highlights: [
      "Arrays, Linked Lists, Trees & Heaps",
      "Graph Algorithms & Network Flows",
      "Advanced Dynamic Programming Patterns",
      "System Design & Interview Mastery",
    ],
  },
  {
    id: "1y-iot",
    slug: "iot",
    title: "Internet of Things (IoT) & Embedded Systems",
    duration: "1 Year",
    durationCategory: "1-year",
    durationWeeks: "52 Weeks",
    domain: "Hardware & IoT",
    domainCategory: "iot",
    deliveryMode: "Hybrid",
    description:
      "Hardware-software convergence: embedded C/C++, microcontrollers (ESP32, ARM Cortex), sensor networks, IoT protocols (MQTT, CoAP), cloud telemetry, and industrial IoT applications.",
    pdfPath: "/courses/1-year/1_Year_IoT_Brochure.pdf",
    fileName: "1_Year_IoT_Brochure.pdf",
    highlights: [
      "Microcontroller Programming & RTOS",
      "Sensor Interfacing & Hardware Design",
      "MQTT & Industrial IoT Cloud Telemetry",
      "Edge AI on Embedded Hardware",
    ],
  },
  {
    id: "1y-marketing",
    slug: "digital-marketing",
    title: "Digital Marketing & Growth Engineering",
    duration: "1 Year",
    durationCategory: "1-year",
    durationWeeks: "52 Weeks",
    domain: "Growth & Marketing",
    domainCategory: "marketing",
    deliveryMode: "Online",
    description:
      "Modern omnichannel marketing mastery: technical SEO, paid customer acquisition across Meta and Google, growth hacking, marketing automation, attribution modeling, and brand strategy.",
    pdfPath: "/courses/1-year/1_Year_Digital_Marketing_Brochure.pdf",
    fileName: "1_Year_Digital_Marketing_Brochure.pdf",
    highlights: [
      "Technical SEO & Content Growth Engines",
      "Performance Marketing on Google & Meta",
      "Marketing Automation & Funnel Optimization",
      "Data-Driven Growth Analytics & CAC/LTV",
    ],
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // 6 MONTHS DURATION PROGRAMS (Accelerated Career Tracks)
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  {
    id: "6m-genai",
    slug: "generative-ai",
    title: "Generative AI & LLM Applications",
    duration: "6 Months",
    durationCategory: "6-months",
    durationWeeks: "26 Weeks",
    domain: "Artificial Intelligence",
    domainCategory: "ai",
    deliveryMode: "Hybrid",
    description:
      "Accelerated 6-month builder track: prompt engineering frameworks, LangChain, vector databases, RAG implementations, fine-tuning open-source models, and deploying functional AI SaaS apps.",
    pdfPath: "/courses/6-months/Winnovation_Generative_AI_6_Months_Brochure.pdf",
    fileName: "Winnovation_Generative_AI_6_Months_Brochure.pdf",
    featured: true,
    highlights: [
      "Prompt Design & Structured Output Parsing",
      "LangChain & LlamaIndex RAG Pipelines",
      "Vector Stores (Pinecone, Chroma, pgvector)",
      "Deploying Full-Stack AI Products",
    ],
  },
  {
    id: "6m-fullstack",
    slug: "full-stack",
    title: "Full Stack Web Development",
    duration: "6 Months",
    durationCategory: "6-months",
    durationWeeks: "26 Weeks",
    domain: "Software Engineering",
    domainCategory: "engineering",
    deliveryMode: "Hybrid",
    description:
      "Hands-on 6-month engineering cohort: React, Next.js, Node.js, Express, PostgreSQL, REST APIs, state management, and deploying production web systems.",
    pdfPath:
      "/courses/6-months/Winnovation_Full_Stack_Web_Development_6_Months_Brochure.pdf",
    fileName: "Winnovation_Full_Stack_Web_Development_6_Months_Brochure.pdf",
    featured: true,
    highlights: [
      "Frontend UI/UX with React & Tailwind",
      "Backend API Architecture with Node.js",
      "PostgreSQL & ORM Data Modeling",
      "Authentication & Cloud Deployment",
    ],
  },
  {
    id: "6m-datascience",
    slug: "data-science",
    title: "Data Science & Machine Learning",
    duration: "6 Months",
    durationCategory: "6-months",
    durationWeeks: "26 Weeks",
    domain: "Data Science",
    domainCategory: "data",
    deliveryMode: "Hybrid",
    description:
      "Core data science workflow: Python data wrangling with pandas, exploratory analytics, scikit-learn machine learning algorithms, model evaluation, and deployment.",
    pdfPath: "/courses/6-months/Winnovation_Data_Science_6_Months_Brochure.pdf",
    fileName: "Winnovation_Data_Science_6_Months_Brochure.pdf",
    featured: true,
    highlights: [
      "Python Data Science Toolkit (NumPy, pandas)",
      "Supervised & Unsupervised Machine Learning",
      "Feature Engineering & Model Validation",
      "Production Model Deployment with FastAPI",
    ],
  },
  {
    id: "6m-dataanalytics",
    slug: "data-analytics",
    title: "Data Analytics & BI Dashboards",
    duration: "6 Months",
    durationCategory: "6-months",
    durationWeeks: "26 Weeks",
    domain: "Analytics & BI",
    domainCategory: "data",
    deliveryMode: "Hybrid",
    description:
      "Applied analytics with SQL mastery, spreadsheet modeling, PowerBI interactive dashboard engineering, and translating data into actionable business recommendations.",
    pdfPath:
      "/courses/6-months/Winnovation_Data_Analytics_6_Months_Brochure.pdf",
    fileName: "Winnovation_Data_Analytics_6_Months_Brochure.pdf",
    highlights: [
      "SQL Data Extraction & Window Functions",
      "Interactive PowerBI Dashboard Design",
      "Business Metrics & KPI Analysis",
      "Cohort Analysis & Customer Lifetime Value",
    ],
  },
  {
    id: "6m-cloud",
    slug: "cloud-computing",
    title: "Cloud Computing & AWS Administration",
    duration: "6 Months",
    durationCategory: "6-months",
    durationWeeks: "26 Weeks",
    domain: "Cloud & DevOps",
    domainCategory: "cloud",
    deliveryMode: "Hybrid",
    description:
      "AWS cloud architecture, EC2, S3, RDS, VPC networking, Docker containers, automated CI/CD pipelines, and foundational Linux system administration.",
    pdfPath:
      "/courses/6-months/Winnovation_Cloud_Computing_6_Months_Brochure.pdf",
    fileName: "Winnovation_Cloud_Computing_6_Months_Brochure.pdf",
    highlights: [
      "AWS Core Infrastructure & IAM Security",
      "VPC Networking & Subnet Architecture",
      "Docker Containerization & Deployment",
      "Automated CI/CD with GitHub Actions",
    ],
  },
  {
    id: "6m-dsa",
    slug: "dsa",
    title: "Data Structures & Algorithms",
    duration: "6 Months",
    durationCategory: "6-months",
    durationWeeks: "26 Weeks",
    domain: "Computer Science Foundations",
    domainCategory: "foundations",
    deliveryMode: "Online",
    description:
      "Targeted problem-solving cohort covering data structures, recursion, binary search trees, heap priority queues, graphs, and dynamic programming.",
    pdfPath: "/courses/6-months/Winnovation_DSA_6_Months_Brochure.pdf",
    fileName: "Winnovation_DSA_6_Months_Brochure.pdf",
    highlights: [
      "Time & Space Complexity (Big-O)",
      "Trees, Graphs & Traversal Patterns",
      "Dynamic Programming Core Frameworks",
      "Curated LeetCode Technical Interview Prep",
    ],
  },
  {
    id: "6m-iot",
    slug: "iot",
    title: "Internet of Things (IoT) Prototyping",
    duration: "6 Months",
    durationCategory: "6-months",
    durationWeeks: "26 Weeks",
    domain: "Hardware & IoT",
    domainCategory: "iot",
    deliveryMode: "Hybrid",
    description:
      "Hands-on IoT prototyping with ESP32 and Arduino, sensor integration, MQTT communication protocols, cloud dashboards, and connected automation builds.",
    pdfPath: "/courses/6-months/Winnovation_IoT_6_Months_Brochure.pdf",
    fileName: "Winnovation_IoT_6_Months_Brochure.pdf",
    highlights: [
      "Embedded C++ Programming on ESP32",
      "Analog & Digital Sensor Integration",
      "Wireless Protocols: Wi-Fi, BLE, MQTT",
      "Building a Connected Hardware Prototype",
    ],
  },
  {
    id: "6m-marketing",
    slug: "digital-marketing",
    title: "Digital Marketing & Performance Media",
    duration: "6 Months",
    durationCategory: "6-months",
    durationWeeks: "26 Weeks",
    domain: "Growth & Marketing",
    domainCategory: "marketing",
    deliveryMode: "Online",
    description:
      "Applied digital marketing campaign execution: search engine marketing, Google Ads, Meta ad manager, email automation funnels, and web analytics.",
    pdfPath:
      "/courses/6-months/Winnovation_Digital_Marketing_6_Months_Brochure.pdf",
    fileName: "Winnovation_Digital_Marketing_6_Months_Brochure.pdf",
    highlights: [
      "Search Engine Optimization (SEO) Audits",
      "Meta Ads & Google Search Ads Management",
      "Conversion Rate Optimization (CRO)",
      "Google Analytics 4 (GA4) Tracking",
    ],
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // 3 MONTHS DURATION PROGRAMS (Intensive Core Sprints)
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  {
    id: "3m-genai",
    slug: "generative-ai",
    title: "Generative AI Foundations & Prompting",
    duration: "3 Months",
    durationCategory: "3-months",
    durationWeeks: "12 Weeks",
    domain: "Artificial Intelligence",
    domainCategory: "ai",
    deliveryMode: "Online",
    description:
      "Fast, practical sprint on using generative AI tools, prompt design frameworks, API integrations (OpenAI/Anthropic), and lightweight workflow automations.",
    pdfPath: "/courses/3-months/Winnovation_Generative_AI_Brochure.pdf",
    fileName: "Winnovation_Generative_AI_Brochure.pdf",
    highlights: [
      "Prompt Engineering & Persona Framing",
      "API Integration with Python & Node.js",
      "Building Practical RAG Knowledge Bots",
      "AI Workflow Automation with n8n/Zapier",
    ],
  },
  {
    id: "3m-fullstack",
    slug: "full-stack",
    title: "Full Stack Web Development Sprint",
    duration: "3 Months",
    durationCategory: "3-months",
    durationWeeks: "12 Weeks",
    domain: "Software Engineering",
    domainCategory: "engineering",
    deliveryMode: "Hybrid",
    description:
      "Rapid sprint development covering modern JavaScript, React components, Node/Express server setup, REST endpoints, and deploying live production applications.",
    pdfPath:
      "/courses/3-months/Winnovation_Full_Stack_Web_Development_Brochure.pdf",
    fileName: "Winnovation_Full_Stack_Web_Development_Brochure.pdf",
    highlights: [
      "Modern JavaScript ES6+ & React Basics",
      "Node.js Backend & API Development",
      "Database Fundamentals with MongoDB/SQL",
      "Hosting & Deploying Live on Vercel/Render",
    ],
  },
  {
    id: "3m-datascience",
    slug: "data-science",
    title: "Applied Data Science Sprint",
    duration: "3 Months",
    durationCategory: "3-months",
    durationWeeks: "12 Weeks",
    domain: "Data Science",
    domainCategory: "data",
    deliveryMode: "Hybrid",
    description:
      "Practical data science sprint covering Python essentials, pandas data exploration, Seaborn visualizations, foundational machine learning models, and capstone presentation.",
    pdfPath: "/courses/3-months/Winnovation_Data_Science_Brochure.pdf",
    fileName: "Winnovation_Data_Science_Brochure.pdf",
    highlights: [
      "Python for Data Manipulation",
      "Exploratory Data Analysis & Cleaning",
      "Linear & Logistic Regression Models",
      "Model Evaluation Metrics & Charts",
    ],
  },
  {
    id: "3m-dataanalytics",
    slug: "data-analytics",
    title: "Data Analytics Sprint",
    duration: "3 Months",
    durationCategory: "3-months",
    durationWeeks: "12 Weeks",
    domain: "Analytics & BI",
    domainCategory: "data",
    deliveryMode: "Online",
    description:
      "Core analytics essentials: SQL querying fundamentals, Excel advanced formulas, dashboard development in PowerBI, and data-informed decision making.",
    pdfPath: "/courses/3-months/Winnovation_Data_Analytics_Brochure.pdf",
    fileName: "Winnovation_Data_Analytics_Brochure.pdf",
    highlights: [
      "SQL SELECT, JOIN, and GROUP BY Mastery",
      "Excel Pivot Tables & Modeling",
      "PowerBI Visualizations & Storyboards",
      "Presenting Insights to Stakeholders",
    ],
  },
  {
    id: "3m-cloud",
    slug: "cloud-computing",
    title: "Cloud Computing Fundamentals",
    duration: "3 Months",
    durationCategory: "3-months",
    durationWeeks: "12 Weeks",
    domain: "Cloud & DevOps",
    domainCategory: "cloud",
    deliveryMode: "Online",
    description:
      "Accelerated cloud foundational training in AWS services (EC2, S3, IAM, VPC), cloud storage, basic deployment automation, and Linux server management.",
    pdfPath: "/courses/3-months/Winnovation_Cloud_Computing_Brochure.pdf",
    fileName: "Winnovation_Cloud_Computing_Brochure.pdf",
    highlights: [
      "Cloud Concepts & Service Models",
      "AWS Compute & Storage Services",
      "Linux Command Line Fundamentals",
      "Security Groups & IAM Essentials",
    ],
  },
  {
    id: "3m-dsa",
    slug: "dsa",
    title: "Data Structures & Problem Solving",
    duration: "3 Months",
    durationCategory: "3-months",
    durationWeeks: "12 Weeks",
    domain: "Computer Science Foundations",
    domainCategory: "foundations",
    deliveryMode: "Online",
    description:
      "Focused problem-solving sprint covering key data structures, time complexity analysis, and pattern-based algorithmic challenges.",
    pdfPath: "/courses/3-months/Winnovation_DSA_Brochure.pdf",
    fileName: "Winnovation_DSA_Brochure.pdf",
    highlights: [
      "Complexity Analysis & Two-Pointer Patterns",
      "Stack, Queue & Linked List Implementations",
      "Binary Trees & Recursion Essentials",
      "Common Interview Problem Patterns",
    ],
  },
  {
    id: "3m-iot",
    slug: "iot",
    title: "IoT Fundamentals & Hardware",
    duration: "3 Months",
    durationCategory: "3-months",
    durationWeeks: "12 Weeks",
    domain: "Hardware & IoT",
    domainCategory: "iot",
    deliveryMode: "Hybrid",
    description:
      "Fast-track IoT crash course: basic microcontrollers, sensor interfacing, Arduino IDE, and building your first connected hardware prototype.",
    pdfPath: "/courses/3-months/Winnovation_IoT_Brochure.pdf",
    fileName: "Winnovation_IoT_Brochure.pdf",
    highlights: [
      "Arduino & Microcontroller Basics",
      "Reading Digital & Analog Sensors",
      "Serial Communication & Wi-Fi Linking",
      "Mini IoT Hardware Build",
    ],
  },
  {
    id: "3m-marketing",
    slug: "digital-marketing",
    title: "Digital Marketing Foundations",
    duration: "3 Months",
    durationCategory: "3-months",
    durationWeeks: "12 Weeks",
    domain: "Growth & Marketing",
    domainCategory: "marketing",
    deliveryMode: "Online",
    description:
      "Tactical marketing sprint covering social media advertising, basic SEO audit, Google Ads setup, and customer acquisition campaigns.",
    pdfPath:
      "/courses/3-months/Winnovation_Digital_Marketing_Brochure.pdf",
    fileName: "Winnovation_Digital_Marketing_Brochure.pdf",
    highlights: [
      "Organic Social Media Strategy",
      "Google Ads Search Campaigns",
      "Content Planning & Copywriting",
      "Campaign Performance Tracking",
    ],
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // 45 DAYS FAST-TRACK BOOTCAMPS (Intensive Immersion)
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  {
    id: "45d-analytics",
    slug: "data-analytics-45d",
    title: "Data Analytics Fast-Track Curriculum",
    duration: "45 Days",
    durationCategory: "45-days",
    durationWeeks: "6.5 Weeks",
    domain: "Analytics & BI",
    domainCategory: "data",
    deliveryMode: "Online",
    description:
      "Intensive 45-day practical curriculum: SQL data extraction essentials, Excel data crunching, PowerBI rapid dashboard development, and business case presentations.",
    pdfPath: "/courses/45-days/Winnovation_Data_Analytics_Curriculum.pdf",
    fileName: "Winnovation_Data_Analytics_Curriculum.pdf",
    featured: true,
    highlights: [
      "45-Day Intensive Hands-on Schedule",
      "Practical SQL for Everyday Analytics",
      "Rapid PowerBI Dashboard Creation",
      "Portfolio Project Presentation",
    ],
  },
  {
    id: "45d-webdev",
    slug: "web-dev-45d",
    title: "Web Development Fast-Track Curriculum",
    duration: "45 Days",
    durationCategory: "45-days",
    durationWeeks: "6.5 Weeks",
    domain: "Software Engineering",
    domainCategory: "engineering",
    deliveryMode: "Online",
    description:
      "Intensive 45-day coding bootcamp: HTML5/CSS3 modern responsive layouts, modern JavaScript DOM interactions, component-driven UI, and deploying a live personal portfolio project.",
    pdfPath: "/courses/45-days/Winnovation_Web_Development_Curriculum.pdf",
    fileName: "Winnovation_Web_Development_Curriculum.pdf",
    featured: true,
    highlights: [
      "45-Day Intensive Coding Bootcamp",
      "Modern Semantic HTML5 & Flexbox/Grid CSS",
      "JavaScript DOM Scripting & API Fetching",
      "Live Deployment & GitHub Portfolio Showcase",
    ],
  },
];

export const DURATION_TABS = [
  { key: "all", label: "All Durations", count: 26 },
  { key: "1-year", label: "1 Year", count: 8, badge: "Mastery" },
  { key: "6-months", label: "6 Months", count: 8, badge: "Career Track" },
  { key: "3-months", label: "3 Months", count: 8, badge: "Core Sprint" },
  { key: "45-days", label: "45 Days", count: 2, badge: "Fast-Track" },
] as const;

export function getCoursesByDuration(duration: string): CourseItem[] {
  if (duration === "all") return COURSE_CATALOG;
  return COURSE_CATALOG.filter((c) => c.durationCategory === duration);
}

export function getCourseImage(course: CourseItem): string {
  if (course.imagePath) return course.imagePath;
  if (course.id.includes("genai")) return "/course-images/genai.jpg";
  if (course.id.includes("fullstack") || course.id.includes("webdev")) return "/course-images/fullstack.jpg";
  if (course.id.includes("datascience")) return "/course-images/datascience.jpg";
  if (course.id.includes("analytics")) return "/course-images/dataanalytics.jpg";
  if (course.id.includes("cloud")) return "/course-images/cloud.jpg";
  if (course.id.includes("dsa")) return "/course-images/dsa.jpg";
  if (course.id.includes("iot")) return "/course-images/iot.jpg";
  if (course.id.includes("marketing")) return "/course-images/marketing.jpg";
  return "/course-images/genai.jpg";
}

export function getCourseIllustration(course: CourseItem): string {
  return getCourseImage(course);
}

// Ensure imagePath and illustrationPath are set on every item
COURSE_CATALOG.forEach((item) => {
  item.imagePath = getCourseImage(item);
  item.illustrationPath = item.imagePath;
});
