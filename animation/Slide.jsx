"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

export const Slide = ({ children, slideleft, slideright, duration = 15 }) => {
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  // left animation (continuous)
  useEffect(() => {
    if (slideleft && leftRef.current) {
      const totalWidth = leftRef.current.scrollWidth / 2;
      gsap.fromTo(
        leftRef.current,
        { x: 0 },
        {
          x: -totalWidth,
          duration,
          ease: "linear",
          repeat: -1,
        }
      );
    }
  }, [slideleft, duration]);

  // right animation (continuous)
  useEffect(() => {
    if (slideright && rightRef.current) {
      const totalWidth = rightRef.current.scrollWidth / 2;
      gsap.fromTo(
        rightRef.current,
        { x: -totalWidth },
        {
          x: 0,
          duration,
          ease: "linear",
          repeat: -1,
        }
      );
    }
  }, [slideright, duration]);

  return (
    <div className="overflow-hidden w-full h-full">
      {slideleft && (
        <div ref={leftRef} className="flex whitespace-nowrap">
          <div className="flex flex-shrink-0">{children}</div>
          <div className="flex flex-shrink-0">{children}</div>
        </div>
      )}
      {slideright && (
        <div ref={rightRef} className="flex whitespace-nowrap">
          <div className="flex flex-shrink-0">{children}</div>
          <div className="flex flex-shrink-0">{children}</div>
        </div>
      )}
    </div>
  );
};
