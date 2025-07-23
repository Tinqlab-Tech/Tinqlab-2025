import React from "react";
import MainText from "../typography/MainText";

export default function MoreContentCard({ bgColor, title, items }) {
  return (
    <div
      className={`${bgColor ? bgColor : "bg-white"} shadow-custom-primary  h-full  p-[20px] flex flex-col gap-8 justify-between rounded-[10px]`}
    >
      <div
        className={`${bgColor === null ? "text-black" : "text-white"} text-[18px] lg:text-[24px] font-semibold leading-[24px] lg:leading-[32px]`}
      >
        {" "}
        {title}
      </div>
      {items.map((item, index) => (
        <div
          key={index}
          className={`${bgColor === null ? "text-[#12152E] " : "text-white"} text-[18px] leading-[28px]`}
        >
          <span className="text-primary">{item.title}</span>
          <span className="opacity-50"> {item.subtitle}</span>
        </div>
      ))}
    </div>
  );
}
