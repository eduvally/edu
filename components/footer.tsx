import Image from "next/image"
import Link from "next/link"
import { Input } from "./ui/input"
import { Button } from "./ui/button"

const navigationLinks = [
    { title: "Home", href: "/" },
    { title: "Purpose", href: "/purpose" },
    { title: "Learning", href: "/learning" },
    { title: "Environment", href: "/environment" },
    { title: "Culture", href: "/culture" },
    { title: "Admission", href: "/admission" },
    { title: "Gallery", href: "/gallery" },
    { title: "Blog", href: "/blog" },
    { title: "Contact Us", href: "/contact" },
]

export function Footer() {
    return (
        <footer className="bg-[#f8f8f8] lg:px-[100px] pt-[50px]">
            {/* Newsletter Section */}
            <div className="bg-[#f1c822]">
                <div className="container py-12">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
                        <div>
                            <h2 className="text-4xl font-bold text-black mb-2">Subscribe to Our Newsletter</h2>
                            <p className="text-black text-lg">
                                Stay updated with the latest news and events. Subscribe to our newsletter for regular updates.
                            </p>
                        </div>
                        <div className="flex gap-2 w-full md:w-auto">
                            <Input
                                type="email"
                                placeholder="Email"
                                className="bg-white w-full md:w-[300px]"
                            />
                            <Button className="bg-black text-white hover:bg-black/90 px-8">
                                SUBSCRIBE
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container py-12">
                <div className="grid md:grid-cols-3 gap-8">
                    {/* Logo and Contact Info */}
                    <div>
                        <div className="flex gap-4 mb-6">
                            <Image src="/assets/logo.svg" alt="VK Logo" width={80} height={80} />
                        </div>
                        <h3 className="font-bold mb-4 text-black">Victorious Kidss Educares Pvt. Ltd.</h3>
                        <div className="space-y-2 text-black">
                            <p>+91 20 67116300/1/2, +91 90110 20344</p>
                            <p>admissions@victoriouskidsseducares.org</p>
                            <p>jobs@victoriouskidsseducares.org</p>
                        </div>
                    </div>

                    {/* Navigation Links */}
                    <div>
                        <h3 className="font-bold mb-4 text-black">Navigation</h3>
                        <nav className="grid grid-cols-2 gap-2">
                            {navigationLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="text-black"
                                >
                                    {link.title}
                                </Link>
                            ))}
                        </nav>
                    </div>

                    {/* Visit Location */}
                    <div>
                        <h3 className="font-bold mb-4 text-black">Visit Location</h3>
                        <p className="mb-6 text-black">
                            Victorious Kidss Educares, Survey No. 53, 54 & 58, Hissa 2/1A,
                            Fountain Road, Off Pune – Nagar Road, Kharadi, Pune – 411014, Maharashtra, India.
                        </p>

                    </div>
                </div>
            </div>
        </footer>
    )
} 