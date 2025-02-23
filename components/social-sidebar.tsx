import Link from "next/link"
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react"

export default function SocialSidebar() {
  return (
    <div className="fixed left-0 top-1/2 -translate-y-1/2 z-40 flex flex-col gap-4 bg-white p-2 shadow-lg md:p-4 rounded-r-lg">
      <Link
        href="https://facebook.com"
        className="text-[#1877F2] hover:opacity-80 transition-opacity"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Facebook className="h-4 w-4 md:h-6 md:w-6" />
      </Link>
      <Link
        href="https://twitter.com"
        className="text-[#1DA1F2] hover:opacity-80 transition-opacity"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Twitter className="h-4 w-4 md:h-6 md:w-6" />
      </Link>
      <Link
        href="https://instagram.com"
        className="text-[#E4405F] hover:opacity-80 transition-opacity"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Instagram className="h-4 w-4 md:h-6 md:w-6" />
      </Link>
      <Link
        href="https://youtube.com"
        className="text-[#FF0000] hover:opacity-80 transition-opacity"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Youtube className="h-4 w-4 md:h-6 md:w-6" />
      </Link>
    </div>
  )
}

