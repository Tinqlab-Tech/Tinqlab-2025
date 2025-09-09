import { MainButton } from "@/components/button/MainButton";
import HomepageHero from "@/components/hero/HomepageHero";
import PageStarter from "@/components/section/PageStarter";
import PageBorders from "@/components/wrappers/PageBorders";
import MainText from "@/components/typography/MainText";
import HeaderOne from "@/components/typography/HeaderOne";
import features1 from "@/public/images/features1.png";
import { OutlineButton } from "@/components/button/OutlineButton";
import { IoIosAdd } from "react-icons/io";
import IndustryCard from "@/components/card/industryCard";
import Link from "next/link";
import TechStack from "@/components/section/TechStack";
import { SpecificationWrapper } from "@/components/wrappers/SpecificationWrapper";
import FeedbackCard from "@/components/card/FeedbackCard";
import DoublePageBorders from "@/components/wrappers/DoublePageBorders";
import AdsSlider from "@/components/section/AdsSlider";

export const metadata = {
  title: "Tinqlab - Expert software and blockchain developers",
  description:
    "We Build Efficient And Low Cost Web, Mobile And Blockchain Applications With Great User Interface And Experience. | Software development company in Nigeria.",
};

export default function Home() {
  const industryProduction = [
    {
      bgImage: features1,
      title: "Fintech",
      subtitle:
        "We're your go-to financial innovation - banking e-wallet, lending, trading and blockchain solutions",
      btnLink: "/",
      btnText: "Learn more",
    },
    {
      bgImage: features1,
      title: "Edtech",
      subtitle:
        "We're your go-to financial innovation - banking e-wallet, lending, trading and blockchain solutions",
      btnLink: "/",
      btnText: "Learn more",
    },
    {
      bgImage: features1,
      title: "Real Estate",
      subtitle:
        "To train employees on any device, from soft skills to technical expertise.",
      btnLink: "/",
      btnText: "Learn more",
    },
    {
      bgImage: features1,
      title: "Retail",
      subtitle:
        "We're your go-to financial innovation - banking e-wallet, lending, trading and blockchain solutions",
      btnLink: "/",
      btnText: "Learn more",
    },
  ];
  const ourPartners = [
    {
      icon: features1,
    },
    {
      icon: features1,
    },
    {
      icon: features1,
    },
    {
      icon: features1,
    },
    {
      icon: features1,
    },
  ];
  const getHelp = [
    {
      background: "bg-darkestBlue",
      title: "Web Development",
    },
    {
      background: "bg-features1",
      title: "Mobile Application Development",
    },
    {
      background: "bg-darkestBlue",
      title: "Discovery Phase",
    },
    {
      background: "bg-features1",
      title: "UI/UX Design",
    },
    {
      background: "bg-darkestBlue",
      title: "Quality Assurance",
    },
    {
      background: "bg-features1",
      title: "IT Security",
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
        <PageBorders background={"bg-mainGrey"}>
          <AdsSlider />
        </PageBorders>
        {/* Home Features */}
        <DoublePageBorders background={"bg-lightBlue "}>
          {" "}
          <div
            className=" scroll-mt-4 grid grid-cols-1 md:grid-cols-2 gap-8  bg-lightBlue h-full "
            id={"about"}
          >
            {" "}
            <div className="hidden md:block  bg-features1 bg- bg-no-repeat  "></div>
            <div className="flex flex-col gap-5  ">
              <PageStarter
                Title={"Discover how we can assist in achieving your goals!"}
                SubtitleText={
                  "Answer a few questions to aid us match our expertise and solutions to your industry."
                }
                color={"text-[#131313]"}
              />{" "}
              <MainText text={"Choose your industry"} />
              <div className="grid grid-cols-3 lg:grid-cols-4 items-center gap-4  ">
                <Link href={"/"}>
                  <MainButton text={"FinTech"} />
                </Link>
                <Link href={"/"}>
                  <MainButton text={"FinTech"} />
                </Link>
                <Link href={"/"}>
                  <MainButton text={"FinTech"} />
                </Link>
                <Link href={"/"}>
                  <OutlineButton text={"More"} icon={<IoIosAdd />} />
                </Link>
              </div>
            </div>
          </div>
        </DoublePageBorders>

        {/* Home Services */}
        <PageBorders>
          <div
            className=" scroll-mt-4 grid grid-cols-1 md:grid-cols-2 gap-8"
            id="services"
          >
            {" "}
            <div className="flex flex-col gap-8">
              <HeaderOne text={"Case studies"} color={"text-darkestBlue/50 "} />
              <HeaderOne text={"TinqFi - Automated digital assets platform"} />
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
                  <MainButton text={"Case details"} />
                </Link>
                <Link href={"/"}>
                  <MainButton text={"All cases studies"} />
                </Link>
              </div>
            </div>{" "}
            <div className="hidden md:block  bg-features1 bg-center bg-no-repeat "></div>
          </div>
        </PageBorders>

        {/* Industy */}
        <PageBorders>
          <div className="flex flex-col gap-8" id="industry">
            <div className="md:w-1/2">
              <HeaderOne
                text={"Build and scale securely with us in your domian"}
              />
            </div>
            <div className="grid md:grid-cols-2 gap-4 md:gap-8 ">
              {industryProduction.map((item, index) => (
                <div key={index}>
                  <IndustryCard
                    title={item.title}
                    subtitle={item.subtitle}
                    bgImg={item.bgImage}
                    btnLink={item.btnLink}
                    hasbtnText={true}
                    btnText={item.btnText}
                    background={"bg-darkBlue"}
                  />
                </div>
              ))}
            </div>
          </div>
        </PageBorders>

        {/* Our Partners */}
        <PageBorders>
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <HeaderOne text={"Our partners"} />
              <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4 md:gap-8 ">
                {ourPartners.map((item, index) => (
                  <div key={index}>
                    <TechStack stack={item.icon} />{" "}
                  </div>
                ))}
              </div>
            </div>

            {/* Get Help */}
            <div className="flex flex-col gap-4">
              <HeaderOne text={"How we can help you "} />
              <div className="grid md:grid-cols-3 gap-4 md:gap-8 ">
                {getHelp.map((item, index) => (
                  <div key={index}>
                    <div
                      className={`${item.background} p-[20px] md:py-[40px] flex  gap-8 justify-start items-center rounded-[10px] shadow-custom-primary min-h-full max-h-[40vh]`}
                    >
                      {" "}
                      <div
                        className={`text-[16px] lg:text-[22px] font-semibold leading-[24px] lg:leading-[32px] text-mainWhite gap-4 w-4/5 underline`}
                      >
                        {item.title}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* button Text */}
            <div className="grid md:grid-cols-2 gap-4 md:gap-8">
              <HeaderOne
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

        <PageBorders>
          <div className="flex flex-col gap-8" id="career">
            <div className="px-4">
              <HeaderOne text={"Testimonials"} />
            </div>

            <FeedbackCard />
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
