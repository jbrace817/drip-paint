"use client";
import { useEffect, useRef } from "react";
import { jarallax } from "jarallax";

function ParallaxContainer({ image, speed, children }) {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      jarallax(containerRef.current, {
        speed: speed || 0.5,
        imgSrc: image,
      });
    }

    return () => {
      if (containerRef.current) {
        jarallax(containerRef.current, "destroy");
      }
    };
  }, [image, speed]);

  return <div ref={containerRef}>{children}</div>;
}

export default ParallaxContainer;
