import { IoShieldHalf } from "react-icons/io5";
import { IoMdCheckboxOutline } from "react-icons/io";
import { LuCalendarClock } from "react-icons/lu";
import { FaSearchDollar } from "react-icons/fa";
import SectionInfo from "@/components/SectionInfo";

function ChooseUs() {
  return (
    <section className="relative flex min-h-screen flex-col bg-white px-4 py-16 font-sans sm:px-6 md:min-h-fit lg:px-8">
      <SectionInfo
        header1={"WHY CHOOSE US"}
        header2={"Excellence You Can Trust, Results You'll Love"}
        animate={false}
        cascade={false}
        direction={"left"}
        textAlign="md:text-center"
        textWidth="max-w-2xl"
      >
        With 15+ years of experience, Drip Painting delivers expert
        craftsmanship, quality materials, and exceptional service you can trust.
      </SectionInfo>
      <div className="grid justify-center gap-6 pb-8 sm:gap-8 md:grid-cols-2 md:gap-x-8 md:gap-y-6 2xl:grid-cols-4">
        <div className="sticky top-[calc(1rem*1)] w-full max-w-md space-y-6 justify-self-end rounded-xl border bg-white px-8 py-12 shadow-lg md:static">
          <div className="w-fit rounded-xl bg-orange-100 p-3">
            <IoShieldHalf color="#ea580c" size={"32px"} />
          </div>
          <h2 className="space-y-1 text-2xl font-bold leading-none">
            {/* <span className="block text-sm text-blue-700">Project #1 </span> */}

            <span className="block font-headings text-3xl">
              Licensed and Insured
            </span>
          </h2>
          <p className="font-body text-lg text-gray-700">
            At Drip Painting, your peace of mind is our priority. As a fully
            licensed and insured painting company, we ensure every project is
            completed to professional standards while protecting your property
            and investment. Trust our team for reliable, worry-free service
            backed by over 50 years of expertise
          </p>
        </div>
        <div className="sticky top-[calc(1rem*2)] w-full max-w-md space-y-4 justify-self-start rounded-xl border bg-white px-8 py-12 shadow-lg md:static">
          <div className="w-fit rounded-xl bg-orange-100 p-3">
            <IoMdCheckboxOutline color="#ea580c" size={"32px"} />
          </div>
          <h2 className="space-y-1 text-2xl font-bold leading-none">
            {/* <span className="block text-sm text-blue-700">Project #1 </span> */}

            <span className="block font-headings text-3xl">
              100% Satisfaction Guarantee
            </span>
          </h2>
          <p className="font-body text-lg text-gray-700">
            Your satisfaction is our guarantee. At Drip Painting, we go above
            and beyond to ensure you’re thrilled with the results. From the
            first brushstroke to the final detail, our commitment to excellence
            means we don’t rest until you’re 100% satisfied with your space’s
            transformation.
          </p>
        </div>
        <div className="sticky top-[calc(1rem*3)] w-full max-w-md space-y-4 justify-self-end rounded-xl border bg-white px-8 py-12 shadow-lg md:static">
          <div className="w-fit rounded-xl bg-orange-100 p-3">
            <LuCalendarClock color="#ea580c" size={"32px"} />
          </div>
          <h2 className="space-y-1 text-2xl font-bold leading-none">
            {/* <span className="block text-sm text-blue-700">Project #1 </span> */}

            <span className="block font-headings text-3xl">
              Flexible Scheduling
            </span>
          </h2>
          <p className="font-body text-lg text-gray-700">
            We understand that life can be busy, which is why Drip Painting
            offers flexible scheduling to fit your needs. Whether it&apos;s
            weekdays, weekends, or after hours, we work around your timeline to
            ensure a seamless and stress-free painting experience
          </p>
        </div>
        <div className="sticky top-[calc(1rem*4)] w-full max-w-md space-y-4 justify-self-start rounded-xl border bg-white px-8 py-12 shadow-lg md:static">
          <div className="w-fit rounded-xl bg-orange-100 p-3">
            <FaSearchDollar color="#ea580c" size={"32px"} />
          </div>
          <h2 className="space-y-1 text-2xl font-bold leading-none">
            {/* <span className="block text-sm text-blue-700">Project #1 </span> */}

            <span className="block font-headings text-3xl">
              Transparent Pricing
            </span>
          </h2>
          <p className="font-body text-lg text-gray-700">
            With Drip Painting, you’ll never have to worry about hidden fees or
            surprise costs. Our transparent pricing ensures you know exactly
            what to expect from the start, providing clear, detailed estimates
            and delivering exceptional value every step of the way.
          </p>
        </div>
      </div>
      <button
        className="mx-auto cursor-pointer rounded-md bg-orange-500 px-[1em] py-[.75em] font-body text-lg font-bold text-orange-950 transition hover:bg-orange-600"
        aria-label="View Gallery of Drip's work"
      >
        GET A FREE QUOTE
      </button>
    </section>
  );
}

export default ChooseUs;
