import Image from "next/image";
import { RiDoubleQuotesL } from "react-icons/ri";
import SectionInfo from "@/components/SectionInfo";
import ConditionalAnimation from "@/utils/ConditionalAnimation";
function AboutUs() {
  return (
    <section
      style={{ padding: "clamp(3.75rem, 7.82vw, 6.25rem) 1rem" }}
      className="relative overflow-hidden bg-gradient-to-b from-orange-300 from-5% to-orange-50 to-70%"
    >
      <div
        aria-hidden="true"
        className="absolute inset-y-0 right-1/2 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] bg-gradient-to-b from-orange-200 from-5% to-white to-70% shadow-xl shadow-orange-500/10 ring-1 ring-orange-200 sm:-mr-80 lg:-mr-96"
      />

      <div className="m-auto max-w-[80rem] gap-6 lg:flex lg:justify-between lg:space-y-0">
        <div className="z-10 md:flex md:flex-col">
          <SectionInfo
            header1={"WHO WE ARE"}
            header2={"About Us"}
            animate={true}
            cascade={true}
            direction={"left"}
            textAlign="text-left "
            textWidth="max-w-xl"
            marginAuto={false}
          >
            With over 15 years of experience, Drip Painting delivers expert
            interior and exterior painting services across Bucks and Montgomery
            Counties. Our commitment to quality, attention to detail, and
            customer satisfaction ensures every space feels refreshed, inviting,
            and uniquely yours. From vibrant interiors to stunning exterior
            finishes, we bring passion and expertise to every project, making
            your home look its best inside and out.
          </SectionInfo>
          <ConditionalAnimation
            animate={true}
            fraction={1}
            className="flex sm:justify-end lg:justify-start"
          >
            <figure className="md: mb-16 mt-8 border-l border-orange-600 pl-8 font-body text-current sm:justify-self-end lg:justify-self-auto">
              <blockquote className="relative max-w-md text-xl/8 font-semibold tracking-tight">
                <RiDoubleQuotesL
                  className="absolute -left-8 -top-5 -z-10 -skew-x-[14deg]"
                  size={"3.5rem"}
                  color="#ea580c"
                  opacity={0.4}
                />
                <p>
                  I started Drip Painting over 15 years ago with a simple favor
                  for a neighbor. Seeing their joy inspired me to turn my
                  passion for transforming spaces into a business. Serving the
                  Doylestown, PA area has been an incredible journey ever since.
                </p>
              </blockquote>
              <figcaption className="mt-8 flex gap-x-4">
                <img
                  alt=""
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  className="mt-1 size-10 flex-none rounded-full bg-gray-50"
                />
                <div className="text-sm/6">
                  <div className="font-headings font-semibold">Floyd Miles</div>
                  <div className="text-gray-600">@floyd</div>
                </div>
              </figcaption>
            </figure>
          </ConditionalAnimation>
        </div>
        <div className="relative grid grid-cols-12 self-center lg:max-w-[50%]">
          <ConditionalAnimation
            animate={true}
            direction={"right"}
            cascade={true}
            className="relative z-10 col-start-1 col-end-13 row-start-1 row-end-4 lg:-mt-8"
          >
            <Image
              src={
                "https://res.cloudinary.com/dsjx8ner3/image/upload/v1733885002/samples/imagecon-group.jpg"
              }
              alt="drip company photo"
              width={1920} // Original largest image width
              height={1280} // Original largest image height
              sizes="(min-width: 2000px) 34vw, (min-width: 1400px) 640px, (min-width: 780px) calc(44.33vw + 28px), calc(100vw - 32px)" // Define widths based on viewport size
            />
          </ConditionalAnimation>
        </div>
      </div>
      <div className="relative z-10 mx-auto max-w-[80rem] text-left">
        <button
          className="mx-auto mt-16 cursor-pointer rounded-md bg-orange-500 px-[1em] py-[.75em] font-body text-lg font-bold text-orange-950 transition hover:bg-orange-600"
          aria-label="View Gallery of Drip's work"
        >
          OUR JOURNEY
        </button>
      </div>
    </section>
  );
}

export default AboutUs;
