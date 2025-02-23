"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"

export default function Chat() {
    const [isHovered, setIsHovered] = useState(false)

    return (
        <div
            className="fixed right-4 bottom-4 z-40 flex items-center gap-2"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* WhatsApp Icon */}
            <Link
                href="https://api.whatsapp.com/send?phone=9398011686&text=I want to know more about your courses"
                className="transform transition-all duration-300 hover:scale-110"
                target="_blank"
                rel="noopener noreferrer"
            >
                <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-green-600 to-green-400 rounded-full blur opacity-25 group-hover:opacity-75 transition duration-200"></div>
                    <div className="relative bg-white rounded-full p-1.5 ring-1 ring-gray-200/50 shadow-lg">
                        <Image
                            src="/assets/icons/wa.png"
                            alt="WhatsApp"
                            width={45}
                            height={45}
                            className="rounded-full"
                        />
                    </div>
                </div>
            </Link>

            {/* Tooltip */}
            <div className={`
                absolute right-full mr-2
                transform transition-all duration-300 ease-in-out
                ${isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'}
                bg-white px-4 py-2 rounded-full shadow-lg flex items-center
                border border-gray-100
            `}>
                <span className="text-gray-700 text-sm font-medium whitespace-nowrap">
                    Chat with us on WhatsApp
                </span>
            </div>
        </div>
    )
}

