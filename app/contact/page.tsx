import Image from "next/image"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Phone, Mail, MapPin } from "lucide-react"

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[300px] md:h-[400px] overflow-hidden">
        <Image
          src="/assets/p1.webp"
          alt="Contact"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="container relative z-10 flex h-full items-center">
          <h1 className="text-3xl md:text-5xl font-bold text-white">Contact</h1>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-8 md:py-16">
        <div className="container max-sm:overflow-hidden max-sm:pl-0">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
            {/* Left Column - Contact Info */}
            <div className="bg-white p-6 md:p-8 rounded-lg shadow-sm border border-gray-100">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-black">Do You Have Any Question?</h2>
              <p className="text-sm md:text-base text-gray-600 mb-8">
                Feel free to get in touch with us. Whether you have a question, a suggestion, or just want to
                say hello, we'd love to hear from you.
              </p>

              <div className="space-y-8">
                {/* Address */}
                <div className="flex items-start gap-4 hover:transform hover:translate-x-2 transition-transform duration-300">
                  <MapPin className="h-6 w-6 text-[#f1c822] shrink-0" />
                  <div>
                    <h3 className="font-bold text-black mb-1">Address</h3>
                    <p className="text-sm md:text-base text-gray-600">
                      Survey No. 23, S4 & S5, Phase 214, Fountain Head, Off Pune -
                      Nagar Road, Kharadi, Pune - 21014, Maharashtra, India
                    </p>
                  </div>
                </div>

                {/* Contact Numbers */}
                <div className="flex items-start gap-4 hover:transform hover:translate-x-2 transition-transform duration-300">
                  <Phone className="h-6 w-6 text-[#f1c822] shrink-0" />
                  <div>
                    <h3 className="font-bold text-black mb-1">Contact</h3>
                    <p className="text-sm md:text-base text-gray-600">+91 20 6776355</p>
                    <p className="text-sm md:text-base text-gray-600">+91 20 6776358</p>
                  </div>
                </div>

                {/* Department Contacts */}
                <div className="grid sm:grid-cols-2 gap-6 bg-gray-50 p-4 md:p-6 rounded-lg">
                  <div>
                    <h3 className="font-bold text-black mb-2 text-sm md:text-base">Admission Department</h3>
                    <p className="text-sm md:text-base text-gray-600">020-67763612</p>
                    <p className="text-sm md:text-base text-gray-600">+91 9021677006</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-black mb-2 text-sm md:text-base">Human Resource Department</h3>
                    <p className="text-sm md:text-base text-gray-600">020-67763611</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4 hover:transform hover:translate-x-2 transition-transform duration-300">
                  <Mail className="h-6 w-6 text-[#f1c822] shrink-0" />
                  <div>
                    <h3 className="font-bold text-black mb-1">Email</h3>
                    <a href="mailto:admissions@victoriousKidssEducares.org"
                      className="text-sm md:text-base text-gray-600 hover:text-[#f1c822] transition-colors block">
                      admissions@victoriousKidssEducares.org
                    </a>
                    <a href="mailto:info@victoriousKidssEducares.org"
                      className="text-sm md:text-base text-gray-600 hover:text-[#f1c822] transition-colors block">
                      info@victoriousKidssEducares.org
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div className="bg-white p-6 md:p-8 rounded-lg shadow-sm border border-gray-100">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-black">Get In Touch</h2>
              <form className="space-y-6">
                <div>
                  <Input
                    type="text"
                    placeholder="Your Name (required)"
                    className="w-full bg-white border border-gray-300 text-black placeholder:text-gray-500 h-12 px-4 text-sm md:text-base focus:border-[#f1c822] focus:ring-[#f1c822]"
                  />
                </div>
                <div>
                  <Input
                    type="tel"
                    placeholder="Your Phone Number (required)"
                    className="w-full bg-white border border-gray-300 text-black placeholder:text-gray-500 h-12 px-4 text-sm md:text-base focus:border-[#f1c822] focus:ring-[#f1c822]"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Your Email (required)"
                    className="w-full bg-white border border-gray-300 text-black placeholder:text-gray-500 h-12 px-4 text-sm md:text-base focus:border-[#f1c822] focus:ring-[#f1c822]"
                  />
                </div>
                <div>
                  <Input
                    type="text"
                    placeholder="Subject"
                    className="w-full bg-white border border-gray-300 text-black placeholder:text-gray-500 h-12 px-4 text-sm md:text-base focus:border-[#f1c822] focus:ring-[#f1c822]"
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Your Message"
                    className="w-full bg-white border border-gray-300 text-black placeholder:text-gray-500 p-4 text-sm md:text-base min-h-[150px] md:min-h-[200px] focus:border-[#f1c822] focus:ring-[#f1c822]"
                  />
                </div>
                <Button className="bg-[#f1c822] text-black hover:bg-[#f1c822]/90 w-full h-12 text-sm md:text-base font-medium">
                  SEND
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-8 md:py-12">
        <div className="h-[300px] md:h-[400px] w-full rounded-lg overflow-hidden shadow-md">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.2613173957697!2d73.94594131484253!3d18.551751987384766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c147b8b3a3bf%3A0x6f7fdcc8e4d6c77e!2sVictorious%20Kidss%20Educares%20-%20IB%20World%20School!5e0!3m2!1sen!2sin!4v1647844741501!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </>
  )
}

