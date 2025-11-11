'use client';

import Link from 'next/link';
import { MainButton } from '../button/MainButton';
import HeaderOne from '../typography/HeaderOne';
import MainText from '../typography/MainText';
import Slider from 'react-slick';
import Header from '../partials/Header';
import AdsSlider from '../section/AdsSlider';
import SlideUp from '@/animation/SlideUp';
import SlideRight from '@/animation/SlideRight';
import SlideDown from '@/animation/SlideDown';
import SlideLeft from '@/animation/SlideLeft';

export default function HomepageHero() {
  const homeContent = [
    {
      title: 'Software Engineering',
      subtitle:
        'Build scalable, secure, and high-performance applications that power digital transformation across industries.',
      btnLink: '/services/software-engineering',
      btnText: 'Discover more',
      herobg: 'bg-homeHerobg1',
    },
    {
      title: 'Product Design',
      subtitle:
        'We design cutting-edge products that go above and beyond your expectations while keeping UX in mind.',
      btnLink: '/services/product-design',
      btnText: 'Discover more',
      herobg: 'bg-homeHerobg2',
    },
    {
      title: 'Consulting',
      subtitle:
        'Outcome-driven consulting services to grow your company and improve process efficiency.',
      btnLink: '/services/consulting',
      btnText: 'Discover more',
      herobg: 'bg-homeHerobg3',
    },
  ];

  const services = [
    { title: 'Software Engineering' },
    { title: 'Product design' },
    { title: 'Consulting' },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="h-screen w-full overflow-hidden">
      <Slider {...settings}>
        {homeContent.map((item, index) => (
          <div
            key={index}
            className={`${item.herobg} bg-cover bg-center bg-no-repeat`}
          >
            <div className="flex h-screen flex-col justify-between">
              <Header />
              <div className="overflow-hidden px-[4vw] py-[8vh] md:p-[6vw]">
                <SlideRight>
                  <section className="flex flex-1 flex-col items-start justify-center gap-8 tracking-normal">
                    <HeaderOne
                      text={item.title}
                      color="text-white"
                      size="text-[60px] leading-[70px]"
                    />
                    <div>
                      <MainText
                        text={item.subtitle}
                        size="text-[22px] leading-[38px] md:w-1/2"
                        color="text-white"
                      />
                    </div>
                    <Link href={item.btnLink}>
                      <MainButton text={item.btnText} lessPadding={true} />
                    </Link>
                  </section>
                </SlideRight>
              </div>
              <div className="grid grid-cols-3 divide-x divide-primary border border-[#2B305E]">
                {services.map((item, index) => (
                  <div key={index} className="w-full py-2">
                    <MainText
                      text={item.title}
                      size="text-[10px] md:text-[18px]"
                      color="text-white w-full"
                      centerText
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
