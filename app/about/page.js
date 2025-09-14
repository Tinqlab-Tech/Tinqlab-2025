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
      />
      <DoublePageBorders
        background={"bg-featuresbg bg-cover bg-no-repeat bg-center"}
      >
        {" "}
        <div
          className=" scroll-mt-4 grid grid-cols-1 md:grid-cols-2 gap-8 lg:px-6  "
          id={"about"}
        >
          {" "}
          <div className="flex flex-col gap-5 p-4 xl:p-8 ">
            <HeaderOne text={"Who are Tinqlab?"} />{" "}
            <MainText
              text={
                "TinqLab is a company that develops mobile applications, online apps, and custom blockchain software."
              }
              color={"opacity-50"}
            />
            <MainText
              text={
                "We solve business problems in addition to creating digital solutions.  With a team of 40+ experts, 55+ completed projects, and more than 6 years of expertise, we know what it takes to transform your ideas into real outcomes."
              }
              color={"opacity-50"}
            />
            <MainText
              text={
                "What makes us unique?  We comprehend your objectives, company difficulties, and possibilities in order to develop digital solutions that offer real value.  Our clients, who range from creative startups to well-established businesses, rely on us to improve consumer experiences, optimize processes, and spur expansion."
              }
              color={"opacity-50"}
            />
          </div>
          <div className="hidden md:block bg-vector4 bg-contain bg-left-bottom bg-no-repeat min-h-[20vh]"></div>
        </div>
      </DoublePageBorders>{" "}
      {/* Our Core Values */}
      <PageBorders>
        <div className="flex flex-col gap-8" id="industry">
          <div className="px-4">
            <HeaderOne text={"Our  Core Values"} />
          </div>
          <div className="grid md:grid-cols-2 gap-4 md:gap-8 ">
            {ourCoreValues.map((item, index) => (
              <div key={index}>
                <MainCard
                  title={item.title}
                  subtitle={item.subtitle}
                  bgColor={null}
                  hasIcon={false}
                  useIndex={true}
                  index={index + 1}
                  icon={item.icon}
                />
              </div>
            ))}
          </div>
        </div>
      </PageBorders>
      {/* tinqlab team */}
      <PageBorders>
        <div className="flex flex-col gap-8" id="industry">
          <HeaderTwo text={"TinqLab Team"} />

          <div className=" h-full  p-[20px] md:py-[40px] flex gap-8 items-center  ">
            <div className="text-[42px] leading-[38px] font-bold font-lato lg:text-[64px]  lg:leading-[32px]">
              {" "}
              40+
            </div>

            <MainText text={"Experts in their fields"} color={" opacity-50"} />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 justify-center">
            {" "}
            {rates.map((item, index) => (
              <div key={index}>
                {" "}
                <div className=" h-full  p-[20px] md:py-[40px] flex gap-8 items-center md:justify-center">
                  <HeaderOne text={item.title} />

                  <MainText text={item.subtitle} color={" opacity-50"} />
                </div>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2  gap-4 md:gap-8">
            {" "}
            {ourTechnologies.map((item, index) => (
              <div key={index}>
                {" "}
                <MainCard
                  title={item.title}
                  bgColor={null}
                  hasIcon={true}
                  icon={item.icon}
                />
              </div>
            ))}
          </div>
        </div>
      </PageBorders>
      {/* Our Mission*/}
      <DoublePageBorders>
        {" "}
        <div
          className=" scroll-mt-4 grid grid-cols-1 md:grid-cols-3 gap-8  bg-darkestBlue  rounded-[20px]"
          id={"about"}
        >
          {" "}
          <div className="hidden md:block  w-full min-h-[40vh] bg-features3 bg-cover bg-left-bottom bg-no-repeat"></div>
          <div className="flex flex-col gap-5 justify-center p-4 md:p-8 col-span-2">
            <HeaderOne text={"Our Mission"} color={"text-mainWhite"} />
            <MainText
              text={
                "We help businesses thrive through tech partnerships and strengthen the engineering community by sharing knowledge and creating opportunities."
              }
              color={"text-mainWhite"}
            />
            <HeaderOne text={"Our Vision"} color={"text-mainWhite"} />
            <div className="grid grid-cols-3 items-center gap-4 md:w-3/4 lg:1/2">
              <Link href={"/"}>
                {" "}
                <MainButton text={"Innovate"} color={"text-mainWhite"} />
              </Link>
              <Link href={"/"}>
                {" "}
                <MainButton text={"Innovate"} color={"text-mainWhite"} />
              </Link>
              <Link href={"/"}>
                {" "}
                <MainButton text={"Innovate"} color={"text-mainWhite"} />
              </Link>{" "}
            </div>
          </div>
        </div>
      </DoublePageBorders>
      {/* Our clients*/}
      <PageBorders>
        <div className="flex flex-col gap-8" id="career">
          <div className="px-4">
            <HeaderOne text={"Our Clients"} />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 ">
            {ourClient.map((item, index) => (
              <div key={index}>
                <TechStack stack={item.icon} />
              </div>
            ))}
          </div>
        </div>
      </PageBorders>
      {/* Feedbackfrom client */}
      <PageBorders>
        <div className="flex flex-col gap-8" id="career">
          <div className="px-4">
            <HeaderOne text={"Feedback From Teammate's"} />
          </div>
          <FeedbackCard />
        </div>
      </PageBorders>
    </div>
  );
}
