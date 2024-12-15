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
  marginAuto = true,
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
            className={`font-headings text-base/7 font-semibold text-orange-600 ${textAlign}`}
          >
            {header1}
          </h2>
          <h3
            className={`font-headings text-4xl font-bold sm:text-5xl ${textColor} ${textAlign}`}
          >
            {header2}
          </h3>
        </ConditionalAnimation>
      </header>

      <div
        className={`pb-8 font-body text-lg/8 ${textColor} ${marginAuto ? "mx-auto" : "mx-0"} ${textAlign} ${textWidth ? textWidth : "md:max-w-sm lg:max-w-md"}`}
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
