import exterior from "../../../../public/assets/home/dripServices/exterior.webp";
import staircase from "../../../../public/assets/home/dripServices/staircase.webp";
import interior from "../../../../public/assets/home/dripServices/interior.webp";

const serviceList = [
  {
    id: "01",
    name: "Exterior",
    description:
      "A quality paint job is essential for maintaining and protecting your home’s exterior. At Drip Painting, our experienced team ensures a durable, beautiful finish by selecting the right products and application methods to safeguard your home and enhance its curb appeal.",
    imageSrc: exterior,
    imageAlt: "Printed photo of bag being tossed into the sky on top of grass.",
  },
  {
    id: "02",
    name: "Interior",
    description:
      "Painting is an easy way to refresh your home, and Drip Painting delivers flawless results with care and precision. Our team protects your space, keeps it clean, and ensures a smooth, stress-free experience from start to finish.",
    imageSrc: staircase,
    imageAlt: "Beautiful re-painted staircase",
  },
  {
    id: "03",
    name: "Custom Finishes",
    description:
      "Custom finishes are the perfect way to add character and sophistication to your space. At Drip Painting, we specialize in unique textures, intricate details, and personalized touches that bring your vision to life, creating a one-of-a-kind look tailored to your style.",
    imageSrc: interior,
    imageAlt: "Black canvas body with chrome zipper and key ring.",
  },
];

export default serviceList;
