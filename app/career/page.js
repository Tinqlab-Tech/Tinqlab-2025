import FeedbackCard from '@/components/card/FeedbackCard';
import FeedackCard from '@/components/card/FeedbackCard';
import IndustryCard from '@/components/card/IndustryCard';
import MainCard from '@/components/card/MainCard';
import MoreContentCard from '@/components/card/MoreContentCard';
import OtherPageHero from '@/components/hero/OtherPageHero';
import HeaderOne from '@/components/typography/HeaderOne';
import HeaderTwo from '@/components/typography/HeaderTwo';
import MainText from '@/components/typography/MainText';
import PageBorders from '@/components/wrappers/PageBorders';
import edtechHero from '@/public/images/edtechHero.svg';
import careerHerobg from '@/public/images/careerHerobg.png';
import DoublePageBorders from '@/components/wrappers/DoublePageBorders';
import vector1 from '@/public/images/vector1.png';
import vector2 from '@/public/images/vector2.png';
import vector3 from '@/public/images/vector3.png';
import SlideUp from '@/animation/SlideUp';
import SlideRight from '@/animation/SlideRight';
import SlideDown from '@/animation/SlideDown';
import SlideLeft from '@/animation/SlideLeft';
import Link from 'next/link';
import ImageWrapper from '@/components/wrappers/ImageWrapper';
import Image from 'next/image';
import Header from '@/components/partials/Header';
import { MainButton } from '@/components/button/MainButton';
import BenefitCard from '@/components/card/Benefitcard';
import features3 from '@/public/images/featuresbg/features3.png';

export const metadata = {
  title: 'Tinqlab - Expert software and blockchain developers',
  description:
    'We Build Efficient And Low Cost Web, Mobile And Blockchain Applications With Great User Interface And Experience. | Software development company in Nigeria.',
};

