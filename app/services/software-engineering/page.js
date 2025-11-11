import { MainButton } from '@/components/button/MainButton';
import Link from 'next/link';
import PageBorders from '@/components/wrappers/PageBorders';
import MainText from '@/components/typography/MainText';
import react from '@/public/images/react.png';
import OtherPageHero from '@/components/hero/OtherPageHero';
import HeaderTwo from '@/components/typography/HeaderTwo';
import DoublePageBorders from '@/components/wrappers/DoublePageBorders';
import MoreContentCard from '@/components/card/MoreContentCard';
import { SpecificationItem } from '@/components/section/SpecificationItem';
import softwareHerobg from '@/public/images/softwareHerobg.png';
import TechStack from '@/components/section/TechStack';
import java from '@/public/images/stacks/java.svg';
import flutter from '@/public/images/stacks/flutter.png';
import aws from '@/public/images/stacks/aws.png';
import React from '@/public/images/stacks/react.png';
import javascript from '@/public/images/stacks/javascript.png';
import swift from '@/public/images/stacks/swift.png';
import vue from '@/public/images/stacks/vue.png';
import angular from '@/public/images/stacks/angular.png';
import ServicesCard from '@/components/card/ServicesCard';
import FeedbackCard from '@/components/card/FeedbackCard';
import box from '@/public/icons/box.png';
import connect from '@/public/icons/connect.png';
import network from '@/public/icons/Network.png';
import cloud from '@/public/icons/cloud.png';
import mobile3 from '@/public/icons/mobile3.png';
import wallet from '@/public/icons/wallet.png';
import web from '@/public/icons/Web.png';
import wifi from '@/public/icons/wifi.png';
import fintech from '@/public/icons/fintech.png';
import realEstate from '@/public/icons/realEstate.png';
import edtech from '@/public/icons/edtech.png';
import retail from '@/public/icons/retail.png';
import SlideDown from '@/animation/SlideDown';
import SlideUp from '@/animation/SlideUp';
import SlideRight from '@/animation/SlideRight';
import SlideLeft from '@/animation/SlideLeft';
import BenefitCard from '@/components/card/Benefitcard';
import retailBg2 from '@/public/images/retailBg2.svg';
import ImageWrapper from '@/components/wrappers/ImageWrapper';

export const metadata = {
  title: 'Tinqlab - Expert software and blockchain developers',
  description:
    'We Build Efficient And Low Cost Web, Mobile And Blockchain Applications With Great User Interface And Experience. | Software development company in Nigeria.',
};

