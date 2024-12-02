import ConditionalAnimation from "@/utils/ConditionalAnimation";

function SectionInfo({
  header1,
  header2,
  children,
  textColor = "text-current",
  animate,
  cascade,
  direction,
  textAlign = "",
  textWidth = "",
}) {
  return (
    <article>
      <header className="pb-4">
        <ConditionalAnimation
          animate={animate}
          cascade={cascade}
          direction={direction}
        >
          <h2
            className={`font-headings text-xl font-bold text-orange-600 ${textAlign}`}
          >
            {header1}
          </h2>
          <h3
            className={`font-headings text-4xl font-bold ${textColor} ${textAlign}`}
          >
            {header2}
          </h3>
        </ConditionalAnimation>
      </header>

      <div
        className={`pb-8 font-body text-lg ${textColor} mx-auto ${textAlign} ${textWidth ? textWidth : "md:max-w-sm lg:max-w-md"}`}
      >
        <ConditionalAnimation
          animate={animate}
          cascade={cascade}
          direction={direction}
        >
          <div> {children} </div>
        </ConditionalAnimation>
      </div>
    </article>
  );
}

export default SectionInfo;
