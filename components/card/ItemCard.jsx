import React from "react";
import MainText from "../typography/MainText";
import ImageWrapper from "../wrappers/ImageWrapper";

export default function ItemCard({ bgColor, title, icon }) {
  return (
    <div
      className={`${bgColor ? bgColor : "bg-white"}    h-full  p-[20px] md:p-[30px]  flex gap-4 md:gap-8 items-center rounded-[10px] shadow-custom-primary`}
    >
      <ImageWrapper
        alt={`Tinqlab Services ${title}`}
        src={icon}
        width={40}
        height={40}
        style={""}
      />
      <h1 className="text-[18px] lg:text-[24px] leading-[24px] lg:leading-[32px] font-semibold font-lato text-darkestBlue ">
        {title}
      </h1>
    </div>
  );
}