export default function Home() {
  const ourValues = [
    {
      title: 'Team Synergy',
      subtitle:
        'Our experience is enhanced by teamwork, allowing us to achieve exceptional results while cultivating a culture of mutual support.  We create extraordinary achievements by combining talents, dedication, and collaboration, propelling us to new heights of success.',
    },
    {
      title: 'Continuous Growth',
      subtitle:
        "Our company's constant growth is fueled by creativity, flexibility, and an optimistic outlook. In order to adapt to shifting market conditions and continuously provide our clients, partners, and team with more value, we are dedicated to learning, development, and long-term growth.",
    },
    {
      title: 'Results Oriented',
      subtitle:
        'Fundamentally, we set priorities and stay committed to our major objectives of providing the finest possible results for each and every project.  Metric-driven, we leverage this information and our experience to not only meet but surpass expectations.',
    },
    {
      title: 'Taking responsibility',
      subtitle:
        'Taking responsibility is a fundamental principle which directs our decisions and actions right here at TinqLab. We encourage integrity, accountability, and ownership at all levels, enabling our team to fulfil commitments, grow from challenges, and produce substantial results.',
    },
  ];

  const benefits = [
    {
      title: 'Work Scope:',
      items: [
        {
          subtitle: 'Competitive salary and good compensation package;',
        },
        {
          subtitle:
            'Exciting, challenging and stable startup projects with a modern stack;',
        },
        {
          subtitle: 'Career development opportunity.',
        },
      ],
    },
    {
      title: 'Growth Opportunity:',
      items: [
        {
          subtitle: 'Gain hands-on experience across multiple tech stacks;',
        },
        {
          subtitle:
            'Work in a merit-based culture that rewards initiative and creativity;',
        },
        {
          subtitle: 'Rapid skill development with a clear growth path.',
        },
      ],
    },
    {
      title: 'Collaborative & Agile Team:',
      items: [
        {
          subtitle:
            'Be part of a tight-knit, agile team where your voice matters;',
        },
        {
          subtitle: 'Collaborate across disciplines: developers, designers;',
        },
        {
          subtitle:
            'Enjoy a flexible, problem-solving work environment that values innovation..',
        },
      ],
    },
    {
      title: 'Impactful Projects:',
      items: [
        {
          subtitle:
            'Build solutions for local and global blockchain challenges;',
        },
        {
          subtitle:
            'Empower users through technology that drives transparency and trust;',
        },
        {
          subtitle: 'Contribute to the growing digital transformation journey.',
        },
      ],
    },
    {
      title: 'Visionary Leadership:',
      items: [
        {
          subtitle:
            'Learn from a forward-thinking team with a clear strategic direction;',
        },
        {
          subtitle: 'Receive guidance through mentorship and skill-building;',
        },
        {
          subtitle:
            'Thrive in a space where accountability, openness, and ethics are valued.',
        },
      ],
    },
  ];
  const jobOpenings = [
    {
      bgImg: vector1,
      title: 'Junior BD Executive',
      subtitle:
        'Tinqlab is looking to hire a talented junior business development executive to join our company.',
      btnText: 'Apply now',
    },
    {
      bgImg: vector1,
      title: 'Middle- Senior BD Executive',
      subtitle:
        'When you need ud to scale your team, then come to us we. Just sit and allow us to the heavy. ',
      btnText: 'Apply now',
    },
    {
      bgImg: vector1,
      title: 'Middle- Senior BD Executive',
      subtitle:
        'When you need ud to scale your team, then come to us we. Just sit and allow us to the heavy. ',
      btnText: 'Apply now',
    },
    {
      bgImg: vector1,
      title: 'Middle- Senior BD Executive',
      subtitle:
        'When you need ud to scale your team, then come to us we. Just sit and allow us to the heavy. ',
      btnText: 'Apply now',
    },
    {
      bgImg: vector2,
      title: 'Middle- Senior BD Executive',
      subtitle:
        'When you need ud to scale your team, then come to us we. Just sit and allow us to the heavy. ',
      btnText: 'Apply now',
    },
    {
      bgImg: vector3,
      title: 'Middle- DevOps Engineer',
      subtitle:
        'When you need ud to scale your team, then come to us we. Just sit and allow us to the heavy. ',
      btnText: 'Apply now',
    },
  ];

  return (
    <div className="min-h-screen">
      {' '}
      <OtherPageHero
        bgImage={'bg-[#12152E]'}
        image={careerHerobg}
        title={'The world is in awe of your brilliance!'}
        subtitle={'And we are here to properly value it.'}
        btnLink={'/'}
        btnText={'Join TinqLab team'}
        isHeader={true}
      />{' '}
      <DoublePageBorders
        background={'bg-featuresbg bg-cover bg-no-repeat bg-center '}
        padding={null}
        overflowbg={' z-10  md:-mt-[10em] lg:-mt-[12em] xl:-mt-[7em]'}
      >
        {' '}
        <div
          className="grid scroll-mt-4 justify-center gap-8 md:grid-cols-2"
          id={'about'}
        >
          <div className="relative hidden h-full overflow-hidden md:block">
            <Image
              src={features3}
              alt={'about Tinqlab'}
              fill
              className={'bg-cover bg-left-bottom bg-no-repeat'}
            />
          </div>

          <SlideRight>
            <div className="flex h-full flex-col justify-center gap-4 p-[30px]">
              {' '}
              <HeaderTwo text={'Who are Tinqlab?'} />
              <MainText
                text={
                  'TinqLab is a software development company founded in 2019 which develops mobile applications, web apps, and custom blockchain software'
                }
                color={'opacity-50'}
              />{' '}
              <MainText
                text={
                  'We solve business problems in addition to creating digital solutions. With a team of 40+ experts, 55+ completed projects, and more than 6 years of expertise, we know what it takes to transform your ideas into real outcomes.'
                }
                color={'opacity-50'}
              />{' '}
              <MainText
                text={
                  'What makes us unique?  We comprehend your objectives, company difficulties, and possibilities in order to develop digital solutions that offer real value.  Our clients, who range from creative startups to well-established businesses, rely on us to improve consumer experiences, optimize processes, and spur expansion.'
                }
                color={'opacity-50'}
              />
            </div>{' '}
          </SlideRight>
        </div>
      </DoublePageBorders>{' '}
      {/* Our Values */}
      <PageBorders>
        <div className="flex flex-col gap-8" id="industry">
          {' '}
          <HeaderTwo text={'Our Values'} />
          <div className="grid gap-4 md:grid-cols-2 md:gap-8">
            {ourValues.map((item, index) => (
              <div key={index}>
                <SlideDown delay={index * 0.2}>
                  <MainCard
                    title={item.title}
                    subtitle={item.subtitle}
                    bgColor={null}
                  />{' '}
                </SlideDown>
              </div>
            ))}
          </div>
        </div>
      </PageBorders>
      {/*  Reason to be a tinqer*/}
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
                  <BenefitCard
                    {...benefits[0]}
                    bgColor={'bg-darkBlue'}
                    useIndex={true}
                    index={1}
                    hasBulletin={true}
                  />
                </SlideDown>
              </div>
              <div className="hidden h-full md:block">
                <SlideRight duration={1.5}>
                  <div className="h-full bg-features4 bg-cover bg-no-repeat" />
                </SlideRight>{' '}
              </div>{' '}
            </div>

            <div className="grid gap-4 md:grid-cols-2 md:gap-8">
              {benefits.slice(1).map((benefit, index) => (
                <div key={index}>
                  <SlideDown delay={index * 0.2}>
                    <BenefitCard
                      {...benefit}
                      bgColor={'bg-darkBlue'}
                      useIndex={true}
                      index={index + 2}
                      hasBulletin={true}
                    />
                  </SlideDown>{' '}
                </div>
              ))}
            </div>
          </div>
        </div>
      </PageBorders>
      {/* job Openings */}
      <PageBorders>
        <div className="flex flex-col gap-8" id="industry">
          {' '}
          <HeaderTwo text={'Consider our job openings!'} />
          <div className="grid gap-4 md:grid-cols-2 md:gap-8">
            {jobOpenings.map((item, index) => (
              <div key={index}>
                <SlideDown delay={index * 0.2}>
                  {' '}
                  <div className="flex h-full items-center justify-center gap-8 rounded-[10px] bg-Industrybg bg-cover bg-center bg-no-repeat p-[30px] shadow-custom-primary">
                    <div className="flex w-full flex-col justify-center gap-4">
                      <div className="font-lato flex items-center gap-4 text-[22px] font-semibold leading-[32px] text-darkestBlue lg:text-[32px] lg:leading-[32px]">
                        {item.title}
                      </div>

                      <MainText text={item.subtitle} color={'opacity-50'} />

                      <Link href={'/contact-us'} className="cursor-pointer">
                        <MainText text={item.btnText} color="text-primary" />
                      </Link>
                    </div>

                    <ImageWrapper
                      alt={`Tinqlab Industrial Services `}
                      src={item.bgImg}
                      width={150}
                      height={150}
                      style=" bg-no-repeat bg-contain bg-center hidden lg:block "
                    />
                  </div>
                </SlideDown>
              </div>
            ))}
          </div>
          <SlideDown delay={1.2}>
            <div className="grid justify-items-center">
              <Link href={'/contact-us'}>
                <MainButton text={'join Tinqlab Team'} morePadding={true} />
              </Link>
            </div>
          </SlideDown>
        </div>
      </PageBorders>
      {/* Feedbackfrom Team mate */}
      <PageBorders>
        <div id="career">
          <FeedbackCard title={'Feedback From Teammate’s'} />
        </div>
      </PageBorders>
    </div>
  );
}
