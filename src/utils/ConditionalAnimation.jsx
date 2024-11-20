"use client";
import { Fade } from "react-awesome-reveal";

function ConditionalAnimation({
  children,
  animate = false,
  cascade = false,
  direction,
}) {
  return animate ? (
    <Fade cascade={cascade} direction={direction} triggerOnce fraction={1}>
      {children}
    </Fade>
  ) : (
    <>{children}</>
  );
}

export default ConditionalAnimation;
