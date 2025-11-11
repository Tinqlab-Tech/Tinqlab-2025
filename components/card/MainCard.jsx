import React from 'react';
import MainText from '../typography/MainText';
import ImageWrapper from '../wrappers/ImageWrapper';

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
      className={`${bgColor ? bgColor : 'bg-white'} flex h-full flex-col gap-8 rounded-[10px] p-[30px] shadow-custom-primary md:p-[40px]`}
    >
      <div
        className={`${bgColor === null ? 'text-black' : 'text-white'} font-lato flex w-4/5 items-center justify-start gap-4 text-[18px] font-semibold leading-[24px] text-darkestBlue lg:text-[24px] lg:leading-[32px]`}
      >
        {hasIcon === true && (
          <ImageWrapper
            alt={`Tinqlab Services ${title}`}
            src={icon}
            width={40}
            height={40}
            style={''}
          />
        )}
        {useIndex === true && (
          <span className="flex h-12 w-12 items-center justify-center rounded-full border-[2px] border-[#5A67D8] border-opacity-20">
            {index}
          </span>
        )}
        {title}
      </div>

      {subtitle != '' && (
        <MainText
          text={subtitle}
          color={`${bgColor === null ? 'text-[#12152E] opacity-50' : 'text-white'}`}
        />
      )}
    </div>
  );
}
