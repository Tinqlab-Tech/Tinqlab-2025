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

  hasbtnText2,
  btnText2,
}) {
  return (
    <div
      className={`${background ? background : "bg-mainWhite"} h-full  p-[20px] md:py-[40px] grid lg:grid-cols-2 justify-center items-center  gap-8 rounded-[10px] shadow-custom-primary `}
    >
      <div className="flex flex-col gap-5 justify-center ">
        {/* title text */}
        <div
          className={`${background === null ? "text-mainBlack" : "text-mainWhite"} flex text-[16px] lg:text-[22px] font-semibold leading-[24px] lg:leading-[32px]  gap-4 w-4/5`}
        >
          {useIndex === true && (
            <span className="h-12 w-12 border-[2px] rounded-full border-[#5A67D8] border-opacity-20 flex justify-center items-center">
              {index}
            </span>
          )}
          {title}
        </div>
        <span>
          {/* main text */}
          {subtitle != "" && (
            <MainText
              text={subtitle}
              color={`${background === null ? "text-mainBlack/50" : "text-mainWhite"} `}
            />
          )}{" "}
          {/* read More buttton */}
          {hasbtnText2 === true && (
            <Link href={btnLink}>
              <MainText text={btnText2} color={"text-primary"} />
            </Link>
          )}
        </span>
        {/* if btntext2 is true hide btnText if not true show btn text */}
        {btnText2 ? (
          <div className="hidden">
            {" "}
            <Link href={btnLink}>
              <MainButton text={btnText} />{" "}
            </Link>
          </div>
        ) : (
          <Link href={btnLink}>
            <MainButton text={btnText} />
          </Link>
        )}{" "}
      </div>
      <div>
        <ImageWrapper
          alt={`Tinqlab Industrial Services ${title}`}
          src={bgImg}
          width={500}
          height={500}
          style={" bg-no-repeat bg-contain hidden lg:block"}
        />
      </div>
    </div>
  );
}
