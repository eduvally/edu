import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ChevronRight, Play } from "lucide-react"
import { HeroCarousel } from "@/components/hero-carousel"
import { infoBoxes, timeline, programmes, features, schoolDifference, testimonials } from "@/constants"

export default function Home() {
  return (
    <>
      <HeroCarousel />

      {/* IB and Vedanta Section */}
      <section className="py-16 max-sm:pb-0">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 max-sm:gap-4 items-center">
            <div>
              <h2 className="text-2xl md:text-4xl font-bold mb-4 max-sm:mb-0 text-black">IB coupled with ancient Vedanta philosophy</h2>
            </div>
            <div>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                Situated in the bustling city of Pune, Victorious Kidss Educares is a school with
                a difference and the epitome of academic excellence. Our belief lies in the
                simple fact that every child is a universe of untapped potential. Here we
                couple the ancient rich heritage of Vedanta with the latest of the International
                Baccalaureate to bring out brilliance that each child holds within.
              </p>
              <Button
                className="mt-6 bg-[#f1c822] text-black hover:bg-[#f1c822]/90"
              >
                Know More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Info Boxes */}
      <section className="py-12">
        <div className="container">
          <div className="grid md:grid-cols-3 bg-[#f0f0f0]">
            {infoBoxes.map((box) => (
              <Card key={box.title} className=" border-none shadow-none rounded-none text-black">
                <CardContent className="p-6">
                  <h3 className="mb-4 text-xl md:text-2xl font-bold">{box.title}</h3>
                  <p className="mb-6 text-sm md:text-base text-gray-600 leading-relaxed">{box.description}</p>
                  <Button
                    variant="link"
                    className="bg-[#f1c822] text-black px-6 py-2 rounded-md hover:bg-[#f1c822]/90"
                  >
                    Know More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 max-sm:py-8">
        <div className="container">
          <h2 className="mb-8 md:mb-12 text-center text-2xl md:text-4xl font-bold text-black">VKE THROUGH THE YEARS</h2>
          <div className="flex flex-wrap justify-center gap-6">
            {timeline.map((item) => (
              <div key={item.year} className="text-center">
                <div className="mb-4 h-[200px] w-[200px] max-sm:h-[160px] max-sm:w-[250px] bg-[#f1c822] p-8 flex flex-col justify-center items-center">
                  <div className="text-4xl md:text-5xl font-bold text-black mb-4">{item.year}</div>
                  <div className="text-xs md:text-sm text-black">{item.description}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button className="bg-[#f1c822] text-black hover:bg-[#f1c822]/90">
              View Timeline
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 max-sm:py-8">
        <div className="container">
          <div className="grid gap-12 md:grid-cols-2 items-center max-sm:grid-cols-1 max-sm:[&>*:first-child]:order-2 max-sm:[&>*:last-child]:order-1">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 md:mb-8 text-black">ABOUT</h2>
              <div className="space-y-6">
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                  Situated in the bustling city of Pune, Victorious Kidss Educares is epitome of academic excellence.
                  Our belief lies in the simple fact that every child is a universe of untapped potential.
                  We harmoniously fuse western IB education with the profound wisdom found in ancient Vedanta
                  teachings to bring out brilliance that each child holds within.
                </p>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                  At VKE, education transcends the traditional roles it has been confined to. Our approach stands
                  on the pillars of regarding children as active co-learners and parents as essential stakeholders
                  in their child's journey. We recognize that a child's development is a collaborative effort
                  between the school and the family, and we actively involve parents in this process, ensuring
                  a harmonious partnership in nurturing the future.
                </p>
                <Button className="bg-[#f1c822] text-black hover:bg-[#f1c822]/90">
                  Know More
                </Button>
              </div>
            </div>
            <div className="relative h-[500px] max-sm:h-[200px]">
              <Image
                src="/assets/About.webp"
                alt="Student studying"
                fill
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>


      {/* Academic Programmes */}
      <section className="py-16 max-sm:py-8">
        <div className="container">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-4xl font-bold text-black mb-4">ACADEMIC PROGRAMMES</h2>
            <p className="text-sm md:text-base text-gray-600">Comprehensive Education from Birth to Adulthood</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {programmes.map((program) => (
              <div key={program.title} className="text-center">
                <div className="relative h-[250px] mb-4 overflow-hidden">
                  <Image
                    src={program.image}
                    alt={program.title}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-2 text-black">{program.title}</h3>
                <p className="text-sm md:text-base text-gray-600">{program.ageRange}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="bg-gray-50 py-12 flex flex-col items-center justify-center">
        <div className="container">
          <h2 className="mb-8 text-center text-black text-2xl font-bold">FACILITIES</h2>
          <div className="relative mx-auto aspect-video max-w-4xl overflow-hidden rounded-lg">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/lxRAj1Gijic?si=b5ZUf6kGfxZVa85E"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </div>
        <Button className="bg-[#f1c822] mt-6 text-black hover:bg-[#f1c822]/90">
          Know More
        </Button>
      </section>

      {/* School with a Difference */}
      <section className="bg-[#f1c822] py-16">
        <div className="container">
          <h2 className="mb-8 md:mb-12 text-center text-2xl md:text-4xl font-bold text-black">THE SCHOOL WITH A DIFFERENCE</h2>

          {/* Top Row - Features */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-16">
            {schoolDifference.features.map((feature) => (
              <div key={feature.title} className="text-center">
                <div className="mb-6">
                  <Image
                    src={feature.icon}
                    alt={feature.title}
                    width={64}
                    height={64}
                    className="mx-auto"
                  />
                </div>
                <h3 className="text-black mb-2 text-xs md:text-sm font-medium">{feature.title}</h3>
                {feature.subtitle && <p className="text-black">{feature.subtitle}</p>}
              </div>
            ))}
          </div>

          {/* Bottom Row - Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {schoolDifference.stats.map((stat) => (
              <div key={stat.description} className="text-center">
                <div className="text-4xl md:text-6xl font-bold text-black mb-2 md:mb-4">{stat.number}</div>
                <p className="text-black font-medium text-xs md:text-sm">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <h2 className="text-4xl font-bold text-center text-black mb-12">WHAT PARENTS SAY</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.slice(0, 3).map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md flex flex-col"
              >
                <div className="flex-1">
                  <svg
                    className="h-8 w-8 text-[#f1c822] mb-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                  <p className="text-gray-600 mb-4 line-clamp-4">{testimonial.quote}</p>
                </div>
                <div>
                  <p className="font-bold text-black">{testimonial.author}</p>
                  <p className="text-[#f1c822]">{testimonial.title}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-8">
            <Button className="bg-[#f1c822] text-black hover:bg-[#f1c822]/90">
              View All Testimonials
            </Button>
          </div>
        </div>
      </section>

      {/* Life at VKE */}
      <section className="py-12">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="relative h-[300px]">
              <Image
                src="/assets/back2.jpg"
                alt="Life at VKE"
                fill
                className="rounded-lg object-cover"
              />
            </div>
            <div>
              <h2 className="mb-4 text-2xl font-bold text-black">LIFE AT VKE</h2>
              <p className="mb-6  text-black">
                Experience a vibrant campus life that combines academic excellence with extra-curricular activities. Our
                students engage in various cultural, sports, and creative pursuits.
              </p>
              <Button className="bg-[#f1c822] text-black hover:bg-primary/90">Discover More</Button>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}

