import React from "react";
import ImageWrapper from "../wrappers/ImageWrapper";

export default function TechStack({ stack }) {
  return (
    <div className="bg-mainWhite p-4 rounded-[10px] w-full flex items-center justify-center shadow-custom-primary h-full">
      <ImageWrapper
        alt={"Tinqlap Technologies"}
        src={stack}
        width={100}
        height={100}
        style={`cursor-pointer  bg-contain bg-no-repeat `}
      />
    </div>
  );
}
