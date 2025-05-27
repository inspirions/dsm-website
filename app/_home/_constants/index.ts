import {
  PLACEHOLDER1_IMAGE_URL,
  PLACEHOLDER_IMAGE_URL,
} from "@/constants/commons";

export const HURDLE_ITEMS = [
  {
    top: "75%",
    left: "-40%",
    title: "Inefficiency",
    description:
      "Meetings drag on with repetitive updates and minimal outcomes.",
  },
  {
    top: "5%",
    left: "-10%",
    title: "Inaccuracy",
    description: "Important details are missed or poorly documented.",
  },
  {
    top: "5%",
    left: "90%",
    title: "Misalignment",
    description: "Key info gets lost, causing confusion and delays.",
  },
  {
    top: "75%",
    left: "110%",
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
