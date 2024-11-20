import ConditionalAnimation from "@/utils/ConditionalAnimation";

function SectionInfo({
  header1,
  header2,
  children,
  textColor = "text-current",
  animate,
  cascade,
  direction,
}) {
  return (
    <div>
      <article>
        <header className="pb-4">
          <ConditionalAnimation
            animate={animate}
            cascade={cascade}
            direction={direction}
          >
            <h2 className="font-headings text-sm font-bold text-orange-600">
              {header1}
            </h2>
            <h3 className={`font-headings text-3xl font-bold ${textColor}`}>
              {header2}
            </h3>
          </ConditionalAnimation>
        </header>

        <div
          className={`pb-8 font-body text-lg ${textColor} md:max-w-sm lg:max-w-md`}
        >
          <ConditionalAnimation
            animate={animate}
            cascade={cascade}
            direction={direction}
          >
            <p>{children}</p>
          </ConditionalAnimation>
        </div>
      </article>
    </div>
  );
}

export default SectionInfo;
