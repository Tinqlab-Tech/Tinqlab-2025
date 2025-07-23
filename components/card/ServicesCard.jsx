import React from "react";
import MainText from "../typography/MainText";
import ImageWrapper from "../wrappers/ImageWrapper";
import servicesicon from "@/public/images/servicesicon.png";

export default function ServicesCard({
  icon,
  title,
  subtitle,
  isSingleService,
}) {
  return (
    <div
      className={`${
        isSingleService === true
          ? "border-none border-white"
          : "border-[#F2F2F2] rounded-[5px] border-[1px]"
      } text-[#1D1F13] h-full  p-[20px] flex flex-col gap-8 justify-between shadow-custom-primary`}
    >
      <ImageWrapper
        alt={"Tinqlab Services"}
        src={isSingleService === true ? icon : servicesicon}
        width={40}
        height={40}
        style={""}
      />
      <div className="text-[18px] lg:text-[24px] font-semibold leading-[24px] lg:leading-[32px]">
        {" "}
        {title}
      </div>

      <MainText text={subtitle} />
    </div>
  );
}
