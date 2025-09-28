import { MainButton } from "@/components/button/MainButton";
import HomepageHero from "@/components/hero/HomepageHero";
import PageStarter from "@/components/section/PageStarter";
import PageBorders from "@/components/wrappers/PageBorders";
import MainText from "@/components/typography/MainText";
import HeaderOne from "@/components/typography/HeaderOne";
import { OutlineButton } from "@/components/button/OutlineButton";
import { IoIosAdd } from "react-icons/io";
import IndustryCard from "@/components/card/industryCard";
import Link from "next/link";
import TechStack from "@/components/section/TechStack";
import { SpecificationWrapper } from "@/components/wrappers/SpecificationWrapper";
import FeedbackCard from "@/components/card/FeedbackCard";
import DoublePageBorders from "@/components/wrappers/DoublePageBorders";
import AdsSlider from "@/components/section/AdsSlider";
import fintech from "@/public/images/FintechIcon.svg";
import edtech from "@/public/images/EdtechIcon.svg";
import retail from "@/public/images/RetailIcon.svg";
import realEstate from "@/public/images/RealEstateIcon.svg";
import bitgert from "@/public/images/stacks/bitgert.png";
import tatum from "@/public/images/stacks/tatum.png";
import aws from "@/public/images/stacks/aws.png";
import polygon from "@/public/images/stacks/polygon.png";
import HeaderTwo from "@/components/typography/HeaderTwo";
import DiscoverUs from "@/components/section/DiscoverUs";

export const metadata = {
  title: "Tinqlab - Expert software and blockchain developers",
  description:
    "We Build Efficient And Low Cost Web, Mobile And Blockchain Applications With Great User Interface And Experience. | Software development company in Nigeria.",
};

