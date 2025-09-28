"use client";

import Link from "next/link";
import { MainButton } from "../button/MainButton";
import HeaderOne from "../typography/HeaderOne";
import MainText from "../typography/MainText";
import Slider from "react-slick";

export default function HomepageHero() {
  const homeContent = [
    {
      title: "Software Engineering",
      subtitle:
        "Build scalable, secure, and high-performance applications that power digital transformation across industries.",
      btnText: "Discover more",
      herobg: "bg-homeHerobg1",
    },
    {
      title: "Product Design",
      subtitle:
        "We design cutting-edge products that go above and beyond your expectations while keeping UX in mind.",
      btnText: "Discover more",
      herobg: "bg-homeHerobg2",
    },
    {
      title: "Consulting",
      subtitle:
        "Outcome-driven consulting services to grow your company and improve process efficiency.",
      btnText: "Discover more",
      herobg: "bg-homeHerobg3",
    },
  ];

  const services = [
    { path: "/services/software-engineering", title: "Software Engineering" },
    { path: "/services/product-design", title: "Product design" },
    { path: "/services/consulting", title: "Consulting" },
  ];
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1, // always one "full" slide
    slidesToScroll: 1,
  };

  return (
    <div className="min-h-[80vh]  overflow-hidden">
      <Slider {...settings}>
        {homeContent.map((item, index) => (
          <div
            key={index}
            className={`${item.herobg} bg-cover  bg-center  flex flex-col justify-between `}
          >
            {/* overlay */}
            <div className="bg-black/80 w-full h-full flex flex-col justify-between">
              <section className="tracking-normal md:p-[6vw] min-h-[80vh] flex flex-col items-start justify-center gap-8 px-[4vw] py-[8vh] flex-1">
                <HeaderOne
                  text={item.title}
                  color="text-white"
                  size="text-[60px] leading-[70px]"
                />
                <MainText
                  text={item.subtitle}
                  size="text-[22px] leading-[38px] md:w-1/2"
                  color="text-white "
                />
                <MainButton text={item.btnText} />
              </section>

              {/* bottom nav links */}
              <div className="grid grid-cols-3 gap-4 divide-x border border-[#2B305E] p-2">
                {services.map((item, index) => {
                  return (
                    <Link href={item.path} key={index}>
                      <MainText
                        text={item.title}
                        size="text-[10px] md:text-[18px]"
                        color={
                          "text-white  w-full cursor-pointer hover:text-primary"
                        }
                        centerText
                      />
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
