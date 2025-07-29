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
import heroImage from "@/public/images/retailHero.svg";
import TechStack from "@/components/section/TechStack";

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
        "To create engaging corporate training solutions for iOS and Android so learners can access courses on the go.",
    },
    {
      title: "Custom online store",
      subtitle:
        "To create engaging corporate training solutions for iOS and Android so learners can access courses on the go.",
    },
    {
      title: "Online catalog",
      subtitle:
        "To create engaging corporate training solutions for iOS and Android so learners can access courses on the go.",
    },
    {
      title: "Marketplace",
      subtitle:
        "To create engaging corporate training solutions for iOS and Android so learners can access courses on the go.",
    },
    {
      title: "Supplychain management systems",
      subtitle:
        "To create engaging corporate training solutions for iOS and Android so learners can access courses on the go.",
    },
    {
      title: "Customer account management software",
      subtitle:
        "To create engaging corporate training solutions for iOS and Android so learners can access courses on the go.",
    },
  ];

  const technologyWeUse = [
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

  const whyUs = [
    {
      title: "Result",
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
      title: "Custom learning systems",
      subtitle:
        "We develop custom LMS solutions for schools, universities, and educational institutions. We also can integrate your LMS with various third-party tools for a fully-featured solution.",
    },
    {
      title: "School management systems",
      subtitle:
        "Our school management software services handle everything from student admissions to transportation management. We can customize the solution to your school's specific needs",
    },
    {
      title: "E-learning platforms",
      subtitle:
        "Our development team builds interactive e-learning web and mobile apps for education. These include apps for online courses, tutoring, language learning, coding, and more. ",
    },
    {
      title: "Tutor booking platforms",
      subtitle:
        "We build web and mobile platforms to connect tutors with students. These include solutions for booking in-person or online tutoring sessions, as well as full-fledged tutoring marketplace platforms. ",
    },
    {
      title: "Virtual classroom",
      subtitle:
        "We develop virtual classrooms and video streaming platforms for conducting live online classes, webinars, and video lectures. They can be used by schools, coaching institutes, and individual tutors.",
    },
  ];

  return (
    <div className="min-h-screen">
      <div className="">
        <OtherPageHero
          bgImage={"bg-[#12152E]"}
          title={"Retail Software Development Services"}
          subtitle={
            "Retail software is becoming an indispensable assistant for organizing purchases, delivery, storage, personnel management, and other activities related to offline sales. Automating all these processes helps increase your business's productivity and focus human resources on the core activity — sales."
          }
          btnLink={"/"}
          btnText={"Schedule a call"}
          image={heroImage}
        />

        <PageBorders>
          <div
            id={"about"}
            className="scroll-mt-4 grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 lg:gap-8 "
          >
            <div className="flex flex-col gap-4 md:gap-8 justify-start items-start ">
              <HeaderTwo text={"Our retail mobile app development process"} />

              <MainText
                text={
                  "We believe focusing brings depth to our solutions. At TinqLab, we focus on digital transformation consulting services in FinTech, EdTech, retail, and real estate. We build complex strategies using latest solutions, product experience design services, profound product discovery as the basis for further achievements, technology consulting utilizing our TechLead's expertise, and many more."
                }
                color={"text-[#12152E] opacity-50"}
              />

              <Link href={"/"}>
                <MainButton text={"Book consultation"} />
              </Link>
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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 ">
              {" "}
              <div className="col-span-1 md:col-span-2 flex flex-col gap-4 md:gap-8">
                {" "}
                <HeaderTwo text={"Retail Software Solutions"} />
                <MainText
                  text={
                    "Our product design services are not just about beautiful visualization but also tailorization to customers' needs and expectations. We provide you with complex market research to find out all clients’ pains and gains, analysis of digital products and provide a smooth process of digital transformation and product design services. "
                  }
                  color={"text-[#12152E] opacity-50"}
                />
              </div>
              <div className="hidden md:block bg-retailBg bg-contain bg-left-bottom bg-no-repeat h-full"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
              {" "}
              {retailSoftwareSolutions.map((item, index) => (
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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 ">
              {" "}
              <div className="col-span-1 md:col-span-2 flex flex-col gap-4 md:gap-8">
                {" "}
                <HeaderTwo text={"Technology We Use"} />
                <MainText
                  text={
                    "No retail business owner can grow without implementing a stack of technologies that will best meet the company's challenges. With many years of retail software development experience, we consult our clients on what retail technologies can positively impact their business."
                  }
                  color={"text-[#12152E] opacity-50"}
                />
              </div>
              <div className="hidden md:block bg-retailBg2 bg-contain bg-left-bottom bg-no-repeat h-full"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
              {" "}
              {technologyWeUse.map((item, index) => (
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
            <TechStack />
          </div>
        </DoublePageBorders>
        <PageBorders>
          <div className="flex flex-col gap-8 scroll-mt-4" id={"services"}>
            {" "}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 ">
              {" "}
              <div className="col-span-1 md:col-span-2">
                {" "}
                <HeaderTwo text={"Benefits of retail software development"} />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
              {" "}
              {benefits.map((item, index) => (
                <div key={index}>
                  {" "}
                  <MoreContentCard
                    title={item.title}
                    items={item.items}
                    bgColor={null}
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
                <HeaderTwo
                  text={
                    "Why make Tinqlab your retail software development partner?"
                  }
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
              {" "}
              {whyUs.map((item, index) => (
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
      </div>
    </div>
  );
}
