"use client";
import { useState } from "react";

import SectionInfo from "@/components/SectionInfo";

const photos = [
  {
    id: 1,
    category: "exterior",
    src: "https://res.cloudinary.com/dsjx8ner3/image/upload/v1733969300/white_sutd89.webp",
    alt: "Exterior white house  photo",
  },
  {
    id: 2,
    category: "exterior",
    src: "https://res.cloudinary.com/dsjx8ner3/image/upload/v1733969296/deck_gray_wfixen.webp",
    alt: "Exterior back of home photo",
  },
  {
    id: 3,
    category: "exterior",
    src: "https://res.cloudinary.com/dsjx8ner3/image/upload/v1733969299/pink_jbczpk.webp",
    alt: "Exterior pink home photo",
  },
  {
    id: 4,
    category: "exterior",
    src: "https://res.cloudinary.com/dsjx8ner3/image/upload/v1733969297/green_wpawfv.webp",
    alt: "Exterior green home photo",
  },
  {
    id: 5,
    category: "exterior",
    src: "https://res.cloudinary.com/dsjx8ner3/image/upload/v1733969294/back_cihkoa.webp",
    alt: "Exterior back of home photo",
  },
  {
    id: 6,
    category: "exterior",
    src: "https://res.cloudinary.com/dsjx8ner3/image/upload/v1733969295/blue_rooxkm.webp",
    alt: "Exterior blue home photo",
  },
  {
    id: 7,
    category: "interior",
    src: "https://res.cloudinary.com/dsjx8ner3/image/upload/v1733974929/SittingRoom2_kpsjqb.webp",
    alt: "Interior sitting room photo",
  },
  {
    id: 8,
    category: "interior",
    src: "https://res.cloudinary.com/dsjx8ner3/image/upload/v1733974927/sittingRoom_f8lrpz.webp",
    alt: "Interior sitting room photo",
  },
  {
    id: 9,
    category: "interior",
    src: "https://res.cloudinary.com/dsjx8ner3/image/upload/v1733974926/OpenPlan_lzuwft.webp",
    alt: "Interior open plan living area photo",
  },
  {
    id: 10,
    category: "interior",
    src: "https://res.cloudinary.com/dsjx8ner3/image/upload/v1733974924/formal_vlqekq.webp",
    alt: "Interior formal area photo",
  },
  {
    id: 11,
    category: "interior",
    src: "https://res.cloudinary.com/dsjx8ner3/image/upload/v1733974922/dressingRoom_ym9c0v.webp",
    alt: "Interior dressing room photo",
  },
  {
    id: 12,
    category: "interior",
    src: "https://res.cloudinary.com/dsjx8ner3/image/upload/v1733974921/dining_jyqngx.webp",
    alt: "Interior dining room photo",
  },
  {
    id: 13,
    category: "custom",
    src: "https://res.cloudinary.com/dsjx8ner3/image/upload/v1733974979/kitchen_dkugwy.webp",
    alt: "custom painted kitchen photo",
  },
  {
    id: 14,
    category: "custom",
    src: "https://res.cloudinary.com/dsjx8ner3/image/upload/v1733974977/HomeOffice_iheijf.webp",
    alt: "custom painted home office photo",
  },
  {
    id: 15,
    category: "custom",
    src: "https://res.cloudinary.com/dsjx8ner3/image/upload/v1733974975/grandStaircase_kyqdoj.webp",
    alt: "custom painted grand staircase",
  },
  {
    id: 16,
    category: "custom",
    src: "https://res.cloudinary.com/dsjx8ner3/image/upload/v1733974973/garage_mjgfmn.webp",
    alt: "custom painted 3 car garage photo",
  },
  {
    id: 17,
    category: "custom",
    src: "https://res.cloudinary.com/dsjx8ner3/image/upload/v1733974971/fireplace_lhn2cm.webp",
    alt: "custom painted living room with fireplace and shelves",
  },
  {
    id: 18,
    category: "custom",
    src: "https://res.cloudinary.com/dsjx8ner3/image/upload/v1733974970/bathroom_pet3cs.webp",
    alt: "custom painted bathrrom",
  },
];

function HomeGallery() {
  const [category, setCategory] = useState("exterior");

  function handleClick(newCategory) {
    if (newCategory !== category) {
      setCategory(newCategory);
    }
  }

  return (
    <section>
      <SectionInfo
        header1={"Gallery"}
        header2={"Vivid Visions: Our Work Speaks for Itself"}
        animate={true}
        cascade={true}
        direction={"up"}
        textAlign="md:text-center"
        textWidth="max-w-2xl"
      >
        Discover the artistry that sets Drip Painting apart. With over 15 years
        of experience, we bring spaces to life through stunning interior
        transformations, bold exterior makeovers, and custom finishes tailored
        to your vision. From enhancing curb appeal to creating warm, inviting
        interiors, our work showcases the care and precision we bring to every
        project. Explore our gallery and see how we’ve made an impact across the
        Doylestown, PA area—your dream space starts here.
      </SectionInfo>
      {/* Buttons */}
      <div className="mx-auto flex max-w-[80rem] flex-wrap items-center justify-center py-4 md:py-8">
        <button
          type="button"
          className={`mb-3 me-3 rounded-full border border-orange-950 px-5 py-2.5 text-center font-body text-base font-medium text-orange-950 transition ${
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
          className={`mb-3 me-3 rounded-full border border-orange-950 px-5 py-2.5 text-center font-body text-base font-medium text-orange-950 transition ${
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
          className={`mb-3 me-3 rounded-full border border-orange-950 px-5 py-2.5 text-center font-body text-base font-medium text-orange-950 transition ${
            category === "custom"
              ? "bg-orange-100 outline-none ring-4 ring-orange-300"
              : "bg-white"
          }`}
          onClick={() => handleClick("custom")}
        >
          Custom Spaces
        </button>
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
                    <img
                      className="absolute inset-0 h-full w-full rounded-lg object-cover"
                      src={photo.src}
                      alt={photo.alt}
                    />
                  </div>
                ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HomeGallery;
