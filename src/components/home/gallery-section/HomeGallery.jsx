"use client";
import { useEffect, useRef, useState } from "react";
import { Fade } from "react-awesome-reveal";

const photos = [
  {
    id: 1,
    category: "exterior",
    src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg",
    alt: "Exterior photo",
  },
  {
    id: 2,
    category: "exterior",
    src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg",
    alt: "Exterior photo",
  },
  {
    id: 3,
    category: "exterior",
    src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg",
    alt: "Exterior photo",
  },
  {
    id: 4,
    category: "exterior",
    src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg",
    alt: "Exterior photo",
  },
  {
    id: 5,
    category: "exterior",
    src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg",
    alt: "Exterior photo",
  },
  {
    id: 6,
    category: "exterior",
    src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg",
    alt: "Exterior photo",
  },
  {
    id: 7,
    category: "interior",
    src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-6.jpg",
    alt: "Exterior photo",
  },
  {
    id: 8,
    category: "interior",
    src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-7.jpg",
    alt: "Exterior photo",
  },
  {
    id: 9,
    category: "interior",
    src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-8.jpg",
    alt: "Exterior photo",
  },
  {
    id: 10,
    category: "interior",
    src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-9.jpg",
    alt: "Exterior photo",
  },
  {
    id: 11,
    category: "interior",
    src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-10.jpg",
    alt: "Exterior photo",
  },
  {
    id: 12,
    category: "interior",
    src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-11.jpg",
    alt: "Exterior photo",
  },
];

// function HomeGallery() {
//   const [category, setCategory] = useState("exterior");
//   const [loading, setLoading] = useState(false);

//   function handleClick(newCategory) {
//     setCategory(newCategory);
//   }

//   return (
//     <section>
//       <div className="mx-auto flex max-w-[80rem] flex-wrap items-center justify-center py-4 md:py-8">
//         <button
//           type="button"
//           className={`mb-3 me-3 rounded-full border border-orange-950 px-5 py-2.5 text-center font-body text-base font-medium text-orange-950 transition ${category === "exterior" ? "bg-orange-100 outline-none ring-4 ring-orange-300" : "bg-white"}`}
//           onClick={() => handleClick("exterior")}
//         >
//           Exterior
//         </button>
//         <button
//           type="button"
//           className={`mb-3 me-3 rounded-full border border-orange-950 px-5 py-2.5 text-center font-body text-base font-medium text-orange-950 transition ${category === "interior" ? "bg-orange-100 outline-none ring-4 ring-orange-300" : "bg-white"}`}
//           onClick={() => handleClick("interior")}
//         >
//           Interior
//         </button>
//         <button
//           type="button"
//           className={`mb-3 me-3 rounded-full border border-orange-950 px-5 py-2.5 text-center font-body text-base font-medium text-orange-950 transition ${category === "custom" ? "bg-orange-100 outline-none ring-4 ring-orange-300" : "bg-white"}`}
//           onClick={() => handleClick("custom")}
//         >
//           Custom Spaces
//         </button>
//       </div>
//       <div className="relative mx-auto mb-16 max-w-[80rem]">
//         {["exterior", "interior", "custom"].map((cat) => (
//           <div
//             key={cat}
//             className={`grid grid-cols-2 gap-4 px-4 md:grid-cols-3 ${
//               category === cat ? "opacity-100" : "absolute opacity-0"
//             }`}
//           >
//             {photos
//               .filter((photo) => photo.category === cat)
//               .map((photo) => (
//                 <img
//                   className="h-auto max-w-full rounded-lg"
//                   src={photo.src}
//                   alt={photo.alt}
//                   key={photo.id}
//                 />
//               ))}
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

function HomeGallery() {
  const [category, setCategory] = useState("exterior");

  function handleClick(newCategory) {
    if (newCategory !== category) {
      setCategory(newCategory);
    }
  }

  return (
    <section>
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
                  <img
                    className="h-auto max-w-full rounded-lg"
                    src={photo.src}
                    alt={photo.alt}
                    key={photo.id}
                  />
                ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HomeGallery;
