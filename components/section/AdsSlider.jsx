import React from "react";
import ImageWrapper from "../wrappers/ImageWrapper";
import adsImg1 from "@/public/images/adsImg1.png";
import adsImg2 from "@/public/images/adsImg2.png";
import adsImg3 from "@/public/images/adsImg3.png";
import adsImg4 from "@/public/images/adsImg4.png";
import adsImg5 from "@/public/images/adsImg5.png";
import adsImg6 from "@/public/images/adsImg6.png";
import { Slide } from "@/animation/Slide";

const Ads = () => {
  const partners = [adsImg1, adsImg2, adsImg3, adsImg4, adsImg5, adsImg6];

  return (
    <div className="flex justify-start gap-4 md:gap-8">
      {partners.map((item, index) => (
        <div key={index} className=" flex items-center justify-center ">
          <ImageWrapper
            alt="Tinqlap Technologies"
            src={item}
            width={150}
            height={150}
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
      <Slide>
        <Ads />
      </Slide>

      <Slide>
        <Ads />
      </Slide>
    </div>
  );
};

export default AdsSlider;
