import React from "react";
import ImageWrapper from "../wrappers/ImageWrapper";
import java from "@/public/images/stacks/java.svg";
import rn from "@/public/images/stacks/rn.png";
import nodejs from "@/public/images/stacks/nodejs.png";
import react from "@/public/images/stacks/react.png";

export default function TechStack() {
  const technologyWeUse = [java, rn, nodejs, react];
  return (
    <div className="grid grid-cols-4 gap-4 md:gap-8 justify-items-center">
      {technologyWeUse.map((item, index) => (
        <div
          key={index}
          className="bg-white p-4 rounded-[10px] w-full flex items-center justify-center"
        >
          <ImageWrapper
            alt={"react"}
            src={item}
            width={100}
            height={100}
            style={`cursor-pointer object-cover `}
          />
        </div>
      ))}
    </div>
  );
}
