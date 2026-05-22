import type { Metadata } from "next"
import { DM_Serif_Display, Nunito } from "next/font/google"
import "../globals.css"
import { LocalBusinessJsonLd } from "@/components/local-business-jsonld"

const dmSerifDisplay = DM_Serif_Display({
  weight: ["400"],
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
})

const nunito = Nunito({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
})

export const metadata: Metadata = {
  title: {
    default: "Stem-Ross Weight Loss Center | Baltimore, MD",
    template: "%s | Stem-Ross Weight Loss Center",
  },
  description:
    "Baltimore's trusted weight loss clinic since 1994. Physician-supervised programs — Semaglutide, Phentermine, and EvolveX body contouring — at two convenient locations.",
  keywords: [
    "weight loss Baltimore",
    "semaglutide Baltimore",
    "weight loss clinic Maryland",
    "phentermine Baltimore",
    "medical weight loss",
    "EvolveX body contouring",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Stem-Ross Weight Loss Center",
    title: "Stem-Ross Weight Loss Center | Baltimore, MD",
    description:
      "Physician-supervised weight loss programs in Baltimore, MD since 1994. Semaglutide, Phentermine, and EvolveX body contouring.",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  metadataBase: new URL("https://stemrossweightloss.com"),
}

export default function FrontendLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${dmSerifDisplay.variable} ${nunito.variable} h-full antialiased`}
    >
      <head>
        <LocalBusinessJsonLd />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  )
}
