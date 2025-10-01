"use client";

import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SlideRight = ({
  children,
  duration = 1.2,
  delay = 0,
  playOnMount = false,
}) => {
  const sectionRef = useRef(null);
  const rightRef = useRef(null);

  const animate = () => {
    if (rightRef.current) {
      gsap.fromTo(
        rightRef.current,
        { opacity: 0, x: "-100%" }, // start offscreen right + invisible
        {
          opacity: 1,
          x: "0%", // move to original position
          duration,
          delay,
          ease: "power2.inOut",
        }
      );
    }
  };

  useEffect(() => {
    if (playOnMount) {
      animate();
    } else if (sectionRef.current) {
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top 80%", // when top of section hits 80% of viewport
        onEnter: () => animate(),
        markers: false, // set true for debugging
      });
    }
  }, [duration, delay, playOnMount]);

  return (
    <div ref={sectionRef} className="relative overflow-hidden w-full h-full">
      <div ref={rightRef} className="block w-full h-full">
        {children}
      </div>
    </div>
  );
};

export default SlideRight;
