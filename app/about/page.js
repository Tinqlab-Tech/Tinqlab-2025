import { MainButton } from "@/components/button/MainButton";
import FeedbackCard from "@/components/card/FeedbackCard";
import FeedackCard from "@/components/card/FeedbackCard";
import IndustryCard from "@/components/card/IndustryCard";
import MainCard from "@/components/card/MainCard";
import MoreContentCard from "@/components/card/MoreContentCard";
import OtherPageHero from "@/components/hero/OtherPageHero";
import PageStarter from "@/components/section/PageStarter";
import TechStack from "@/components/section/TechStack";
import HeaderOne from "@/components/typography/HeaderOne";
import HeaderTwo from "@/components/typography/HeaderTwo";
import MainText from "@/components/typography/MainText";
import DoublePageBorders from "@/components/wrappers/DoublePageBorders";
import PageBorders from "@/components/wrappers/PageBorders";
import aboutHerobg from "@/public/images/aboutHerobg.png";
import Link from "next/link";
import bitgert from "@/public/images/stacks/bitgert.png";
import tatum from "@/public/images/stacks/tatum.png";
import aws from "@/public/images/stacks/aws.png";
import polygon from "@/public/images/stacks/polygon.png";
import mobile2 from "@/public/icons/mobile2.svg";
import file from "@/public/icons/file.svg";
import star from "@/public/icons/star.svg";
import tv from "@/public/icons/tv.svg";
import SlideUp from "@/animation/SlideUp";
import SlideRight from "@/animation/SlideRight";
import SlideDown from "@/animation/SlideDown";
import SlideLeft from "@/animation/SlideLeft";
import Header from "@/components/partials/Header";
import Image from "next/image";
import ItemCard from "@/components/card/ItemCard";

export const metadata = {
  title: "Tinqlab - Expert software and blockchain developers",
  description:
    "We Build Efficient And Low Cost Web, Mobile And Blockchain Applications With Great User Interface And Experience. | Software development company in Nigeria.",
};

