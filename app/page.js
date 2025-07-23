import { MainButton } from "@/components/button/MainButton";
import HomepageHero from "@/components/hero/HomepageHero";
import PageStarter from "@/components/section/PageStarter";
import Link from "next/link";
import Clients from "@/components/section/Clients";
import PageBorders from "@/components/wrappers/PageBorders";
import MainText from "@/components/typography/MainText";
import ServicesCard from "@/components/card/ServicesCard";
import { ContactUsModal } from "@/components/forms/ContactUsModal";
import icon1 from "@/public/images/icon1.png";
import icon2 from "@/public/images/icon2.png";
import icon3 from "@/public/images/icon3.png";
import logo from "@/public/images/logo.svg";
import ImageWrapper from "@/components/wrappers/ImageWrapper";
import HeaderOne from "@/components/typography/HeaderOne";
import OtherPageHero from "@/components/hero/OtherPageHero";
import MainCard from "@/components/card/MainCard";

export const metadata = {
  title: "Tinqlab - Expert software and blockchain developers",
  description:
    "We Build Efficient And Low Cost Web, Mobile And Blockchain Applications With Great User Interface And Experience. | Software development company in Nigeria.",
};

export default function Home() {
  const services = [
    {
      title: "Project Management",
      subtitle:
        "Experienced project managers aligned by discipline and client verticals.",
    },
    {
      title: "Partner Development",
      subtitle:
        "Connect with prospective alliance partners for offer distribution, promotion, and cross-selling.",
    },
    {
      title: "Strategic Procurement",
      subtitle:
        "Experienced project managers aligned by discipline and client verticals.",
    },
    {
      title: "Financial Services",
      subtitle:
        "Operations, credit underwriting, and governance expertise in finance sectors like banking and fintech.",
    },
    {
      title: "Business Development",
      subtitle:
        "Expand retail outlets and new markets, facilitating product distribution.",
    },
    {
      title: "Executive Recruitment & Interim Management",
      subtitle:
        "Deploy senior executives for business optimization in insurance, banking, and political campaigns.",
    },
    {
      title: "Advertising & Marketing",
      subtitle:
        "Access major data sources to inform programmatic ads, geofencing, and geo-conquesting campaigns.",
    },
    {
      title: "Technology",
      subtitle:
        "Cloud-based IT support, app development, hosting, and consulting services.",
    },
    {
      title: "Manufacturing",
      subtitle:
        "Logistics, supply chain sourcing, patent specs, and product development consulting.",
    },
    {
      title: "Public Relations",
      subtitle:
        "Media planning services to build institutional awareness and product reputation in the U.S. market.",
    },
    {
      title: "Government Relations",
      subtitle:
        "Development and implementation of government relations strategies in the U.S. and EMEA markets",
    },
    {
      title: "Political Consulting",
      subtitle: "Data-driven advisement for political campaigns.",
    },
  ];

  const servicesDetails = [
    {
      title: "Consultation",
      subtitle:
        "Get personalized consultation on the best practices and approaches for your business.",
      icon: icon1,
    },
    {
      title: "Strategic Planning",
      subtitle:
        "Develop the most effective strategies and plans to boost your growth and achieve your goal.",
      icon: icon2,
    },
    {
      title: "Analytics & Evaluation",
      subtitle:
        "Receive detailed feedback and evaluation based on insightful data for your business.",
      icon: icon3,
    },
  ];

  const singleServive = [
    "Healthcare",
    "Manufacturing",
    "Real Estate",
    "Retail",
    "Aviation",
    "Financial Services",
    "Corporations",
    "Natural Resource Exploration and Advisory",
    "Governments",
    "Political Campaign Strategy and Management",
  ];

  return (
    <div className="min-h-screen">
      <div className="">
        <HomepageHero />

        <PageBorders>
          <div
            id={"about"}
            className="scroll-mt-4 grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 lg:gap-8 lg:justify-items-center "
          >
            <div className="flex flex-col gap-4 md:gap-8 justify-center items-start pr-[20px] lg:pr-[40px] py-[20px] md:py-[40px] ">
              <PageStarter Title={"Who we are"} SubtitleText={""} />
              <MainText text="Tinqlab is part of EHD Group, a collection of businesses primarily focused on importing and exporting goods and services between Western and EMEA markets." />
              <MainText text="Our diverse capabilities include mining interests, food products, logistics, and navigation, giving us a unique window into cross-border trade, project management, strategic planning, deal facilitation, and international networking." />
              <MainText text="Tinqlab is a premier international consultancy that helps clients improve their bottom line, drive process improvement, and provide senior talent for effective implementation." />

              <ContactUsModal btnText={"Learn more"} />
            </div>
            <div className="bg-aboutus md:h-full w-full h-[40vh] bg-cover bg-center bg-no-repeat"></div>
          </div>
        </PageBorders>
        <PageBorders
          background={
            "bg-gradient-to-r from-[#E7E9F4] via-[#FFFFFF] to-[#F6F7FB]"
          }
        >
          <div className="flex flex-col gap-8 scroll-mt-4" id={"services"}>
            {" "}
            <div className="grid grid-cols-1 md:grid-cols-3 ">
              {" "}
              <div className="col-span-1 md:col-span-2">
                {" "}
                <PageStarter
                  Title={"Our Service"}
                  SubtitleText={
                    "Tinqlab focuses on EMEA markets, particularly the Middle East and Africa, leveraging U.S. expertise to drive global trade and innovation."
                  }
                  color={"text-[#131313]"}
                />
              </div>
              <div className="hidden md:block bg-arrowvector bg-contain bg-left-bottom bg-no-repeat h-full"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
              {" "}
              {servicesDetails.map((item, index) => (
                <div key={index}>
                  {" "}
                  <MainCard
                    title={item.title}
                    subtitle={item.subtitle}
                    bgColor={"bg-green-300"}
                  />
                </div>
              ))}
            </div>
            <div className="bg-white rounded-[15px] md:divide-x-[1px] lg:divide-x-[1px] divide-solid divide-[#EFF1EC] border-[1px] border-[#EFF1EC] grid grid-cols-1 md:grid-cols-3 md:p-[20px]">
              {" "}
              {servicesDetails.map((item, index) => (
                <div key={index}>
                  {" "}
                  <ServicesCard
                    icon={item.icon}
                    title={item.title}
                    subtitle={item.subtitle}
                    isSingleService={true}
                  />
                </div>
              ))}
            </div>
            <div className="gap-2 lg:gap-4 flex flex-wrap items-center justify-start ">
              {singleServive.map((item, index) => (
                <p
                  key={index}
                  className="text-[10px] tracking-normal  md:text-[14px] lg:text-[16px] bg-[#c9ceea] text-mainBlack px-2 py-2 md:px-6 md:py-3 rounded-[50px] font-Gilroy font-extralight "
                >
                  {item}
                </p>
              ))}
            </div>
          </div>
        </PageBorders>
        <PageBorders>
          <div className="flex flex-col gap-8">
            {" "}
            <div className="lg:w-[45vw]">
              {" "}
              <PageStarter
                Title={"Key Focus Areas"}
                SubtitleText={
                  "Tinqlab provides access to an extensive network of international and global resources, including experts in finance, technology, and business development."
                }
                color={"text-[#131313]"}
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 justify-items-center mt-[20px] md:mt-[40px]">
              {services.map((item, index) => (
                <div key={index}>
                  {" "}
                  <ServicesCard title={item.title} subtitle={item.subtitle} />
                </div>
              ))}
            </div>
          </div>
        </PageBorders>
        <PageBorders
          background={
            "bg-gradient-to-r from-[#FFFFFF] via-[#E5E8FF] to-[#FFFFFF] "
          }
        >
          <div className="bg-arrowvector1 hidden md:block bg-contain bg-left-top bg-no-repeat h-[60px]"></div>
          <div className="flex flex-col gap-4 justify-center items-center md:bg-arrowvector2 bg-contain bg-right-bottom bg-no-repeat ">
            <ImageWrapper
              src={logo}
              width={120}
              height={60}
              alt={"Tinqlab logo"}
              style={"darks:hidden"}
            />

            <HeaderOne
              text={"Why Choose Us?"}
              color={"text-[#131313]"}
              size={
                "text-[24px] lg:text-[32px] leading-[30px] lg:leading-[40px] "
              }
            />

            <div className="md:w-1/2 text-center ">
              {" "}
              <MainText text=" Every recommendation we make can be fully implemented by our team, ensuring seamless execution and success." />
            </div>
            <ContactUsModal btnText={"Get a Consultation"} />
          </div>
        </PageBorders>
      </div>
    </div>
  );
}
