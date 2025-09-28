"use client";

import React, { useRef } from "react";
import MainText from "../typography/MainText";
import ImageWrapper from "../wrappers/ImageWrapper";
import feedback1 from "@/public/images/feedback1.png";
import feedback2 from "@/public/images/feedback2.png";
import Slider from "react-slick";
import HeaderTwo from "../typography/HeaderTwo";
import { ImArrowLeft, ImArrowRight } from "react-icons/im";

export default function FeedbackCard({ title }) {
  const clientFeedback = [
    {
      description:
        "“TinqLab has helped us get to market faster, allowing us to fill products gaps easily.”",
      icon: feedback1,
      title: "Gavin Aaron",
      subTitle: "Lead Software Developer, Hungrit Ltd",
    },
    {
      description:
        "“They were able to handle everything we threw at them fairly easily.”",
      icon: feedback2,
      title: "Dimitry Konoval",
      subTitle: "Founder & CEO, BlackBunny Capital",
    },
    {
      description: "“Great support and smooth collaboration overall.”",
      icon: feedback1,
      title: "Jane Doe",
      subTitle: "CTO, Example Inc",
    },
  ];

  const sliderRef = useRef(null);

  const next = () => sliderRef.current?.slickNext();
  const prev = () => sliderRef.current?.slickPrev();

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2, // desktop default
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 768, // below md
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="flex flex-col gap-8 overflow-hidden">
      {/* Header + Controls */}
      <div className="flex justify-between md:items-center gap-4 md:gap-8">
        <HeaderTwo text={title} />
        <div className="flex gap-4 md:gap-8">
          {/* Prev Button */}
          <button
            onClick={prev}
            className="flex items-center justify-center p-4 shadow-custom-primary group hover:bg-primary h-12 w-12 rounded-full transition-colors duration-300"
          >
            <ImArrowLeft
              size={20}
              className="text-primary group-hover:text-white transition-colors duration-300"
            />
          </button>

          {/* Next Button */}
          <button
            onClick={next}
            className="flex items-center justify-center p-4 shadow-custom-primary group hover:bg-primary h-12 w-12 rounded-full transition-colors duration-300"
          >
            <ImArrowRight
              size={20}
              className="text-primary group-hover:text-white transition-colors duration-300"
            />
          </button>
        </div>
      </div>

      {/* Slider */}
      <div>
        <Slider ref={sliderRef} {...settings}>
          {clientFeedback.map((item, index) => (
            <div key={index} className="p-4 gap-8 h-full flex ">
              {" "}
              {/* flex + equal height */}
              <div className="flex flex-col justify-between min-w-[40vh] min-h-[40vh] p-6 gap-4 md:gap-8 rounded-[10px]  bg-white shadow-custom-primary">
                {/* Feedback text */}
                <div className="flex items-start gap-4 ">
                  <div className="bg-quote bg-no-repeat bg-contain w-12 h-12" />
                  <MainText text={item.description} color="opacity-70" />
                </div>

                {/* User info */}
                <div className="flex items-center justify-end gap-4 md:gap-8">
                  <ImageWrapper
                    alt="Tinqlab Services"
                    src={item.icon}
                    width={40}
                    height={40}
                    style="bg-cover w-20 h-20 rounded-full shadow-custom-primary"
                  />
                  <div className="flex flex-col gap-1 px-4">
                    <MainText text={item.title} />
                    <MainText
                      text={item.subTitle}
                      color="opacity-50"
                      size="text-sm"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
