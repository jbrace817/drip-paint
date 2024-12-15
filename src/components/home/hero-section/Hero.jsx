import Image from "next/image";
import { getImageProps } from "next/image";
import hero_m from "../../../../public/assets/home/hero/hero_m.webp";
import hero_d from "../../../../public/assets/home/hero/hero_d.webp";

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
    <section
      className="relative flex min-h-screen items-center px-4"
      style={{ padding: "clamp(3.75rem, 7.82vw, 6.25rem) 1rem" }}
    >
      {/* Full-Height Image Background */}
      <figure className="absolute inset-0 h-full w-full">
        <picture>
          <source media="(min-width: 768px)" srcSet={desktop} />
          <source media="(min-width: 0px)" srcSet={mobile} />
          <img
            {...rest}
            className="h-full w-full object-cover"
            alt="Exterior of residential work"
          />
        </picture>
        <figcaption className="sr-only">
          Example of Drip Painting’s exterior residential work
        </figcaption>
        {/* Overlay */}
        <div className="absolute inset-0 z-[2] bg-white/60 md:bg-transparent md:bg-gradient-to-r md:from-white/80 md:from-25% md:to-transparent md:to-70% lg:to-60%" />
      </figure>
      {/* Content Section */}
      <div className="relative z-10 flex h-[60vh] w-full flex-col gap-10 md:max-w-[80rem] xl:mx-auto landscape:mt-6 landscape:h-auto">
        <div className="mb-4 max-w-md space-y-6 lg:max-w-lg">
          <div>
            <p className="font-headings text-lg font-semibold text-orange-600 md:font-bold">
              BRING NEW LIFE TO YOUR SPACE
            </p>

            <h1 className="text-pretty font-headings text-4xl font-semibold tracking-tight text-gray-900 lg:text-5xl">
              Expert Painting, Remarkable Transformations
            </h1>
          </div>
          <div className="space-y-4">
            <p className="text-pretty font-body text-xl font-medium text-stone-700 sm:text-xl/8 md:text-lg">
              Drip Painting delivers exceptional craftsmanship with a focus on
              quality and care. Serving Bucks and Montgomery Counties, our
              licensed and insured team specializes in custom finishes that
              elevate your home. Schedule your free consultation today and bring
              your vision to life!
            </p>
          </div>
        </div>
        <button
          className="cursor-pointer self-start rounded-md bg-orange-500 px-[1em] py-[.75em] font-body text-lg font-bold text-orange-950 transition hover:bg-orange-600"
          aria-label="Get a free quote from Drip Painting"
        >
          SCHEDULE NOW <span aria-hidden="true">→</span>
        </button>
      </div>
    </section>
  );
}

export default Hero;
