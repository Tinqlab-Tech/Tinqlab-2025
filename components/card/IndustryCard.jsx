import React from "react";
import MainText from "../typography/MainText";
import ImageWrapper from "../wrappers/ImageWrapper";
import { MainButton } from "../button/MainButton";
import Link from "next/link";
import Image from "next/image";

export default function IndustryCard({
  background,
  title,
  subtitle,
  bgImg,
  useIndex,
  index,
  btnText,
  btnLink,
  hasbtnText,
}) {
  return (
    <div
      className={`bg-darkBlue  bg-cover bg-no-repeat bg-center h-full p-[30px] md:p-[40px] flex justify-center items-center gap-8 rounded-[10px] shadow-custom-primary`}
    >
      <div className="flex flex-col gap-4 justify-center w-full  ">
        <div
          className={` text-mainWhite flex items-center text-[18px] lg:text-[24px] font-semibold font-lato  leading-[24px] lg:leading-[32px] gap-4 `}
        >
          {useIndex && (
            <span className="h-12 w-12 border-[2px] rounded-full border-[#5A67D8] border-opacity-20 flex justify-center items-center">
              {index}
            </span>
          )}
          {title}
        </div>

        {subtitle && <MainText text={subtitle} color={"text-mainWhite"} />}

        {hasbtnText && (
          <Link href={btnLink}>
            <MainButton text={btnText} lessPadding={true} />
          </Link>
        )}
      </div>

      <Image
        alt={`Tinqlab Industrial Services ${title}`}
        src={bgImg}
        width={300}
        height={300}
        className=" bg-no-repeat bg-contain bg-center hidden lg:block "
      />
    </div>
  );
}
