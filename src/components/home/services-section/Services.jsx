import SectionInfo from "@/components/SectionInfo";

function Services() {
  return (
    <section className="bg-stone-950 px-4 py-16">
      <div className="m-auto max-w-[80rem]">
        <SectionInfo
          header1={"WHAT WE DO"}
          header2={"Services"}
          textColor="text-white"
        >
          At Drip Painting, we specialize in bringing homes to life with expert
          interior and exterior painting services. Whether refreshing your
          walls, protecting your exterior with weather-resistant finishes, or
          creating unique custom designs tailored to your vision, our attention
          to detail and craftsmanship ensure stunning, long-lasting results
          every time.
        </SectionInfo>
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
