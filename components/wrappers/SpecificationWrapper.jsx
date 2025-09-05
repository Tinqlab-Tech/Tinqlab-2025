"use client";

import { useState } from "react";
import MainText from "../typography/MainText";
import ImageWrapper from "./../wrappers/ImageWrapper";
import show2 from "@/public/images/show2.svg";
import HeaderOne from "../typography/HeaderOne";

export const SpecificationWrapper = ({
  title,
  icon,
  subTitle,
  items,
  useIndexes,
  indexes,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggledrawer = () => setIsOpen(!isOpen);

  return (
    <>
      <div className="w-full bg-white text-mainBlack px-[10px] py-[10px] md:px-[24px] md:py-[10px] rounded-[10px] lg:rounded-[40px] shadow-custom-primary dark:bg-mainGrey dark:text-white">
        <button
          onClick={toggledrawer}
          className="flex justify-between w-full items-center p-2 hover:cursor-pointer"
        >
          <HeaderOne centerText={false} text={title} bold={true} />
          <ImageWrapper
            src={icon || show2}
            alt={`Tinqlab ${title} services`}
            height={30}
            width={30}
            className={`transition-transform duration-500 ${
              isOpen ? "rotate-180" : "rotate-0"
            }`}
          />
        </button>

        {/* Smooth expand/collapse */}
        <div
          className={`overflow-hidden transition-[max-height] duration-700 ease-in-out ${
            isOpen ? "max-h-[1000vh] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex flex-col gap-8 p-4">
            {subTitle && (
              <article className="list-inside list-disc break-words px-2">
                <MainText
                  text={subTitle}
                  color="text-[#12152E] opacity-50"
                  size="text-[16px] leading-[24px]"
                />
              </article>
            )}
            {items.map((item, index) => (
              <li
                key={index}
                className="block space-y-4 text-[18px] leading-[28px] text-[#12152E]"
              >
                <div className="flex items-center gap-4">
                  {useIndexes && <span>{index + 1 + `${"."}`}</span>}
                  {item.title}
                </div>
                <article className="list-inside list-disc break-words px-2 pb-4 opacity-50">
                  {item.subTitle}
                </article>
              </li>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
