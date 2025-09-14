"use client";

import Link from "next/link";
import { MainButton } from "../button/MainButton";
import { OutlineButton } from "../button/OutlineButton";
import { ContactUsModal } from "../forms/ContactUsModal";
import HeaderOne from "../typography/HeaderOne";
import MainText from "../typography/MainText";
import { usePathname } from "next/navigation";
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from "react-responsive-carousel";

export default function HomepageHero({ bgImage, path }) {
  const pathname = usePathname();

  const services = [
    { path: "/services/software-engineering", title: "Software Engineering" },
    { path: "/services/product-design", title: "Product design" },
    { path: "/services/consulting", title: "Consulting" },
  ];

  return (
    <div className="min-h-[80vh]">
      <div className="bg-homeHerobg min-h-[40vh] bg-cover bg-no-repeat  bg-center">
        <div className="bg-darkBlue/50 h-full bg-cover  bg-center">
          <section className={`tracking-normal md:p-[6vw] `}>
            {" "}
            <div className="flex flex-col items-start justify-center gap-8 px-[4vw] lea py-[8vh]">
              <HeaderOne
                text={"Software Engineering"}
                color={"text-white"}
                size={"text-[60px] leading-[70px] "}
              />
              <MainText
                text={
                  "Build scalable, secure, and high-performance applications that power digital transformation across industries. From ideation to deployment, Tinqlab is happy to be your trusted partner."
                }
                size={"text-[22px] leading-[38px] "}
                color={"text-white md:w-3/5"}
              />
              <MainButton text={"Discover more"} />
            </div>
          </section>
          <div className="grid grid-cols-3 gap-4 divide-x-[1px] divide-[#2B305E] justify-center items-center border-[1px] border-[#2B305E] p-[10px]">
            {services.map((item, index) => {
              const isActive = pathname === item.path;
              return (
                <Link href={item.path} key={index}>
                  <MainText
                    text={item.title}
                    size="text-[10px] md:text-[18px]"
                    color={`${
                      isActive ? "text-white" : "text-mainGray opacity-50"
                    } w-full cursor-pointer hover:text-primary`}
                    centerText={true}
                  />
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
