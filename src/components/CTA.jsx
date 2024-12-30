import ParallaxContainer from "@/utils/ParallaxContainer";
import test from "../../public/assets/images/services/section-bg-1.jpg";

function CTA() {
  return (
    <ParallaxContainer
      image="/assets/home/dripServices/freepik__adjust__93585.png"
      speed={0.5}
      className="parallax-5"
    >
      <div className="relative">
        <div className="px-4 py-[clamp(3.75rem,7.82vw,6.25rem)] sm:px-6 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-balance font-headings text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Transform Your Space with Expert Painting Services
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-pretty font-body text-lg/8 text-gray-300">
              With over 15 years of experience, our skilled team brings life to
              your vision through vibrant interiors, polished exteriors, and
              custom finishes. Your dream space is just a brushstroke away.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6 font-body">
              <a
                href="#"
                className="rounded-md bg-orange-500 px-3.5 py-2.5 text-sm font-semibold text-orange-950 shadow-sm transition hover:hover:bg-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                FREE QUOTE
              </a>
              <a href="#" className="text-sm/6 font-semibold text-white">
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
            <div className="absolute inset-0 -z-10 bg-black opacity-40" />
          </div>
        </div>
      </div>
    </ParallaxContainer>
  );
}

export default CTA;
