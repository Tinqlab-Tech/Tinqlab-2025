"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const ComponentAnimation = ({
  children,
  slideUp,
  slideDown,
  slideLeft,
  slideRight,
  duration = 1.2,
  delay = 0, // 👈 new delay prop
  playOnMount = true,
}) => {
  const upRef = useRef(null);
  const downRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const sectionRef = useRef(null);

  const animate = () => {
    if (upRef.current) {
      gsap.fromTo(
        upRef.current,
        { opacity: 0, y: "100%" },
        {
          y: "0%",
          duration,
          opacity: 1,
          delay,
          ease: "power2.inOut",
        }
      );
    }

    if (downRef.current) {
      gsap.fromTo(
        downRef.current,
        { opacity: 0, y: "-100%" },
        {
          y: "0%",
          duration,
          opacity: 1,
          delay,
          ease: "power2.inOut",
        }
      );
    }

    if (leftRef.current) {
      gsap.fromTo(
        leftRef.current,
        { opacity: 0, x: "100%" },
        {
          x: "0%",
          duration,
          opacity: 1,
          delay,
          ease: "power2.inOut",
        }
      );
    }

    if (rightRef.current) {
      gsap.fromTo(
        rightRef.current,
        { opacity: 0, x: "-100%" },
        {
          x: "0%",
          duration,
          opacity: 1,
          delay,
          ease: "power2.inOut",
        }
      );
    }
  };

  useEffect(() => {
    if (playOnMount) {
      animate();
    } else {
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top 80%",
        onEnter: () => animate(),
      });
    }
  }, [duration, delay, playOnMount]);

  return (
    <div ref={sectionRef} className="relative overflow-hidden w-full h-full">
      {slideUp && (
        <div ref={upRef} className="block w-full h-full">
          {children}
        </div>
      )}
      {slideDown && (
        <div ref={downRef} className="block w-full h-full">
          {children}
        </div>
      )}
      {slideLeft && (
        <div ref={leftRef} className="block w-full h-full">
          {children}
        </div>
      )}
      {slideRight && (
        <div ref={rightRef} className="block w-full h-full">
          {children}
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
