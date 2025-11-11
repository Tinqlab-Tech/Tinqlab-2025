'use client';

import React, { useRef } from 'react';
import Slider from 'react-slick';
import { MainButton } from '../button/MainButton';
import MainText from '../typography/MainText';
import { FaArrowLeftLong } from 'react-icons/fa6';
import HeaderTwo from '../typography/HeaderTwo';
import { IoIosAdd } from 'react-icons/io';
import ImageWrapper from '../wrappers/ImageWrapper';
import SlideRight from '@/animation/SlideRight';
import SlideLeft from '@/animation/SlideLeft';
import features1 from '@/public/images/featuresbg/features1.png';

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
      title: 'Discover how we can assist in achieving your goals!',
      subtitle:
        'Answer a few questions to aid us match our expertise and solutions to your industry.',
      btnNav: 'More',
      items: [
        { btnText: 'Fintech' },
        { btnText: 'Edtech' },
        { btnText: 'Retail' },
        { btnText: 'Technical Support' },
      ],
    },
    {
      title: 'Discover how we can assist in achieving your goals!',
      subtitle:
        'Answer a few questions to aid us match our expertise and solutions to your industry.',
      btnNav: 'Back',
      items: [
        { btnText: 'Product design' },
        { btnText: 'Consulting' },
        { btnText: 'Out staffing' },
        { btnText: 'Software Engineering Services' },
      ],
    },
  ];

  return (
    <section>
      <Slider ref={sliderRef} {...settings}>
        {discoverUs.map((item, index) => (
          <div key={index}>
            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Left image */}{' '}
              <div className="flex h-full justify-center overflow-hidden">
                <ImageWrapper
                  src={features1}
                  alt={'about Tinqlab'}
                  width={500}
                  height={300}
                  style={' bg-cover bg-center bg-no-repeat'}
                />
              </div>
              {/* Right content */}
              <SlideRight>
                <div className="flex flex-col gap-4 p-[20px] md:gap-8">
                  <HeaderTwo text={item.title} />

                  <MainText text={item.subtitle} color="opacity-50" />

                  <MainText text="Choose your industry" />

                  <div className="flex flex-wrap items-center gap-4 md:gap-8">
                    {item.items.map((btn, i) => (
                      <div key={i}>
                        <MainButton
                          text={btn.btnText}
                          bgcolor="bg-darkestBlue"
                          morePadding={true}
                        />
                      </div>
                    ))}

                    {/* Nav button */}
                    <button
                      onClick={() => (item.btnNav === 'More' ? next() : prev())}
                      className="font-lato border-lavi font-lato flex cursor-pointer flex-row-reverse items-center justify-center gap-3 rounded-full border-[1px] bg-lavenderBlue px-[50px] py-[12px] font-semibold tracking-tight text-darkestBlue shadow-lg transition-all duration-300 hover:scale-105"
                    >
                      <span>{item.btnNav}</span>
                      {item.btnNav === 'More' ? (
                        <IoIosAdd size={20} />
                      ) : (
                        <FaArrowLeftLong size={18} />
                      )}
                    </button>
                  </div>
                </div>
              </SlideRight>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default DiscoverUs;
