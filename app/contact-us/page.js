import HeaderTwo from "@/components/typography/HeaderTwo";
import MainText from "@/components/typography/MainText";
import PageBorders from "@/components/wrappers/PageBorders";
import DoublePageBorders from "@/components/wrappers/DoublePageBorders";
import { ContactUsModal } from "@/components/forms/ContactUsModal";
import { MainButton } from "@/components/button/MainButton";
import ImageWrapper from "@/components/wrappers/ImageWrapper";
import vector1 from "@/public/images/vector1.png";
import logo from "@/public/images/logowhite.svg";
import UserMail from "@/components/forms/UserMail";
import OtherHeader from "@/components/partials/OtherHeader";
import HeaderOne from "@/components/typography/HeaderOne";
import SlideUp from "@/animation/SlideUp";
import SlideRight from "@/animation/SlideRight";
import SlideDown from "@/animation/SlideDown";
import locate from "@/public/images/locate.png";
import insta from "@/public/images/insta.png";
import twiter from "@/public/images/twiter.png";
import arrow from "@/public/images/arrow.png";
import mail from "@/public/images/mail.png";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaLocationDot,
  FaLocationPin,
  FaMessage,
  FaXTwitter,
} from "react-icons/fa6";

export const metadata = {
  title: "Tinqlab - Expert software and blockchain developers",
  description:
    "We Build Efficient And Low Cost Web, Mobile And Blockchain Applications With Great User Interface And Experience. | Software development company in Nigeria.",
};

export default function Home() {
  const connect = [
    {
      title: "Headquaters",
      subtitle: "Lagos, Nigeria",
      icon: <FaLocationDot color="white" />,
      link: "",
    },
    {
      title: "Email Us",
      subtitle: "Info@Tinqlab.com",
      icon: <FaMessage color="white" />,
      link: "",
    },
    {
      title: "Connect On Linkedin",
      icon: <FaLinkedinIn color="white" />,
      link: "https://linkedin.com/company/tinqlabtech",
    },
    {
      title: "Follow us On X",
      icon: <FaXTwitter color="white" />,
      link: "https://x.com/tinqlabtech",
    },
    {
      title: "Follow Us On Instagram",
      icon: <FaInstagram color="white" />,
      link: "https://www.instagram.com/tinqlab/",
    },
    {
      title: "Follow Us On Facebook",
      icon: <FaFacebook color="white" />,
      link: "https://www.facebook.com/people/Tinqlab/100064552795813/",
    },
  ];
  return (
    <div className="min-h-screen">
      {/* Contact-us hero */}
      <div className="xl:h-[40vh] w-screen flex flex-col bg-mainGrey">
        <OtherHeader />
        <div className="flex flex-col text-center items-center justify-center gap-2 p-4">
          {" "}
          <div className="">
            <SlideUp>
              <HeaderOne
                text={"Get in Touch with Us "}
                size="md:text-[60px] md:leading-[70px] text-[24px]"
              />
            </SlideUp>
          </div>
          <div className="w-3/4">
            <MainText
              text={
                "We're delighted to work with you on your incredible project"
              }
              centerText={true}
            />{" "}
          </div>
        </div>
      </div>
      <PageBorders>
        <div className="grid xl:grid-cols-2 gap-4 md:gap-8">
          {/* grid 1 */}
          <div className="h-full">
            <ContactUsModal />
          </div>
          {/* grid 2 */}

          <div className="bg-mainGrey grid gap-4 md:gap-8 p-[30px] rounded-[20px]">
            <div className="overflow-hidden rounded-[20px]">
              <div className="bg-contactCardBg bg-cover  bg-no-repeat min-h-[60vh] flex flex-col justify-start p-[30px]">
                <ImageWrapper
                  src={logo}
                  width={150}
                  height={50}
                  alt="Tinqlab logo"
                />
                <div className="flex my-auto h-full w-3/4 ">
                  <HeaderTwo
                    text="Our experts will always help you"
                    color={"text-mainWhite"}
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col items-start justify-center gap-2 ">
              <div>
                <h1 className="text-[30px] md:text-[36px] leading-[40px] font-bold font-lato">
                  Connect with us <span className="text-primary"> today</span>
                </h1>
              </div>
              <MainText
                text={"Let us know how we can help you "}
                color={"opacity-50"}
              />{" "}
            </div>
            <div className="grid gap-4">
              {connect.map((item, index) => (
                <a
                  key={index}
                  href={`${item.link != "" ? item.link : "/"}`}
                  className={`${item.link != "" && "cursor-pointer"}`}
                >
                  <SlideDown delay={index * 0.2} overflow={null}>
                    <div className=" bg-primary h-full  p-[10px]  flex  gap-8 justify-between items-center rounded-[10px] shadow-custom-primary">
                      {" "}
                      <div className=" flex flex-col">
                        {" "}
                        <MainText text={item.title} color={"text-mainWhite"} />
                        {item.subtitle && (
                          <MainText
                            text={item.subtitle}
                            color={"text-mainWhite/50 "}
                            size={"text-[14px] "}
                          />
                        )}{" "}
                      </div>
                      <div>{item.icon}</div>
                    </div>
                  </SlideDown>
                </a>
              ))}
            </div>
          </div>
        </div>
      </PageBorders>
      <DoublePageBorders
        background={"bg-contactSectionBg bg-center bg-cover bg-no-repeat"}
      >
        <div className="grid lg:grid-cols-2 justify-center items-center gap-4 w-full  ">
          {/* Text */}
          <div className="text-center xl:text-start">
            <HeaderTwo
              text="Get the Latest Industry News & Insights"
              color="text-mainWhite"
              size={"text-[24px] xl:text-[32px]"}
            />
          </div>{" "}
          <div className="w-full  ">
            {" "}
            <UserMail />
          </div>{" "}
        </div>
        ,{" "}
      </DoublePageBorders>
    </div>
  );
}
