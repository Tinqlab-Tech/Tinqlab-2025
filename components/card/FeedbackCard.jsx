"use client";

import React, { useRef } from "react";
import MainText from "../typography/MainText";
import ImageWrapper from "../wrappers/ImageWrapper";
import feedback1 from "@/public/images/feedback1.png";
import feedback2 from "@/public/images/feedback2.png";
import Slider from "react-slick";
import HeaderTwo from "../typography/HeaderTwo";
import { ImArrowLeft, ImArrowRight } from "react-icons/im";
import SlideRight from "@/animation/SlideRight";
import SlideUp from "@/animation/SlideUp";
import SlideLeft from "@/animation/SlideLeft";

function Card({ description, subTitle, title, icon }) {
  return (
    <div className="flex flex-col p-6 gap-8 justify-between rounded-[10px] bg-white shadow-custom-primary h-full">
      <div className="flex items-start gap-4 md:gap-8">
        <div className="bg-quote bg-no-repeat bg-contain w-12 h-12" />
        <MainText text={description} color="opacity-70" />
      </div>

      <div className="flex items-center justify-end gap-4 md:gap-8">
        <ImageWrapper
          alt="Tinqlab Services"
          src={icon}
          width={40}
          height={40}
          style="bg-cover w-20 h-20 rounded-full shadow-custom-primary"
        />
        <div className="flex flex-col gap-1 px-4">
          <MainText text={title} />
          <MainText text={subTitle} color="opacity-50" size="text-sm" />
        </div>
      </div>
    </div>
  );
}

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
      description:
        "“TinqLab has helped us get to market faster, allowing us to fill products gaps easily.”",
      icon: feedback1,
      title: "Gavin Aaron",
      subTitle: "Lead Software Developer, Hungrit Ltd",
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
      <div className="flex justify-between md:items-center gap-4 md:gap-8">
        <SlideUp>
          {" "}
          <HeaderTwo text={title} />
        </SlideUp>
        <div className="flex gap-4 md:gap-8">
          <SlideLeft>
            <button
              onClick={prev}
              className="flex items-center justify-center p-4 shadow-custom-primary group hover:bg-primary h-12 w-12 rounded-full transition-colors duration-300"
            >
              <ImArrowLeft
                size={20}
                className="text-primary group-hover:text-white transition-colors duration-300"
              />
            </button>
          </SlideLeft>
          <SlideRight>
            <button
              onClick={next}
              className="flex items-center justify-center p-4 shadow-custom-primary group hover:bg-primary h-12 w-12 rounded-full transition-colors duration-300"
            >
              <ImArrowRight
                size={20}
                className="text-primary group-hover:text-white transition-colors duration-300"
              />
            </button>
          </SlideRight>
        </div>
      </div>

      <Slider ref={sliderRef} {...settings}>
        {clientFeedback.map((item, index) => (
          <div key={index}>
            {/* flex + equal height */}
            <SlideRight delay={index * 0.2}>
              {" "}
              <div className="p-4 h-full">
                <Card
                  description={item.description}
                  icon={item.icon}
                  title={item.title}
                  subTitle={item.subTitle}
                />
              </div>
            </SlideRight>
          </div>
        ))}
      </Slider>
    </section>
  );
}
