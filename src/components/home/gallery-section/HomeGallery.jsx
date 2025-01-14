"use client";
import { useState } from "react";

import SectionInfo from "@/components/SectionInfo";
import Image from "next/image";
import Zoom from "yet-another-react-lightbox/plugins/zoom";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import NextJsImage from "@/utils/NextJsImage";

const photos = [
  {
    id: 1,
    category: "exterior",
    src: "https://res.cloudinary.com/dsjx8ner3/image/upload/v1733969300/white_sutd89.webp",
    alt: "Exterior white house  photo",
    sizes:
      "(min-width: 2000px) 21.5vw, (min-width: 1400px) 405px, (min-width: 780px) 29.5vw, calc(50vw - 40px)",
  },
  {
    id: 2,
    category: "exterior",
    src: "https://res.cloudinary.com/dsjx8ner3/image/upload/v1733969296/deck_gray_wfixen.webp",
    alt: "Exterior back of home photo",
    sizes:
      "(min-width: 2000px) 24.3vw, (min-width: 1400px) 456px, (min-width: 780px) 33.17vw, calc(56.09vw - 43px)",
  },
  {
    id: 3,
    category: "exterior",
    src: "https://res.cloudinary.com/dsjx8ner3/image/upload/v1733969299/pink_jbczpk.webp",
    alt: "Exterior pink home photo",
    sizes:
      "(min-width: 2000px) 24.3vw, (min-width: 1400px) 456px, (min-width: 780px) 33.17vw, calc(56.09vw - 43px)",
  },
  {
    id: 4,
    category: "exterior",
    src: "https://res.cloudinary.com/dsjx8ner3/image/upload/v1733969297/green_wpawfv.webp",
    alt: "Exterior green home photo",
    sizes:
      "(min-width: 2000px) 29.7vw, (min-width: 1400px) 552px, (min-width: 780px) 40.5vw, calc(68.26vw - 54px)",
  },
  {
    id: 5,
    category: "exterior",
    src: "https://res.cloudinary.com/dsjx8ner3/image/upload/v1733969294/back_cihkoa.webp",
    alt: "Exterior back of home photo",
    sizes:
      "(min-width: 2000px) 28.7vw, (min-width: 1400px) 541px, (min-width: 780px) 39.33vw, calc(66.52vw - 53px)",
  },
  {
    id: 6,
    category: "exterior",
    src: "https://res.cloudinary.com/dsjx8ner3/image/upload/v1733969295/blue_rooxkm.webp",
    alt: "Exterior blue home photo",
    sizes:
      "(min-width: 2000px) 24.2vw, (min-width: 1400px) 461px, (min-width: 780px) 33.33vw, calc(56.52vw - 45px)",
  },
  {
    id: 7,
    category: "interior",
    src: "https://res.cloudinary.com/dsjx8ner3/image/upload/v1733974929/SittingRoom2_kpsjqb.webp",
    alt: "Interior sitting room photo",
    sizes:
      "(min-width: 2000px) 24.2vw, (min-width: 1400px) 461px, (min-width: 780px) 33.33vw, calc(56.52vw - 45px)",
  },
  {
    id: 8,
    category: "interior",
    src: "https://res.cloudinary.com/dsjx8ner3/image/upload/v1733974927/sittingRoom_f8lrpz.webp",
    alt: "Interior sitting room photo",
    sizes:
      "(min-width: 2000px) 28.6vw, (min-width: 1400px) 539px, (min-width: 780px) 39.17vw, calc(66.09vw - 51px)",
  },
  {
    id: 9,
    category: "interior",
    src: "https://res.cloudinary.com/dsjx8ner3/image/upload/v1733974926/OpenPlan_lzuwft.webp",
    alt: "Interior open plan living area photo",
    sizes:
      "(min-width: 2000px) 28.8vw, (min-width: 1380px) 540px, (min-width: 780px) 40.86vw, calc(66.74vw - 52px)",
  },
  {
    id: 10,
    category: "interior",
    src: "https://res.cloudinary.com/dsjx8ner3/image/upload/v1733974924/formal_vlqekq.webp",
    alt: "Interior formal area photo",
    sizes:
      "(min-width: 2000px) 24.2vw, (min-width: 1400px) 461px, (min-width: 780px) 33.33vw, calc(56.52vw - 45px)",
  },
  {
    id: 11,
    category: "interior",
    src: "https://res.cloudinary.com/dsjx8ner3/image/upload/v1733974922/dressingRoom_ym9c0v.webp",
    alt: "Interior dressing room photo",
    sizes:
      "(min-width: 2000px) 21.5vw, (min-width: 1400px) 405px, (min-width: 780px) 29.5vw, calc(50vw - 40px)",
  },
  {
    id: 12,
    category: "interior",
    src: "https://res.cloudinary.com/dsjx8ner3/image/upload/v1733974921/dining_jyqngx.webp",
    alt: "Interior dining room photo",
    sizes:
      "(min-width: 2000px) 24.3vw, (min-width: 1400px) 456px, (min-width: 780px) 33.17vw, calc(56.09vw - 43px)",
  },
  {
    id: 13,
    category: "custom",
    src: "https://res.cloudinary.com/dsjx8ner3/image/upload/v1733974979/kitchen_dkugwy.webp",
    alt: "custom painted kitchen photo",
    sizes:
      "(min-width: 2000px) 24.3vw, (min-width: 1400px) 456px, (min-width: 780px) 33.17vw, calc(56.09vw - 43px)",
  },
  {
    id: 14,
    category: "custom",
    src: "https://res.cloudinary.com/dsjx8ner3/image/upload/v1733974977/HomeOffice_iheijf.webp",
    alt: "custom painted home office photo",
    sizes:
      "(min-width: 2000px) 28.9vw, (min-width: 1400px) 540px, (min-width: 780px) 39.67vw, calc(66.74vw - 52px)",
  },
  {
    id: 15,
    category: "custom",
    src: "https://res.cloudinary.com/dsjx8ner3/image/upload/v1733974975/grandStaircase_kyqdoj.webp",
    alt: "custom painted grand staircase",
    sizes:
      "(min-width: 2000px) 24.2vw, (min-width: 1400px) 461px, (min-width: 780px) 33.33vw, calc(56.52vw - 45px)",
  },
  {
    id: 16,
    category: "custom",
    src: "https://res.cloudinary.com/dsjx8ner3/image/upload/v1733974973/garage_mjgfmn.webp",
    alt: "custom painted 3 car garage photo",
    sizes:
      "(min-width: 2000px) 24.3vw, (min-width: 1400px) 456px, (min-width: 780px) 33.17vw, calc(56.09vw - 43px)",
  },
  {
    id: 17,
    category: "custom",
    src: "https://res.cloudinary.com/dsjx8ner3/image/upload/v1733974971/fireplace_lhn2cm.webp",
    alt: "custom painted living room with fireplace and shelves",
    sizes:
      "(min-width: 2000px) 24.3vw, (min-width: 1400px) 456px, (min-width: 780px) 33.17vw, calc(56.09vw - 43px)",
  },
  {
    id: 18,
    category: "custom",
    src: "https://res.cloudinary.com/dsjx8ner3/image/upload/v1733974970/bathroom_pet3cs.webp",
    alt: "custom painted bathrrom",
    sizes:
      "(min-width: 2000px) 24.3vw, (min-width: 1400px) 456px, (min-width: 780px) 33.17vw, calc(56.09vw - 43px)",
  },
];

