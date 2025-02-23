import type React from "react"
import type { Metadata } from "next"
import { Open_Sans } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import SocialSidebar from "@/components/social-sidebar"
import { Footer } from "@/components/footer"
import Chat from "@/components/chat"
const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "Edu vally",
  description: "IB coupled with ancient Vedanta philosophy",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={openSans.className}>
        <div className="relative min-h-screen">
          <Navbar />
          <SocialSidebar />
          <main>{children}</main>
          <Chat />
          <Footer />
        </div>
      </body>
    </html>
  )
}

