import ParallaxContainer from "@/utils/ParallaxContainer";

function CTA() {
  return (
    <ParallaxContainer
      image="https://res.cloudinary.com/dsjx8ner3/image/upload/v1735734476/freepik__adjust__54031_poocbe.webp"
      speed={0.5}
      className="parallax-5"
      alt="Dining room with a large table"
    >
      <div className="relative">
        <div className="px-4 py-[clamp(3.75rem,7.82vw,6.25rem)] sm:px-6 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-balance font-headings text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Transform Your Space with Expert Painting Services
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-pretty font-body text-xl/8 text-white">
              With over 15 years of experience, our skilled team brings life to
              your vision through vibrant interiors, polished exteriors, and
              custom finishes. Your dream space is just a brushstroke away.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6 font-body">
              <button
                className="mx-auto cursor-pointer rounded-md bg-orange-500 px-[1em] py-[.75em] font-body text-lg font-bold text-orange-950 transition hover:bg-orange-700"
                aria-label="View Gallery of Drip's work"
              >
                SCHEDULE TODAY
              </button>
            </div>
            <div className="absolute inset-0 -z-10 bg-black opacity-50" />
          </div>
        </div>
      </div>
    </ParallaxContainer>
  );
}

export default CTA;
