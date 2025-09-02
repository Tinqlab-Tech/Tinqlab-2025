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
import HeaderOne from "@/components/typography/HeaderOne";
import FeedbackCard from "@/components/card/FeedbackCard";

export const metadata = {
  title: "Tinqlab - Expert software and blockchain developers",
  description:
    "We Build Efficient And Low Cost Web, Mobile And Blockchain Applications With Great User Interface And Experience. | Software development company in Nigeria.",
};

export default function Home() {
  const productDesignServices = [
    {
      title: "Market & User Research",
      subtitle:
        "We uncover real customer needs, challenges, and behaviors, then translate those insights into opportunities for growth. Our market and user research helps you validate product ideas, shape meaningful user journeys, and ensures that your digital experience aligns with real market demand. Build with confidence, backed by data and direct user insight.",
    },
    {
      title: "Brand Identity",
      subtitle:
        "Transform functional products into memorable brands through purposeful design. We craft visual identities that reflect your story, build trust, and resonate with the audience you're meant to serve. From logos to complete design systems, we ensure your brand stands out and speaks clearly to the people who matter most.",
    },
    {
      title: "User Testing & Usability Audits",
      subtitle:
        "A great design means nothing if it doesn't work for real users. We validate your product through hands-on user testing and in-depth usability audits, uncovering how users actually interact with your product, identifies friction points, and compares your UX against industry standards and competitors. By testing assumptions early, we ensure your product not only looks good but truly delivers on functionality, clarity, and user satisfaction.",
    },
    {
      title: "UI/UX Design (Functional Prototyping)",
      subtitle:
        "At this stage, Tinqlab's product design team, led by a dedicated project manager—transforms research insights into a complete set of UX prototypes. We craft user flows, wireframes, and interactive prototypes that form the foundation of your product's experience. Guided by strategy and creativity, our UI design process includes mood boards, visual concepts, and a full set of design assets tailored for all screen sizes and platforms. ",
    },
    {
      title: "A/B Testing",
      subtitle:
        "Making the right design decisions shouldn't rely on guesswork. We use A/B testing to compare design variations in real-world conditions, so you can see exactly what resonates with your users. By measuring user behavior and conversion metrics, we identify what works best and why. With Tinqlab, you don't just launch—you learn, adapt, and grow smarter.",
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

  const whyUs = [
    {
      title: "Flexibility",
      subtitle:
        "Our Edtech software development services are customized for each project, so we can pivot quickly as requirements change.",
    },
    {
      title: "Experience",
      subtitle:
        "Our software engineers have worked with educational organizations and companies around the world, gaining valuable expertise in the education domain.",
    },
    {
      title: "Expertise",
      subtitle:
        "Our innovative education products stay up-to-date with the latest technologies and design trends in the education industry to create solutions that enhance the learning experience.",
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
  const clientFeedback = [
    {
      description:
        "“TinqLab has helped us get to market faster, allowing us to fill products gaps easily.”",
      icon: features1,
      title: "Gavin Aaron",
      subTitle: "Lead Software Developer, Hungrit Ltd",
    },
    {
      description:
        "“They were able to handle everything we threw at them fairly easily.”",
      icon: features1,
      title: "Dimitry Konoval",
      subTitle: "Founder & CEO, BlackBunny Capital",
    },
  ];
  return (
    <div className="min-h-screen">
      <div className="">
        <OtherPageHero
          bgImage={null}
          image={edtechHero}
          title={"Digital Product Design Services"}
          subtitle={
            "Building great digital products requires dedication, design thinking, sharp hard skills, domain expertise, and sincere empathy for end-customer needs. The digital product design services by TinqLab include all of that, along with a cutting-edge tech stack and brilliant custom development. You should not agree to less! Create digital experiences that engage people at every touchpoint with us."
          }
          btnLink={"/"}
          btnText={"Schedule a call"}
        />

        {/* digital product */}
        <PageBorders>
          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 bg-lightBlue p-6 rounded-[20px] scroll-mt-4"
            id={"services"}
          >
            {" "}
            <div className="col-span-1 md:col-span-2 flex flex-col gap-4 md:gap-8 items-center">
              {" "}
              <HeaderTwo text={"Digital product Experience Design Services"} />
              <MainText
                text={
                  "At Tinqlab, our product design services blend creativity, strategy, and user insight to craft digital experiences that are not only beautiful, but functional, intuitive, and backed by data. We help businesses build products users love through a holistic design process focused on value, usability, and performance."
                }
                color={"text-[#12152E] opacity-50"}
              />
            </div>
            <div className="hidden md:block bg-edtech1 bg-contain bg-left-bottom bg-no-repeat min-h-[20vh]"></div>
          </div>
        </PageBorders>

        {/* digital product design services */}
        <PageBorders>
          <div className="flex flex-col gap-8 scroll-mt-4" id={"services"}>
            {" "}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 ">
              <div className="flex flex-col gap-8 items-start ">
                <HeaderTwo text={"TinqLab's Digital Product Design Services"} />
                <Link href={"/"}>
                  <MainButton text={"Get a consultation"} />
                </Link>
              </div>
              <div className="grid grid-cols-1  gap-4 md:gap-8">
                {" "}
                {productDesignServices.map((item, index) => (
                  <div key={index}>
                    {" "}
                    <MainCard
                      title={item.title}
                      subtitle={item.subtitle}
                      bgColor={null}
                      useIndex={true}
                      index={index + 1}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>{" "}
        </PageBorders>

        {/*Technology we use  */}
        <DoublePageBorders background={"bg-lightBlue"}>
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
            <div className="grid grid-cols-3 md:grid-cols-6 gap-4 md:gap-8 justify-items-center">
              {technologyWeUse.map((item, index) => (
                <div key={index}>
                  <TechStack stack={item.technologies} />
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
              <div className="col-span-1 md:col-span-2 flex flex-col gap-4 md:gap-8 items-center">
                {" "}
                <HeaderTwo text={"Our Design Model"} />
                <MainText
                  text={
                    "Our product design services are not just about beautiful visualization but also tailorization to customers' needs and expectations. We provide you with complex market research to find out all clients’ pains and gains, analysis of digital products and provide a smooth process of digital transformation and product design services. Geniusee product designers have established a design process based on our practical expertise in 100+ projects that have performed well and won over the market!"
                  }
                  color={" opacity-50"}
                />
              </div>
              <div className="hidden md:block bg-edtech1 bg-contain bg-left-bottom bg-no-repeat min-h-[20vh]"></div>
            </div>
            <div className="">content</div>
          </div>
        </PageBorders>

        {/* benefit of working with tinqlab */}
        <PageBorders background={"bg-lightBlue"}>
          <div className="flex flex-col gap-8 scroll-mt-4" id={"services"}>
            {" "}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 items-center ">
              <div className="col-span-1 md:col-span-2">
                {" "}
                <HeaderTwo text={"Benefits Of Working With TinqLab"} />
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
                    bgColor={null}
                  />
                </div>
              ))}
            </div>
          </div>
        </PageBorders>

        <PageBorders>
          <div className="flex flex-col gap-8" id="career">
            <div className="px-4">
              <HeaderOne text={"Testimonials"} />
            </div>
            <div className="grid md:grid-cols-2 gap-4 md:gap-8 ">
              {clientFeedback.map((item, index) => (
                <div key={index}>
                  <FeedbackCard
                    description={item.description}
                    bgColor={null}
                    hasIcon={true}
                    icon={item.icon}
                    title={item.title}
                    subTitle={item.subTitle}
                  />
                </div>
              ))}
            </div>
          </div>
        </PageBorders>
      </div>
    </div>
  );
}
