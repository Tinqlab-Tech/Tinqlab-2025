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
import fintechHerobg from "@/public/images/fintechHerobg.svg";
import TechStack from "@/components/section/TechStack";
import mobile2 from "@/public/icons/mobile2.svg";
import location from "@/public/icons/location.svg";
import file from "@/public/icons/file.svg";
import rep from "@/public/icons/rep.svg";
import star from "@/public/icons/star.svg";
import tv from "@/public/icons/tv.svg";
import javascript from "@/public/images/stacks/javascript.png";
import flutter from "@/public/images/stacks/flutter.png";
import java from "@/public/images/stacks/java.svg";
import swift from "@/public/images/stacks/swift.png";
import aws from "@/public/images/stacks/aws.png";
import vue from "@/public/images/stacks/vue.png";
import angular from "@/public/images/stacks/angular.png";

export const metadata = {
  title: "Tinqlab - Expert software and blockchain developers",
  description:
    "We Build Efficient And Low Cost Web, Mobile And Blockchain Applications With Great User Interface And Experience. | Software development company in Nigeria.",
};

export default function Home() {
  const softwareSolutions = [
    {
      icon: mobile2,
      title: "Blockchain-based platforms",
    },
    {
      icon: file,
      title: "Financial analysis solutions",
    },
    {
      icon: star,
      title: "Cryptocurrency exchanges",
    },
    {
      icon: tv,
      title: "Investment/savings solutions",
    },
    {
      icon: rep,
      title: "Multiple wallets types",
    },
    {
      icon: location,
      title: "Automated trading bots",
    },
  ];

  const softwareDevelopment = [
    {
      title: "Requirements",
      subtitle:
        "Our experience is enhanced by teamwork, allowing us to achieve exceptional results while cultivating a culture of mutual support.  We create extraordinary achievements by combining talents, dedication, and collaboration,",
    },
    {
      title: "Design",
      subtitle:
        "Our experience is enhanced by teamwork, allowing us to achieve exceptional results while cultivating a culture of mutual support.  We create extraordinary achievements by combining talents, dedication, and collaboration,",
    },

    {
      title: "Development",
      subtitle:
        "Our experience is enhanced by teamwork, allowing us to achieve exceptional results while cultivating a culture of mutual support.  We create extraordinary achievements by combining talents, dedication, and collaboration,",
    },
    {
      title: "Testing",
      subtitle:
        "Our experience is enhanced by teamwork, allowing us to achieve exceptional results while cultivating a culture of mutual support.  We create extraordinary achievements by combining talents, dedication, and collaboration,",
    },
    {
      title: "Release",
      subtitle:
        "Our experience is enhanced by teamwork, allowing us to achieve exceptional results while cultivating a culture of mutual support.  We create extraordinary achievements by combining talents, dedication, and collaboration,",
    },
    {
      title: "Support",
      subtitle:
        "Our experience is enhanced by teamwork, allowing us to achieve exceptional results while cultivating a culture of mutual support.  We create extraordinary achievements by combining talents, dedication, and collaboration,",
    },
  ];

  const fintechSoftwareDevelopment = [
    {
      title: "Online ordering systems",
      subtitle:
        "Online ordering systems are an essential tool for any retail enterprise. Expansion of custom retail software development opportunities, increased audience, profit growth, and business growth is only a partial list of benefits from introducing new technologies, especially in a competitive market.",
    },
    {
      title: "E-commerce platforms & POS software solutions",
      subtitle:
        "We develop software solutions for retail companies around the world. During the custom software development process, we use the best marketing and e-commerce platforms such as Shopify, SAP Hybris, AWS, Salesforce, Magento, Microsoft Dynamics CRM, PayPal, and more.",
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

  const workWithTinqlab = [
    {
      title: "Proven Fintech expertise",
      subtitle:
        "With a strong portfolio of successful projects across fintech, retail, edtech, and more, we bring domain-specific knowledge and technical excellence to every solution. From neobanks for Gen Z, blockchain ecosystems, and many more.",
    },
    {
      title: "Agile development",
      subtitle:
        "Our agile teams adapt quickly to evolving needs. We build fast, test early, and deliver results that align with your goals and market realities.",
    },
    {
      title: "Security and compliance",
      subtitle:
        "Security and regulatory compliance are embedded in every stage of our development process. We build with industry standards in mind, including GDPR, PCI-DSS, SOC 2, and PSD2 — so your product is both secure and compliant from day one.",
    },
    {
      title: "Experts with microservices",
      subtitle:
        "Our engineers are experienced in building modern, modular systems using microservices, enabling faster deployment, easier maintenance, and scalable performance across complex digital ecosystems.",
    },
    {
      title: "End-to-End Partnership",
      subtitle:
        "From strategy and product design to development, launch, and support, we partner with you through the full lifecycle — ensuring speed, quality, and long-term scalability.",
    },
  ];

  const developmentServices = [
    {
      title: "Banking software development",
      subtitle:
        "We design and build core banking systems, digital banking platforms, and custom tools that streamline operations and enhance customer experiences for both traditional and neobanks.",
    },
    {
      title: "Lending software",
      subtitle:
        "From loan origination and credit scoring to automated workflows and repayment systems, we develop end-to-end lending platforms that simplify borrowing for users and reduce risk for providers.",
    },
    {
      title: "e-wallet development",
      subtitle:
        "Our team creates secure, compliant, and user-friendly digital wallets that support fast transactions, multi-currency payments, and seamless integration with third-party services.",
    },
    {
      title: "Accounting software",
      subtitle:
        "We develop intuitive, scalable accounting tools that automate financial processes, improve accuracy, and support real-time financial reporting and compliance.",
    },
    {
      title: "Trading software",
      subtitle:
        "We engineer high-performance platforms for stock, forex, and crypto trading, complete with real-time analytics, market data integration, and user-focused dashboards.",
    },
    {
      title: "Risk management",
      subtitle:
        "Tinqlab builds intelligent risk analysis and compliance tools to help financial organizations detect fraud, monitor regulatory obligations, and safeguard assets effectively.",
    },
    {
      title: "Wealth and investment software",
      subtitle:
        "We deliver digital solutions that empower financial advisors and clients with smart portfolio tools, performance tracking, and personalized investment insights.",
    },
  ];

  const technologyWeUse = [
    { technologies: javascript },
    { technologies: flutter },
    { technologies: react },
    { technologies: java },
    { technologies: swift },
    { technologies: aws },
    { technologies: vue },
    { technologies: angular },
  ];

  return (
    <div className="min-h-screen">
      <div className="">
        <OtherPageHero
          bgImage={"bg-[#12152E]"}
          title={"Fintech Software Development Services"}
          subtitle={
            "TinqLab’s FinTech software development expertise is a powerful tech partner who’s here to create the best custom FinTech software for you! We’ve also partnered with some of the most proficient FinTech providers in the world."
          }
          btnLink={"/"}
          btnText={"Schedule a call"}
          image={fintechHerobg}
        />

        <PageBorders>
          <div
            id={"about"}
            className="scroll-mt-4 grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 lg:gap-8 "
          >
            <div className="flex flex-col gap-4 md:gap-8 justify-start items-start ">
              <HeaderTwo
                text={"Our Industry Expertise in Fintech Development"}
              />

              <MainText
                text={
                  "We believe focusing brings depth to our solutions. At TinqLab, we focus on digital transformation consulting services in FinTech, EdTech, retail, and real estate. We build complex strategies using latest solutions, product experience design services, profound product discovery as the basis for further achievements, technology consulting utilizing our TechLead's expertise, and many more."
                }
                color={"text-[#12152E] opacity-50"}
              />
            </div>
            <div className="grid grid-cols-1 gap-4 md:gap-8">
              {developmentServices.map((item, index) => (
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
        <PageBorders>
          <div className="flex flex-col gap-8 scroll-mt-4" id={"services"}>
            {" "}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 items-center ">
              {" "}
              <div className="col-span-1 md:col-span-2 flex flex-col gap-4 md:gap-8">
                {" "}
                <HeaderTwo
                  text={"TinqLab's Fintech software development solutions"}
                />
                <MainText
                  text={
                    "We believe focusing brings depth to our solutions. At TinqLab, we focus on digital transformation consulting services in FinTech, EdTech, retail, and real estate. We build complex strategies using latest solutions, product experience design services, profound product discovery as the basis for further achievements, technology consulting utilizing our TechLead's expertise, and many more."
                  }
                  color={"text-[#12152E] opacity-50"}
                />
              </div>
              <div className="hidden md:block bg-retailBg bg-contain bg-left-bottom bg-no-repeat min-h-[20vh] md:min-h-[30vh]"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2  gap-4 md:gap-8">
              {" "}
              {softwareSolutions.map((item, index) => (
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
            <div className="grid grid-cols-1 justify-items-center">
              <Link href={"/"}>
                <MainButton text={"Book consultation"} />
              </Link>
            </div>
          </div>
        </PageBorders>
        <DoublePageBorders background={"bg-[#EDF4FE]"}>
          <div className="flex flex-col gap-8 scroll-mt-4" id={"services"}>
            {" "}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 items-center">
              {" "}
              <div className="col-span-1 md:col-span-2 flex flex-col gap-4 md:gap-8">
                {" "}
                <HeaderTwo text={"Technology We Use"} />
              </div>
              <div className="hidden md:block bg-retailBg2 bg-contain bg-left-bottom bg-no-repeat min-h-[20vh] md:min-h-[30vh]"></div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
              {" "}
              {technologyWeUse.map((item, index) => (
                <div key={index}>
                  {" "}
                  <TechStack stack={item.technologies} />
                </div>
              ))}
            </div>
          </div>
        </DoublePageBorders>
        {/* our fintech development process */}
        <PageBorders>
          <div className="flex flex-col gap-8 scroll-mt-4" id={"services"}>
            {" "}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 items-center ">
              {" "}
              <div className="col-span-1 md:col-span-2 flex flex-col gap-4 md:gap-8">
                {" "}
                <HeaderTwo text={"Our Fintech Software Development Process"} />
                <MainText
                  text={
                    "We follow a structured and agile development process designed to deliver secure, scalable, and user-focused fintech solutions. Our approach ensures your product meets regulatory standards, adapts to market shifts, and delivers exceptional customer experiences."
                  }
                  color={"text-[#12152E] opacity-50"}
                />
              </div>
              <div className="hidden md:block bg-retailBg bg-contain bg-left-bottom bg-no-repeat min-h-[20vh] md:min-h-[30vh]"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2  gap-4 md:gap-8">
              {" "}
              {softwareDevelopment.map((item, index) => (
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
            <div className="grid grid-cols-1 justify-items-center">
              <Link href={"/"}>
                <MainButton text={"Book consultation"} />
              </Link>
            </div>
          </div>
        </PageBorders>

        <DoublePageBorders
          background={"bg-featuresbg bg-cover bg-no-repeat bg-center"}
        >
          <div className="flex flex-col gap-8 scroll-mt-4" id={"services"}>
            {" "}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
              {" "}
              <div className="col-span-1 md:col-span-2 flex flex-col gap-8 md:w-4/5">
                {" "}
                <HeaderTwo
                  text={
                    "We Understand that the key to success is clear communication"
                  }
                />
                <MainText
                  text={
                    "The product owner gets full access to project documentation and planning, which gives them control over the entire process of custom software development at all stages. Our FinTech software development services team is adaptive to clients’ schedules and workflow."
                  }
                  color={"opacity-50"}
                />
              </div>
              <div className=" flex items-center justify-start">
                {" "}
                <Link href={"/"}>
                  <MainButton text={"Schedule a call"} />
                </Link>
              </div>
            </div>
          </div>
        </DoublePageBorders>

        {/* why work with tinqlab */}
        <PageBorders>
          <div
            id={"about"}
            className="scroll-mt-4 grid grid-cols-1 md:grid-cols-2 gap-8 "
          >
            <div className="flex flex-col gap-8 justify-start items-start ">
              <HeaderTwo text={"Why Work with Tinqlab?"} />
              <MainText
                text={
                  "At Tinqlab, we do more than just build software — we solve real business challenges with technology that delivers measurable impact. Our approach is rooted in collaboration, innovation, and a deep understanding of the industries we serve."
                }
                color={"opacity-50"}
              />
              <Link href={"/"}>
                <MainButton text={"Get a consultation"} />
              </Link>
            </div>
            <div className="grid grid-cols-1 gap-4 md:gap-8">
              {workWithTinqlab.map((item, index) => (
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
      </div>
    </div>
  );
}
