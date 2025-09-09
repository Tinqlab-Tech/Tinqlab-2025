import React from "react";
import ImageWrapper from "../wrappers/ImageWrapper";
import features1 from "@/public/images/features1.png";

const Ads = () => {
  const partners = [
    features1,
    features1,
    features1,
    features1,
    features1,
    features1,
    features1,
    features1,
    features1,
    features1,
    features1,
    features1,
  ];

  return (
    <div className="flex justify-start ">
      {partners.map((item, index) => (
        <div key={index} className=" flex items-center justify-center ">
          <ImageWrapper
            alt="Tinqlap Technologies"
            src={item}
            width={100}
            height={100}
            style="object-cover"
          />
        </div>
      ))}
    </div>
  );
};

const AdsSlider = () => {
  return (
    <div className="flex flex-col gap-4">
      <Ads />
      <Ads />
    </div>
  );
};

export default AdsSlider;
