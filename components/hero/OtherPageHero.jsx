'use client';
import Link from 'next/link';
import { MainButton } from '../button/MainButton';
import HeaderOne from '../typography/HeaderOne';
import MainText from '../typography/MainText';
import ImageWrapper from '../wrappers/ImageWrapper';
import { usePathname } from 'next/navigation';
import SlideUp from '@/animation/SlideUp';
import SlideRight from '@/animation/SlideRight';
import SlideDown from '@/animation/SlideDown';
import SlideLeft from '@/animation/SlideLeft';
import Header from '../partials/Header';
import OtherHeader from '../partials/OtherHeader';
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from "react-responsive-carousel";

export default function OtherPageHero({
  bgImage,
  title,
  subtitle,
  btnText,
  btnLink,
  image,
  hasNav,
  isHeader,
}) {
  const pathname = usePathname();

  const services = [
    { path: '/services/software-engineering', title: 'Software Engineering' },
    { path: '/services/product-design', title: 'Product design' },
    { path: '/services/consulting', title: 'Consultation for Enterprises' },
  ];
  return (
    <div
      className={`${bgImage ? bgImage : 'bg-mainGrey'} bg-cover bg-center bg-no-repeat`}
    >
      {isHeader ? <Header /> : <OtherHeader />}

      <section className={`flex flex-col tracking-normal md:gap-8 md:p-[6vw]`}>
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-4">
          <SlideRight>
            {' '}
            <div className="order-2 flex flex-col justify-center gap-8 px-[4vw] py-[8vh] md:order-1">
              <HeaderOne
                text={title}
                color={`${bgImage === null ? 'text-black' : 'text-white'} `}
                size={
                  'text-[38px] leading-[45px] md:text-[55px] md:leading-[70px]'
                }
              />
              <MainText
                text={subtitle}
                size={'text-[20px] leading-[34px] font-light '}
                color={`${bgImage === null ? 'text-[#12152E] opacity-50' : 'text-white'} `}
              />
              <Link href={btnLink}>
                <MainButton text={btnText} />
              </Link>
            </div>
          </SlideRight>
          <div className="order-1 md:order-2">
            <SlideLeft delay={0.2}>
              <ImageWrapper
                src={image}
                width={120}
                height={60}
                alt={'Tinqlab image'}
                style={'h-full object-contain w-full'}
              />
            </SlideLeft>
          </div>
        </div>
        {hasNav === true && (
          <div className="grid grid-cols-3 items-center justify-center gap-8">
            {services.map((item, index) => {
              const isActive = pathname === item.path;
              return (
                <div key={index} className="h-full">
                  <Link href={item.path} className="hidden h-full md:block">
                    <div
                      className={`flex h-full cursor-pointer items-center justify-center rounded-t-[4px] border-t-[10px] bg-mainGrey p-2 shadow-custom-primary md:p-[20px] ${isActive ? 'border-primary' : 'border-mainBlack/50'} hover:border-primary`}
                    >
                      <MainText
                        text={item.title}
                        size="text-[10px] md:text-[18px] text-bold "
                        color={`w-full cursor-pointer ${
                          isActive
                            ? 'text-mainBlack'
                            : 'text-mainBlack opacity-50 hover:opacity-100 hover:text-primary'
                        } ${isActive ? 'hover:text-primary' : ''}`}
                        centerText={true}
                        bold={true}
                      />
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        )}
      </section>
    </div>
  );
}
