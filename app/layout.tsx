import type { Metadata } from "next";
import { Urbanist } from "next/font/google";

import { mantineHtmlProps, MantineProvider } from "@mantine/core";
import { ThemeProvider } from "@/components/theme-provider";

import { myTheme } from "@/styles";
import { Notifications } from "@mantine/notifications";

import "@mantine/core/styles.css";
import "@mantine/notifications/styles.css";
import "./globals.css";

const urbanist = Urbanist({ subsets: ["latin"], fallback: ["sans-serif"] });

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"
  ),
  title: "StandupAI - Transform Your Daily Standups with AI",
  description:
    "Capture, summarize, and gain insights from your daily standups. Let AI do the heavy lifting for your team meetings.",
  keywords: [
    "standup meetings",
    "team productivity",
    "AI assistant",
    "meeting summaries",
    "team collaboration",
  ],
  openGraph: {
    title: "StandupAI - Transform Your Daily Standups with AI",
    description:
      "Capture, summarize, and gain insights from your daily standups. Let AI do the heavy lifting for your team meetings.",
    url: "https://standupai.com",
    siteName: "StandupAI",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "StandupAI - Transform Your Daily Standups with AI",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "StandupAI - Transform Your Daily Standups with AI",
    description:
      "Capture, summarize, and gain insights from your daily standups. Let AI do the heavy lifting for your team meetings.",
    images: ["/twitter-image.jpg"],
  },
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" {...mantineHtmlProps}>
      <body className={urbanist.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <MantineProvider theme={myTheme}>
            <Notifications />
            {children}
          </MantineProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
