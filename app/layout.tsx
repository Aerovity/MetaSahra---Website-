import type React from "react"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "MetaSahra - Développeurs d'IA",
  description: "We design intelligent software and AI-powered agents that transform the way businesses operate.",
  generator: 'v0.dev',
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-icon.png',
    shortcut: '/favicon-16x16.png',
  },
  openGraph: {
    title: "MetaSahra - Développeurs d'IA",
    description: "We design intelligent software and AI-powered agents that transform the way businesses operate.",
    images: [
      {
        url: '/images/Site.png', // Path relative to the public directory
        width: 1200,
        height: 630,
        alt: 'MetaSahra',
      }
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "MetaSahra - Développeurs d'IA",
    description: "We design intelligent software and AI-powered agents that transform the way businesses operate.",
    images: ['/og-image.png'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}