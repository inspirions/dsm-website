export const HURDLE_ITEMS = [
  {
    top: "70%",
    left: "5%",
    title: "Scattered Updates",
    description:
      "Disorganized work logs and lost standup notes create confusion and wasted time.",
  },
  {
    top: "0%",
    left: "10%",
    title: "Time Zone Challenges",
    description:
      "Remote teams struggle to align across global schedules, stalling momentum.",
  },
  {
    top: "0%",
    left: "70%",
    title: "Hidden Resource Gaps",
    description:
      "Unknown team availability and leave schedules disrupt planning.",
  },
  {
    top: "70%",
    left: "80%",
    title: "Buried Insights",
    description:
      "Update logs pile up without actionable insights, leaving potential on the table.",
  },
];

export const QUOTES = [
  {
    name: "Raj Sangroula",
    designation: "CEO at QSystemsAI",
    quote: `"DailySync transformed how our global team collaborates. Asynchronous updates, AI summaries, and realtime actionable AI insights saves us hours every week, keeping everyone aligned across time zones. I can just ask the bot "give me a report of how my 'Project X' is going on" and I get an insightful report delivered to my email right away. This has saved me hours of time."`,
  },
  {
    name: "Sanjay Khanal",
    designation: "CTO at Inspiring Lab",
    quote: `“The chat assistant in DailySync.AI is like having a data analyst on speed dial. I can ask for insights on project progress or individual contributions, and it delivers answers instantly without navigating complex dashboards. It's made decision-making faster and smarter for our hybrid team.”`,
  },
  {
    name: "Risav Karna",
    designation: "Principal Consultant at Gita Aspirations",
    quote: `“As a global MedTech company with teams spread across multiple time zones, staying aligned used to be a constant struggle. DailySync.AI has streamlined our daily communication, giving us instant visibility into priorities, blockers, and progress—without the need for more meetings. It's become a simple but powerful tool that keeps our engineering, clinical, and regulatory teams connected and focused, no matter where they are.”`,
  },
];

export const STANDUP_STEPS_VIEW = [
  {
    title: "Work Logs",
    description:
      "Replace unorganized work logs with structured, daily updates.",
  },
  {
    title: "AI-powered Summaries",
    description: "Capture every standup note with AI-powered summaries.",
  },
  {
    title: "Collaboration",
    description: "Collaborate effortlessly across time zones.",
  },
  {
    title: "Availability",
    description: "Track availability and manage leave/WFH with ease.",
  },
];

export const TAB_LISTS = [
  {
    tabValue: "0",
    tabIcon: "note" as const,
    tabTitle: "Stay Aligned, Effortlessly",
    tabDescription:
      "Asynchronous check-ins keep your team in sync without endless meetings.",
  },
  {
    tabValue: "1",
    tabIcon: "hourGlass" as const,
    tabTitle: "Save Time, Gain Clarity",
    tabDescription: "AI distills updates into concise, actionable summaries.",
  },
  {
    tabValue: "2",
    tabIcon: "handShake" as const,
    tabTitle: "Work Across Borders",
    tabDescription:
      "Coordinate globally with tools built for time zone flexibility.",
  },
  {
    tabValue: "3",
    tabIcon: "databaseCog" as const,
    tabTitle: "Optimize Resources",
    tabDescription:
      "Plan smarter with leave management and team health insights.",
  },
  {
    tabValue: "4",
    tabIcon: "dataBricks" as const,
    tabTitle: "Make Data-Driven Moves",
    tabDescription:
      "Unlock AI-powered analytics for teams, projects, and individuals.",
  },
];

export const NAV_ITEMS = [
  {
    name: "Features",
    link: "#features",
  },
  {
    name: "Pricing",
    link: "#pricing",
  },
  {
    name: "FAQ",
    link: "#faq",
  },
];

export const FAQS = [
  {
    value: "0",
    title: "What is DailySync.AI?",
    description:
      "DailySync.AI is an AI-powered platform that keeps remote and hybrid teams aligned with asynchronous updates, automated summaries, and actionable insights.",
  },
  {
    value: "1",
    title: "How does it help teams stay in sync?",
    description:
      "Through asynchronous communication, AI-driven analytics, and resource management tools, DailySync.AI ensures your team thrives - anytime, anywhere.",
  },
  {
    value: "2",
    title: "Is it right for my team?",
    description:
      "Whether you are on-site, remote, or hybrid and seek better alignment, DailySync.AI is built for you.",
  },
  {
    value: "3",
    title: "Which industries can use it?",
    description:
      "Any industry, any team - DailySync.AI adapts to your collaboration needs.",
  },
  {
    value: "4",
    title: "What's the cost?",
    description:
      "Flexible plans for every team size. Visit our pricing page for details.",
  },
  {
    value: "5",
    title: "Which plan fits my team?",
    description:
      "Not sure? Contact our sales team for a tailored recommendation.",
  },
  {
    value: "6",
    title: "Is my data secure?",
    description: "Yes, we use top-tier security to keep your information safe.",
  },
];

export const FEATURE_CARDS = [
  {
    icon: "hourGlass" as const,
    title: "Daily Work Logs",
    description: "Team-tailored updates, always organized.",
  },
  {
    icon: "note" as const,
    title: "AI Summaries & Insights",
    description: "Smart reports that save time and reveal trends.",
  },
  {
    icon: "dashboard" as const,
    title: "Team Dashboard",
    description: "See your team's pulse at a glance.",
  },
  {
    icon: "ai" as const,
    title: "AI Chat Assistant",
    description: "Instant answers, no navigation required.",
  },
  {
    icon: "calendarQuestion" as const,
    title: "Leave/WFH Tools",
    description: "Simplify absence tracking and planning.",
  },
  // {
  //   icon: "contract" as const,
  //   title: "Flexible Configuration",
  //   description:
  //     "Create teams and projects that fit your goals.",
  // },
  {
    icon: "calendarEvent" as const,
    title: "Event Scheduling",
    description: "Stay on top of deadlines with notifications.",
  },
  {
    icon: "news" as const,
    title: "Company Updates",
    description: "Share news and keep everyone informed.",
  },
  {
    icon: "inventory" as const,
    title: "Inventory Management",
    description: "Handle office equipment requests seamlessly.",
  },
  // {
  //   icon: "buildings" as const,
  //   title: "Multi-Org Support",
  //   description:
  //     "Manage everything from one account.",
  // },
];

export const COMMONS = {
  GROWTH: "Growth",
  ADVANCED: "Advanced",
  ENTERPRISE: "Enterprise",
};

export const PRICING_PLANS = [
  {
    name: "Startup",
    price: "$0",
    users: "for less than 20 users",
    features: [
      "Multiple organizations",
      "Customizable Standup Notes",
      "Tag teams, members & projects",
      "Unlimited projects & teams",
      "Email & in-app alerts",
      "Leave/WFH tracking",
      "Resource requests",
      "Events calendar & News",
    ],
    remark: "Flat $20 per month for advanced AI features after trial period",
  },
  {
    name: "Growth",
    price: "$2.99",
    period: "/ user / month",
    users: "for more than 20 users",
    features: ["Everything in Free", "Summary generation"],
    highlight: true,
  },
  {
    name: "Advanced",
    price: "$4.99",
    period: "/ user / month",
    users: "for more than 20 users",
    features: [
      "Everything in Growth",
      "Chat Feature",
      "Report generation",
      "Includes AI Insights",
    ],
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "Custom Pricing",
    features: [
      "Everything in Advanced",
      "Tailored Features & Integrations",
      "Dedicated Onboarding",
    ],
  },
];
