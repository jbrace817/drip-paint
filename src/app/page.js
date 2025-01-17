import CTA from "@/components/CTA";
import AboutUs from "@/components/home/about-section/AboutUs";
import ChooseUs from "@/components/home/chooseUs-section/ChooseUs";
import HomeGallery from "@/components/home/gallery-section/HomeGallery";
import Hero from "@/components/home/hero-section/Hero";
import Services from "@/components/home/services-section/Services";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Hero />
      <AboutUs />
      <Services />
      <ChooseUs />
      <CTA />
      <HomeGallery />
    </div>
  );
}
