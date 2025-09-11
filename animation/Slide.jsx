"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

export const Slide = ({ children }) => {
  const sliderRef = useRef(null);

  useEffect(() => {
    if (sliderRef.current) {
      const totalWidth = sliderRef.current.scrollWidth; // half because we duplicate content

      gsap.to(sliderRef.current, {
        x: -totalWidth, // move left by width of one set
        duration: 15, // adjust speed here
        ease: "linear", // constant speed
        repeat: -1, // infinite loop
      });
    }
  }, []);

  return (
    <div className="overflow-hidden w-full h-full">
      <div ref={sliderRef} className="flex whitespace-nowrap">
        <div>{children}</div>
      </div>
    </div>
  );
};
