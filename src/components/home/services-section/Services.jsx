"use client";
import SectionInfo from "@/components/SectionInfo";
import Image from "next/image";
import serviceList from "./serviceList";
import { useState } from "react";
import ConditionalAnimation from "@/utils/ConditionalAnimation";

function ServiceContent({
  name,
  imageAlt,
  imageSrc,
  description,
  directionRight,
}) {
  return (
    <div
      className="px-2 md:w-full lg:w-6/12"
      data-wow-delay="0.55s"
      data-wow-offset={275}
    >
      <ConditionalAnimation
        animate={true}
        cascade={directionRight === "right" ? true : false}
        direction={directionRight}
      >
        <div className={`w-full md:w-auto`}>
          {/* Tab Content */}
          <div className={`relative md:flex md:justify-end`} role="tabpanel">
            <div className="bottom-0 md:absolute md:right-[26.25rem] md:z-10 md:max-w-xl lg:-bottom-24 lg:left-[calc(-1*180px)] lg:right-0 lg:max-w-sm xl:bottom-0">
              <div className="mx-auto mb-3 bg-stone-800 p-7">
                <h4 className="mb-[.575em] font-headings text-2xl font-medium text-white">
                  {name}
                </h4>
                <p className="mb-0 font-body text-lg font-normal text-stone-400">
                  {description}
                </p>
                <p className="mt-6">
                  <a
                    href={"#"}
                    className="text-md/6 font-semibold text-orange-600"
                  >
                    Learn more <span aria-hidden="true">→</span>
                  </a>
                </p>
              </div>
            </div>
            <Image
              width={945}
              height={1016}
              className="md:max-w-[32.5rem]"
              src={imageSrc}
              alt={imageAlt}
            />
          </div>
          {/* End Tab Content */}
        </div>
      </ConditionalAnimation>
    </div>
  );
}

function ServicesList({ id, name, onClick, active }) {
  return (
    <>
      <ul
        className="nav nav-tabs services-tabs font-headings 2xl:text-[calc(1.194rem+1.53vw)]"
        role="tablist"
      >
        <li role="presentation">
          <a
            href={`#services-item-${id}`}
            aria-controls={`services-item-${id}`}
            role="tab"
            className={active === name ? "active" : ""}
            aria-selected={active === name ? "true" : "false"}
            data-bs-toggle="tab"
            onClick={() => onClick(name)}
          >
            {name} <span className="number">{id}</span>
          </a>
        </li>
      </ul>
    </>
  );
}

function Services() {
  const [activeService, setActiveService] = useState("Exterior");
  const [directionRight, setDirectionRight] = useState("right");
  function handleClick(name) {
    setDirectionRight("");
    setActiveService(name);
  }
  return (
    <section className="overflow-hidden bg-stone-900 px-4 py-[clamp(3.75rem,7.82vw,6.25rem)]">
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
              textWidth="md:max-w-xl lg:max-w-md"
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

          {/* Service Tabs */}
          {serviceList.map((service) => (
            <ServicesList
              name={service.name}
              id={service.id}
              onClick={handleClick}
              active={activeService}
              key={service.id}
            />
          ))}
        </div>

        {/* Service Content */}
        {serviceList
          .filter((service) => activeService === service.name)
          .map((service) => (
            <ServiceContent
              key={service.id}
              name={service.name}
              description={service.description}
              imageAlt={service.imageAlt}
              imageSrc={service.imageSrc}
              id={service.id}
              directionRight={directionRight}
            />
          ))}
      </div>
    </section>
  );
}
export default Services;
