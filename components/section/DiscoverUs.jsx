"use client";

import React, { useRef } from "react";
import Slider from "react-slick";
import { MainButton } from "../button/MainButton";
import MainText from "../typography/MainText";
import { FaArrowLeftLong } from "react-icons/fa6";
import HeaderTwo from "../typography/HeaderTwo";
import { IoIosAdd } from "react-icons/io";

const DiscoverUs = () => {
  const sliderRef = useRef(null);

  const next = () => sliderRef.current?.slickNext();
  const prev = () => sliderRef.current?.slickPrev();

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const discoverUs = [
    {
      title: "Discover how we can assist in achieving your goals!",
      subtitle:
        "Answer a few questions to aid us match our expertise and solutions to your industry.",
      btnNav: "More",
      items: [
        { btnText: "Fintech" },
        { btnText: "Edtech" },
        { btnText: "Retail" },
        { btnText: "Technical Support" },
      ],
    },
    {
      title: "Discover how we can assist in achieving your goals!",
      subtitle:
        "Answer a few questions to aid us match our expertise and solutions to your industry.",
      btnNav: "Back",
      items: [
        { btnText: "Product design" },
        { btnText: "Consulting" },
        { btnText: "Out staffing" },
        { btnText: "Software Engineering Services" },
      ],
    },
  ];

  return (
    <section>
      <Slider ref={sliderRef} {...settings}>
        {discoverUs.map((item, index) => (
          <div key={index}>
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Left image */}
              <div className="w-full hidden lg:block bg-features1 bg-contain bg-left-bottom bg-no-repeat min-h-[40vh]" />

              {/* Right content */}
              <div className="flex flex-col gap-4 p-4 md:p-10">
                <HeaderTwo text={item.title} />

                <MainText text={item.subtitle} color="opacity-50" />

                <MainText text="Choose your industry" />

                <div className="flex flex-wrap items-center gap-4 md:gap-8">
                  {item.items.map((btn, i) => (
                    <MainButton
                      key={i}
                      text={btn.btnText}
                      bgcolor={"bg-darkestBlue"}
                    />
                  ))}

                  {/* Nav button */}
                  <button
                    onClick={() => (item.btnNav === "More" ? next() : prev())}
                    className="flex items-center justify-center gap-3 cursor-pointer font-normal rounded-full shadow-lg font-lato border-[1px] border-primary 
                  text-primary py-[12px] px-[24px] text-[16px] tracking-tight flex-row-reverse"
                  >
                    <span>{item.btnNav}</span>
                    {item.btnNav === "More" ? (
                      <IoIosAdd size={20} />
                    ) : (
                      <FaArrowLeftLong size={18} />
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default DiscoverUs;
