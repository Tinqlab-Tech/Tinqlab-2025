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

export const metadata = {
  title: "Tinqlab - Expert software and blockchain developers",
  description:
    "We Build Efficient And Low Cost Web, Mobile And Blockchain Applications With Great User Interface And Experience. | Software development company in Nigeria.",
};

export default function Home() {
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
        "Our development team builds interactive e-learning web and mobile apps for education. These include apps for online courses, tutoring, language learning, coding, and more.",
    },
    {
      title: "Tutor booking platforms",
      subtitle:
        "We build web and mobile platforms to connect tutors with students. These include solutions for booking in-person or online tutoring sessions, as well as full-fledged tutoring marketplace platforms.",
    },
    {
      title: "Virtual classroom",
      subtitle:
        "We develop virtual classrooms and video streaming platforms for conducting live online classes, webinars, and video lectures. They can be used by schools, coaching institutes, and individual tutors.",
    },
  ];
  const edtechSoftwareSolutions = [
    {
      icon: mobile,
      title: "Mobile learning platforms",
      subtitle:
        "To create engaging corporate training solutions for iOS and Android so learners can access courses on the go.",
    },
    {
      icon: consultation,
      title: "Software consultation",
      subtitle:
        "To get expert advice on e-learning technologies, strategies, and best practices to achieve your training goals.",
    },
    {
      icon: custom,
      title: "Custom e-learning",
      subtitle:
        "To train employees on any device, from soft skills to technical expertise.",
    },
    {
      icon: comms,
      title: "Communication and engagement platforms ",
      subtitle: "To bridge the gap between schools, parents, and students.",
    },
    {
      icon: assessment,
      title: "Assessment platforms",
      subtitle:
        "To measure student progress, identify learning gaps, and personalize instruction.",
    },
    {
      icon: study,
      title: "Study collaboration tools",
      subtitle:
        "To foster real-time interaction and teamwork between students and teachers.",
    },
  ];

  const process = [
    {
      icon: mobile,
      title: "Initial discussion",
      subtitle:
        "When you first contact us, we will schedule an initial call to discuss your project needs and requirements. This helps us gain a clear understanding of your vision and goals.",
    },
    {
      icon: consultation,
      title: "Proposal",
      subtitle:
        "Based on our discussion, we will provide a comprehensive proposal outlining our recommended solution, timeframe, and associated costs.",
    },
    {
      icon: custom,
      title: "Scope Refining",
      subtitle:
        "Once you accept our proposal, we'll work with you to finalize the scope of the project by refining specifications, wireframes, designs, and development plans.",
    },
    {
      icon: comms,
      title: "Development ",
      subtitle:
        "Our development team uses an agile methodology with iterative development sprints, continuous feedback, and ongoing optimization. You'll be involved every step of the way, from reviewing wireframes to providing feedback.",
    },
    {
      icon: assessment,
      title: "Delivery and support",
      subtitle:
        "After completing the final testing and quality assurance checks, we'll deliver your software and provide ongoing support and maintenance.",
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

  return (
    <div className="min-h-screen">
      <div className="">
        <OtherPageHero
          bgImage={"bg-[#12152E]"}
          title={"Education Software Development Services"}
          subtitle={
            "TinqLab's FinTech software development expertise is a powerful tech partner who's here to create the best custom FinTech software for you! We also partner with some of the most proficient FinTech providers in the world: Galileo (banking as a service), Plaid (open banking), Finicity (open banking), and others to empower your services with trustworthy expertise."
          }
          btnLink={"/"}
          btnText={"Schedule a call"}
          image={""}
        />

        <PageBorders>
          <div
            id={"about"}
            className="scroll-mt-4 grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 lg:gap-8 "
          >
            <div className="flex flex-col gap-4 md:gap-8 justify-start items-start ">
              <HeaderTwo
                text={"Our educational software development services"}
              />

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
                <HeaderTwo text={"Solutions we offer in EdTech for clients"} />
                <MainText
                  text={
                    "Our product design services are not just about beautiful visualization but also tailorization to customers' needs and expectations. We provide you with complex market research to find out all clients’ pains and gains, analysis of digital products and provide a smooth process of digital transformation and product design services. Geniusee product designers have established a design process based on our practical expertise in 100+ projects that have performed well and won over the market!"
                  }
                  color={"text-[#12152E] opacity-50"}
                />
              </div>
              <div className="hidden md:block bg-arrowvector bg-contain bg-left-bottom bg-no-repeat h-full"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
              {" "}
              {edtechSoftwareSolutions.map((item, index) => (
                <div key={index}>
                  {" "}
                  <MainCard
                    title={item.title}
                    subtitle={item.subtitle}
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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 ">
              {" "}
              <div className="col-span-1 md:col-span-2 flex flex-col gap-4 md:gap-8 md:w-4/5">
                {" "}
                <HeaderTwo
                  text={
                    "We Understand that the key to success is clear communication"
                  }
                />
                <MainText
                  text={
                    "Are you looking for a full cycle product development? go no further. just fill out the contact us form and we will reach out immediately."
                  }
                  color={"text-[#12152E] opacity-50"}
                />
              </div>
              <div className="h-full flex items-center justify-start">
                {" "}
                <Link href={"/"}>
                  <MainButton text={"Contact Us"} />
                </Link>
              </div>
            </div>
          </div>
        </DoublePageBorders>
        <PageBorders>
          <div
            id={"about"}
            className="scroll-mt-4 grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 lg:gap-8 "
          >
            <div className="flex flex-col gap-4 md:gap-8 justify-start items-start ">
              <HeaderTwo text={"Our cooperation process"} />

              <Link href={"/"}>
                <MainButton text={"Book consultation"} />
              </Link>
            </div>
            <div className="grid grid-cols-1 gap-4 md:gap-8">
              {process.map((item, index) => (
                <div key={index}>
                  <MainCard
                    title={item.title}
                    subtitle={item.subtitle}
                    bgColor={null}
                    hasIcon={true}
                    icon={item.icon}
                  />
                </div>
              ))}
            </div>
          </div>
        </PageBorders>
        <DoublePageBorders background={"bg-[#EDF4FE]"}>
          <div className="flex flex-col gap-8 scroll-mt-4" id={"services"}>
            {" "}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 ">
              {" "}
              <div className="col-span-1 md:col-span-2">
                {" "}
                <HeaderTwo text={"Technologies We Use"} />
              </div>
              <div>image here</div>
            </div>
            <div className="grid grid-cols-3 gap-4 md:gap-8 justify-items-center md:w-3/4">
              {" "}
              {benefits.map((item, index) => (
                <div
                  key={index}
                  className="bg-white p-4 rounded-[10px] w-full flex items-center justify-center"
                >
                  <ImageWrapper
                    alt={"react"}
                    src={react}
                    width={100}
                    height={100}
                    style={`cursor-pointer object-cover `}
                  />
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
                <HeaderTwo text={"Why choose Tinqlab?"} />
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
