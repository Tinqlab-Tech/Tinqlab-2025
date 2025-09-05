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
import FeedbackCard from "@/components/card/FeedbackCard";
import features1 from "@/public/images/features1.png";

export const metadata = {
  title: "Tinqlab - Expert software and blockchain developers",
  description:
    "We Build Efficient And Low Cost Web, Mobile And Blockchain Applications With Great User Interface And Experience. | Software development company in Nigeria.",
};

export default function Home() {
  const industryExpertise = [
    {
      title: "Product Discovery",
      subtitle:
        "At Tinqlab, we believe every business idea needs more than inspiration—it needs validation, a strong product vision, and clearly defined value to stand out and win customers. Our Product Discovery process ensures clarity from the start, combining strategic ideation and digital design workshops to shape a roadmap for successful transformation. As part of our digital consulting approach, it helps align your services with what truly matters to your customers.",
    },
    {
      title: "Product Design Flow",
      subtitle:
        "This is one of the most impactful stages in your digital journey and one we value deeply. At Tinqlab, our digital transformation consultants uncover the insights that matter most to your business. Through market and user research, usability audits, brand identity design, UX/UI development, prototyping, and A/B testing, we help you craft standout digital products that resonate deeply with your customers.",
    },
    {
      title: "Technology Consulting",
      subtitle:
        "We bring the expertise of 55+ successful project launches to deliver end-to-end technology consulting and support that drives real digital transformation, from strategy to seamless execution. Our tailored digital strategies help you navigate complex challenges, define clear goals, and build a roadmap for long-term success. Backed by data-driven insights and a focus on innovation, our team is committed to continuously enhancing your digital experience at every stage.",
    },
    {
      title: "Web3 Repositioning",
      subtitle:
        "The shift to Web3 is more than a trend, it's a paradigm change in how users interact with digital products. At Tinqlab, we help you embrace this transformation with clarity, strategy, and purpose. Our Web3 repositioning service is designed for businesses looking to evolve their platforms, unlock new value streams, and stay ahead in a decentralized digital landscape. Whether you're transitioning from Web2 or building entirely within Web3, we guide you through the process, redefining your digital strategy to leverage the benefits of blockchain technology, decentralization, and token-driven ecosystems.",
    },
    {
      title: "Virtual classroom",
      subtitle:
        "We develop virtual classrooms and video streaming platforms for conducting live online classes, webinars, and video lectures. They can be used by schools, coaching institutes, and individual tutors.",
    },
  ];

  const consultingServices = [
    {
      title: "Re-Architecture",
      subtitle:
        "We help modernize outdated or inefficient systems by rethinking their core structure. Our re-architecture services focus on improving performance, scalability, and maintainability, ensuring your digital products can evolve alongside your business. Whether transitioning to cloud-native infrastructure or refactoring legacy monoliths, Tinqlab delivers clean, future-proof architectures.",
    },
    {
      title: "CTO as a service (CaaS)",
      subtitle:
        "Need executive-level tech leadership without the overhead? Our CTO-as-a-Service offering gives you access to experienced technology leadership to guide your product strategy, manage development teams, and make high-stakes architectural decisions. Ideal for startups, scale-ups, and non-technical founders seeking technical direction.",
    },
    {
      title: "Architecture assessment",
      subtitle:
        "Before scaling or integrating new features, a solid architecture check is essential. We evaluate your existing systems, uncover bottlenecks, identify vulnerabilities, and deliver actionable insights. Tinqlab's architecture assessments are thorough, technology-agnostic, and aligned with your business goals.",
    },
    {
      title: "Project rescue plan",
      subtitle:
        "If your project is delayed, off-track, or underperforming, Tinqlab steps in with a structured rescue plan. We perform a deep dive into your codebase, team processes, and technical decisions to diagnose issues and realign delivery. Our team helps you stabilize development, regain momentum, and meet deadlines with confidence.",
    },
    {
      title: "Code assessment",
      subtitle:
        "Our code assessment service ensures your application is built on a solid foundation. We review your codebase for quality, security, performance, and maintainability. You’ll receive a detailed report with prioritized recommendations, helping you improve reliability, reduce technical debt, and streamline development.",
    },
  ];

  const technologyWeUse = [
    { technologies: java },
    { technologies: rn },
    { technologies: nodejs },
    { technologies: React },
    { technologies: React },
  ];

  return (
    <div className="min-h-screen">
      <div className="">
        <OtherPageHero
          bgImage={null}
          image={edtechHero}
          title={"Digital Consulting Services"}
          subtitle={
            "In a world shaped by rapid change, global disruption, digital acceleration, and shifting customer expectations, navigating transformation isn’t optional, it’s essential. At Tinqlab, we help you define the right digital strategy, adopt the right technologies, and unlock new value for your business. Let’s turn complexity into clarity—and make your digital breakthrough a reality."
          }
          btnLink={"/"}
          btnText={"Schedule a call"}
        />
        {/* consulting sevices */}
        <DoublePageBorders background={"bg-lightBlue"}>
          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8  p-6 rounded-[20px] scroll-mt-4"
            id={"about"}
          >
            {" "}
            <div className="col-span-1 md:col-span-2 flex flex-col gap-4 md:gap-8 items-start">
              {" "}
              <HeaderTwo text={"What Is a Technology Consulting Service?"} />
              <MainText
                text={
                  "To create an efficient digital strategy or reassess an existing one, you need to attract experts in information technology consulting services who develop complex tech solutions daily for different businesses and startups. We provide technology consulting services in various formats based on requests, industry insights, and cross-sector expertise. With more than 55 impactfully delivered projects of different complexities for businesses in FinTech, EdTech, AgroTech, retail, and real estate."
                }
                color={"text-[#12152E] opacity-50"}
              />
              <MainButton text={"Speak to Experts"} />
            </div>
            <div className="hidden md:block bg-edtech1 bg-contain bg-left-bottom bg-no-repeat min-h-[20vh]"></div>
          </div>
        </DoublePageBorders>

        {/* Our Industry Expertise */}
        <PageBorders>
          <div
            id={"about"}
            className="scroll-mt-4 grid grid-cols-1 md:grid-cols-2 gap-8 "
          >
            <div className="flex flex-col gap-8 justify-start items-start ">
              <HeaderTwo text={"Our Industry Expertise"} />

              <MainText
                text={
                  "We believe focusing brings depth to our solutions. At Tinqlab, our technology consulting services are grounded in deep industry understanding such as FinTech, EdTech, retail, and real estate. We help businesses across those key sectors navigate digital transformation, adopt the right tech stack, and unlock scalable growth. With Tinqlab, consulting isn’t just advice—it’s actionable strategy."
                }
                color={"text-[#12152E] opacity-50"}
              />

              <Link href={"/"}>
                <MainButton text={"Book consultation"} />
              </Link>
            </div>
            <div className="grid grid-cols-1 gap-4 md:gap-8">
              {industryExpertise.map((item, index) => (
                <div key={index}>
                  <SpecificationItem
                    title={item.title}
                    subTitle={item.subtitle}
                  />
                </div>
              ))}
            </div>
          </div>
        </PageBorders>
        {/* technology we use */}
        <DoublePageBorders background={"bg-[#EDF4FE]"}>
          <div className="flex flex-col gap-8 scroll-mt-4" id={"services"}>
            {" "}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 items-center ">
              {" "}
              <div className="col-span-1 md:col-span-2">
                {" "}
                <HeaderTwo text={"Technology We Use"} />
              </div>
              <div className="hidden md:block bg-retailBg2 bg-contain bg-left-bottom bg-no-repeat min-h-[20vh]"></div>
            </div>
            <div className="grid grid-cols-5 gap-4 md:gap-8 justify-items-center">
              {technologyWeUse.map((item, index) => (
                <div key={index}>
                  <TechStack stack={item.technologies} />
                </div>
              ))}
            </div>
          </div>
        </DoublePageBorders>

        {/* solutions offered in edtexh */}
        <DoublePageBorders
          background={"bg-retailBg2 bg-cover bg-no-repeat bg-center"}
        >
          <div className="flex flex-col gap-8 scroll-mt-4" id={"services"}>
            {" "}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 ">
              {" "}
              <div className="col-span-1 md:col-span-2 flex flex-col gap-4 md:gap-8 items-start">
                {" "}
                <HeaderTwo text={"Solutions we offer in EdTech for clients"} />
                <MainText
                  text={
                    "As an experienced IT consulting services company, we understand how important it is for you that your IT strategy meets your business goals. Our team of IT consultants has a proven track of successfully completed projects. Tinqlab’s senior experts in information technology consulting can handle any challenge for multiple reasons:"
                  }
                  color={"text-[#12152E] opacity-50"}
                />
                <MainText
                  text={
                    "We achieve your results by thriving and personalizing our approach to each case."
                  }
                  color={"text-[#12152E] opacity-50"}
                />
                <MainText
                  text={
                    "We are driven by metrics and numbers; you can measure our promise by time, analytics, performance, and in the end, your outcome, especially given that we work to exceed your expectations."
                  }
                  color={"text-[#12152E] opacity-50"}
                />
                <div>
                  <Link href={"/"}>
                    <MainButton text={"Book consultation"} />
                  </Link>
                </div>
              </div>
              <div className="hidden md:block bg-edtech1 bg-contain bg-left-bottom bg-no-repeat min-h-[20vh]"></div>
            </div>
          </div>
        </DoublePageBorders>

        {/* consulting services we offer */}
        <PageBorders>
          <div
            id={"about"}
            className="scroll-mt-4 grid grid-cols-1 md:grid-cols-2 gap-8 "
          >
            <div className="flex flex-col gap-8 justify-start items-start ">
              <HeaderTwo text={"Consulting Services we Offer"} />

              <Link href={"/"}>
                <MainButton text={"Get a consultation"} />
              </Link>
            </div>
            <div className="grid grid-cols-1 gap-4 md:gap-8">
              {consultingServices.map((item, index) => (
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

        <PageBorders>
          <div className="flex flex-col gap-8 scroll-mt-4" id={"services"}>
            {" "}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 ">
              {" "}
              <div className="col-span-1 md:col-span-2">
                {" "}
                <HeaderTwo text={"Clients Feedback"} />
              </div>
            </div>
            <FeedbackCard />
          </div>
        </PageBorders>
      </div>
    </div>
  );
}
