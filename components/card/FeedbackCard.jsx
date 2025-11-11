'use client';

import React, { useRef } from 'react';
import MainText from '../typography/MainText';
import ImageWrapper from '../wrappers/ImageWrapper';
import feedback1 from '@/public/images/feedback1.png';
import feedback2 from '@/public/images/feedback2.png';
import Slider from 'react-slick';
import HeaderTwo from '../typography/HeaderTwo';
import { ImArrowLeft, ImArrowRight } from 'react-icons/im';
import SlideRight from '@/animation/SlideRight';
import SlideUp from '@/animation/SlideUp';
import SlideLeft from '@/animation/SlideLeft';
import SlideDown from '@/animation/SlideDown';

function Card({ description, subTitle, title, icon }) {
  return (
    <div className="flex h-full flex-col justify-between gap-8 rounded-[10px] p-[20px] shadow-custom-primary md:p-[40px]">
      <div className="flex items-start gap-4 md:gap-8">
        <div className="h-12 w-12 bg-quote bg-contain bg-no-repeat" />
        <MainText text={description} color="opacity-70" textLeft={true} />
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
        '“TinqLab has helped us get to market faster, allowing us to fill products gaps easily.”',
      icon: feedback1,
      title: 'Gavin Aaron',
      subTitle: 'Lead Software Developer, Hungrit Ltd',
    },
    {
      description:
        '“They were able to handle everything we threw at them fairly easily.”',
      icon: feedback2,
      title: 'Dimitry Konoval',
      subTitle: 'Founder & CEO, BlackBunny Capital',
    },
    {
      description:
        '“TinqLab has helped us get to market faster, allowing us to fill products gaps easily.”',
      icon: feedback1,
      title: 'Gavin Aaron',
      subTitle: 'Lead Software Developer, Hungrit Ltd',
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
        breakpoint: 1024, // below lg
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="flex flex-col gap-8">
      <div className="flex h-full justify-between gap-4 md:items-center md:gap-8">
        {' '}
        <HeaderTwo text={title} />
        <div className="flex gap-4">
          <button
            onClick={prev}
            className="group flex h-12 w-12 items-center justify-center rounded-full bg-mainGrey p-4 transition-colors duration-300 hover:bg-primary"
          >
            <ImArrowLeft
              size={20}
              className="text-mainBlack/50 transition-colors duration-300 group-hover:text-white"
            />
          </button>
          <button
            onClick={next}
            className="group flex h-12 w-12 items-center justify-center rounded-full bg-mainGrey p-4 transition-colors duration-300 hover:bg-primary"
          >
            <ImArrowRight
              size={20}
              className="text-mainBlack/50 transition-colors duration-300 group-hover:text-white"
            />
          </button>
        </div>
      </div>

      <Slider ref={sliderRef} {...settings}>
        {clientFeedback.map((item, index) => (
          <div key={index}>
            {/* flex + equal height */}
            <SlideDown delay={index * 0.2}>
              {' '}
              <div className="p-[2vh] md:p-[4vh]">
                <Card
                  description={item.description}
                  icon={item.icon}
                  title={item.title}
                  subTitle={item.subTitle}
                />
              </div>
            </SlideDown>
          </div>
        ))}
      </Slider>
    </section>
  );
}
