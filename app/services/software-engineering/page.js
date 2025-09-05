import { MainButton } from "@/components/button/MainButton";
import Link from "next/link";
import PageBorders from "@/components/wrappers/PageBorders";
import MainText from "@/components/typography/MainText";
import react from "@/public/images/react.png";
import ImageWrapper from "@/components/wrappers/ImageWrapper";
import OtherPageHero from "@/components/hero/OtherPageHero";
import MainCard from "@/components/card/MainCard";
import HeaderTwo from "@/components/typography/HeaderTwo";
import DoublePageBorders from "@/components/wrappers/DoublePageBorders";
import MoreContentCard from "@/components/card/MoreContentCard";
import { SpecificationItem } from "@/components/section/SpecificationItem";
import assessment from "@/public/icons/assessment.svg";
import comms from "@/public/icons/comms.svg";
import consultation from "@/public/icons/consultation.svg";
import custom from "@/public/icons/custom.svg";
import mobile from "@/public/icons/mobile.svg";
import study from "@/public/icons/study.svg";
import edtechHero from "@/public/images/edtechHero.svg";
import TechStack from "@/components/section/TechStack";
import java from "@/public/images/stacks/java.svg";
import rn from "@/public/images/stacks/rn.png";
import nodejs from "@/public/images/stacks/nodejs.png";
import React from "@/public/images/stacks/react.png";
import features1 from "@/public/images/features1.png";
import ServicesCard from "@/components/card/ServicesCard";
import FeedbackCard from "@/components/card/FeedbackCard";
import HeaderOne from "@/components/typography/HeaderOne";

export const metadata = {
  title: "Tinqlab - Expert software and blockchain developers",
  description:
    "We Build Efficient And Low Cost Web, Mobile And Blockchain Applications With Great User Interface And Experience. | Software development company in Nigeria.",
};

