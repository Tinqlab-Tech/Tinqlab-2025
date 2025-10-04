import Link from "next/link";
import SocialMediaItem from "../section/SocialMediaItem";
import ImageWrapper from "../wrappers/ImageWrapper";
import logo from "@/public/images/logowhite.svg";
import FooterTitle from "@/components/typography/FooterTitle";
import MainText from "@/components/typography/MainText";
import ConsentNav from "./ConsentNav";
import PageBorders from "../wrappers/PageBorders";
import HeaderOne from "../typography/HeaderOne";
import { MainButton } from "../button/MainButton";
import SlideRight from "@/animation/SlideRight";
import SlideDown from "@/animation/SlideDown";
import SlideUp from "@/animation/SlideUp";

export default function Footer() {
  // const t = useTranslations("Footer");

  const usefulLinks = [
    {
      title: "Industry",
      link: "/industry",
    },
    {
      title: "Services",
      link: "/services",
    },
    {
      title: "Portfolio",
      link: "/portfolio",
    },
    {
      title: "Career",
      link: "/career",
    },
    {
      title: "About",
      link: "/about",
    },
  ];

  return (
    <PageBorders background={"bg-[#12152E]"}>
      <div className="grid grid-cols-1 gap-4 mb-[20px] md:grid-cols-5 items-center  ">
        <div className="md:m-0 mb-2 md:mb-0 col-span-2">
          <div className="flex flex-col items-start gap-4 justify-start mb-[20px]">
            <div className="mb-[20px]">
              <SlideRight>
                {" "}
                <ImageWrapper
                  src={logo}
                  width={150}
                  height={50}
                  alt={"Tinqlab Logo"}
                />
              </SlideRight>
            </div>
            {usefulLinks.map((item, index) => (
              <div key={index}>
                <SlideDown delay={index * 0.2}>
                  {" "}
                  <Link href={item.link}>
                    <MainText
                      text={item.title}
                      color={
                        "text-[#BDBDBD] opacity-80 hover:text-white hover:opacity-100"
                      }
                    />
                  </Link>
                </SlideDown>
              </div>
            ))}

            <SlideDown delay={0.2}>
              <SocialMediaItem />{" "}
            </SlideDown>
          </div>
        </div>
        <div className="col-span-3 mb-[20px]">
          <div className="flex flex-col items-start gap-8 justify-center">
            <div>
              <SlideUp>
                {" "}
                <HeaderOne
                  text="The key to success is action, start today!"
                  color={"text-white md:w-3/4"}
                />
              </SlideUp>
            </div>
            <SlideRight duration={1.5}>
              <MainButton text={"Schedule a call"} />
            </SlideRight>
          </div>
        </div>
      </div>
      <div className="flex justify-center md:justify-start items-center gap-4 md:gap-8 pb-[20px]">
        {" "}
        <ConsentNav />
        <Link href="/cookie-policy">
          <MainText text="Cookie Policy" color={"text-white"} />
        </Link>
      </div>
      <hr className="border-[.2px] border-[#C4C4C4] border-opacity-30"></hr>
      <div className="px-[10px] md:pb-[20px] lg:px-[10px]">
        <div>
          <div className="md:item-start justify-items-center grid grid-cols-1 justify-between py-[20px] text-left text-[10px] font-normal leading-[10px] md:flex md:pb-0 md:text-[14px] md:leading-[14px]">
            <section className="order-2 flex items-center justify-center pt-[20px] text-center  md:justify-start md:pt-0 md:text-left lg:text-right">
              <p
                className={`text-[10px] font-normal leading-[10px] md:text-[12px] md:leading-[16px] text-white`}
              >
                {`© ${new Date().getFullYear()} Tinqlab Ltd All rights reserved`}
              </p>
            </section>
          </div>
        </div>
      </div>
    </PageBorders>
  );
}
