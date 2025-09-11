import React from "react";
import MainText from "../typography/MainText";
import ImageWrapper from "../wrappers/ImageWrapper";
import { MainButton } from "../button/MainButton";
import Link from "next/link";

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
      className={`${background ? background : "bg-Industrybg"}  bg-cover bg-no-repeat bg-center h-full p-[20px] md:py-[40px] grid lg:grid-cols-2 justify-center items-center gap-8 rounded-[10px] shadow-custom-primary`}
    >
      <div className="flex flex-col gap-5 justify-center">
        <div
          className={`${
            background === null ? "text-mainBlack" : "text-mainWhite"
          } flex items-center text-[16px] lg:text-[22px] font-semibold leading-[24px] lg:leading-[32px] gap-4 w-4/5`}
        >
          {useIndex && (
            <span className="h-12 w-12 border-[2px] rounded-full border-[#5A67D8] border-opacity-20 flex justify-center items-center">
              {index}
            </span>
          )}
          {title}
        </div>

        {subtitle && (
          <MainText
            text={subtitle}
            color={`${
              background === null ? "text-mainBlack/50" : "text-mainWhite"
            }`}
          />
        )}

        {hasbtnText ? (
          <Link href={btnLink}>
            <MainButton text={btnText} />
          </Link>
        ) : (
          <Link href={btnLink}>
            <MainText text={btnText} color="text-primary" />
          </Link>
        )}
      </div>

      <div>
        <ImageWrapper
          alt={`Tinqlab Industrial Services ${title}`}
          src={bgImg}
          width={300}
          height={300}
          style="bg-no-repeat bg-contain hidden lg:block "
        />
      </div>
    </div>
  );
}
