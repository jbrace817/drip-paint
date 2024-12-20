"use client";
import SectionInfo from "@/components/SectionInfo";
import Image, { getImageProps } from "next/image";
import exterior from "../../../../public/assets/home/dripServices/exterior.webp";
import staircase from "../../../../public/assets/home/dripServices/staircase.webp";
import interior from "../../../../public/assets/home/dripServices/interior.webp";
import useViewport from "@/hooks/useViewport";
import ConditionalAnimation from "@/utils/ConditionalAnimation";

function Services() {
  const { width } = useViewport();
  const button = (
    <button
      className="mb-8 mt-16 cursor-pointer self-start rounded-md bg-orange-500 px-[1em] py-[.75em] text-lg font-bold text-orange-950 transition hover:bg-orange-600 md:mb-0 md:mt-0"
      aria-label="View Gallery of Drip's work"
    >
      OUR WORK
    </button>
  );

  return (
    <section
      style={{ padding: "clamp(3.75rem, 7.82vw, 6.25rem) 1rem" }}
      className="overflow-hidden bg-stone-900"
    >
      <div className="m-auto max-w-[80rem] md:flex md:flex-row-reverse md:justify-between md:gap-6">
        <div className="flex flex-col justify-between">
          <SectionInfo
            header1={"WHAT WE DO"}
            header2={"Services"}
            textColor="text-white"
            animate={true}
            cascade={true}
            direction={width >= 640 ? "right" : "left"}
          >
            <p className="pb-8">
              At Drip Painting, we specialize in bringing homes to life with
              expert interior and exterior painting services. Whether refreshing
              your walls, protecting your exterior with weather-resistant
              finishes, or creating unique custom designs tailored to your
              vision, our attention to detail and craftsmanship ensure stunning,
              long-lasting results every time.
            </p>
          </SectionInfo>
          {width >= 640 && button}
        </div>
        <div className="flex flex-col gap-4 md:w-[50%] md:flex-row">
          <ConditionalAnimation
            animate={true}
            direction={width >= 640 ? "left" : "right"}
            delay={width >= 640 ? 500 : 0}
            className="relative h-[60vw] w-full md:h-full md:max-h-[28rem] md:max-w-[50vw] lg:h-[50vw]"
          >
            <div className="relative h-full w-full">
              {/* Overlay */}
              <div className="absolute inset-0 z-10 h-full w-full bg-orange-100/30" />
              <p className="absolute left-2 top-4 z-20 font-headings text-xl font-bold text-neutral-800">
                Exteriors
              </p>
              <Image
                src={exterior}
                alt="Painted exterior of residence"
                fill
                className="object-cover object-top md:object-center"
                sizes="107.5vw"
              />
            </div>
          </ConditionalAnimation>
          <ConditionalAnimation
            animate={true}
            direction={"left"}
            delay={width >= 640 ? 250 : 0}
            className="relative h-[60vw] w-full md:h-full md:max-h-[28rem] md:max-w-[50vw]"
          >
            <div className="relative h-full w-full">
              {/* Overlay */}
              <div className="absolute inset-0 z-10 h-full w-full bg-orange-100/30" />
              <p className="absolute left-2 top-4 z-20 font-headings text-xl font-bold text-neutral-800">
                Interiors
              </p>
              <Image
                src={interior}
                alt="Beautifully painted interior room"
                fill
                className="object-cover object-center"
                sizes="calc(100vw - 32px)"
              />
            </div>
          </ConditionalAnimation>
          <ConditionalAnimation
            animate={true}
            direction={width >= 640 ? "left" : "right"}
            className="relative h-[60vw] w-full md:h-full md:max-h-[28rem] md:max-w-[50vw]"
          >
            <div className="relative h-full w-full">
              {/* Overlay */}
              <div className="absolute inset-0 z-10 h-full w-full bg-orange-100/30" />
              <p className="absolute left-2 top-4 z-20 font-headings text-xl font-bold text-neutral-800">
                Custom Finishes
              </p>
              <Image
                src={staircase}
                alt="Painted exterior of residence"
                fill
                className="object-cover object-top md:object-center"
                sizes="calc(100vw - 32px)"
              />
            </div>
          </ConditionalAnimation>
          {width < 640 && button}
        </div>
      </div>
    </section>
  );
}

export default Services;
