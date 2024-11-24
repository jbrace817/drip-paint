"use client";
import { Fade } from "react-awesome-reveal";

function ConditionalAnimation({
  children,
  animate = false,
  cascade = false,
  direction,
  className = "",
  delay = 0,
  fraction = 0,
}) {
  return animate ? (
    <Fade
      cascade={cascade}
      direction={direction}
      delay={delay}
      triggerOnce
      key={`${direction}-${delay}`}
      fraction={fraction}
      className={`${className}`}
    >
      {children}
    </Fade>
  ) : (
    <>{children}</>
  );
}

export default ConditionalAnimation;
