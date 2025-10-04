import { MainButton } from "@/components/button/MainButton";
import Link from "next/link";
import PageBorders from "@/components/wrappers/PageBorders";
import MainText from "@/components/typography/MainText";
import ImageWrapper from "@/components/wrappers/ImageWrapper";
import OtherPageHero from "@/components/hero/OtherPageHero";
import MainCard from "@/components/card/MainCard";
import HeaderTwo from "@/components/typography/HeaderTwo";
import DoublePageBorders from "@/components/wrappers/DoublePageBorders";
import MoreContentCard from "@/components/card/MoreContentCard";
import { SpecificationItem } from "@/components/section/SpecificationItem";
import realEstateHerobg from "@/public/images/realEstateHerobg.svg";
import TechStack from "@/components/section/TechStack";
import features1 from "@/public/images/featuresbg/features1.png";
import mobile2 from "@/public/icons/mobile2.svg";
import star from "@/public/icons/star.svg";
import rep from "@/public/icons/rep.svg";
import file from "@/public/icons/file.svg";
import tv from "@/public/icons/tv.svg";
import location from "@/public/icons/location.svg";
import react from "@/public/images/stacks/react.png";
import java from "@/public/images/stacks/java.svg";
import swift from "@/public/images/stacks/swift.png";
import javascript from "@/public/images/stacks/javascript.png";
import mongodb from "@/public/images/stacks/mongodb.png";
import rn from "@/public/images/stacks/rn.png";
import nodejs from "@/public/images/stacks/nodejs.png";
import aws from "@/public/images/stacks/aws.png";
import SlideUp from "@/animation/SlideUp";
import SlideRight from "@/animation/SlideRight";
import SlideDown from "@/animation/SlideDown";
import SlideLeft from "@/animation/SlideLeft";

export const metadata = {
  title: "Tinqlab - Expert software and blockchain developers",
  description:
    "We Build Efficient And Low Cost Web, Mobile And Blockchain Applications With Great User Interface And Experience. | Software development company in Nigeria.",
};

