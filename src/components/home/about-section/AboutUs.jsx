import Image from "next/image";
import front from "../../../app/assets/home/about/aboutUsFront_m.jpeg";
import back from "../../../app/assets/home/about/aboutUsBack_m.jpeg";

import SectionInfo from "@/components/SectionInfo";
import ConditionalAnimation from "@/utils/ConditionalAnimation";
function AboutUs() {
  return (
    <section className="space-y-6 overflow-hidden bg-gradient-to-b from-orange-200 from-5% to-white to-70% px-4 py-16">
      <div className="m-auto max-w-[80rem] gap-6 space-y-6 md:flex md:justify-between md:space-y-0">
        <SectionInfo
          header1={"WHO WE ARE"}
          header2={"About Us"}
          animate={true}
          cascade={true}
          direction={"left"}
        >
          With over 15 years of experience, Drip Painting delivers expert
          interior and exterior painting services across Bucks and Montgomery
          Counties. Our commitment to quality, attention to detail, and customer
          satisfaction ensures every space feels refreshed, inviting, and
          uniquely yours. From vibrant interiors to stunning exterior finishes,
          we bring passion and expertise to every project, making your home look
          its best inside and out.
        </SectionInfo>

        <div className="relative grid grid-cols-12 self-center md:max-w-[50%]">
          <ConditionalAnimation
            animate={true}
            direction={"right"}
            cascade={true}
            className="relative z-10 col-start-1 col-end-9 row-start-1 row-end-4 lg:-mt-8"
          >
            <Image src={back} alt="Painters at work"></Image>
          </ConditionalAnimation>
          <ConditionalAnimation
            animate={true}
            direction={"right"}
            cascade={true}
            className="relative z-20 col-start-5 col-end-13 row-start-3 row-end-6"
          >
            <Image src={front} alt="Painters looking at blueprint"></Image>
          </ConditionalAnimation>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
