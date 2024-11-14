import Image from "next/image";
import { getImageProps } from "next/image";
import hero_m from "../../app/assets/hero/hero_m1.jpg";
import hero_d from "../../app/assets/hero/hero_f_crop.jpg";

function Hero() {
  const common = { alt: "Art Direction Example", sizes: "100vw" };
  const {
    props: { srcSet: desktop },
  } = getImageProps({
    ...common,
    width: 1920,
    height: 1097,
    quality: 80,
    src: hero_d,
  });

  const {
    props: { srcSet: mobile, ...rest },
  } = getImageProps({
    ...common,
    width: 1080,
    height: 1349,
    quality: 70,
    src: hero_m,
  });
  return (
    <section className="relative">
      {/* Image */}
      <figure className="w-full md:absolute">
        {/* <Image src={hero_m} alt="front of residential home" priority /> */}
        <picture>
          <source media="(min-width: 768px)" srcSet={desktop} />
          <source media="(min-width: 0px)" srcSet={mobile} />
          <img
            {...rest}
            // style={{ width: "100%", height: "auto", objectFit: "cover" }}
            className="h-auto w-full md:object-cover xl:h-screen"
            alt="Exterior of residential work"
          />
        </picture>
        <figcaption className="sr-only">
          Example of Drip Painting’s exterior residential work
        </figcaption>
        {/* Overlay */}
        <div className="md:absolute md:bottom-0 md:left-0 md:right-0 md:top-0 md:z-[2] md:bg-gradient-to-r md:from-white/80 md:from-30% md:to-transparent md:to-60%" />
      </figure>
      <div className="space-y-6 bg-gradient-to-b from-orange-200 to-white p-4 md:absolute md:left-0 md:z-10 md:max-w-xl md:translate-y-[4vw] md:bg-none xl:translate-x-[4vw] 2xl:translate-x-1/4">
        <h2 className="font-headings text-xl font-bold text-orange-500 md:text-2xl md:font-bold">
          BRING NEW LIFE TO YOUR SPACE
        </h2>
        <h1 className="font-headings max-w-[15em] text-2xl font-bold text-black md:text-3xl md:font-bold">
          Book Your Free Consultation with Bucks & Montgomery’s Trusted
          Painters!
        </h1>
        <p className="font-body max-w-[20em] text-lg text-stone-700">
          With over 50 years of experience, Drip Painting transforms homes
          across Bucks and Montgomery Counties. Our licensed, insured team
          offers quality work, transparent pricing, and custom finishes.
          Schedule your free consultation today and bring your vision to life.
        </p>

        {/* Call to Action */}
        <button
          className="cursor-pointer rounded-md bg-orange-500 px-[1em] py-[.75em] text-base font-bold text-white transition hover:bg-orange-600"
          aria-label="Get a free quote from Drip Painting"
        >
          GET A FREE QUOTE
        </button>
      </div>
    </section>
  );
}

export default Hero;
