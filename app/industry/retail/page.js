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
import heroImage from "@/public/images/retailHero.svg";
import TechStack from "@/components/section/TechStack";
import react from "@/public/images/stacks/react.png";
import java from "@/public/images/stacks/java.svg";
import swift from "@/public/images/stacks/swift.png";
import javascript from "@/public/images/stacks/javascript.png";
import mongodb from "@/public/images/stacks/mongodb.png";
import rn from "@/public/images/stacks/rn.png";
import nodejs from "@/public/images/stacks/nodejs.png";
import aws from "@/public/images/stacks/aws.png";
import SlideRight from "@/animation/SlideRight";
import SlideDown from "@/animation/SlideDown";
import SlideUp from "@/animation/SlideUp";
import SlideLeft from "@/animation/SlideLeft";
import Header from "@/components/partials/Header";

export const metadata = {
  title: "Tinqlab - Expert software and blockchain developers",
  description:
    "We Build Efficient And Low Cost Web, Mobile And Blockchain Applications With Great User Interface And Experience. | Software development company in Nigeria.",
};

export default function Home() {
  const retailSoftwareSolutions = [
    {
      title: "Dropshipping Platform",
      subtitle:
        "Launch or scale your retail business without holding inventory. Our dropshipping systems integrate with suppliers, automate order fulfillment, and ensure smooth customer delivery.",
    },
    {
      title: "E-Commerce Platform",
      subtitle:
        "Mobile-friendly, scalable, and conversion-focused online stores with secure payment processing, intuitive navigation, and advanced search for a seamless shopping experience.",
    },
    {
      title: "Customer Loyalty & CRM",
      subtitle:
        "Engage and retain customers with personalized offers, automated rewards, and detailed purchase history tracking to drive repeat sales.",
    },
    {
      title: "Omnichannel Integration",
      subtitle:
        "Unify your online, in-store, and mobile sales channels into one seamless experience, with synchronized inventory, pricing, and promotions.",
    },
    {
      title: "Supplychain management systems",
      subtitle:
        "Track and optimize the flow of goods from suppliers to customers. Real-time data helps reduce delays, cut costs, and ensure stock availability.",
    },
    {
      title: "Inventory Management",
      subtitle:
        "Get real-time stock updates, automated restocking alerts, and detailed reporting to avoid stockouts and overstocking.",
    },
  ];

  const technologyWeUse = [
    {
      title: "CRM & Loyalty Solutions",
      subtitle:
        "Our Customer Relationship Management (CRM) and loyalty systems help you understand, retain, and grow your customer base. We work with tools like Salesforce, HubSpot, or build custom CRMs to deliver centralized customer data, automated loyalty programs, purchase history tracking to power tailored marketing campaigns and many more.",
    },
    {
      title: "E-Commerce & Retail Platforms",
      subtitle:
        "We design and develop powerful online store platforms that are secure, scalable, and conversion-focused. Whether built on Shopify, Magento, WooCommerce, or as a custom solution. With TinqLab’s approach, you get an e-commerce platform that not only looks great but is optimized for sales, performance, and customer satisfaction.",
    },
    {
      title: "Diverse omnichannel solutions",
      subtitle:
        "With the help of well-designed software, you get an omnichannel retail model, which implies that the client themselves choose where and how to buy. We create solutions that get to the very essence of the omnichannel approach — to satisfy the needs of the client here and now, providing superior customer experience.",
    },
    {
      title: "POS software solutions",
      subtitle:
        "Our experience is enhanced by teamwork, allowing us to achieve exceptional results while cultivating a culture of mutual support.  We create extraordinary achievements by combining talents, dedication, and collaboration, propelling us to new heights of success.",
    },
  ];

  const ourTechnology = [
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
      title: "Custom-Fit Solutions",
      subtitle:
        "No one-size-fits-all templates. We design and develop software that matches your workflows, branding, and market strategy.",
    },
    {
      title: "Domain Expertise",
      subtitle:
        "We understand the challenges of modern retail from inventory control to customer engagement and build solutions tailored to your exact needs.",
    },
    {
      title: "Cost",
      subtitle:
        "Our innovative retail products stay up-to-date with the latest technologies and design trends. We deliver high-quality, fully customized retail software at competitive rates.",
    },
  ];

  const benefits = [
    {
      title: "Operational Efficiency and Productivity",
      items: [
        {
          title: "Automation: ",
          subtitle:
            "Retail software automates tasks like inventory tracking, order processing, and payment processing, saving time and reducing manual errors. ",
        },
        {
          title: "Real-time visibility:",
          subtitle:
            "Retailers gain real-time insights into inventory levels, sales data, and customer behavior, enabling data-driven decision-making. ",
        },
        {
          title: "Cost saving: ",
          subtitle:
            "Automation and optimized processes can lead to lower operational costs, improved inventory management, and reduced waste.  ",
        },
      ],
    },
    {
      title: "Enhanced Customer Experience:",
      items: [
        {
          title: "Improved customer service: ",
          subtitle:
            "Software solutions can empower employees with the tools they need to provide better customer service, address inquiries quickly, and resolve issues efficiently. ",
        },
        {
          title: "Loyalty program: ",
          subtitle:
            "Retail software facilitates the implementation of loyalty programs, rewards customers for their purchases, and encourages repeat business. ",
        },
        {
          title: "Personalized shopping experience:",
          subtitle:
            "Retail software allows for personalized recommendations, targeted promotions, and seamless omnichannel experiences, enhancing customer satisfaction. ",
        },
      ],
    },
    {
      title: "Data-Driven Decision-Making:",
      items: [
        {
          title: "Better Business Planning: ",
          subtitle:
            "Retail software helps retailers create more accurate business plans, set realistic goals, and track their progress. ",
        },
        {
          title: "Improved Forecasting:",
          subtitle:
            "Data analytics can help retailers forecast future demand, optimize inventory levels, and make more informed business decisions. ",
        },
        {
          title: "Competitive Advantage:",
          subtitle:
            "By leveraging data-driven insights, retailers can gain a competitive advantage in the market. ",
        },
      ],
    },
  ];

  const developmentServices = [
    {
      title: "Discovery & Strategy",
      subtitle:
        "We start by understanding your brand, customers, and business goals. This helps us design a mobile app that delivers real retail value.",
    },
    {
      title: "Design",
      subtitle:
        "We create sleek, intuitive interfaces that make shopping enjoyable and friction-free on any device.",
    },
    {
      title: "Agile Development",
      subtitle:
        "Our team builds your app in iterative sprints, ensuring rapid progress, continuous feedback, and high-quality results.",
    },
    {
      title: "Integration & Testing",
      subtitle:
        "We connect your app to POS, CRM, inventory systems, and payment gateways, then test for speed, security, and flawless performance",
    },
    {
      title: "Launch & Support",
      subtitle:
        "After the tests of retail solutions, we handle deployment on the App Store and Google Play, plus provide ongoing updates, maintenance, and feature enhancements.",
    },
  ];

  return (
    <div className="min-h-screen">
      <div className="">
        <OtherPageHero
          bgImage={"bg-[#12152E]"}
          title={"Retail Software Development Services"}
          subtitle={
            "At TinqLab, we build custom retail software solutions that help you sell smarter, serve customers better, and scale faster. Whether you run a single store or a nationwide chain, our technology turns shopping into a seamless experience both online and offline."
          }
          btnLink={"/contact-us"}
          btnText={"Schedule a call"}
          image={heroImage}
          isHeader={true}
        />

        <PageBorders overflow={null}>
          <div
            id={"about"}
            className="scroll-mt-4 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 lg:gap-8 "
          >
            <div className="md:sticky md:top-0 self-start flex flex-col gap-8 justify-start items-start  z-10 ">
              <div>
                <SlideUp>
                  <HeaderTwo
                    text={"Our retail mobile app development process"}
                  />
                </SlideUp>
              </div>
              <div>
                <SlideRight duration={1.5}>
                  <MainText
                    text={
                      "We believe focusing brings depth to our solutions. At TinqLab, we follow a proven, agile-driven process to deliver mobile apps that boost sales, improve customer engagement, and make retail operations seamless."
                    }
                    color={"text-[#12152E] opacity-50"}
                  />
                </SlideRight>
              </div>
              <SlideDown delay={0.2}>
                <Link href={"/contact-us"}>
                  <MainButton text={"Book consultation"} />
                </Link>
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
                    <HeaderTwo text={"Our Retail Software Solutions"} />
                  </SlideUp>
                </div>
                <div>
                  <SlideRight duration={1.5}>
                    <MainText
                      text={
                        "Our retail product design services are not just about beautiful visualization but also tailorization to customers' needs and expectations. We create tailored retail software that helps you sell more, manage better, and build lasting customer relationships. Our solutions cover the entire retail journey, from sourcing products to delighting loyal customers."
                      }
                      color={"text-[#12152E] opacity-50"}
                    />
                  </SlideRight>
                </div>
              </div>
              <div className="hidden md:block h-full">
                <SlideLeft>
                  <div className=" bg-retailBg bg-contain bg-left-bottom bg-no-repeat min-h-[40vh]"></div>
                </SlideLeft>
              </div>{" "}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2  gap-4 md:gap-8">
              {" "}
              {retailSoftwareSolutions.map((item, index) => (
                <div key={index}>
                  <SlideDown delay={index * 0.2} overflow={null}>
                    {" "}
                    <MainCard
                      title={item.title}
                      subtitle={item.subtitle}
                      bgColor={null}
                    />
                  </SlideDown>
                </div>
              ))}
            </div>
            <SlideDown delay={0.2}>
              <div className="grid grid-cols-1 justify-items-center">
                <Link href={"/contact-us"}>
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
                </div>
                <SlideRight duration={1.5}>
                  <MainText
                    text={
                      "No retail business owner can grow without implementing a stack of technologies that will best meet the company's challenges. With many years of retail software development experience, we consult our clients on what retail technologies can positively impact their business."
                    }
                    color={"text-[#12152E] opacity-50"}
                  />
                </SlideRight>
              </div>
              <div className="hidden md:block ">
                <SlideLeft>
                  <div className="bg-retailBg2 bg-contain bg-left-bottom bg-no-repeat min-h-[30vh]"></div>
                </SlideLeft>
              </div>{" "}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
              {" "}
              {technologyWeUse.map((item, index) => (
                <div key={index}>
                  <SlideDown delay={index * 0.2} overflow={null}>
                    {" "}
                    <MainCard
                      title={item.title}
                      subtitle={item.subtitle}
                      bgColor={null}
                    />
                  </SlideDown>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-4 xl:grid-cols-8 gap-4 md:gap-8">
              {" "}
              {ourTechnology.map((item, index) => (
                <div key={index}>
                  <SlideDown delay={index * 0.2} overflow={null}>
                    <TechStack stack={item.technologies} />{" "}
                  </SlideDown>
                </div>
              ))}
            </div>{" "}
          </div>
        </DoublePageBorders>
        <PageBorders>
          <div className="flex flex-col gap-8 scroll-mt-4" id={"services"}>
            {" "}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 ">
              {" "}
              <div className="col-span-1 md:col-span-2">
                <SlideUp>
                  {" "}
                  <HeaderTwo text={"Benefits of retail software development"} />
                </SlideUp>{" "}
              </div>
            </div>
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 md:gap-8">
              {" "}
              {benefits.map((item, index) => (
                <div key={index}>
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
                <SlideUp>
                  <HeaderTwo
                    text={
                      "Why make Tinqlab your retail software development partner?"
                    }
                  />{" "}
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
