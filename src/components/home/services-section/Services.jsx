import SectionInfo from "@/components/SectionInfo";
import Image, { getImageProps } from "next/image";
import exterior_m from "../../../app/assets/home/servicesImg/exterior_m.jpeg";
import staircase_m from "../../../app/assets/home/servicesImg/stairCase_m.jpeg";
import interior_m from "../../../app/assets/home/servicesImg/interior_m.jpeg";

function Services() {
  return (
    <section className="bg-stone-950 px-4 py-16">
      <div className="m-auto max-w-[80rem]">
        <SectionInfo
          header1={"WHAT WE DO"}
          header2={"Services"}
          textColor="text-white"
        >
          At Drip Painting, we specialize in bringing homes to life with expert
          interior and exterior painting services. Whether refreshing your
          walls, protecting your exterior with weather-resistant finishes, or
          creating unique custom designs tailored to your vision, our attention
          to detail and craftsmanship ensure stunning, long-lasting results
          every time.
        </SectionInfo>
        <button
          className="mb-16 cursor-pointer self-start rounded-md bg-orange-500 px-[1em] py-[.75em] text-base font-bold text-orange-950 transition hover:bg-orange-600"
          aria-label="View Gallery of Drip's work"
        >
          View Gallery
        </button>
        <div className="flex flex-col gap-4">
          <div className="relative h-[60vw] w-full">
            <Image
              src={exterior_m}
              alt="Painted exterior of residence"
              fill
              className="object-cover object-top"
            />
          </div>
          <div className="relative h-[60vw] w-full">
            <Image
              src={interior_m}
              alt="Painted exterior of residence"
              fill
              className="object-cover object-top"
            />
          </div>
          <div className="relative h-[60vw] w-full">
            <Image
              src={staircase_m}
              alt="Painted exterior of residence"
              fill
              className="object-cover object-top"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
