"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const ComponentAnimate = ({
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

  // slide up
  useEffect(() => {
    if (upRef.current) {
      gsap.fromTo(
        upRef.current,
        { y: 0 },
        {
          y: "-100%",
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
        { y: 0 },
        {
          y: "100%",
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

  // slide left
  useEffect(() => {
    if (leftRef.current) {
      gsap.fromTo(
        leftRef.current,
        { x: 0 },
        {
          x: "-100%",
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
        { x: 0 },
        {
          x: "100%",
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

/*Note: animation ,dirrection and time

1. one animation differnt timing  sequence
2. one animation different dirrection  same timing
*/

/* How to use for individual component */

// import { Component } from "./Component";

// export default function Example() {
//   return (
//     <div className="flex gap-6">
//       <Component slideleft duration={2}>
//         <div className="p-6 bg-blue-500 text-white rounded-lg">Left</div>
//       </Component>

//       <Component slideright duration={4}>
//         <div className="p-6 bg-green-500 text-white rounded-lg">Right</div>
//       </Component>

//       <Component slideup duration={3}>
//         <div className="p-6 bg-red-500 text-white rounded-lg">Up</div>
//       </Component>

//       <Component slidedown duration={5}>
//         <div className="p-6 bg-yellow-500 text-white rounded-lg">Down</div>
//       </Component>
//     </div>
//   );
// }

/* How to use for index */

// import { Component } from "./Component";

// const items = ["One", "Two", "Three", "Four"];

// export default function Example() {
//   return (
//     <div className="flex gap-6">
//       {items.map((item, index) => (
//         <Component
//           key={index}
//           slideleft={index === 0}
//           slideright={index === 1}
//           slideup={index === 2}
//           slidedown={index === 3}
//           duration={3 + index} // make each slide slightly different
//         >
//           <div className="p-6 bg-blue-500 text-white rounded-lg shadow-lg">
//             {item}
//           </div>
//         </Component>
//       ))}
//     </div>
//   );
// }