export default function Home() {
  const ourCoreValues = [
    {
      title: "Integrity",
      subtitle:
        "Our experience is enhanced by teamwork, allowing us to achieve exceptional results while cultivating a culture of mutual support.  We create extraordinary achievements by combining talents, dedication, and collaboration, propelling us to new heights of success.",
    },
    {
      title: "Trust",
      subtitle:
        "Our experience is enhanced by teamwork, allowing us to achieve exceptional results while cultivating a culture of mutual support.  We create extraordinary achievements by combining talents, dedication, and collaboration, propelling us to new heights of success.",
    },
    {
      title: "Collaboration",
      subtitle:
        "Fundamentally, we set priorities and stay committed to our major objectives of providing the finest possible results for each and every project.  Metric-driven, we leverage this information and our experience to not only meet but surpass expectations.",
    },
    {
      title: "Transparency",
      subtitle:
        "Our experience is enhanced by teamwork, allowing us to achieve exceptional results while cultivating a culture of mutual support.  We create extraordinary achievements by combining talents, dedication, and collaboration, propelling us to new heights of success.",
    },
  ];

  const rates = [
    {
      title: "42%",
      subtitle: "Front-End, Mobile Engineers",
    },
    {
      title: "30%",
      subtitle: "Back-End Engineers",
    },
    {
      title: "18%",
      subtitle: "Cloud Engineers",
    },
  ];

  const ourTechnologies = [
    {
      title: "Blockchain-based platforms",
      icon: mobile2,
    },
    {
      title: "Financial analysis solutions",
      icon: file,
    },
    {
      title: "Cryptocurrency exchanges",
      icon: star,
    },
    {
      title: "Investment/savings solutions",
      icon: tv,
    },
  ];

  const ourClient = [
    {
      icon: bitgert,
    },
    {
      icon: tatum,
    },
    {
      icon: aws,
    },
    {
      icon: polygon,
    },
  ];
  return (
    <div className="min-h-screen">
      {" "}
      <OtherPageHero
        bgImage={"bg-[#12152E]"}
        image={aboutHerobg}
        title={"A highly efficient product team "}
        subtitle={
          "Dedicated to providing innovative solutions and fueled by innovation, a dependable technological partner. The Tinqlab team employs best practices, rigorous testing, and comprehensive quality assurance methods to ensure that our software is secure and operates reliably, meeting and exceeding our clients' expectations."
        }
        btnLink={"/"}
        btnText={"Schedule a call"}
        isHeader={true}
      />
      <DoublePageBorders
        background={"bg-featuresbg bg-cover bg-no-repeat bg-center"}
        overflowbg={
          "bg-transparent z-10 -mt-[6em] md:-mt-[10em] lg:-mt-[12em] xl:-mt-[7em]"
        }
      >
        {" "}
        <div
          className=" scroll-mt-4 grid grid-cols-1 lg:grid-cols-2 gap-8   "
          id={"about"}
        >
          {" "}
          <div className="flex flex-col gap-4 md:gap-8 p-4  ">
            <div>
              <SlideUp>
                {" "}
                <HeaderOne text={"Who are Tinqlab?"} />{" "}
              </SlideUp>
            </div>{" "}
            <SlideRight duration={1.5}>
              {" "}
              <div className="flex flex-col gap-4">
                <MainText
                  text={
                    "TinqLab is a company that develops mobile applications, online apps, and custom blockchain software."
                  }
                  color={"opacity-50"}
                />{" "}
                <MainText
                  text={
                    "We solve business problems in addition to creating digital solutions.  With a team of 40+ experts, 55+ completed projects, and more than 6 years of expertise, we know what it takes to transform your ideas into real outcomes."
                  }
                  color={"opacity-50"}
                />{" "}
                <MainText
                  text={
                    "What makes us unique?  We comprehend your objectives, company difficulties, and possibilities in order to develop digital solutions that offer real value.  Our clients, who range from creative startups to well-established businesses, rely on us to improve consumer experiences, optimize processes, and spur expansion."
                  }
                  color={"opacity-50"}
                />
              </div>
            </SlideRight>
          </div>{" "}
          <div className="hidden lg:block h-full">
            <SlideLeft>
              <div className="bg-vector4 bg-contain bg-left-bottom bg-no-repeat h-full"></div>
            </SlideLeft>{" "}
          </div>
        </div>
      </DoublePageBorders>{" "}
      {/* Our Core Values */}
      <PageBorders>
        <div className="flex flex-col gap-8" id="industry">
          <div className="px-4">
            <SlideUp>
              {" "}
              <HeaderTwo text={"Our  Core Values"} />
            </SlideUp>
          </div>
          <div className="grid md:grid-cols-2 gap-4 md:gap-8 ">
            {ourCoreValues.map((item, index) => (
              <div key={index}>
                <SlideDown delay={index * 0.2} overflow={null}>
                  <MainCard
                    title={item.title}
                    subtitle={item.subtitle}
                    bgColor={null}
                    hasIcon={false}
                    useIndex={true}
                    index={index + 1}
                    icon={item.icon}
                  />{" "}
                </SlideDown>
              </div>
            ))}
          </div>
        </div>
      </PageBorders>
      {/* tinqlab team */}
      <PageBorders>
        <div className="flex flex-col gap-8" id="industry">
          <SlideUp>
            {" "}
            <HeaderTwo text={"TinqLab Team"} />
          </SlideUp>
          <SlideDown>
            <div className=" h-full   flex gap-8 items-center  ">
              {" "}
              <div>
                <HeaderOne
                  text={"40+"}
                  size={"text-[64px] lg:text-[128px] "}
                />{" "}
              </div>
              <MainText
                text={"Experts in their fields"}
                color={" text-primary"}
              />
            </div>
          </SlideDown>
          <div className="grid grid-cols-1  md:grid-cols-3 gap-4 md:gap-8 justify-center">
            {" "}
            {rates.map((item, index) => (
              <div key={index}>
                <SlideDown delay={index * 0.2} overflow={null}>
                  {" "}
                  <div className=" h-full  p-[20px] md:py-[40px] flex gap-8 items-center md:justify-center">
                    <HeaderOne
                      text={item.title}
                      size={"text-[42px] lg:text-[64px]"}
                    />

                    <MainText text={item.subtitle} color={" text-primary"} />
                  </div>{" "}
                </SlideDown>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2  gap-4 md:gap-8">
            {" "}
            {ourTechnologies.map((item, index) => (
              <div key={index}>
                <SlideRight delay={index * 0.2} overflow={null}>
                  <ItemCard
                    title={item.title}
                    bgColor={null}
                    icon={item.icon}
                  />{" "}
                </SlideRight>
              </div>
            ))}
          </div>
        </div>
      </PageBorders>
      {/* Our Mission*/}
      <DoublePageBorders background={" bg-darkestBlue "} padding={null}>
        {" "}
        <div
          className=" scroll-mt-4 overflow-hidden grid grid-cols-1 md:grid-cols-2   "
          id={"about"}
        >
          {" "}
          <div className="relative hidden  md:block  h-full">
            <SlideRight>
              <Image
                src="/images/featuresbg/features3.png"
                alt="About Tinqlab"
                fill
                className="bg-left-bottom bg-no-repeat object-cover rounded-tl-[25px] rounded-bl-[20px]"
              />
            </SlideRight>
          </div>
          <div>
            <SlideLeft>
              <div className="flex flex-col gap-8 justify-center p-[4vw] pr-[6vw] ">
                <HeaderTwo text={"Our Mission"} color={"text-mainWhite"} />
                <MainText
                  text={
                    "We help businesses thrive through tech partnerships and strengthen the engineering community by sharing knowledge and creating opportunities."
                  }
                  color={"text-mainWhite"}
                />
                <HeaderTwo text={"Our Vision"} color={"text-mainWhite"} />
                <div className="flex flex-wrap items-center gap-4 md:gap-8">
                  {" "}
                  <MainButton
                    text={"Innovate"}
                    bgcolor={"bg-lavenderBlue"}
                    lessPadding={true}
                  />{" "}
                  <MainButton
                    text={"Innovate"}
                    bgcolor={"bg-lavenderBlue"}
                    lessPadding={true}
                  />{" "}
                  <MainButton
                    text={"Innovate"}
                    bgcolor={"bg-lavenderBlue"}
                    lessPadding={true}
                  />{" "}
                </div>
              </div>
            </SlideLeft>
          </div>
        </div>
      </DoublePageBorders>
      {/* Our clients*/}
      <PageBorders>
        <div className="flex flex-col gap-8" id="career">
          <div className="px-4">
            <SlideUp>
              <HeaderTwo text={"Our Clients"} />
            </SlideUp>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 ">
            {ourClient.map((item, index) => (
              <div key={index}>
                <SlideDown delay={index * 0.2} overflow={null}>
                  <TechStack stack={item.icon} />{" "}
                </SlideDown>
              </div>
            ))}
          </div>
        </div>
      </PageBorders>
      {/* Feedbackfrom client */}
      <PageBorders>
        <div id="career">
          <FeedbackCard title={"Feedback From Client’s"} />
        </div>
      </PageBorders>
    </div>
  );
}
