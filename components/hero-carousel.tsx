"use client"
import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { heroImages } from "@/constants"
import { ChevronLeft, ChevronRight } from "lucide-react"

export function HeroCarousel() {
    const [currentSlide, setCurrentSlide] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % heroImages.length)
        }, 5000)

        return () => clearInterval(timer)
    }, [])

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? heroImages.length - 1 : prev - 1))
    }

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % heroImages.length)
    }

    return (
        <section className="relative h-[600px] overflow-hidden">
            <div className="relative h-full w-full">
                {heroImages.map((image, index) => (
                    <div
                        key={image.url}
                        className={`absolute h-full w-full transition-opacity duration-1000 ease-in-out ${index === currentSlide ? "opacity-100" : "opacity-0"
                            }`}
                    >
                        <Image
                            src={image.url}
                            alt={image.alt}
                            fill
                            className="object-cover"
                            priority={index === 0}
                        />
                        <div className="absolute inset-0 bg-black/50" />
                        <div className="container relative z-30 mx-auto px-4 py-32">
                            <div
                                className={`max-w-2xl transition-opacity duration-700 ${index === currentSlide ? "opacity-100" : "opacity-0"
                                    }`}
                            >
                                <h1 className="mb-6 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
                                    {image.title}
                                </h1>
                                <Button asChild className="bg-[#f1c822] text-black hover:bg-[#f1c822]/90">
                                    <Link href="/about">Know More</Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Navigation Buttons */}
            <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 z-30 -translate-y-1/2 rounded-full bg-black/30 p-2 text-white hover:bg-black/50 transition-colors"
            >
                <ChevronLeft className="h-6 w-6" />
            </button>
            <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 z-30 -translate-y-1/2 rounded-full bg-black/30 p-2 text-white hover:bg-black/50 transition-colors"
            >
                <ChevronRight className="h-6 w-6" />
            </button>

            {/* Dots Indicator */}
            <div className="absolute bottom-4 left-1/2 z-30 flex -translate-x-1/2 gap-2">
                {heroImages.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`h-2 w-2 rounded-full transition-all ${index === currentSlide ? "w-8 bg-[#f1c822]" : "bg-white/50"
                            }`}
                    />
                ))}
            </div>
        </section>
    )
} 