export default function Home() {
  const softwareEngineeringSolution = [
    {
      bgIcon: features1,
      title: "Custom blockchain development",
      subtitle:
        "We offer end-to-end blockchain development services to build secure, decentralized applications and platforms. Our blockchain developers have experience with Ethereum, Hyperledger Fabric, R3 Corda, and other blockchain frameworks.",
    },
    {
      bgIcon: features1,
      title: "Software consulting",
      subtitle:
        "We guide you through every phase of the software lifecycle from planning and architecture to optimization and transformation ensuring solutions align with business goals, industry standards, and emerging tech trends.",
    },
    {
      bgIcon: features1,
      title: "API Integration",
      subtitle:
        "We offer seamless API integration services that connect your systems, platforms, and applications to streamline operations and enhance functionality. Whether you're integrating third-party services or building custom APIs, we ensure secure, efficient, and scalable solutions that power business agility.",
    },
    {
      bgIcon: features1,
      title: "Enterprise software development",
      subtitle:
        "Tinqlab delivers robust, scalable, and tailored enterprise software solutions that streamline complex business processes and drive organizational efficiency. We design and build powerful systems that support everything from internal operations to customer engagement at scale.",
    },
    {
      bgIcon: features1,
      title: "Web development",
      subtitle:
        "We build high-performance, user-centric websites and web applications that meet the evolving demands of modern businesses. Our web development services blend sleek design with powerful functionality to create digital experiences that are fast, secure, and scalable.",
    },
    {
      bgIcon: features1,
      title: "Mobile app development",
      subtitle:
        "Our software engineers use leading frameworks to develop engaging iOS and Android apps that provide seamless user experiences. We incorporate best practices for security, performance, and UX design to build apps that delight your customer",
    },
    {
      bgIcon: features1,
      title: "IoT development",
      subtitle:
        "We build IoT systems from the ground up, handling everything from firmware and hardware engineering to mobile apps and cloud platforms. When you work with us, you're getting a trusted partner in IoT development. We understand your vision and craft tailored software solutions that transform the way people live and work.",
    },
    {
      bgIcon: features1,
      title: "DevOps",
      subtitle:
        "At Tinqlab, our DevOps services bridge the gap between development and operations to enable faster, more reliable software delivery. We automate and streamline workflows to ensure continuous integration, continuous deployment (CI/CD), and real-time monitoring.",
    },
  ];
  const tinqlabBenefits = [
    {
      title: "Create a customer-centric solution",
      subtitle:
        "With the Design Thinking framework and profound discovery, we reach the heart of the clients’ pain points and create digital products that make them happy. No matter whether we talk about cloud based solutions or mobile apps, digital product design has no limits!",
    },
    {
      title: "Transparency and Agile",
      subtitle:
        "We provide consistent and clear communication at every stage of the estimated workflow by conducting digital product design using the Agile-based approach so our clients can create and modify a team of highly skilled engineers, designers, and business analysts as needed.",
    },
    {
      title: "Cross-platform experience",
      subtitle:
        "As a digital product design company, we aim to help users switch between platforms and freely engage with your product on the go. It’s not only about visual design, but access and compliance. The experience across multiple devices has to be seamless and fast.",
    },
    {
      title: "Choose cost-effective solutions",
      subtitle:
        "We build interfaces by integrating the functions, ideas, and technologies that shape trends. We can offer you a cost-effective full-stack solution, from idea validation to product development, launch, and support.",
    },
    {
      title: "Scaling and continuous development",
      subtitle:
        "Not only we design digital products. With flexible development methodologies, user testing techniques, and a continuous development cycle that's open to modifications and upgrades.",
    },
  ];

  const expertise = [
    {
      icon: mobile,
      title: "Fintech",
      subtitle:
        "Financial technology company engage us to design and build secure, scalable, and compliant fintech solutions that power the future of finance. Whether you're launching a digital wallet, building a lending platform, or integrating blockchain into financial services, we deliver robust technology tailored to modern financial ecosystems.",
    },
    {
      icon: consultation,
      title: "Edtech",
      subtitle:
        "Education technology companies turn to us to develop cutting-edge EdTech solutions that make learning more accessible, engaging, and effective. From virtual classrooms to AI-powered learning platforms, we empower institutions, educators, and learners with the digital tools they need to succeed.",
    },
    {
      icon: custom,
      title: "Real Estate",
      subtitle:
        "We build powerful, user-friendly real estate platforms that simplify property management, enhance listings, and improve customer engagement. Our solutions are designed to streamline operations for agencies, developers, and property tech startups.",
    },
    {
      icon: comms,
      title: "Retail",
      subtitle:
        "We collaborates with retailers to create seamless e-commerce experiences that connect brands with customers and drive business growth, and intelligent analytics tools designed to optimize operations, boost sales, and elevate customer satisfaction.",
    },
  ];

  const softwareDevelopmentProcess = [
    {
      title: "Idea",
      subtitle:
        "We begin by understanding the client’s vision, business challenges, and user expectations. This helps us define project goals, technical requirements, and a clear roadmap.",
    },
    {
      title: "Planning & Architecture",
      subtitle:
        "In cooperation with you, our team creates a detailed development plan, system architecture, and tech stack that ensures scalability, security, and long-term performance.",
    },
    {
      title: "Design",
      subtitle:
        "We design intuitive, user-friendly interfaces that align with the brand identity and offer a seamless user experience across all devices.",
    },

    {
      title: "Development",
      subtitle:
        "We break development into short sprints, allowing for rapid delivery, continuous feedback, and quick adaptation to evolving requirements. while maintaining high code quality and maintaining budget.",
    },
    {
      title: "Testing & Deployment",
      subtitle:
        "Once tested, the software is deployed to the production environment using secure, efficient, and scalable deployment practices.",
    },
    {
      title: "Maintenance & Support",
      subtitle:
        "After launch, we provide ongoing support, performance monitoring, and regular updates to ensure the solution continues to meet evolving business needs.",
    },
  ];

  const technologyWeUse = [
    { technologies: java },
    { technologies: rn },
    { technologies: nodejs },
    { technologies: React },
    { technologies: React },
    { technologies: React },
  ];

  return (
    <div className="min-h-screen">
      <div className="">
        <OtherPageHero
          bgImage={null}
          image={edtechHero}
          title={"Software Engineering"}
          subtitle={
            "At Tinqlab, we turn bold ideas into powerful, high-performance digital solutions. From concept to launch, we deliver full-cycle development that’s fast, scalable, and built to drive results. With the right tech partner, your possibilities are limitless."
          }
          btnLink={"/"}
          btnText={"Schedule a call"}
        />

        {/* our software solutions */}
        <PageBorders>
          y
          <div id={"about"} className="scroll-mt-4 grid grid-cols-1  gap-8 ">
            <HeaderTwo text={"Our Software Engineering Solutions"} />

            <div className="grid md:grid-cols-2 gap-4 md:gap-8">
              {softwareEngineeringSolution.map((item, index) => (
                <div key={index}>
                  <SpecificationItem
                    bgIcon={item.bgIcon}
                    title={item.title}
                    subTitle={item.subtitle}
                  />
                </div>
              ))}
            </div>
          </div>
        </PageBorders>

        {/*Technology we use  */}
        <DoublePageBorders background={"bg-[#EDF4FE]"}>
          <div className="flex flex-col gap-8 scroll-mt-4" id={"services"}>
            {" "}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 items-center ">
              {" "}
              <div className="col-span-1 md:col-span-2">
                {" "}
                <HeaderTwo text={"Technology Stack We Use"} />
              </div>
              <div className="hidden md:block bg-retailBg2 bg-contain bg-left-bottom bg-no-repeat min-h-[20vh]"></div>
            </div>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-4 md:gap-8 justify-items-center">
              {technologyWeUse.map((item, index) => (
                <div key={index}>
                  <TechStack stack={item.technologies} />
                </div>
              ))}
            </div>
          </div>
        </DoublePageBorders>

        {/* our Experties */}
        <PageBorders>
          <div
            id={"about"}
            className="scroll-mt-4 grid grid-cols-1 md:grid-cols-2 gap-8 "
          >
            <div className="flex flex-col gap-8 justify-start items-start ">
              <HeaderTwo text={"Our Expertise Across Industries"} />

              <Link href={"/"}>
                <MainButton text={"Book a meeting"} />
              </Link>
            </div>
            <div className="grid md:grid-cols-2 gap-4 md:gap-8">
              {expertise.map((item, index) => (
                <div key={index}>
                  <ServicesCard
                    title={item.title}
                    subtitle={item.subtitle}
                    icon={item.icon}
                  />
                </div>
              ))}
            </div>
          </div>
        </PageBorders>

        {/* benefit of working with tinqlab */}
        <PageBorders background={"bg-darkestBlue"}>
          <div className="flex flex-col gap-8 scroll-mt-4" id={"services"}>
            {" "}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 items-center ">
              <div className="col-span-1 md:col-span-2">
                {" "}
                <HeaderTwo
                  text={"Technology We Use"}
                  color={"text-mainWhite"}
                />
              </div>
              <div className="hidden md:block bg-retailBg2 bg-contain bg-left-bottom bg-no-repeat min-h-[20vh]"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
              {" "}
              {tinqlabBenefits.map((item, index) => (
                <div key={index}>
                  {" "}
                  <MainCard
                    title={item.title}
                    subtitle={item.subtitle}
                    bgColor={"bg-darkBlue"}
                  />
                </div>
              ))}
            </div>
          </div>
        </PageBorders>
        {/* our software development Process */}
        <PageBorders>
          <div className="flex flex-col gap-8 scroll-mt-4" id={"services"}>
            {" "}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 ">
              <HeaderTwo text={"Why choose Tinqlab?"} />
              <div className="flex flex-col gap-4 md:gap-8">
                {" "}
                {softwareDevelopmentProcess.map((item, index) => (
                  <li
                    key={index}
                    className="block space-y-4 text-[18px] leading-[28px] text-[#12152E]"
                  >
                    <div className="flex items-center gap-4 p-4">
                      <span className="h-12 w-12 border-[2px] rounded-full border-[#5A67D8] border-opacity-20 flex justify-center items-center">
                        {index + 1}
                      </span>
                      {item.title}
                    </div>
                    <article className="list-inside list-disc break-words px-2 pb-4 opacity-50">
                      {item.subtitle}
                    </article>
                  </li>
                ))}
              </div>
            </div>
          </div>{" "}
        </PageBorders>
        <PageBorders>
          <div className="flex flex-col gap-8" id="career">
            <div className="px-4">
              <HeaderOne text={"Testimonials"} />
            </div>
            <FeedbackCard />
          </div>
        </PageBorders>
      </div>
    </div>
  );
}