export default function Home() {
  const realEstateSoftwareSolutions = [
    {
      title: "Mobile apps for buyer, agents & tenants",
      icon: mobile2,
    },
    {
      title: "Property management software",
      icon: file,
    },
    {
      title: "Property search & listing platforms",
      icon: star,
    },
    {
      title: "Smart utility checking solutions",
      icon: tv,
    },
    {
      title: "ERP process automation services",
      icon: rep,
    },
    {
      title: "Location-based services",
      icon: location,
    },
  ];

  const technologyWeUse = [
    { technologies: react },
    { technologies: java },
    { technologies: swift },
    { technologies: javascript },
    { technologies: mongodb },
    { technologies: rn },
    { technologies: nodejs },
    { technologies: aws },
  ];

  const whyUs = [
    {
      title: "Become a data-driven organization",
      subtitle:
        "Our Edtech software development services are customized for each project, so we can pivot quickly as requirements change.",
    },
    {
      title: "Fast development",
      subtitle:
        "Our software engineers have worked with educational organizations and companies around the world, gaining valuable expertise in the education domain.",
    },
    {
      title: "Cost",
      subtitle:
        "Our innovative education products stay up-to-date with the latest technologies and design trends in the education industry to create solutions that enhance the learning experience.",
    },
  ];

  const realEstateBenefits = [
    {
      title: "For Real Estate Professionals",
      items: [
        {
          title: "Streamlined Operations: ",
          subtitle:
            "Software can automate tasks like data entry, document management, and marketing, saving time and reducing errors. ",
        },
        {
          title: "Enhanced Data Management: ",
          subtitle:
            "Software solutions allow for centralized data storage, tracking leads, and managing customer data, leading to better decision-making",
        },
        {
          title: "Increased Efficiency: ",
          subtitle:
            "Automation and streamlined workflows enable real estate professionals to focus on core tasks and close more deals. ",
        },
        {
          title: "Competitive Advantage: ",
          subtitle:
            "Bespoke software can differentiate businesses in a competitive market and provide a unique value proposition. ",
        },
        {
          title: "Property Management Software: ",
          subtitle:
            " Enables automation of rent collection, lease agreement management, and maintenance requests. ",
        },
        {
          title: "CRM Systems: ",
          subtitle:
            "Help real estate professionals centralize data, track leads, automate marketing tasks, and manage customer data",
        },
      ],
    },
    {
      title: "For Property Owners/Landlords: ",
      items: [
        {
          title: "Automated Rent Collection: ",
          subtitle:
            " Property management software streamlines the process of collecting rent and managing tenant payments. ",
        },
        {
          title: "Efficient Lease Management: ",
          subtitle:
            "Software facilitates the creation, management, and tracking of lease agreements",
        },
        {
          title: "Improved Communication: ",
          subtitle:
            "Software can facilitate communication between property owners, landlords, and tenants. ",
        },
        {
          title: "Data Security and Compliance: ",
          subtitle:
            "Custom software development allows for better control over data security and compliance with industry regulations. ",
        },
        {
          title: "Streamlined Maintenance Requests: ",
          subtitle:
            "Software can help track and manage maintenance requests, ensuring timely and efficient repairs. ",
        },
        {
          title: "Scalability: ",
          subtitle:
            "Software solutions can scale to meet the needs of growing businesses.",
        },
      ],
    },
  ];

  const developmentServices = [
    {
      title: "Discovery and Strategy",
      subtitle:
        "We begin by understanding your business model, user needs, and technical requirements. Through stakeholder interviews and competitive analysis, we define a roadmap that ensures value-driven outcomes.",
    },
    {
      title: "Design",
      subtitle:
        "Our design team creates intuitive, visually engaging interfaces that prioritize ease of navigation and seamless user experiences across web and mobile platforms with functional test prototypes.",
    },
    {
      title: "Custom Development",
      subtitle:
        "Using modern technologies and microservices architecture, we develop tailored solutions such as property listing portals, CRMs, and property management systems, ensuring they’re secure, scalable, and integration-ready.",
    },
    {
      title: "Testing and QA",
      subtitle:
        "We perform rigorous testing to ensure functionality, security, and performance. From automated tests to usability checks, we validate every feature to meet real-world expectations.",
    },
    {
      title: "Deployment and Integration",
      subtitle:
        "We launch your solution smoothly, integrating it with third-party services like payment gateways, virtual tour tools, CRMs, and analytics platforms.",
    },
    {
      title: "Optimization and Support",
      subtitle:
        "Post-launch, we provide continuous monitoring, updates, and performance improvements to keep your real estate platform competitive and user-friendly.",
    },
  ];

  return (
    <div className="min-h-screen">
      <div className="">
        <OtherPageHero
          bgImage={"bg-[#12152E]"}
          title={"Real Estate Software Development"}
          subtitle={
            "Real estate is one of the most dynamic and demanding industries and at Tinqlab, we thrive on that challenge. With deep domain expertise and a full-cycle development approach, we craft tailored digital solutions that simplify property buying, selling, and management. Our custom real estate software is built to drive efficiency, enhance user experience, and support your business every step of the way."
          }
          btnLink={"/"}
          btnText={"Schedule a call"}
          image={realEstateHerobg}
        />
        {/* consulting sevices */}
        <DoublePageBorders
          background={"bg-featuresbg bg-cover bg-center bg-no-repeat"}
        >
          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8  p-6 rounded-[20px] scroll-mt-4"
            id={"about"}
          >
            {" "}
            <div className="col-span-1 md:col-span-2 flex flex-col gap-4 md:gap-8 items-start">
              {" "}
              <div>
                <SlideUp>
                  {" "}
                  <HeaderTwo
                    text={"Real Estate Software Development Company "}
                  />
                </SlideUp>
              </div>{" "}
              <SlideRight duration={1.5}>
                {" "}
                <MainText
                  text={
                    "In today’s fast-paced real estate market, success depends on more than just location — it depends on technology. At TinqLab, we specialize in building custom real estate software that helps agencies, brokers, property managers, and investors streamline operations, attract clients, and close deals faster. Whether you need a feature-rich property listing platform, a powerful CRM, or an integrated property management system, our team delivers scalable, secure, and user-friendly solutions designed to fit your exact business model."
                  }
                  color={"text-[#12152E] opacity-50"}
                />
              </SlideRight>
            </div>
            <div className="hidden md:block min-h-[20vh]">
              <SlideLeft>
                <div className=" bg-features10 bg-contain bg-left bg-no-repeat h-full"></div>
              </SlideLeft>
            </div>{" "}
          </div>
        </DoublePageBorders>
        <PageBorders>
          <div
            id={"about"}
            className="scroll-mt-4 grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 lg:gap-8 "
          >
            <div className="flex flex-col gap-4 md:gap-8 justify-start items-start ">
              <div>
                <SlideUp>
                  {" "}
                  <HeaderTwo
                    text={"Our real estate software development process"}
                  />
                </SlideUp>
              </div>
              <div>
                {" "}
                <SlideRight duration={1.5}>
                  <MainText
                    text={
                      "We follow a proven, agile-driven approach to build high-performing real estate software that aligns with your business goals and market demands. Our process is built for flexibility, speed, and long-term scalability."
                    }
                    color={"text-[#12152E] opacity-50"}
                  />{" "}
                </SlideRight>
              </div>
              <SlideDown delay={0.2}>
                <Link href={"/"}>
                  <MainButton text={"Book consultation"} />
                </Link>{" "}
              </SlideDown>
            </div>
            <div className="grid grid-cols-1 gap-4 md:gap-8">
              {developmentServices.map((item, index) => (
                <div key={index}>
                  <SlideDown delay={index * 0.2} overflow={null}>
                    <SpecificationItem
                      title={item.title}
                      subTitle={item.subtitle}
                    />{" "}
                  </SlideDown>
                </div>
              ))}
            </div>
          </div>
        </PageBorders>
        <PageBorders>
          <div className="flex flex-col gap-8 scroll-mt-4" id={"services"}>
            {" "}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 ">
              {" "}
              <div className="col-span-1 md:col-span-2 flex flex-col gap-4 md:gap-8">
                {" "}
                <div>
                  <SlideUp>
                    {" "}
                    <HeaderTwo text={"Real Estate Software Solutions"} />
                  </SlideUp>
                </div>{" "}
                <SlideRight duration={1.5}>
                  <MainText
                    text={
                      "With a variety of bespoke software cases for real estate in our portfolio, TinqLab professionals will develop a wide range of products to meet the needs of your company.  We will select the best team and technology stack to ensure the smoothest workflow, whether it is a new application created from scratch or a large-scale update or upgrade to an existing solution."
                    }
                    color={"text-[#12152E] opacity-50"}
                  />
                </SlideRight>
              </div>
              <div className="hidden md:block ">
                <SlideLeft>
                  <div className=" bg-retailBg bg-contain bg-left-bottom bg-no-repeat h-full"></div>
                </SlideLeft>
              </div>{" "}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2  gap-4 md:gap-8">
              {" "}
              {realEstateSoftwareSolutions.map((item, index) => (
                <div key={index}>
                  <SlideDown delay={index * 0.2} overflow={null}>
                    <MainCard
                      title={item.title}
                      hasIcon={true}
                      icon={item.icon}
                      bgColor={null}
                    />{" "}
                  </SlideDown>
                </div>
              ))}
            </div>
            <SlideDown delay={0.2}>
              <div className="grid grid-cols-1 justify-items-center">
                <Link href={"/"}>
                  <MainButton text={"Book consultation"} />
                </Link>
              </div>
            </SlideDown>
          </div>
        </PageBorders>
        <DoublePageBorders background={"bg-[#EDF4FE]"}>
          <div className="flex flex-col gap-8 scroll-mt-4" id={"services"}>
            {" "}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 ">
              {" "}
              <div className="col-span-1 md:col-span-2 flex flex-col gap-4 md:gap-8">
                {" "}
                <div>
                  <SlideUp>
                    {" "}
                    <HeaderTwo text={"Technology We Use"} />
                  </SlideUp>
                </div>{" "}
                <SlideRight duration={1.5}>
                  <MainText
                    text={
                      "Modern Tools for Smarter Real Estate Solutions. At TinqLab, we combine industry expertise with cutting-edge technology to create real estate software that’s intuitive, secure, and scalable. Our tech stack supports everything from property listings and virtual tours to CRM systems and payment integrations."
                    }
                    color={"text-[#12152E] opacity-50"}
                  />{" "}
                </SlideRight>
              </div>
              <div className="hidden md:block">
                <SlideLeft>
                  <div className=" bg-retailBg2 bg-contain bg-left-bottom bg-no-repeat h-full"></div>
                </SlideLeft>
              </div>{" "}
            </div>
            <div className="grid grid-cols-2 md:grid-cols-8 gap-4 md:gap-8">
              {" "}
              {technologyWeUse.map((item, index) => (
                <div key={index}>
                  {" "}
                  <SlideDown delay={index * 0.2} overflow={null}>
                    <TechStack stack={item.technologies} />{" "}
                  </SlideDown>
                </div>
              ))}
            </div>
          </div>
        </DoublePageBorders>
        <PageBorders>
          <div className="flex flex-col gap-8 scroll-mt-4" id={"services"}>
            {" "}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 ">
              {" "}
              <div className="col-span-1 md:col-span-2">
                {" "}
                <SlideUp>
                  {" "}
                  <HeaderTwo
                    text={"Benefits of real estate software development"}
                  />
                </SlideUp>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
              {" "}
              {realEstateBenefits.map((item, index) => (
                <div key={index}>
                  {" "}
                  <SlideRight delay={index * 0.2} overflow={null}>
                    <MoreContentCard
                      title={item.title}
                      items={item.items}
                      bgColor={null}
                    />{" "}
                  </SlideRight>
                </div>
              ))}
            </div>
          </div>
        </PageBorders>
        <PageBorders>
          <div className="flex flex-col gap-8 scroll-mt-4" id={"services"}>
            {" "}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 ">
              {" "}
              <div className="col-span-1 md:col-span-2">
                {" "}
                <SlideUp>
                  {" "}
                  <HeaderTwo
                    text={
                      "Why make Tinqlab your real estate software development partner?"
                    }
                  />
                </SlideUp>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
              {" "}
              {whyUs.map((item, index) => (
                <div key={index}>
                  <SlideRight delay={index * 0.2} overflow={null}>
                    <MainCard
                      title={item.title}
                      subtitle={item.subtitle}
                      bgColor={null}
                    />{" "}
                  </SlideRight>
                </div>
              ))}
            </div>
          </div>
        </PageBorders>
      </div>
    </div>
  );
}
