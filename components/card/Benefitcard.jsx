import React from "react";
import MainText from "../typography/MainText";
import { GoDotFill } from "react-icons/go";

export default function BenefitCard({
  bgColor,
  title,
  items,
  useIndex,
  index,
  hasBulletin,
}) {
  return (
    <div
      className={`${bgColor ? bgColor : "bg-white"} shadow-custom-primary  h-full  p-[30px] md:p-[40px] flex flex-col gap-4  rounded-[10px]`}
    >
      <div
        className={`${bgColor === null ? "text-black" : "text-white"} flex gap-4 items-center text-[18px] lg:text-[24px] font-semibold leading-[24px] lg:leading-[32px]`}
      >
        {" "}
        {useIndex === true && (
          <span
            className={`bg-violetBlue h-12 w-12 rounded-full  flex justify-center items-center`}
          >
            {index}
          </span>
        )}
        {title}
      </div>
      {items.map((item, index) => (
        <div
          key={index}
          className={`${bgColor === null ? "text-[#12152E] " : "text-white"} flex  items-start gap-2 text-[18px] leading-[28px]`}
        >
          {hasBulletin === true && (
            <span className="py-1.5">
              {" "}
              <GoDotFill
                size={15}
                className={`${bgColor === null ? "text-primary " : "text-white"} `}
              />
            </span>
          )}

          <span className="opacity-50"> {item.subtitle}</span>
        </div>
      ))}
    </div>
  );
}
