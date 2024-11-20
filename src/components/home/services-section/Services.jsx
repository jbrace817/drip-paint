import SectionInfo from "@/components/SectionInfo";

function Services() {
  return (
    <section className="bg-stone-950 px-4 py-16">
      <div className="m-auto max-w-[80rem]">
        <article>
          <header className="pb-4">
            <h2 className="font-headings text-sm font-bold text-orange-600">
              WHAT WE DO
            </h2>
            <h3 className="font-headings text-3xl font-bold text-white">
              Services
            </h3>
          </header>
          <div className="pb-8 font-body text-lg text-white md:max-w-sm lg:max-w-md">
            <p>
              At Drip Painting, we specialize in bringing homes to life with
              expert interior and exterior painting services. Whether refreshing
              your walls, protecting your exterior with weather-resistant
              finishes, or creating unique custom designs tailored to your
              vision, our attention to detail and craftsmanship ensure stunning,
              long-lasting results every time.
            </p>
          </div>
        </article>

        <button
          className="cursor-pointer self-start rounded-md bg-orange-500 px-[1em] py-[.75em] text-base font-bold text-orange-950 transition hover:bg-orange-600"
          aria-label="View Gallery of Drip's work"
        >
          View Gallery
        </button>
        <picture>
          <source></source>
          <source></source>
          <img></img>
        </picture>
        <picture>
          <source></source>
          <source></source>
          <img></img>
        </picture>
        <picture>
          <source></source>
          <source></source>
          <img></img>
        </picture>
      </div>
    </section>
  );
}

export default Services;