export default function Home() {
  const softwareEngineeringSolution = [
    {
      bgIcon: box,
      title: 'Custom blockchain development',
      subtitle:
        'We offer end-to-end blockchain development services to build secure, decentralized applications and platforms. Our blockchain developers have experience with Ethereum, Hyperledger Fabric, R3 Corda, and other blockchain frameworks.',
    },
    {
      bgIcon: wallet,
      title: 'Software consulting',
      subtitle:
        'We guide you through every phase of the software lifecycle from planning and architecture to optimization and transformation ensuring solutions align with business goals, industry standards, and emerging tech trends.',
    },
    {
      bgIcon: network,
      title: 'API Integration',
      subtitle:
        "We offer seamless API integration services that connect your systems, platforms, and applications to streamline operations and enhance functionality. Whether you're integrating third-party services or building custom APIs, we ensure secure, efficient, and scalable solutions that power business agility.",
    },
    {
      bgIcon: connect,
      title: 'Enterprise software development',
      subtitle:
        'Tinqlab delivers robust, scalable, and tailored enterprise software solutions that streamline complex business processes and drive organizational efficiency. We design and build powerful systems that support everything from internal operations to customer engagement at scale.',
    },
    {
      bgIcon: web,
      title: 'Web development',
      subtitle:
        'We build high-performance, user-centric websites and web applications that meet the evolving demands of modern businesses. Our web development services blend sleek design with powerful functionality to create digital experiences that are fast, secure, and scalable.',
    },
    {
      bgIcon: mobile3,
      title: 'Mobile app development',
      subtitle:
        'Our software engineers use leading frameworks to develop engaging iOS and Android apps that provide seamless user experiences. We incorporate best practices for security, performance, and UX design to build apps that delight your customer',
    },
    {
      bgIcon: wifi,
      title: 'IoT development',
      subtitle:
        "We build IoT systems from the ground up, handling everything from firmware and hardware engineering to mobile apps and cloud platforms. When you work with us, you're getting a trusted partner in IoT development. We understand your vision and craft tailored software solutions that transform the way people live and work.",
    },
    {
      bgIcon: cloud,
      title: 'DevOps',
      subtitle:
        'At Tinqlab, our DevOps services bridge the gap between development and operations to enable faster, more reliable software delivery. We automate and streamline workflows to ensure continuous integration, continuous deployment (CI/CD), and real-time monitoring.',
    },
  ];
  const tinqlabBenefits = [
    {
      title: 'Create a customer-centric solution',
      items: [
        {
          subtitle:
            'With the Design Thinking framework and profound discovery, we reach the heart of the clients’ pain points and create digital products that make them happy. No matter whether we talk about cloud based solutions or mobile apps, digital product design has no limits!',
        },
      ],
    },

    {
      title: 'Transparency and Agile',
      items: [
        {
          subtitle:
            'We provide consistent and clear communication at every stage of the estimated workflow by conducting digital product design using the Agile-based approach so our clients can create and modify a team of highly skilled engineers, designers, and business analysts as needed.',
        },
      ],
    },
    {
      title: 'Cross-platform experience',
      items: [
        {
          subtitle:
            'As a digital product design company, we aim to help users switch between platforms and freely engage with your product on the go. It’s not only about visual design, but access and compliance. The experience across multiple devices has to be seamless and fast.',
        },
      ],
    },

    {
      title: 'Choose cost-effective solutions',
      items: [
        {
          subtitle:
            'We build interfaces by integrating the functions, ideas, and technologies that shape trends. We can offer you a cost-effective full-stack solution, from idea validation to product development, launch, and support.',
        },
      ],
    },

    {
      title: 'Scaling and continuous development',
      items: [
        {
          subtitle:
            "Not only we design digital products. With flexible development methodologies, user testing techniques, and a continuous development cycle that's open to modifications and upgrades.",
        },
      ],
    },
  ];

  const expertise = [
    {
      icon: fintech,
      title: 'Fintech',
      subtitle:
        "Financial technology company engage us to design and build secure, scalable, and compliant fintech solutions that power the future of finance. Whether you're launching a digital wallet, building a lending platform, or integrating blockchain into financial services, we deliver robust technology tailored to modern financial ecosystems.",
    },
    {
      icon: edtech,
      title: 'Edtech',
      subtitle:
        'Education technology companies turn to us to develop cutting-edge EdTech solutions that make learning more accessible, engaging, and effective. From virtual classrooms to AI-powered learning platforms, we empower institutions, educators, and learners with the digital tools they need to succeed.',
    },
    {
      icon: realEstate,
      title: 'Real Estate',
      subtitle:
        'We build powerful, user-friendly real estate platforms that simplify property management, enhance listings, and improve customer engagement. Our solutions are designed to streamline operations for agencies, developers, and property tech startups.',
    },
    {
      icon: retail,
      title: 'Retail',
      subtitle:
        'We collaborates with retailers to create seamless e-commerce experiences that connect brands with customers and drive business growth, and intelligent analytics tools designed to optimize operations, boost sales, and elevate customer satisfaction.',
    },
  ];

  const softwareDevelopmentProcess = [
    {
      title: 'Idea',
      subtitle:
        'We begin by understanding the client’s vision, business challenges, and user expectations. This helps us define project goals, technical requirements, and a clear roadmap.',
    },
    {
      title: 'Planning & Architecture',
      subtitle:
        'In cooperation with you, our team creates a detailed development plan, system architecture, and tech stack that ensures scalability, security, and long-term performance.',
    },
    {
      title: 'Design',
      subtitle:
        'We design intuitive, user-friendly interfaces that align with the brand identity and offer a seamless user experience across all devices.',
    },

    {
      title: 'Development',
      subtitle:
        'We break development into short sprints, allowing for rapid delivery, continuous feedback, and quick adaptation to evolving requirements. while maintaining high code quality and maintaining budget.',
    },
    {
      title: 'Testing & Deployment',
      subtitle:
        'Once tested, the software is deployed to the production environment using secure, efficient, and scalable deployment practices.',
    },
    {
      title: 'Maintenance & Support',
      subtitle:
        'After launch, we provide ongoing support, performance monitoring, and regular updates to ensure the solution continues to meet evolving business needs.',
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
          bgImage={null}
          image={softwareHerobg}
          title="Software Engineering"
          subtitle="At Tinqlab, we turn bold ideas into powerful, high-performance digital solutions. From concept to launch, we deliver full-cycle development that’s fast, scalable, and built to drive results. With the right tech partner, your possibilities are limitless."
          btnLink="/"
          btnText="Schedule a call"
          hasNav={true}
          isHeader={false}
        />

        {/* our software solutions */}
        <PageBorders>
          <div id="about" className="grid scroll-mt-4 grid-cols-1 gap-8">
            <HeaderTwo text="Our Software Engineering Solutions" />

            <div className="grid gap-4 md:grid-cols-2 md:gap-8">
              {softwareEngineeringSolution.map((item, index) => (
                <SlideDown key={index} delay={index * 0.2}>
                  <SpecificationItem
                    bgIcon={item.bgIcon}
                    title={item.title}
                    subTitle={item.subtitle}
                  />
                </SlideDown>
              ))}
            </div>
          </div>
        </PageBorders>

        {/*Technology we use  */}
        <DoublePageBorders background={'bg-[#EDF4FE]'}>
          <div className="flex scroll-mt-4 flex-col gap-8" id={'services'}>
            {' '}
            <div className="grid grid-cols-1 items-center gap-4 md:grid-cols-3 md:gap-8">
              {' '}
              <div className="col-span-1 md:col-span-2">
                <HeaderTwo text={'Technology Stack We Use'} />
              </div>
              <SlideLeft>
                {' '}
                <div className="hidden h-full justify-center overflow-hidden md:flex">
                  {' '}
                  <ImageWrapper
                    src={retailBg2}
                    alt={'about Tinqlab'}
                    width={300}
                    height={300}
                    style={' bg-contain bg-center bg-no-repeat'}
                  />{' '}
                </div>{' '}
              </SlideLeft>
            </div>
            <div className="grid grid-cols-4 justify-items-center gap-4 md:gap-8 lg:grid-cols-8">
              {technologyWeUse.map((item, index) => (
                <div key={index}>
                  <SlideDown delay={index * 0.2}>
                    <TechStack stack={item.technologies} />
                  </SlideDown>
                </div>
              ))}
            </div>
          </div>
        </DoublePageBorders>

        {/* our Experties */}
        <PageBorders>
          <div
            id={'about'}
            className="relative grid h-full scroll-mt-4 grid-cols-1 gap-8 md:grid-cols-2"
          >
            <div className="z-10 flex flex-col items-start justify-start gap-8 self-start bg-white py-4 md:sticky md:top-0">
              <HeaderTwo text={'Our Expertise Across Industries'} />

              <SlideDown>
                <Link href={'/contact-us'}>
                  <MainButton text={'Book a meeting'} />
                </Link>
              </SlideDown>
            </div>
            <div className="grid gap-4 md:gap-8 xl:grid-cols-2">
              {expertise.map((item, index) => (
                <div key={index}>
                  <SlideDown delay={index * 0.2}>
                    <ServicesCard
                      title={item.title}
                      subtitle={item.subtitle}
                      icon={item.icon}
                      isSingleService={true}
                    />{' '}
                  </SlideDown>
                </div>
              ))}
            </div>
          </div>
        </PageBorders>

        {/* benefit of working with tinqlab */}
        <PageBorders background={'bg-darkestBlue'}>
          <div className="flex flex-col gap-8" id="industry">
            <div className="flex flex-col gap-4 md:gap-8">
              <div className="grid gap-4 md:grid-cols-2 md:gap-8">
                <div className="flex flex-col gap-4 md:gap-8">
                  <HeaderTwo
                    text="Benefits Of Working With TinqLab"
                    color="text-mainWhite"
                  />
                  <SlideDown delay={0.2}>
                    {' '}
                    <BenefitCard
                      {...tinqlabBenefits[0]}
                      bgColor={'bg-darkBlue'}
                    />
                  </SlideDown>{' '}
                </div>
                <div className="hidden h-full md:block">
                  <SlideRight>
                    <div className="h-full bg-features5 bg-contain bg-center bg-no-repeat xl:bg-bottom" />
                  </SlideRight>{' '}
                </div>{' '}
              </div>

              <div className="grid gap-4 md:grid-cols-2 md:gap-8">
                {tinqlabBenefits.slice(1).map((item, index) => (
                  <div key={index}>
                    <SlideDown delay={index * 0.2}>
                      <BenefitCard {...item} bgColor={'bg-darkBlue'} />
                    </SlideDown>{' '}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </PageBorders>
        <PageBorders>
          <div
            id="services"
            className="relative grid h-full grid-cols-1 gap-4 md:grid-cols-2 md:gap-8"
          >
            <div className="z-10 flex flex-col items-start justify-start gap-8 self-start bg-white py-4 md:sticky md:top-0">
              <HeaderTwo text="Our Software Development Process" />

              <SlideDown>
                <Link href="/contact-us">
                  <MainButton text="Get a consultation" />
                </Link>
              </SlideDown>
            </div>

            <ul className="flex flex-col">
              {softwareDevelopmentProcess.map((item, index) => (
                <SlideDown key={index} delay={index * 0.2}>
                  <li className="flex items-start gap-4 md:gap-8">
                    <div className="flex flex-col items-center">
                      <span className="border-mainGray flex h-12 w-12 shrink-0 items-center justify-center rounded-full border bg-transparent font-semibold text-mainBlack">
                        {index + 1}
                      </span>

                      {index !== softwareDevelopmentProcess.length - 1 && (
                        <div className="min-h-[20vh] min-w-[1vh] bg-line bg-contain bg-center bg-no-repeat" />
                      )}
                    </div>

                    <div className="pb-4 pt-2 md:pb-4">
                      <h1 className="text-[18px] font-medium leading-[28px] text-[#12152E]">
                        {item.title}
                      </h1>
                      <MainText text={item.subtitle} color="opacity-50" />
                    </div>
                  </li>
                </SlideDown>
              ))}
            </ul>
          </div>
        </PageBorders>

        <PageBorders>
          <div id="career">
            <FeedbackCard title={'Clients Feedback'} />
          </div>
        </PageBorders>
      </div>
    </div>
  );
}
