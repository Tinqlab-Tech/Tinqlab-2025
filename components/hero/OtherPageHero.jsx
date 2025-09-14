"use client";
import Link from "next/link";
import { MainButton } from "../button/MainButton";
import HeaderOne from "../typography/HeaderOne";
import MainText from "../typography/MainText";
import ImageWrapper from "../wrappers/ImageWrapper";
import { usePathname } from "next/navigation";
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
}) {
  const pathname = usePathname();

  const services = [
    { path: "/services/software-engineering", title: "Software Engineering" },
    { path: "/services/product-design", title: "Product design" },
    { path: "/services/consulting", title: "Consultation for Enterprises" },
  ];
  return (
    <div
      className={`${bgImage ? bgImage : "bg-white"} bg-cover bg-no-repeat bg-center`}
    >
      <section className={`tracking-normal md:p-[6vw] flex flex-col md:gap-8 `}>
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-4">
          <div className="flex flex-col items-start justify-center gap-8 px-[4vw] py-[8vh] order-2 md:order-1">
            <HeaderOne
              text={title}
              color={`${bgImage === null ? "text-black" : "text-white"} `}
              size={
                "text-[38px] leading-[45px] md:text-[55px] md:leading-[70px]"
              }
            />
            <MainText
              text={subtitle}
              size={"text-[20px] leading-[34px] font-light "}
              color={`${bgImage === null ? "text-[#12152E] opacity-50" : "text-white"} `}
            />
            <Link href={btnLink}>
              <MainButton text={btnText} />
            </Link>
          </div>
          <div className="order-1 md:order-2">
            {" "}
            <ImageWrapper
              src={image}
              width={120}
              height={60}
              alt={"Tinqlab image"}
              style={"h-full object-contain w-full"}
            />
          </div>
        </div>
        {hasNav === true && (
          <div className="grid grid-cols-3 gap-4  justify-center items-center  p-[10px]">
            {services.map((item, index) => {
              const isActive = pathname === item.path;
              return (
                <Link href={item.path} key={index} className="h-full">
                  <div
                    className={`flex justify-center  group p-[10px] bg-mainGrey items-center rounded-t-[4px] border-t-[10px] cursor-pointer
                     ${isActive ? "border-mainBlack" : "border-mainBlack/50"}  hover:border-primary`}
                  >
                    <MainText
                      text={item.title}
                      size="text-[10px] md:text-[18px]"
                      color={`w-full cursor-pointer ${
                        isActive
                          ? "text-mainBlack"
                          : "text-mainBlack opacity-50 hover:opacity-100 hover:text-primary"
                      } ${isActive ? "hover:text-primary" : ""}`}
                      centerText={true}
                    />
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </section>
    </div>
  );
}
