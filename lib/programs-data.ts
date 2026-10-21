import { FORGE_CANONICAL_FAQS, type FaqItem } from "./faq-data";

export interface ProgramBrochure {
  duration: "1 Year" | "6 Months" | "3 Months" | "45 Days";
  path: string;
  fileName: string;
}

export interface Program {
  slug: string;
  name: string;
  shortDescription: string;
  domain: string;
  duration: string;
  deliveryMode: "Online" | "Hybrid" | "In-Person";
  category: string;
  overview: string;
  whyThisProgram: string[];
  curriculum: { module: string; topics: string[] }[];
  outcomes: string[];
  eligibility: string[];
  projects: string[];
  certificationDetails: string;
  trainerName: string;
  trainerDesignation: string;
  trainerBio: string;
  trainerQuote: string;
  industryRelevance: string;
  faqs: FaqItem[];
  featured?: boolean;
  price?: string;
  status?: "published" | "draft" | "coming-soon";
  brochures?: ProgramBrochure[];
}

export const programs: Program[] = [
  {
    slug: "data-science",
    name: "Data Science",
    shortDescription:
      "Go from raw data to deployed models — statistics, machine learning, and real datasets end to end.",
    domain: "Data & AI",
    duration: "12 weeks",
    deliveryMode: "Hybrid",
    category: "Certification",
    featured: true,
    status: "published",
    overview:
      "This track takes builders from foundational statistics through to deployed machine learning models, using real datasets sourced from FORGE's industry partners instead of toy problems.",
    whyThisProgram: [
      "Learn on real, messy datasets instead of pre-cleaned textbook examples.",
      "Every model you build gets reviewed against a working-engineer bar, not just a grading rubric.",
      "Direct mentorship from practitioners who ship data products for a living.",
    ],
    curriculum: [
      {
        module: "Foundations",
        topics: ["Python for data science", "Statistics & probability", "Exploratory data analysis"],
      },
      {
        module: "Machine Learning",
        topics: ["Supervised learning", "Unsupervised learning", "Model evaluation & tuning"],
      },
      {
        module: "Deep Learning Basics",
        topics: ["Neural network fundamentals", "Working with image and text data"],
      },
      {
        module: "Deployment",
        topics: ["Model packaging", "APIs for model serving", "Monitoring in production"],
      },
      {
        module: "Capstone",
        topics: ["End-to-end project with an industry dataset", "Stakeholder-style presentation"],
      },
    ],
    outcomes: [
      "Build and evaluate machine learning models on real datasets",
      "Deploy a model behind a working API",
      "Communicate data findings to non-technical stakeholders",
      "A capstone project for your portfolio",
    ],
    eligibility: [
      "Basic programming familiarity (any language)",
      "Comfort with high-school level math/statistics",
      "No prior data science experience required",
    ],
    projects: [
      "Predictive model on an industry-partner dataset",
      "End-to-end deployed ML API with a simple frontend",
    ],
    certificationDetails:
      "Builders who complete the capstone and pass the final review receive the FORGE Data Science certification, co-signed by the program's industry mentors.",
    trainerName: "Sana Verma",
    trainerDesignation: "Lead Data Scientist, Mentor Network",
    trainerBio:
      "Sana has spent over 8 years building data products across fintech and healthcare, and leads the Data Science track's curriculum and mentorship.",
    trainerQuote:
      "The builders who do well here aren't the ones who memorize algorithms — they're the ones who get curious about messy data.",
    industryRelevance:
      "Data science remains one of the highest-demand skill sets across FORGE's industry partners, from fintech risk modeling to healthcare analytics.",
    faqs: FORGE_CANONICAL_FAQS,
    brochures: [
      {
        duration: "1 Year",
        path: "/courses/1-year/1_Year_Data_Science_Brochure.pdf",
        fileName: "1_Year_Data_Science_Brochure.pdf",
      },
      {
        duration: "6 Months",
        path: "/courses/6-months/Winnovation_Data_Science_6_Months_Brochure.pdf",
        fileName: "Winnovation_Data_Science_6_Months_Brochure.pdf",
      },
      {
        duration: "3 Months",
        path: "/courses/3-months/Winnovation_Data_Science_Brochure.pdf",
        fileName: "Winnovation_Data_Science_Brochure.pdf",
      },
    ],
  },
  {
    slug: "business-analyst",
    name: "Business Analyst",
    shortDescription:
      "Turn business problems into structured analysis — requirements, data, and decision-ready recommendations.",
    domain: "Business & Strategy",
    duration: "8 weeks",
    deliveryMode: "Online",
    category: "Certification",
    featured: true,
    status: "published",
    overview:
      "This track builds the core business analyst toolkit: requirement gathering, stakeholder communication, and data-informed recommendations, practiced against real business scenarios from FORGE's partners.",
    whyThisProgram: [
      "Practice on real stakeholder scenarios, not hypothetical case studies.",
      "Learn the exact deliverables (BRDs, process maps, dashboards) used in industry.",
      "Mentorship from analysts currently working inside partner organizations.",
    ],
    curriculum: [
      { module: "Foundations", topics: ["Role of a business analyst", "Requirement elicitation techniques"], },
      { module: "Process & Data", topics: ["Process mapping", "SQL for analysts", "Dashboarding basics"], },
      { module: "Communication", topics: ["Writing a BRD", "Presenting to stakeholders"], },
      { module: "Capstone", topics: ["End-to-end business case study", "Recommendation deck"], },
    ],
    outcomes: [
      "Write a business requirements document from a stakeholder brief",
      "Query and interpret business data with SQL",
      "Build a decision-ready dashboard",
      "Present a structured recommendation to stakeholders",
    ],
    eligibility: [
      "No technical background required",
      "Comfort with spreadsheets",
      "Interest in business problem-solving",
    ],
    projects: [
      "Business case study with a partner-provided brief",
      "Dashboard + recommendation deck capstone",
    ],
    certificationDetails:
      "Completion of the capstone case study and a final stakeholder-style presentation earns the FORGE Business Analyst certification.",
    trainerName: "Devansh Rao",
    trainerDesignation: "Senior Business Analyst, Mentor Network",
    trainerBio:
      "Devansh has led requirement-gathering and analytics functions across two startups and a mid-size enterprise, and mentors the Business Analyst track.",
    trainerQuote:
      "Most of this job is asking the right question before anyone writes a line of SQL — that's what we train first.",
    industryRelevance:
      "Business analysts sit at the intersection of every function — this track is built directly around what FORGE's industry partners hire for.",
    faqs: FORGE_CANONICAL_FAQS,
    brochures: [
      {
        duration: "1 Year",
        path: "/courses/1-year/1_Year_Data_Analytics_Brochure.pdf",
        fileName: "1_Year_Data_Analytics_Brochure.pdf",
      },
      {
        duration: "6 Months",
        path: "/courses/6-months/Winnovation_Data_Analytics_6_Months_Brochure.pdf",
        fileName: "Winnovation_Data_Analytics_6_Months_Brochure.pdf",
      },
      {
        duration: "3 Months",
        path: "/courses/3-months/Winnovation_Data_Analytics_Brochure.pdf",
        fileName: "Winnovation_Data_Analytics_Brochure.pdf",
      },
      {
        duration: "45 Days",
        path: "/courses/45-days/Winnovation_Data_Analytics_Curriculum.pdf",
        fileName: "Winnovation_Data_Analytics_Curriculum.pdf",
      },
    ],
  },
  {
    slug: "data-analytics",
    name: "Data Analytics",
    shortDescription:
      "Master the analytics stack — SQL, visualization, and storytelling with data for real business decisions.",
    domain: "Data & AI",
    duration: "10 weeks",
    deliveryMode: "Hybrid",
    category: "Certification",
    featured: true,
    status: "published",
    overview:
      "This track focuses on the practical analytics stack most companies actually run on: SQL, spreadsheet modeling, and BI dashboards, built around real operational datasets.",
    whyThisProgram: [
      "Work with the exact BI tools used inside FORGE's industry partners.",
      "Learn to build dashboards people actually use, not just charts for a grade.",
      "Mentorship from analysts who review your dashboards like a manager would.",
    ],
    curriculum: [
      { module: "SQL Fundamentals", topics: ["Querying relational data", "Joins & aggregations"], },
      { module: "Visualization", topics: ["Dashboard design principles", "BI tooling"], },
      { module: "Statistics for Analytics", topics: ["Descriptive statistics", "A/B testing basics"], },
      { module: "Capstone", topics: ["End-to-end analytics project", "Dashboard walkthrough"], },
    ],
    outcomes: [
      "Write complex SQL queries against relational data",
      "Design dashboards that communicate clearly",
      "Run basic statistical analysis on business data",
      "A capstone analytics project for your portfolio",
    ],
    eligibility: [
      "Basic spreadsheet comfort",
      "No prior SQL or BI experience required",
    ],
    projects: [
      "SQL-based analysis of an operational dataset",
      "BI dashboard capstone with a live walkthrough",
    ],
    certificationDetails:
      "Builders who complete the capstone dashboard and pass a live walkthrough review receive the FORGE Data Analytics certification.",
    trainerName: "Meera Nair",
    trainerDesignation: "Analytics Lead, Mentor Network",
    trainerBio:
      "Meera has built analytics functions from scratch at two early-stage startups and mentors builders through the Data Analytics track.",
    trainerQuote:
      "A dashboard nobody opens twice is a failed project — we train builders to design for the person who has to use it.",
    industryRelevance:
      "Every partner organization in the FORGE network runs on some form of analytics stack — this is one of the most directly hireable tracks.",
    faqs: FORGE_CANONICAL_FAQS,
    brochures: [
      {
        duration: "1 Year",
        path: "/courses/1-year/1_Year_Data_Analytics_Brochure.pdf",
        fileName: "1_Year_Data_Analytics_Brochure.pdf",
      },
      {
        duration: "6 Months",
        path: "/courses/6-months/Winnovation_Data_Analytics_6_Months_Brochure.pdf",
        fileName: "Winnovation_Data_Analytics_6_Months_Brochure.pdf",
      },
      {
        duration: "3 Months",
        path: "/courses/3-months/Winnovation_Data_Analytics_Brochure.pdf",
        fileName: "Winnovation_Data_Analytics_Brochure.pdf",
      },
      {
        duration: "45 Days",
        path: "/courses/45-days/Winnovation_Data_Analytics_Curriculum.pdf",
        fileName: "Winnovation_Data_Analytics_Curriculum.pdf",
      },
    ],
  },
  {
    slug: "full-stack",
    name: "Full Stack Development",
    shortDescription:
      "Ship a complete product — frontend, backend, and deployment — building the way real engineering teams do.",
    domain: "Engineering",
    duration: "16 weeks",
    deliveryMode: "Hybrid",
    category: "Certification",
    featured: true,
    status: "published",
    overview:
      "The longest and most hands-on track: builders ship a complete, deployed product across the full stack, working in small teams the way real engineering teams do.",
    whyThisProgram: [
      "Build and ship a real product, not a set of isolated exercises.",
      "Work in small teams with code review from practicing engineers.",
      "Learn the full path from local development to a live, deployed product.",
    ],
    curriculum: [
      { module: "Frontend Foundations", topics: ["HTML/CSS/JS fundamentals", "Modern frontend framework"], },
      { module: "Backend & Databases", topics: ["API design", "Relational databases", "Authentication"], },
      { module: "Full Stack Integration", topics: ["Connecting frontend to backend", "State management"], },
      { module: "Deployment & DevOps Basics", topics: ["CI/CD basics", "Cloud deployment"], },
      { module: "Team Capstone", topics: ["Team-built product from spec to deployment"], },
    ],
    outcomes: [
      "Build and deploy a full-stack web application",
      "Work with relational databases and authentication",
      "Collaborate in a small engineering team with code review",
      "A deployed capstone product for your portfolio",
    ],
    eligibility: [
      "Basic programming fundamentals in any language",
      "Willingness to commit to the full 16-week team capstone",
    ],
    projects: [
      "Individual full-stack mini-project",
      "Team capstone: a deployed product built from a real spec",
    ],
    certificationDetails:
      "Builders who ship the team capstone and pass code review from mentor engineers receive the FORGE Full Stack Development certification.",
    trainerName: "Arjun Malhotra",
    trainerDesignation: "Senior Software Engineer, Mentor Network",
    trainerBio:
      "Arjun has shipped production systems across two startups and leads code review for the Full Stack track's team capstones.",
    trainerQuote:
      "Shipping with a team under a deadline teaches you things no solo tutorial project ever will.",
    industryRelevance:
      "Full stack engineers remain the most consistently in-demand role across FORGE's industry partners and the Citadel's own build projects.",
    faqs: FORGE_CANONICAL_FAQS,
    brochures: [
      {
        duration: "1 Year",
        path: "/courses/1-year/1_Year_Full_Stack_Web_Development_Brochure.pdf",
        fileName: "1_Year_Full_Stack_Web_Development_Brochure.pdf",
      },
      {
        duration: "6 Months",
        path: "/courses/6-months/Winnovation_Full_Stack_Web_Development_6_Months_Brochure.pdf",
        fileName: "Winnovation_Full_Stack_Web_Development_6_Months_Brochure.pdf",
      },
      {
        duration: "3 Months",
        path: "/courses/3-months/Winnovation_Full_Stack_Web_Development_Brochure.pdf",
        fileName: "Winnovation_Full_Stack_Web_Development_Brochure.pdf",
      },
      {
        duration: "45 Days",
        path: "/courses/45-days/Winnovation_Web_Development_Curriculum.pdf",
        fileName: "Winnovation_Web_Development_Curriculum.pdf",
      },
    ],
  },
  {
    slug: "ai-productivity",
    name: "AI Productivity & Automation",
    shortDescription:
      "Use AI tools to automate real workflows — from prompt design to building lightweight automations.",
    domain: "Data & AI",
    duration: "6 weeks",
    deliveryMode: "Online",
    category: "Certification",
    featured: true,
    status: "published",
    overview:
      "A fast, practical track on using AI tools to automate real work — prompt design, workflow automation, and lightweight AI-assisted tooling, aimed at builders and operators alike.",
    whyThisProgram: [
      "The shortest track — built for builders who need practical AI fluency fast.",
      "Every exercise automates a real, recurring task, not a toy prompt.",
      "Directly applicable to whatever else you're building at FORGE.",
    ],
    curriculum: [
      { module: "Prompt Design", topics: ["Structured prompting", "Iterating on outputs"], },
      { module: "Workflow Automation", topics: ["Chaining AI tools into workflows", "Lightweight scripting for automation"], },
      { module: "Applied Projects", topics: ["Automating a real recurring task", "Evaluating AI output quality"], },
    ],
    outcomes: [
      "Design reliable, structured prompts for real tasks",
      "Automate a recurring workflow using AI tools",
      "Evaluate and improve AI-generated output",
      "A working automation project for your portfolio",
    ],
    eligibility: [
      "No coding background required",
      "Basic computer literacy",
    ],
    projects: [
      "Automate one real recurring task from your own work or studies",
    ],
    certificationDetails:
      "Builders who submit a working automation project and pass a short review receive the FORGE AI Productivity & Automation certification.",
    trainerName: "Ishaan Kapoor",
    trainerDesignation: "AI Tooling Lead, Mentor Network",
    trainerBio:
      "Ishaan builds AI-assisted internal tooling and leads the AI Productivity & Automation track's applied projects.",
    trainerQuote:
      "The best automations aren't flashy — they just quietly save someone two hours a week, every week.",
    industryRelevance:
      "AI-assisted productivity is now a baseline expectation across every FORGE track and partner organization, not just AI-specific roles.",
    faqs: FORGE_CANONICAL_FAQS,
    brochures: [
      {
        duration: "1 Year",
        path: "/courses/1-year/1_Year_Generative_AI_Brochure.pdf",
        fileName: "1_Year_Generative_AI_Brochure.pdf",
      },
      {
        duration: "6 Months",
        path: "/courses/6-months/Winnovation_Generative_AI_6_Months_Brochure.pdf",
        fileName: "Winnovation_Generative_AI_6_Months_Brochure.pdf",
      },
      {
        duration: "3 Months",
        path: "/courses/3-months/Winnovation_Generative_AI_Brochure.pdf",
        fileName: "Winnovation_Generative_AI_Brochure.pdf",
      },
    ],
  },
  {
    slug: "generative-ai",
    name: "Generative AI & LLM Engineering",
    shortDescription:
      "Master modern Generative AI: Large Language Models, prompt architecture, LangChain, RAG, diffusion models, fine-tuning, and production AI agents.",
    domain: "Artificial Intelligence",
    duration: "1 Year / 6 Months / 3 Months",
    deliveryMode: "Hybrid",
    category: "Certification",
    featured: true,
    status: "published",
    overview:
      "This comprehensive track guides builders from transformer fundamentals through to deployed enterprise-grade AI agents, fine-tuned open-source models, and production RAG pipelines.",
    whyThisProgram: [
      "Learn to build autonomous agents, not just query chatbots.",
      "Hands-on fine-tuning and retrieval pipelines on real enterprise data.",
      "Mentorship from engineers currently deploying AI in production.",
    ],
    curriculum: [
      { module: "LLM Foundations", topics: ["Transformer mechanics", "Prompt engineering & structured parsing"] },
      { module: "RAG & Vector Databases", topics: ["Embeddings", "Vector search with Pinecone/pgvector", "LangChain & LlamaIndex"] },
      { module: "Fine-Tuning & Custom Models", topics: ["LoRA & QLoRA", "Dataset curation & model evaluation"] },
      { module: "Autonomous Agents", topics: ["Tool calling", "Multi-agent workflows", "Guardrails & safety"] },
      { module: "Capstone", topics: ["Production AI agent deployment behind a secured API"] },
    ],
    outcomes: [
      "Architect and deploy production RAG knowledge systems",
      "Fine-tune open-weights models for custom domains",
      "Build tool-calling autonomous AI agents",
      "Deploy scalable AI microservices with observability",
    ],
    eligibility: [
      "Basic Python proficiency",
      "Familiarity with APIs and JSON data",
      "Curiosity about cutting-edge artificial intelligence",
    ],
    projects: [
      "Domain-specific RAG knowledge assistant with vector search",
      "Multi-agent autonomous workflow pipeline deployed live",
    ],
    certificationDetails:
      "Builders who deploy their capstone AI system and pass review by our AI mentor panel receive the FORGE Generative AI & LLM Engineering certification.",
    trainerName: "Dr. Kaviraj Sen",
    trainerDesignation: "Principal AI Architect, Mentor Network",
    trainerBio:
      "Dr. Sen has built generative AI systems across enterprise search and autonomous robotics, leading our AI track.",
    trainerQuote:
      "Building with AI isn't about using a chatbot — it's about engineering systems that reliably reason and execute.",
    industryRelevance:
      "Generative AI engineering is the fastest growing hiring priority across modern tech organizations globally.",
    faqs: FORGE_CANONICAL_FAQS,
    brochures: [
      {
        duration: "1 Year",
        path: "/courses/1-year/1_Year_Generative_AI_Brochure.pdf",
        fileName: "1_Year_Generative_AI_Brochure.pdf",
      },
      {
        duration: "6 Months",
        path: "/courses/6-months/Winnovation_Generative_AI_6_Months_Brochure.pdf",
        fileName: "Winnovation_Generative_AI_6_Months_Brochure.pdf",
      },
      {
        duration: "3 Months",
        path: "/courses/3-months/Winnovation_Generative_AI_Brochure.pdf",
        fileName: "Winnovation_Generative_AI_Brochure.pdf",
      },
    ],
  },
  {
    slug: "cloud-computing",
    name: "Cloud Computing & DevOps Architecture",
    shortDescription:
      "Design, build, and deploy resilient multi-cloud architectures across AWS, Azure, and GCP using Docker, Kubernetes, and Terraform.",
    domain: "Cloud & DevOps",
    duration: "1 Year / 6 Months / 3 Months",
    deliveryMode: "Hybrid",
    category: "Certification",
    featured: true,
    status: "published",
    overview:
      "Learn the modern cloud engineering and DevOps stack: cloud network topology, Linux system administration, container orchestration with Kubernetes, and Infrastructure as Code.",
    whyThisProgram: [
      "Real cloud environments, not mocked simulators.",
      "Work with industry-standard Terraform and Kubernetes clusters.",
      "Direct code reviews from practicing cloud and SRE architects.",
    ],
    curriculum: [
      { module: "Cloud Foundations & Networking", topics: ["AWS Core Services", "VPCs, subnets, and routing", "IAM security"] },
      { module: "Containers & Orchestration", topics: ["Docker packaging", "Kubernetes pods, services, and ingress"] },
      { module: "Infrastructure as Code", topics: ["Terraform declarative config", "Multi-environment provisioning"] },
      { module: "CI/CD & Observability", topics: ["GitHub Actions pipelines", "Prometheus & Grafana monitoring"] },
      { module: "Capstone", topics: ["High-availability multi-tier cloud infrastructure deployment"] },
    ],
    outcomes: [
      "Provision and secure production cloud infrastructure",
      "Deploy microservices on Kubernetes clusters",
      "Automate zero-downtime CI/CD deployment pipelines",
      "Manage cloud cost and security compliance",
    ],
    eligibility: [
      "Basic command line familiarity",
      "Fundamental understanding of web architectures",
    ],
    projects: [
      "Automated Terraform deployment of a resilient web architecture",
      "Kubernetes microservice deployment with autoscaling and CI/CD",
    ],
    certificationDetails:
      "Earn the FORGE Cloud Computing & DevOps certification upon successfully deploying and defending your multi-cloud infrastructure capstone.",
    trainerName: "Vikram Singhal",
    trainerDesignation: "Cloud Platform Lead, Mentor Network",
    trainerBio:
      "Vikram has architected distributed cloud backends for over a decade, managing infrastructure serving millions of daily requests.",
    trainerQuote:
      "Great cloud engineering is invisible — when done right, systems heal, scale, and deliver effortlessly.",
    industryRelevance:
      "Cloud and DevOps engineers are fundamental to every modern software development team.",
    faqs: FORGE_CANONICAL_FAQS,
    brochures: [
      {
        duration: "1 Year",
        path: "/courses/1-year/1_Year_Cloud_Computing_Brochure.pdf",
        fileName: "1_Year_Cloud_Computing_Brochure.pdf",
      },
      {
        duration: "6 Months",
        path: "/courses/6-months/Winnovation_Cloud_Computing_6_Months_Brochure.pdf",
        fileName: "Winnovation_Cloud_Computing_6_Months_Brochure.pdf",
      },
      {
        duration: "3 Months",
        path: "/courses/3-months/Winnovation_Cloud_Computing_Brochure.pdf",
        fileName: "Winnovation_Cloud_Computing_Brochure.pdf",
      },
    ],
  },
  {
    slug: "dsa",
    name: "Data Structures & Algorithms (DSA)",
    shortDescription:
      "Master algorithmic problem-solving from foundational data structures to dynamic programming and technical interview mastery.",
    domain: "Computer Science Foundations",
    duration: "1 Year / 6 Months / 3 Months",
    deliveryMode: "Online",
    category: "Certification",
    featured: true,
    status: "published",
    overview:
      "A systematic, pattern-based curriculum covering computer science algorithmic problem solving: trees, graphs, heaps, dynamic programming, and system design.",
    whyThisProgram: [
      "Pattern-based learning that generalizes to hundreds of problem types.",
      "Live timed mock technical interviews with mentor engineers.",
      "Focus on time-space complexity optimization and clean code.",
    ],
    curriculum: [
      { module: "Linear Data Structures", topics: ["Arrays, two-pointer, sliding window", "Linked lists, stacks & queues"] },
      { module: "Hierarchical Structures", topics: ["Binary trees, BSTs, heaps & tries", "Tree traversals and recursion"] },
      { module: "Graphs & Advanced Algorithms", topics: ["BFS/DFS, Dijkstra, topological sort", "Disjoint set union"] },
      { module: "Dynamic Programming", topics: ["Memoization, tabulation, knapsack & LCS patterns"] },
      { module: "System Design & Interview Prep", topics: ["Scalability, caching, high-level architecture"] },
    ],
    outcomes: [
      "Solve medium-to-hard LeetCode algorithmic problems with confidence",
      "Analyze and optimize computational complexity",
      "Excel in technical coding and whiteboard interviews",
    ],
    eligibility: [
      "Basic familiarity with at least one programming language (C++, Java, or Python)",
    ],
    projects: [
      "Algorithmic visualization tool and high-performance graph solver",
    ],
    certificationDetails:
      "Passing the comprehensive timed coding assessment and mock interview earns the FORGE DSA Certification.",
    trainerName: "Ananya Deshmukh",
    trainerDesignation: "Staff Algorithms Engineer, Mentor Network",
    trainerBio:
      "Ananya has placed hundreds of learners in top product companies through rigorous algorithmic coaching.",
    trainerQuote:
      "Algorithmic intuition isn't talent — it's recognizing recurring patterns and breaking problems down logically.",
    industryRelevance:
      "DSA remains the universal technical benchmark for engineering hiring across product companies worldwide.",
    faqs: FORGE_CANONICAL_FAQS,
    brochures: [
      {
        duration: "1 Year",
        path: "/courses/1-year/1_Year_DSA_Brochure.pdf",
        fileName: "1_Year_DSA_Brochure.pdf",
      },
      {
        duration: "6 Months",
        path: "/courses/6-months/Winnovation_DSA_6_Months_Brochure.pdf",
        fileName: "Winnovation_DSA_6_Months_Brochure.pdf",
      },
      {
        duration: "3 Months",
        path: "/courses/3-months/Winnovation_DSA_Brochure.pdf",
        fileName: "Winnovation_DSA_Brochure.pdf",
      },
    ],
  },
  {
    slug: "iot",
    name: "Internet of Things & Embedded Systems",
    shortDescription:
      "Bridge hardware and software: microcontrollers, sensor arrays, wireless protocols, and cloud IoT telemetry.",
    domain: "Hardware & IoT",
    duration: "1 Year / 6 Months / 3 Months",
    deliveryMode: "Hybrid",
    category: "Certification",
    featured: false,
    status: "published",
    overview:
      "Explore embedded systems and connected hardware: embedded C/C++, ESP32 microcontrollers, sensor integration, MQTT communication, and industrial IoT data pipelines.",
    whyThisProgram: [
      "Work with real microcontrollers and sensor hardware kits.",
      "Connect physical devices to real cloud backends and dashboards.",
      "Mentorship from embedded systems and hardware product creators.",
    ],
    curriculum: [
      { module: "Embedded C++ & Microcontrollers", topics: ["ESP32 & Arduino architecture", "GPIO, I2C, SPI interfaces"] },
      { module: "Sensors & Actuators", topics: ["Analog & digital sensors", "Signal conditioning and filtering"] },
      { module: "Networking & Protocols", topics: ["Wi-Fi, Bluetooth Low Energy (BLE)", "MQTT & HTTP telemetry"] },
      { module: "Cloud IoT Dashboards", topics: ["AWS IoT Core / ThingsBoard", "Real-time hardware monitoring"] },
      { module: "Capstone", topics: ["Complete connected physical hardware device prototype"] },
    ],
    outcomes: [
      "Program and debug microcontroller systems",
      "Interface sensors and wireless transmission protocols",
      "Deploy live hardware monitoring cloud telemetry dashboards",
    ],
    eligibility: [
      "Curiosity about physical electronics and basic programming",
    ],
    projects: [
      "Smart environmental telemetry device with wireless cloud logging",
    ],
    certificationDetails:
      "Awarded upon building and presenting a fully functional IoT connected hardware system prototype.",
    trainerName: "Siddharth Verma",
    trainerDesignation: "Embedded Systems Specialist, Mentor Network",
    trainerBio:
      "Siddharth has designed industrial IoT sensors and smart automotive telemetry devices for over 8 years.",
    trainerQuote:
      "There's nothing quite like writing software that actually makes physical hardware react in the real world.",
    industryRelevance:
      "Smart hardware, robotics, electric vehicles, and industrial automation rely directly on embedded IoT engineers.",
    faqs: FORGE_CANONICAL_FAQS,
    brochures: [
      {
        duration: "1 Year",
        path: "/courses/1-year/1_Year_IoT_Brochure.pdf",
        fileName: "1_Year_IoT_Brochure.pdf",
      },
      {
        duration: "6 Months",
        path: "/courses/6-months/Winnovation_IoT_6_Months_Brochure.pdf",
        fileName: "Winnovation_IoT_6_Months_Brochure.pdf",
      },
      {
        duration: "3 Months",
        path: "/courses/3-months/Winnovation_IoT_Brochure.pdf",
        fileName: "Winnovation_IoT_Brochure.pdf",
      },
    ],
  },
  {
    slug: "digital-marketing",
    name: "Digital Marketing & Growth Engineering",
    shortDescription:
      "Master performance marketing, technical SEO, paid user acquisition, conversion rate optimization, and brand scaling.",
    domain: "Growth & Marketing",
    duration: "1 Year / 6 Months / 3 Months",
    deliveryMode: "Online",
    category: "Certification",
    featured: false,
    status: "published",
    overview:
      "A modern, data-driven marketing curriculum: SEO growth engines, performance advertising across Meta and Google, marketing automation funnels, and web analytics.",
    whyThisProgram: [
      "Manage real campaigns with measurable ROI targets.",
      "Master analytics and attribution, not just creative copy.",
      "Mentorship from growth heads who manage high-scale marketing budgets.",
    ],
    curriculum: [
      { module: "Technical SEO & Inbound", topics: ["Search algorithm signals", "On-page and technical audits", "Content strategy"] },
      { module: "Performance Paid Acquisition", topics: ["Meta Ads Manager", "Google Search & Performance Max campaigns"] },
      { module: "Conversion & Funnel Design", topics: ["Landing page CRO", "A/B testing methodology", "Copywriting that converts"] },
      { module: "Marketing Analytics & Attribution", topics: ["Google Analytics 4 (GA4)", "CAC, LTV, and cohort retention"] },
      { module: "Capstone", topics: ["End-to-end multi-channel marketing campaign and growth audit"] },
    ],
    outcomes: [
      "Plan and execute profitable paid acquisition campaigns",
      "Conduct in-depth technical SEO audits that drive rank gains",
      "Instrument analytics to measure full customer journey ROI",
    ],
    eligibility: [
      "Interest in growth, business strategy, and digital consumer psychology",
    ],
    projects: [
      "Live growth campaign audit and multi-channel acquisition strategy deck",
    ],
    certificationDetails:
      "Earned by submitting and presenting a comprehensive, data-backed marketing growth plan.",
    trainerName: "Pooja Hegde",
    trainerDesignation: "Growth Marketing Director, Mentor Network",
    trainerBio:
      "Pooja has led digital growth across D2C brands and fintech applications, scaling user bases profitably.",
    trainerQuote:
      "Marketing in the modern era is engineering: hypothesis, experiment, measurement, and optimization.",
    industryRelevance:
      "Every organization requires skilled growth marketers capable of acquiring and retaining customers efficiently.",
    faqs: FORGE_CANONICAL_FAQS,
    brochures: [
      {
        duration: "1 Year",
        path: "/courses/1-year/1_Year_Digital_Marketing_Brochure.pdf",
        fileName: "1_Year_Digital_Marketing_Brochure.pdf",
      },
      {
        duration: "6 Months",
        path: "/courses/6-months/Winnovation_Digital_Marketing_6_Months_Brochure.pdf",
        fileName: "Winnovation_Digital_Marketing_6_Months_Brochure.pdf",
      },
      {
        duration: "3 Months",
        path: "/courses/3-months/Winnovation_Digital_Marketing_Brochure.pdf",
        fileName: "Winnovation_Digital_Marketing_Brochure.pdf",
      },
    ],
  },
];

export function getProgramBySlug(slug: string): Program | undefined {
  return programs.find((program) => program.slug === slug);
}