const slides = photos.map((photo) => ({
  src: photo.src,
  width: 1920, // Placeholder width
  height: 1080, // Placeholder height
  alt: photo.alt,
  sizes: photo.sizes,
}));

function HomeGallery() {
  const [category, setCategory] = useState("exterior");
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  function handleClick(newCategory) {
    if (newCategory !== category) {
      setCategory(newCategory);
    }
  }

  return (
    <section style={{ padding: "clamp(3.75rem, 7.82vw, 6.25rem) 1rem" }}>
      <div className="mx-auto flex max-w-[80rem] flex-wrap items-end lg:justify-between">
        <div className="md:w-full lg:max-w-lg">
          <SectionInfo
            header1={"Gallery"}
            header2={"Our Work Speaks for Itself"}
            animate={true}
            cascade={true}
            direction={"up"}
            textAlign="text-left md:text-center lg:text-left "
            textWidth="max-w-full"
          ></SectionInfo>
        </div>
        {/* Buttons */}
        <div className="mx-auto flex flex-wrap justify-center pb-8 lg:mx-0">
          <button
            type="button"
            className={`mb-3 me-3 rounded-full border border-orange-950 px-4 py-2.5 text-center font-body text-base font-medium text-orange-950 transition ${
              category === "exterior"
                ? "bg-orange-100 outline-none ring-4 ring-orange-300"
                : "bg-white"
            }`}
            onClick={() => handleClick("exterior")}
          >
            Exterior
          </button>
          <button
            type="button"
            className={`mb-3 me-3 rounded-full border border-orange-950 px-4 py-2.5 text-center font-body text-base font-medium text-orange-950 transition ${
              category === "interior"
                ? "bg-orange-100 outline-none ring-4 ring-orange-300"
                : "bg-white"
            }`}
            onClick={() => handleClick("interior")}
          >
            Interior
          </button>
          <button
            type="button"
            className={`mb-3 me-3 rounded-full border border-orange-950 px-4 py-2.5 text-center font-body text-base font-medium text-orange-950 transition ${
              category === "custom"
                ? "bg-orange-100 outline-none ring-4 ring-orange-300"
                : "bg-white"
            }`}
            onClick={() => handleClick("custom")}
          >
            Custom Spaces
          </button>
        </div>
      </div>

      {/* Photo Container */}
      <div className="relative mx-auto mb-16 max-w-[80rem] overflow-hidden">
        <div className="relative h-auto transition-all duration-500">
          {["exterior", "interior", "custom"].map((cat) => (
            <div
              key={cat}
              className={`absolute inset-0 grid grid-cols-2 gap-4 px-4 transition-opacity duration-500 md:grid-cols-3 ${
                category === cat ? "z-10 opacity-100" : "z-0 opacity-0"
              }`}
              style={{
                position: category === cat ? "relative" : "absolute",
                height: category === cat ? "auto" : "0",
              }}
            >
              {photos
                .filter((photo) => photo.category === cat)
                .map((photo) => (
                  <div
                    className="relative aspect-[4/3] h-full w-full"
                    key={photo.id}
                  >
                    <Image
                      className="absolute inset-0 h-full w-full rounded-lg object-cover"
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      sizes={photo.sizes}
                      onClick={() => {
                        setCurrentIndex(
                          slides.findIndex((slide) => slide.src === photo.src),
                        );
                        setOpen(true);
                      }}
                    />
                  </div>
                ))}
            </div>
          ))}
        </div>
        {/* Lightbox */}
        <Lightbox
          open={open}
          close={() => setOpen(false)}
          index={currentIndex}
          slides={slides}
          render={{
            slide: (props) => <NextJsImage {...props} />,
          }}
          plugins={[Zoom]}
        />
      </div>
      <div className="mx-auto flex max-w-[80rem] justify-center">
        <button
          className="mx-auto cursor-pointer rounded-md bg-orange-500 px-[1em] py-[.75em] font-body text-lg font-bold text-orange-950 transition hover:bg-orange-600"
          aria-label="View Gallery of Drip's work"
        >
          GET A FREE QUOTE
        </button>
      </div>
    </section>
  );
}

export default HomeGallery;
