import AboutUs from "@/components/home/about-section/AboutUs";
import Hero from "@/components/home/hero-section/Hero";
import Services from "@/components/home/services-section/Services";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Hero />
      <AboutUs />
      <Services />
    </div>
  );
}
