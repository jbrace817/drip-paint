import Image from "next/image";
import { getImageProps } from "next/image";
import hero_m from "../../../app/assets/home/hero/hero_m1.jpg";
import hero_d from "../../../app/assets/home/hero/hero_f_crop.jpg";

function Hero() {
  const common = { alt: "Art Direction", sizes: "100vw" };
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
      <figure className="absolute w-full">
        {/* <Image src={hero_m} alt="front of residential home" priority /> */}
        <picture>
          <source media="(min-width: 768px)" srcSet={desktop} />
          <source media="(min-width: 0px)" srcSet={mobile} />
          <img
            {...rest}
            // style={{ width: "100%", height: "auto", objectFit: "cover" }}
            className="h-screen w-full object-cover sm:h-auto xl:h-screen"
            alt="Exterior of residential work"
          />
        </picture>
        <figcaption className="sr-only">
          Example of Drip Painting’s exterior residential work
        </figcaption>
        {/* Overlay */}
        <div className="absolute inset-0 z-[2] bg-white/60 md:bg-transparent md:bg-gradient-to-r md:from-white/80 md:from-30% md:to-transparent md:to-60%" />
      </figure>
      <div className="absolute left-0 z-10 mx-4 flex h-screen flex-grow basis-auto flex-col justify-around md:block md:h-auto md:max-w-xl md:translate-y-1/4 md:space-y-6 md:bg-none lg:translate-x-1/4 lg:translate-y-1/3 xl:translate-x-1/2 xl:translate-y-1/2">
        <div className="space-y-6 pt-10 md:pt-0">
          <h2 className="font-headings text-xl font-bold text-orange-500 md:font-bold">
            BRING NEW LIFE TO YOUR SPACE
          </h2>
          <h1 className="max-w-sm font-headings text-2xl font-bold text-black">
            Book Your Free Consultation with Bucks & Montgomery’s Trusted
            Painters!
          </h1>

          <p className="max-w-sm font-body text-xl font-medium text-stone-700 md:text-lg">
            With over 50 years of experience, Drip Painting transforms homes
            across Bucks and Montgomery Counties. Our licensed, insured team
            offers quality work, transparent pricing, and custom finishes.
            Schedule your free consultation today and bring your vision to life.
          </p>
        </div>
        <button
          className="cursor-pointer self-start rounded-md bg-orange-500 px-[1em] py-[.75em] text-base font-bold text-orange-950 transition hover:bg-orange-600"
          aria-label="Get a free quote from Drip Painting"
        >
          GET A FREE QUOTE
        </button>
      </div>
    </section>
  );
}

export default Hero;
