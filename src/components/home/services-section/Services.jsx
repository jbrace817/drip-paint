"use client";
import SectionInfo from "@/components/SectionInfo";
import Image from "next/image";
import serviceList from "./serviceList";
import { useState } from "react";

function ServiceContent({ name, imageAlt, imageSrc, description }) {
  return (
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
                {name}
              </h4>
              <p className="text-gray mb-0">{description}</p>
            </div>
          </div>
          <Image
            width={945}
            height={1016}
            className="services-image"
            src={imageSrc}
            alt={imageAlt}
          />
        </div>
        {/* End Tab Content */}
      </div>
    </div>
  );
}

function ServicesList({ id, index, name, onClick, active }) {
  return (
    <>
      <ul className="nav nav-tabs services-tabs font-headings" role="tablist">
        <li role="presentation">
          <a
            href={`#services-item-${index + 1}`}
            aria-controls={`services-item-${index + 1}`}
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
  function handleClick(name) {
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
          <ul
            className="nav nav-tabs services-tabs font-headings"
            role="tablist"
          >
            {serviceList.map((service, index) => (
              <ServicesList
                name={service.name}
                id={service.id}
                index={index}
                onClick={handleClick}
                active={activeService}
                key={service.id}
              />
            ))}
          </ul>
        </div>
        {serviceList
          .filter((service) => activeService === service.name)
          .map((service) => (
            <ServiceContent
              key={service.id}
              name={service.name}
              description={service.description}
              imageAlt={service.imageAlt}
              imageSrc={service.imageSrc}
            />
          ))}
      </div>
    </section>
  );
}
export default Services;
