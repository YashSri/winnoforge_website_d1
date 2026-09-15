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
  faqs: { question: string; answer: string }[];
  featured?: boolean;
  price?: string;
  status?: "published" | "draft" | "coming-soon";
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
    faqs: [
      { question: "Do I need a math or CS background?", answer: "No — the foundations module covers what you need. A willingness to work through statistics is more important than a specific degree." },
      { question: "What tools will I use?", answer: "Python, pandas, scikit-learn, and a deep learning framework for the neural network module." },
      { question: "Is this remote-friendly?", answer: "Yes — delivery is hybrid, with core sessions available both in-person at the Citadel and online." },
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
    faqs: [
      { question: "Is this a technical role?", answer: "It's lightly technical — you'll learn SQL and dashboarding, but the core skill is structured thinking and communication." },
      { question: "Can I do this alongside a full course load?", answer: "Yes, delivery is fully online and asynchronous-friendly outside of live review sessions." },
      { question: "What's the capstone like?", answer: "A real business case study with a stakeholder brief provided by a FORGE industry partner." },
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
    faqs: [
      { question: "How is this different from Data Science?", answer: "Data Analytics focuses on querying, visualizing, and communicating existing data; Data Science goes further into building predictive models." },
      { question: "What BI tool will I learn?", answer: "The curriculum covers general BI/dashboarding principles applicable across common tools used by partner organizations." },
      { question: "Is there a live component?", answer: "Yes — the capstone includes a live dashboard walkthrough with mentor feedback." },
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
    faqs: [
      { question: "Do I need prior coding experience?", answer: "Basic programming fundamentals are expected — this isn't a first-ever-code course, but you don't need framework experience." },
      { question: "How big are the capstone teams?", answer: "Small teams of 3-4 builders, mirroring a real early-stage engineering team." },
      { question: "What happens to the product we build?", answer: "It's yours for your portfolio; standout capstones sometimes continue inside the Citadel as ongoing builds." },
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
    faqs: [
      { question: "Is this a coding course?", answer: "No — lightweight scripting is introduced, but the focus is on using and chaining AI tools, not software engineering." },
      { question: "How is this different from Data Science?", answer: "This track is about applying existing AI tools to automate work; Data Science is about building models from scratch." },
      { question: "Can I take this alongside another track?", answer: "Yes — at 6 weeks, it's designed to run alongside a longer track like Full Stack or Data Science." },
    ],
  },
];

export function getProgramBySlug(slug: string): Program | undefined {
  return programs.find((program) => program.slug === slug);
}
