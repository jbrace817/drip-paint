"use client";
import dynamic from "next/dynamic";
import { useEffect, useRef } from "react";

const jarallax = dynamic(() => import("jarallax").then((mod) => mod.jarallax), {
  ssr: false,
});

function ParallaxContainer({ image, speed, children }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const initJarallax = async () => {
      if (containerRef.current && jarallax) {
        const { jarallax } = await import("jarallax");
        jarallax(containerRef.current, {
          speed: speed || 0.5,
          imgSrc: image,
        });
      }
    };

    initJarallax();

    return () => {
      if (containerRef.current) {
        const { jarallax } = require("jarallax");
        jarallax(containerRef.current, "destroy");
      }
    };
  }, [image, speed]);

  return <div ref={containerRef}>{children}</div>;
}

export default ParallaxContainer;
