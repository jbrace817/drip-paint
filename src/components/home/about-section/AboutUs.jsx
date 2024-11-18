"use client";
import Image from "next/image";
import front from "../../../app/assets/home/about/aboutUsFront_m.jpeg";
import back from "../../../app/assets/home/about/aboutUsBack_m.jpeg";
import { Fade } from "react-awesome-reveal";
function AboutUs() {
  return (
    <section className="mb-80 space-y-6 bg-gradient-to-b from-orange-200 from-5% to-white px-4 pt-16">
      <div className="m-auto max-w-[80rem] gap-6 space-y-6 md:flex md:justify-between md:space-y-0">
        <div className="md:max-w-[50%]">
          <header>
            <Fade cascade direction="up" triggerOnce fraction={1}>
              <h2 className="font-headings text-sm font-bold text-orange-600">
                WHO WE ARE
              </h2>
              <h3 className="font-headings text-3xl font-bold">About us</h3>
            </Fade>
          </header>

          <div className="mt-6 font-body text-lg md:max-w-sm lg:max-w-md">
            <Fade direction="up" triggerOnce fraction={1}>
              <p>
                With over 15 years of experience, Drip Painting delivers expert
                interior and exterior painting services across Bucks and
                Montgomery Counties. Our commitment to quality, attention to
                detail, and customer satisfaction ensures every space feels
                refreshed, inviting, and uniquely yours. From vibrant interiors
                to stunning exterior finishes, we bring passion and expertise to
                every project, making your home look its best inside and out.
              </p>
            </Fade>
          </div>
        </div>

        <div className="relative grid grid-cols-12 self-center md:max-w-[50%]">
          <Fade
            direction="up"
            className="relative z-10 col-start-1 col-end-9 row-start-1 row-end-4 lg:-mt-8"
            triggerOnce
            fraction={1}
          >
            <Image src={back} alt="Painters at work"></Image>
          </Fade>
          <Fade
            direction="up"
            className="relative z-20 col-start-5 col-end-13 row-start-3 row-end-6"
            triggerOnce
            fraction={1}
          >
            <Image src={front} alt="Painters looking at blueprint"></Image>
          </Fade>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
