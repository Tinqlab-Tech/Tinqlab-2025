"use client";

import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SlideUp = ({
  overflow,
  children,
  duration = 1.2,
  delay = 0,
  playOnMount,
}) => {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);

  // animate function
  const animate = () => {
    if (containerRef.current) {
      gsap.fromTo(
        containerRef.current,
        { opacity: 0, y: "100%" }, // start below + invisible
        {
          opacity: 1,
          y: "0%", // move to original position
          duration,
          delay,
          ease: "power2.inOut",
        }
      );
    }
  };

  // run animation on mount or create scroll trigger
  useEffect(() => {
    if (playOnMount) {
      animate();
    } else if (sectionRef.current) {
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top 80%",
        onEnter: () => animate(),
        markers: false, // set to true for debugging
      });
    }
  }, [duration, delay, playOnMount]);

  return (
    <div
      ref={sectionRef}
      className={`${overflow === null ? "" : "overflow-hidden"} w-full h-full`}
    >
      {" "}
      <div ref={containerRef} className=" w-full h-full">
        {children}
      </div>
    </div>
  );
};

export default SlideUp;