export default function Home() {
  const industryProduction = [
    {
      bgImage: fintech,
      title: "Fintech",
      subtitle:
        "We're your go-to financial innovation - banking e-wallet, lending, trading and blockchain solutions",
      btnLink: "/",
      btnText: "Learn more",
    },
    {
      bgImage: edtech,
      title: "Edtech",
      subtitle:
        "We're your go-to financial innovation - banking e-wallet, lending, trading and blockchain solutions",
      btnLink: "/",
      btnText: "Learn more",
    },
    {
      bgImage: realEstate,
      title: "Real Estate",
      subtitle:
        "To train employees on any device, from soft skills to technical expertise.",
      btnLink: "/",
      btnText: "Learn more",
    },
    {
      bgImage: retail,
      title: "Retail",
      subtitle:
        "We're your go-to financial innovation - banking e-wallet, lending, trading and blockchain solutions",
      btnLink: "/",
      btnText: "Learn more",
    },
  ];
  const ourPartners = [
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
    {
      icon: polygon,
    },
  ];
  const getHelp = [
    {
      background: "bg-getHelpbg1",
    },
    {
      background: "bg-getHelpbg2",
    },
    {
      background: "bg-getHelpbg3",
    },
    {
      background: "bg-getHelpbg4",
    },
    {
      background: "bg-getHelpbg5",
    },
  ];

  const singleServive = [
    "Web development",
    "Project management",
    "UI/UX Design",
    "DevOps",
    "QA/QC Testing",
    "Mobile App",
  ];

  const softwareDevelopment = [
    {
      title: "Our Software Development Process",
      subTitle:
        "Engaging in software development projects entails a complex and iterative process, necessitating meticulous planning, skillful execution, and continuous improvement. At TinqLab, we recognize the significance of extracting insights from each stage of the software development lifecycle, encompassing business analysis and the development of a software project, to effectively navigate from inception to launch while managing development costs.",
      items: [
        {
          title: "Project initiation",
          subTitle:
            "During the discovery phase, as part of our software consulting services, we delve deeply into gaining comprehensive insights into your business needs, uncovering opportunities, and defining clear goals for the project. In-depth consultations, market research, and stakeholder interviews, integral to our software consulting approach, help us identify pain points and lay the foundation for a transformative software solution tailored to your project.",
        },
        {
          title: "Project Planning",
          subTitle:
            "To guarantee a successful and efficient execution of software products, we emphasize meticulous planning. Collaborating with our team, you formulate a detailed roadmap, delineate the project scope, set deadlines, and allocate resources. The process is accompanied by clear communication and effective coordination to promptly achieve the best results.",
        },
        {
          title: "Design",
          subTitle:
            "The design phase bridges the gap between concept and reality. Our design team creates wireframes, mockups, and prototypes that visualize the final product. This stage include User Experience (UX) Design, User Interface (UI) Design and prototyping.",
        },
        {
          title: "Agile Development",
          subTitle:
            "Agile development, with its emphasis on iterative and incremental progress, along with continuous feedback and course correction throughout the development process, showcases a fascinating ability to adapt to changes. This, coupled with the collaborative approach fostered by agile methodologies, contributes to successful project outcomes. The end result is a product that genuinely aligns with the evolving needs of the target audience. This approach is further enhanced when guided by effective technology consulting.",
        },
        {
          title: "Quality Assurance Testing",
          subTitle:
            "TinqLab is committed to delivering a seamless user experience, and to ensure this, we implement rigorous quality assurance testing, leveraging a robust quality management system. Our QA engineers meticulously evaluate every aspect of the web product, conducting comprehensive tests to identify and resolve potential issues or bugs. As part of our custom web app development services, we also offer QA automation testing services for both mobile and web applications.",
        },
        {
          title: "Delivery and Deployment",
          subTitle:
            "In this pivotal stage of software development process, our dedicated team meticulously configures your software for deployment, considering all technical specifications and requirements. Our goal is not just to deliver software but to ensure a successful launch that aligns seamlessly with your business objectives.",
        },
        {
          title: "Maintenance and Support",
          subTitle:
            "Your software is in good hands. We understand that software development is an ongoing process. Once your software is deployed, we offer a comprehensive maintenance and support service to ensure that it continues to meet your needs and perform at its best.",
        },
      ],
    },
  ];
  return (
    <div className="min-h-screen">
      <div className="">
        <HomepageHero />
        {/* Ads slider */}
        <PageBorders background={"bg-mainGrey"}>
          <AdsSlider />
        </PageBorders>

        {/* Discover Us */}
        <DoublePageBorders background={"bg-lightBlue"} padding={null}>
          <DiscoverUs />
        </DoublePageBorders>

        {/* Case Studies */}
        <PageBorders>
          <div
            className=" scroll-mt-4 grid grid-cols-1 md:grid-cols-2 gap-8"
            id="services"
          >
            {" "}
            <div className="flex flex-col gap-8">
              <HeaderTwo text={"Case studies"} color={"text-darkestBlue/50 "} />
              <HeaderTwo text={"TinqFi - Automated digital assets platform"} />
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
              <MainText
                text={
                  "TinqLab Technologies was excited to work with TinqFi team, creating together an online tutoring platform that reshaped school education. the was a 100% reform and reconfiguration of the industry."
                }
              />
              <div className="flex gap-4">
                <Link href={"/"}>
                  <MainButton
                    text={"Case details"}
                    bgcolor={"bg-darkestBlue"}
                  />
                </Link>
                <Link href={"/"}>
                  <MainButton
                    text={"All cases studies"}
                    bgcolor={"bg-mainBlack/50"}
                  />
                </Link>
              </div>
            </div>{" "}
            <div className="hidden md:block  bg-features2 bg-contain bg-center bg-no-repeat  "></div>
          </div>
        </PageBorders>

        {/* Build and Scale */}
        <PageBorders padding={null}>
          <div className="relative bg-darkestBlue " id="industry">
            {" "}
            <div className="absolute top-0 left-0 w-full z-0 bg-mainWhite  h-[30vh] lg:h-[25vh] xl:h-[40vh]"></div>
            <PageBorders background={"relative"}>
              <div className="flex flex-col gap-4 md:gap-8">
                <div className="relative z-10 md:w-1/2">
                  <HeaderTwo
                    text={"Build and scale securely with us in your domain"}
                  />
                </div>
                <div className=" relative z-10  grid md:grid-cols-2 gap-4 md:gap-8">
                  {industryProduction.map((item, index) => (
                    <IndustryCard
                      key={index}
                      title={item.title}
                      subtitle={item.subtitle}
                      bgImg={item.bgImage}
                      btnLink={item.btnLink}
                      hasbtnText={true}
                      btnText={item.btnText}
                      background={"bg-darkBlue"}
                    />
                  ))}
                </div>{" "}
              </div>
            </PageBorders>
          </div>
        </PageBorders>

        <PageBorders padding={null}>
          <div className="relative bg-lightBlue " id="industry">
            {" "}
            <div className="absolute top-0 left-0 w-full z-0 bg-mainWhite  h-[30vh] lg:h-[25vh] xl:h-[40vh]"></div>
            <PageBorders background={"relative"}>
              <div className="flex flex-col gap-12">
                <HeaderTwo text={"How we can help you"} />
                {/* Get Help */}
                <div className="flex gap-4 md:gap-8">
                  {getHelp.map((item, index) => (
                    <div
                      key={index}
                      className={`${item.background} flex-grow transition-all duration-300 hover:flex-[2] bg-cover bg-no-repeat bg-center overflow-hidden rounded-[10px] shadow-custom-primary min-h-[40vh] max-h-[60vh]`}
                    ></div>
                  ))}
                </div>

                <div className="grid md:grid-cols-2 gap-4 md:gap-8">
                  <HeaderTwo
                    text={"Engage with our experts: Free discovery session"}
                  />
                  <div className="flex flex-col justify-center gap-5">
                    <MainText
                      text={
                        "Through some basic info we'll schedule a 30 minute-call to discover how we can collaborate."
                      }
                      color={"opacity-50"}
                    />
                    <MainText
                      text={
                        "Our team of experts is here to identify ways to enhance and scale your digital solutions."
                      }
                      color={"opacity-50"}
                    />
                    <Link href={"/"}>
                      <MainButton text={"Start today"} />
                    </Link>
                  </div>
                </div>
              </div>
            </PageBorders>
          </div>
        </PageBorders>

        <PageBorders>
          <div id="career">
            <FeedbackCard title={"Testimonials"} />
          </div>
        </PageBorders>
        <PageBorders>
          <div className="">
            {" "}
            {softwareDevelopment.map((item, index) => (
              <div key={index}>
                {" "}
                <SpecificationWrapper
                  useIndexes={true}
                  title={item.title}
                  subTitle={item.subTitle}
                  items={item.items}
                  bgColor={"bg-darkBlue"}
                />
              </div>
            ))}{" "}
          </div>
        </PageBorders>
      </div>
    </div>
  );
}
