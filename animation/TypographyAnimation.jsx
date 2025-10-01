"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const ComponentAnimation = ({
  children,
  slideup,
  slidedown,
  slideleft,
  slideright,
  duration = 3,
}) => {
  const upRef = useRef(null);
  const downRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const sectionRef = useRef(null);

  // slide left
  useEffect(() => {
    if (leftRef.current) {
      gsap.fromTo(
        leftRef.current,
        { clipPath: "inset(0% 100% 0% 0%)" }, // hidden from right
        {
          clipPath: "inset(0% 0% 0% 0%)", // fully visible
          duration,
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none reset",
          },
        }
      );
    }
  }, [duration]);

  // slide right
  useEffect(() => {
    if (rightRef.current) {
      gsap.fromTo(
        rightRef.current,
        { clipPath: "inset(0% 0% 0% 100%)" }, // hidden from left
        {
          clipPath: "inset(0% 0% 0% 0%)",
          duration,
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none reset",
          },
        }
      );
    }
  }, [duration]);

  // slide up
  useEffect(() => {
    if (upRef.current) {
      gsap.fromTo(
        upRef.current,
        { clipPath: "inset(100% 0% 0% 0%)" }, // hidden from bottom
        {
          clipPath: "inset(0% 0% 0% 0%)",
          duration,
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none reset",
          },
        }
      );
    }
  }, [duration]);

  // slide down
  useEffect(() => {
    if (downRef.current) {
      gsap.fromTo(
        downRef.current,
        { clipPath: "inset(0% 0% 100% 0%)" }, // hidden from top
        {
          clipPath: "inset(0% 0% 0% 0%)",
          duration,
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none reset",
          },
        }
      );
    }
  }, [duration]);

  return (
    <div ref={sectionRef} className="overflow-hidden w-full h-full">
      {slideup && (
        <div ref={upRef} className="flex whitespace-nowrap">
          <div>{children}</div>
        </div>
      )}

      {slidedown && (
        <div ref={downRef} className="flex whitespace-nowrap">
          <div>{children}</div>
        </div>
      )}

      {slideleft && (
        <div ref={leftRef} className="flex whitespace-nowrap">
          <div>{children}</div>
        </div>
      )}

      {slideright && (
        <div ref={rightRef} className="flex whitespace-nowrap">
          <div>{children}</div>
        </div>
      )}
    </div>
  );
};
