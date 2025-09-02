import React from "react";
import MainText from "../typography/MainText";
import ImageWrapper from "../wrappers/ImageWrapper";

export default function MainCard({
  bgColor,
  title,
  subtitle,
  hasIcon,
  icon,
  useIndex,
  index,
}) {
  return (
    <div
      className={`${bgColor ? bgColor : "bg-white"}    h-full  p-[20px] md:py-[40px] flex flex-col gap-8 justify-between rounded-[10px] shadow-custom-primary`}
    >
      <div
        className={`${bgColor === null ? "text-black" : "text-white"}  flex items-center justify-start text-[16px] lg:text-[22px] font-semibold leading-[24px] lg:leading-[32px]  gap-4 w-4/5`}
      >
        {hasIcon === true && (
          <ImageWrapper
            alt={`Tinqlab Services ${title}`}
            src={icon}
            width={40}
            height={40}
            style={""}
          />
        )}
        {useIndex === true && (
          <span className="h-12 w-12 border-[2px] rounded-full border-[#5A67D8] border-opacity-20 flex justify-center items-center">
            {index}
          </span>
        )}
        {title}
      </div>

      {subtitle != "" && (
        <MainText
          text={subtitle}
          color={`${bgColor === null ? "text-[#12152E] opacity-50" : "text-white"}`}
        />
      )}
    </div>
  );
}
