import { IoShieldHalf } from "react-icons/io5";
import { IoMdCheckboxOutline } from "react-icons/io";
import { LuCalendarClock } from "react-icons/lu";
import { FaSearchDollar } from "react-icons/fa";
import SectionInfo from "@/components/SectionInfo";
import Card from "@/components/Card";

const cardContents = [
  {
    icon: <IoShieldHalf color="#ea580c" size={"32px"} />,
    title: "Licensed and Insured",
    description:
      "At Drip Painting, your peace of mind is our priority. As a fully licensed and insured painting company, we ensure every project is completed to professional standards while protecting your property and investment. Trust our team for reliable, worry-free service backed by over 15 years of expertise.",
    align: "justify-self-end",
  },
  {
    icon: <IoMdCheckboxOutline color="#ea580c" size={"32px"} />,
    title: "100% Satisfaction Guarantee",
    description:
      "Your satisfaction is our guarantee. At Drip Painting, we go above and beyond to ensure you’re thrilled with the results. From the first brushstroke to the final detail, our commitment to excellence means we don’t rest until you’re 100% satisfied with your space’s transformation.",
    align: "justify-self-start",
  },
  {
    icon: <LuCalendarClock color="#ea580c" size={"32px"} />,
    title: "Flexible Scheduling",
    description:
      "We understand that life can be busy, which is why Drip Painting offers flexible scheduling to fit your needs. Whether it's weekdays, weekends, or after hours, we work around your timeline to ensure a seamless and stress-free painting experience",
    align: "justify-self-end",
  },
  {
    icon: <FaSearchDollar color="#ea580c" size={"32px"} />,
    title: "Transparent Pricing",
    description:
      "With Drip Painting, you’ll never have to worry about hidden fees or surprise costs. Our transparent pricing ensures you know exactly what to expect from the start, providing clear, detailed estimates and delivering exceptional value every step of the way.",
    align: "justify-self-start",
  },
];

function ChooseUs() {
  return (
    <section style={{ padding: "clamp(3.75rem, 7.82vw, 6.25rem) 1rem" }}>
      <div className="relative mx-auto flex min-h-screen max-w-[80rem] flex-col items-center bg-white font-sans md:min-h-fit">
        <SectionInfo
          header1={"WHY CHOOSE US"}
          header2={"Excellence You Can Trust, Results You'll Love"}
          animate={true}
          cascade={true}
          direction={"up"}
          textAlign="md:text-center"
          textWidth="max-w-2xl"
        >
          With 15+ years of experience, Drip Painting delivers expert
          craftsmanship, quality materials, and exceptional service you can
          trust.
        </SectionInfo>
        <div className="grid justify-center gap-6 sm:gap-8 md:grid-cols-2 md:gap-x-8 md:gap-y-6">
          {cardContents.map((content, index) => (
            <Card
              key={content.title}
              icon={content.icon}
              title={content.title}
              description={content.description}
              index={index}
              align={content.align}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ChooseUs;
