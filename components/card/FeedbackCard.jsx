import React from "react";
import MainText from "../typography/MainText";
import ImageWrapper from "../wrappers/ImageWrapper";

export default function FeedbackCard({
  bgColor,
  title,
  subTitle,
  hasIcon,
  icon,
  useIndex,
  index,
  description,
}) {
  return (
    <div
      className={`${bgColor ? bgColor : "bg-white"} h-full p-[20px] md:py-[40px] flex flex-col gap-8 justify-between rounded-[10px] shadow-custom-primary`}
    >
      <div className="flex items-center justify-start  gap-4 ">
        <div className="bg-features1 bg-contain w-12 h-12" />
        <MainText
          text={description}
          color={`${bgColor === null ? "text-[#12152E] opacity-50" : "text-white"}`}
        />
      </div>
      <div className="flex items-center justify-end gap-4 px-6 ">
        {hasIcon === true && (
          <ImageWrapper
            alt={`Tinqlab Services ${title}`}
            src={icon}
            width={40}
            height={40}
            style={
              "bg-cover bg-contain w-24 h-24 border-[2px] border-mainBlack border-opacity-20 rounded-full"
            }
          />
        )}
        <div className="flex flex-col gap-4">
          <MainText
            text={title}
            color={`${bgColor === null ? "text-[#12152E] opacity-50" : "text-white"}`}
          />

          <MainText
            text={subTitle}
            color={`${bgColor === null ? "text-[#12152E] opacity-50" : "text-white"}`}
          />
        </div>
      </div>
    </div>
  );
}
