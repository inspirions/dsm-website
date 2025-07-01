import {
  PLACEHOLDER1_IMAGE_URL,
  PLACEHOLDER_IMAGE_URL,
} from "@/constants/commons";

export const HURDLE_ITEMS = [
  {
    top: "70%",
    left: "5%",
    title: "Inefficiency",
    description:
      "Meetings drag on with repetitive updates and minimal outcomes.",
  },
  {
    top: "0%",
    left: "10%",
    title: "Inaccuracy",
    description: "Important details are missed or poorly documented.",
  },
  {
    top: "0%",
    left: "70%",
    title: "Misalignment",
    description: "Key info gets lost, causing confusion and delays.",
  },
  {
    top: "70%",
    left: "80%",
    title: "Disorganization",
    description: "Tasks are forgotten in chats and emails.",
  },
];

export const QUOTES = [
  {
    name: "Sahil Gurung",
    designation: "Chief Strategy Officer at Quantum Solutions",
    quote: `“With DailySync.ai, our standups are finally efficient. The AI handles summaries and action items so I can focus on leading, not note-taking. It’s like having a reliable assistant in every meeting.”`,
    image: PLACEHOLDER_IMAGE_URL,
  },
  {
    name: "Rajesh Pandey",
    designation: "Chief Technology Officer at Quantum Solutions",
    quote: `“DailySync.ai has streamlined our standups completely. It captures discussions, summarizes them clearly, and highlights key updates and blockers. We save time every day and stay better aligned as a team.”`,
    image: PLACEHOLDER1_IMAGE_URL,
  },
];

export const STANDUP_STEPS_VIEW = [
  {
    title: "Record Your Standup",
    description:
      "Easily log your daily standup updates directly within the app. Team members can submit their updates in real time or asynchronously, and DailySync.ai organizes everything into a clear, actionable summary.",
  },
  {
    title: "AI Generates Summaries",
    description:
      "Our intelligent AI listens to the standup inputs and transforms them into clear, organized summaries. Key updates, blockers, and decisions are captured and structured automatically—saving time and keeping everyone aligned without the need for manual note-taking.",
  },
  {
    title: "Access Insights Anytime",
    description:
      "Stay in the loop effortlessly—chat with the AI to instantly retrieve team updates, track progress, and uncover patterns in productivity.  Whether you're checking on project milestones or identifying blockers, insights are always just a message away.",
  },
];

export const TAB_LISTS = [
  {
    tabValue: "0",
    tabIcon: "hourGlass" as const,
    tabTitle: "Faster, Focused Standups",
    tabDescription:
      "No more dragging meetings — AI handles the updates so teams stay sharp and efficient.",
  },
  {
    tabValue: "1",
    tabIcon: "note" as const,
    tabTitle: "Zero Manual Notes",
    tabDescription:
      "Everything discussed is auto-documented, no one has to write things or worry about missed info.",
  },
  {
    tabValue: "2",
    tabIcon: "handShake" as const,
    tabTitle: "Improved Team Alignment",
    tabDescription:
      "Everyone sees the same updates, blockers, and goals keeping the whole team on the same page.",
  },
  {
    tabValue: "3",
    tabIcon: "sticker" as const,
    tabTitle: "Clear Accountability",
    tabDescription:
      "With centralized follow-ups and accessible summaries, responsibilities are track & completed.",
  },
];

export const NAV_ITEMS = [
  {
    name: "Home",
    link: "#home",
  },
  {
    name: "Features",
    link: "#features",
  },
  {
    name: "FAQ",
    link: "#faq",
  },
];

export const FAQS = [
  {
    value: "0",
    title: "What is DailySync.ai?",
    description:
      "DailySync.ai is an AI-powered platform that turns daily standups into structured insights. It helps teams submit updates, track performance, manage requests, and generate smart reports—improving visibility, accountability, and team effectiveness without daily meetings.",
  },
  {
    value: "1",
    title: "How does DailySync.ai work?",
    description:
      "DailySync.ai works by letting team members submit quick daily standup notes using customized questions tailored for each team or project. The AI then automatically summarizes all these inputs into clear, visual reports that highlight progress, blockers, and overall team activity. You can also chat directly with the AI to get instant answers about project status, individual performance, missed standups, or any delays. Additionally, DailySync.ai handles leave, work-from-home, and equipment requests all in one place, with an approval process that ties into team productivity insights. In short, DailySync.ai helps keep everyone aligned, informed, and productive—without the need for constant meetings",
  },
  {
    value: "2",
    title: "Who can benefit from using DailySync.ai?",
    description:
      "DailySync.ai helps many people in an organization. Team members can quickly share updates without long meetings, keeping everyone on the same page. Team leads and managers can track progress, spot problems early, and support their teams with real-time insights. Project managers use it to monitor project health, find risks, and keep things on schedule. HR teams get clear views of attendance, leave, and engagement. Executives get a big-picture overview of how the company is doing without constant check-ins. Plus, remote and hybrid teams stay connected and accountable, no matter where they work.",
  },
  {
    value: "4",
    title: "Is my data safe with DailySync.ai?",
    description:
      "Absolutely! Your data is safe with DailySync.ai. The platform uses strong encryption to protect your information both while it’s being sent and when it’s stored. Access to data is strictly controlled—only authorized team members and managers can see what they’re supposed to. DailySync also supports secure login methods like Single Sign-On to keep accounts safe. Your organization’s data is kept separate from others to ensure privacy, and DailySync never shares your information with third parties without your clear permission. Overall, it’s built with security and privacy as a top priority.",
  },
];

export const FEATURE_CARDS = [
  {
    icon: "hourGlass" as const,
    title: "Standup Summaries",
    description:
      "Automatically capture and summarize daily standup meeting information accessible to everyone",
  },
  {
    icon: "note" as const,
    title: "AI Chat Assistant",
    description:
      "Chat with our AI to get updates about employees, teams, and projects without digging through notes.",
  },
  {
    icon: "note" as const,
    title: "AI Insights",
    description:
      "Generate valuable insights about team productivity, blockers, and progress trends over time.",
  },
  {
    icon: "note" as const,
    title: "Searchable History",
    description:
      "Instant access to past standups and discussions for easy reference and accountability",
  },
  {
    icon: "hourGlass" as const,
    title: "Time-Saving Updates",
    description:
      "Eliminate redundant status meetings with instant AI-powered updates that keep your team informed without disrupting their workflow.",
  },
  {
    icon: "handShake" as const,
    title: "Remote-Ready",
    description:
      "Designed for distributed teams with async updates, timezone-friendly summaries, and seamless collaboration across locations.",
  },
];
