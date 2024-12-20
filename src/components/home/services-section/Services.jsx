"use client";
import SectionInfo from "@/components/SectionInfo";
import Image from "next/image";
// import Image, { getImageProps } from "next/image";
import exterior from "../../../../public/assets/home/dripServices/exterior.webp";
import staircase from "../../../../public/assets/home/dripServices/staircase.webp";
import interior from "../../../../public/assets/home/dripServices/interior.webp";
import useViewport from "@/hooks/useViewport";
import ConditionalAnimation from "@/utils/ConditionalAnimation";

const features = [
  {
    name: "Adventure-ready",
    description:
      "The Drawstring Canister is water and tear resistant with durable canvas construction. This bag holds up to the demands of daily use while keeping your snacks secure.",
    imageSrc: exterior,
    imageAlt: "Printed photo of bag being tossed into the sky on top of grass.",
  },
  {
    name: "Minimal and clean",
    description:
      "Everything you need, nothing you don't. This bag has the simple, contemporary design that enables you to tell everyone you know about how essentialism is the only rational way to live life.",
    imageSrc: staircase,
    imageAlt: "Double stitched black canvas hook loop.",
  },
  {
    name: "Organized",
    description:
      "Never lose your snacks again with our patent-pending snack stash pocket system. With dedicated pouches for each of your snacking needs, the Drawstring Canister unlocks new levels of efficiency and convenience.",
    imageSrc: interior,
    imageAlt: "Black canvas body with chrome zipper and key ring.",
  },
];

function Services() {
  return (
    <section
      style={{ padding: "clamp(3.75rem, 7.82vw, 6.25rem) 1rem" }}
      className="overflow-hidden bg-stone-900"
    >
      {/* <div className="mx-auto max-w-[80rem]">
        <div className="bg-stone-900">
          <div className="py-24 sm:px-2 sm:py-32 lg:px-4">
            <div className="mx-auto max-w-2xl px-4 lg:max-w-none">
              <SectionInfo
                header1={"WHAT WE DO"}
                header2={"Services"}
                textColor="text-white"
                animate={true}
                cascade={true}
                marginAuto={false}
              >
                <p>
                  At Drip Painting, we specialize in bringing homes to life with
                  expert interior and exterior painting services. Whether
                  refreshing your walls, protecting your exterior with
                  weather-resistant finishes, or creating unique custom designs
                  tailored to your vision, our attention to detail and
                  craftsmanship ensure stunning, long-lasting results every
                  time.
                </p>
              </SectionInfo>

              <div className="mt-10 space-y-16 pt-10 sm:mt-16 sm:pt-16">
                {features.map((feature) => (
                  <div
                    key={feature.name}
                    className="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:items-center lg:gap-x-8"
                  >
                    <div className="mt-6 lg:col-span-5 lg:mt-0 xl:col-span-4">
                      <h3 className="text-lg font-medium text-white">
                        {feature.name}
                      </h3>
                      <p className="mt-2 text-sm text-white-500">
                        {feature.description}
                      </p>
                    </div>
                    <div className="flex-auto lg:col-span-7 xl:col-span-8">
                      <Image
                        alt={feature.imageAlt}
                        src={feature.imageSrc}
                        className="aspect-[5/3] rounded-lg bg-gray-100 object-contain"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <div className="light-content mx-auto flex max-w-[80rem] flex-wrap">
        <div className="mb-8 w-full px-2 md:mb-16 lg:w-6/12">
          <div className="mb-50 mb-sm-30 -mx-2 flex flex-wrap">
            <SectionInfo
              header1={"WHAT WE DO"}
              header2={"Services"}
              textColor="text-white"
              animate={true}
              cascade={true}
              marginAuto={false}
            >
              <p>
                At Drip Painting, we specialize in bringing homes to life with
                expert interior and exterior painting services. Whether
                refreshing your walls, protecting your exterior with
                weather-resistant finishes, or creating unique custom designs
                tailored to your vision, our attention to detail and
                craftsmanship ensure stunning, long-lasting results every time.
              </p>
            </SectionInfo>
          </div>

          <ul
            className="nav nav-tabs services-tabs font-headings"
            role="tablist"
          >
            <li role="presentation">
              <a
                href="#services-item-1"
                aria-controls="services-item-1"
                role="tab"
                aria-selected="true"
                data-bs-toggle="tab"
              >
                Exterior <span className="number">01</span>
              </a>
            </li>
            <li role="presentation">
              <a
                href="#services-item-2"
                className="active"
                aria-controls="services-item-2"
                role="tab"
                aria-selected="false"
                data-bs-toggle="tab"
              >
                Interior <span className="number">02</span>
              </a>
            </li>
            <li role="presentation">
              <a
                href="#services-item-3"
                aria-controls="services-item-3"
                role="tab"
                aria-selected="false"
                data-bs-toggle="tab"
              >
                Custom Finishes <span className="number">03</span>
              </a>
            </li>
          </ul>
        </div>
        <div
          className="wow fadeInLeft flex w-full px-2 lg:w-6/12"
          data-wow-delay="0.55s"
          data-wow-offset={275}
        >
          <div className="tab-content services-content">
            {/* Tab Content */}
            <div
              className="tab-pane services-content-item show fade active"
              id="services-item-1"
              role="tabpanel"
            >
              <div className="services-text lg:left-[calc(-1*220px)]">
                <div className="services-text-container mx-auto">
                  <h4 className="services-title text-2xl font-medium text-white">
                    Brand Strategy
                  </h4>
                  <p className="text-gray mb-0">
                    The core identity reflects consistent associations with the
                    brand whereas the extended identity involves the intricate
                    details of the brand that help generate a constant motif.
                  </p>
                </div>
              </div>
              <Image
                width={945}
                height={1016}
                className="services-image"
                src="/assets/images/services/service-1.jpg"
                alt="Image Description"
              />
            </div>
            {/* End Tab Content */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
