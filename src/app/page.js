import AboutUs from "@/components/home/about-section/AboutUs";
import Hero from "@/components/home/hero-section/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Hero />
      <AboutUs />
    </div>
  );
}
