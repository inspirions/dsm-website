import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "StandupAI - Transform Your Daily Standups with AI",
  description:
    "Capture, summarize, and gain insights from your daily standups. Let AI do the heavy lifting for your team meetings.",
  keywords: ["standup meetings", "team productivity", "AI assistant", "meeting summaries", "team collaboration"],
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
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'