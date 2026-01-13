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
    // {
    //   title: "Industry",
    //   link: "/industry",
    // },
    {
      title: "Software Engineering",
      link: "/services/software-engineering",
    },
    {
      title: "Product Design",
      link: "/services/product-design",
    },
    {
      title: "Consulting",
      link: "/services/consulting",
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
              <ImageWrapper
                src={logo}
                width={150}
                height={50}
                alt={"Tinqlab Logo"}
              />
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
            <SocialMediaItem />{" "}
          </div>
        </div>
        <div className="col-span-3 mb-[20px]">
          <div className="flex flex-col items-start gap-8 justify-center">
            <div>
              <HeaderOne
                text="The key to success is action, start today!"
                color={"text-white md:w-3/4"}
              />
            </div>

            <Link href={"/contact-us"}>
              <MainButton text={"Schedule a call"} />
            </Link>
          </div>
        </div>
      </div>
      <div className="pb-4">
        {" "}
        {/* {**<ConsentNav />**} */}
        <Link href="/cookie-policy">
          <MainText text="Cookie Policy" color={"text-white"} />
        </Link>
      </div>
      <hr className="border-[.2px] border-[#C4C4C4] border-opacity-30"></hr>
      <div className="py-[10px]">
        <p
          className={`text-[10px] font-normal leading-[1.5em] md:text-[12px] text-white`}
        >
          {`© ${new Date().getFullYear()} Tinqlab Technologies Ltd All rights reserved`}
        </p>
      </div>
    </PageBorders>
  );
}
