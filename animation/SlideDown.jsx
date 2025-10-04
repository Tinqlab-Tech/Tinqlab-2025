"use client";

import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SlideDown = ({
  overflow,
  children,
  duration = 1.2,
  delay = 0,
  playOnMount,
}) => {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);

  const animate = () => {
    if (containerRef.current) {
      gsap.fromTo(
        containerRef.current,
        { opacity: 0, y: "-100%" },
        { opacity: 1, y: "0%", duration, delay, ease: "power2.inOut" }
      );
    }
  };

  useEffect(() => {
    if (playOnMount) {
      animate();
    } else if (sectionRef.current) {
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top 80%",
        onEnter: () => animate(),
        markers: false,
      });
    }
  }, [duration, delay, playOnMount]);

  return (
    <div
      ref={sectionRef}
      className={`${overflow === null ? "" : "overflow-hidden"} w-full h-full`}
    >
      {" "}
      <div ref={containerRef} className="w-full h-full">
        {children}
      </div>
    </div>
  );
};

export default SlideDown;
