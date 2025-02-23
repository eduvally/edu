import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { admissionProcedure, documentsRequired } from "@/constants"

export default function AdmissionPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[300px] md:h-[400px] overflow-hidden">
        <Image
          src="/assets/p2.jpg"
          alt="Admission"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="container relative z-10 flex h-full items-center">
          <h1 className="text-3xl md:text-5xl font-bold text-white">Admission</h1>
        </div>
      </section>

      {/* Come Join Us Section */}
      <section className="py-8 md:py-16">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">COME,<br />JOIN US</h2>
            </div>
            <div>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                Our guiding principle is the fusion of IB education with Vedantic philosophy, aimed at enriching and
                fortifying every facet of a child's growth. Parents seeking an environment where their children not only
                learn but also cultivate a genuine passion for learning would be required to undergo the following
                admission process.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Admission Procedure Section */}
      <section className="py-8 md:py-16 bg-gray-50">
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-bold text-black mb-6 md:mb-8">ADMISSION PROCEDURE</h2>
          <div className="space-y-4">
            {admissionProcedure.map((item, index) => (
              <div
                key={item.title}
                className="bg-[#f0f0f0] rounded-lg overflow-hidden cursor-pointer transition-all hover:shadow-md"
              >
                <button
                  className="w-full p-3 md:p-4 text-left flex items-center justify-between"
                >
                  <span className="font-medium text-black text-sm md:text-base">{item.title}</span>
                  <span className="text-2xl text-black">+</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fee Structure Section */}
      <section className="py-8 md:py-16">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-black mb-4 md:mb-6">FEE STRUCTURE</h2>
              <p className="text-sm md:text-base text-gray-600 mb-6 md:mb-8 leading-relaxed">
                Our guiding principle is the fusion of IB education with Vedantic
                philosophy, aimed at enriching and fortifying every facet of a child's
                growth. Parents seeking an environment where their children not only
                learn but also cultivate a genuine passion for learning would be required to
                undergo the following admission process.
              </p>
              <Button className="bg-[#f1c822] text-black hover:bg-[#f1c822]/90">
                Download
              </Button>
            </div>
            <div className="relative h-[250px] md:h-[400px]">
              <Image
                src="/assets/About.webp"
                alt="Students"
                fill
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Seat Confirmation Section */}
      <section className="py-8 md:py-16 bg-gray-50">
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-bold text-black mb-6 md:mb-8">PROCEDURE FOR SEAT CONFIRMATION</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((step) => (
              <div key={step} className="flex items-start gap-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#f1c822] text-black font-bold">
                  {step}
                </div>
                <div>
                  <p className="text-sm md:text-base text-gray-600">
                    {step === 1 && "The assessment is done"}
                    {step === 2 && "The Admission Form is completed and signed by the parents"}
                    {step === 3 && "All the relevant documents are submitted at the time of Admission"}
                    {step === 4 && "The Admission Fee, Caution Money and the Confirmation amount (part of School Annual Tuition Fee - non-refundable) have been received by the school"}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Documents Section */}
      <section className="py-8 md:py-16">
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-bold text-black mb-6 md:mb-8">DOCUMENTS FOR SUBMISSION</h2>
          <div className="bg-gray-50 p-6 md:p-8 rounded-lg">
            <p className="mb-4 md:mb-6 text-sm md:text-base text-black">Before a student may be admitted, all of the following documents must be submitted:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              {documentsRequired.map((doc) => (
                <li key={doc} className="text-sm md:text-base">{doc}</li>
              ))}
            </ul>
            <p className="mt-4 md:mt-6 text-xs md:text-sm italic text-black">Note: Admissions are open for the Academic Year 2024-25</p>
          </div>
        </div>
      </section>
    </>
  )
}

