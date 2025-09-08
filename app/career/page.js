import FeedbackCard from "@/components/card/FeedbackCard";
import FeedackCard from "@/components/card/FeedbackCard";
import IndustryCard from "@/components/card/IndustryCard";
import MainCard from "@/components/card/MainCard";
import MoreContentCard from "@/components/card/MoreContentCard";
import OtherPageHero from "@/components/hero/OtherPageHero";
import HeaderOne from "@/components/typography/HeaderOne";
import HeaderTwo from "@/components/typography/HeaderTwo";
import MainText from "@/components/typography/MainText";
import PageBorders from "@/components/wrappers/PageBorders";
import edtechHero from "@/public/images/edtechHero.svg";
import features1 from "@/public/images/features1.png";

export const metadata = {
  title: "Tinqlab - Expert software and blockchain developers",
  description:
    "We Build Efficient And Low Cost Web, Mobile And Blockchain Applications With Great User Interface And Experience. | Software development company in Nigeria.",
};

export default function Home() {
  const ourValues = [
    {
      title: "Team Synergy",
      subtitle:
        "Our experience is enhanced by teamwork, allowing us to achieve exceptional results while cultivating a culture of mutual support.  We create extraordinary achievements by combining talents, dedication, and collaboration, propelling us to new heights of success.",
    },
    {
      title: "Continuous Growth",
      subtitle:
        "Our company's constant growth is fueled by creativity, flexibility, and an optimistic outlook. In order to adapt to shifting market conditions and continuously provide our clients, partners, and team with more value, we are dedicated to learning, development, and long-term growth.",
    },
    {
      title: "Results Oriented",
      subtitle:
        "Fundamentally, we set priorities and stay committed to our major objectives of providing the finest possible results for each and every project.  Metric-driven, we leverage this information and our experience to not only meet but surpass expectations.",
    },
    {
      title: "Taking responsibility",
      subtitle:
        "Taking responsibility is a fundamental principle which directs our decisions and actions right here at TinqLab. We encourage integrity, accountability, and ownership at all levels, enabling our team to fulfil commitments, grow from challenges, and produce substantial results.",
    },
  ];

  const benefits = [
    {
      title: "Work Scope:",
      items: [
        {
          subtitle: "Competitive salary and good compensation package;",
        },
        {
          subtitle:
            "Exciting, challenging and stable startup projects with a modern stack;",
        },
        {
          subtitle: "Career development opportunity.",
        },
      ],
    },
    {
      title: "Growth Opportunity:",
      items: [
        {
          subtitle: "Gain hands-on experience across multiple tech stacks;",
        },
        {
          subtitle:
            "Work in a merit-based culture that rewards initiative and creativity;",
        },
        {
          subtitle: "Rapid skill development with a clear growth path.",
        },
      ],
    },
    {
      title: "Collaborative & Agile Team:",
      items: [
        {
          subtitle:
            "Be part of a tight-knit, agile team where your voice matters;",
        },
        {
          subtitle: "Collaborate across disciplines: developers, designers;",
        },
        {
          subtitle:
            "Enjoy a flexible, problem-solving work environment that values innovation..",
        },
      ],
    },
    {
      title: "Impactful Projects:",
      items: [
        {
          subtitle:
            "Build solutions for local and global blockchain challenges;",
        },
        {
          subtitle:
            "Empower users through technology that drives transparency and trust;",
        },
        {
          subtitle: "Contribute to the growing digital transformation journey.",
        },
      ],
    },
    {
      title: "Visionary Leadership:",
      items: [
        {
          subtitle:
            "Learn from a forward-thinking team with a clear strategic direction;",
        },
        {
          subtitle: "Receive guidance through mentorship and skill-building;",
        },
        {
          subtitle:
            "Thrive in a space where accountability, openness, and ethics are valued.",
        },
      ],
    },
  ];
  const jobOpenings = [
    {
      bgImage: features1,
      title: "Junior BD Executive",
      subtitle:
        "Tinqlab is looking to hire a talented junior business development executive to join our company.",
      btnLink: "/",
      btnText2: "Apply now",
    },
    {
      bgImage: features1,
      title: "Middle- Senior BD Executive",
      subtitle:
        "When you need ud to scale your team, then come to us we. Just sit and allow us to the heavy. ",
      btnLink: "/",
      btnText2: "Apply now",
    },
    {
      bgImage: features1,
      title: "Middle- Senior BD Executive",
      subtitle:
        "When you need ud to scale your team, then come to us we. Just sit and allow us to the heavy. ",
      btnLink: "/",
      btnText2: "Apply now",
    },
    {
      bgImage: features1,
      title: "Middle- Senior BD Executive",
      subtitle:
        "When you need ud to scale your team, then come to us we. Just sit and allow us to the heavy. ",
      btnLink: "/",
      btnText2: "Apply now",
    },
    {
      bgImage: features1,
      title: "Middle- Senior BD Executive",
      subtitle:
        "When you need ud to scale your team, then come to us we. Just sit and allow us to the heavy. ",
      btnLink: "/",
      btnText2: "Apply now",
    },
    {
      bgImage: features1,
      title: "Middle- DevOps Engineer",
      subtitle:
        "When you need ud to scale your team, then come to us we. Just sit and allow us to the heavy. ",
      btnLink: "/",
      btnText2: "Apply now",
    },
  ];
  const feedback = [
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
      {" "}
      <OtherPageHero
        bgImage={"bg-[#12152E]"}
        image={edtechHero}
        title={"The world is in awe of your brilliance!"}
        subtitle={"And we are here to properly value it."}
        btnLink={"/"}
        btnText={"Join TinqLab team"}
      />
      <PageBorders>
        {" "}
        <div
          className=" scroll-mt-4 grid grid-cols-1 md:grid-cols-2 gap-8 lg:px-6 bg-lightBlue  rounded-[20px]"
          id={"about"}
        >
          {" "}
          <div className="  bg-features1 bg-start bg-no-repeat min-h-[40vh] "></div>
          <div className="flex flex-col gap-5 p-4 xl:p-8">
            <HeaderOne text={"Who are Tinqlab?"} />{" "}
            <MainText
              text={
                "TinqLab is a software development company founded in 2019 which develops mobile applications, web apps, and custom blockchain software"
              }
              color={"opacity-50"}
            />
            <MainText
              text={
                "We solve business problems in addition to creating digital solutions. With a team of 40+ experts, 55+ completed projects, and more than 6 years of expertise, we know what it takes to transform your ideas into real outcomes."
              }
              color={"opacity-50"}
            />
            <MainText
              text={
                "What makes us unique?  We comprehend your objectives, company difficulties, and possibilities in order to develop digital solutions that offer real value.  Our clients, who range from creative startups to well-established businesses, rely on us to improve consumer experiences, optimize processes, and spur expansion."
              }
              color={"opacity-50"}
            />
          </div>
        </div>
      </PageBorders>{" "}
      {/* Our Values */}
      <PageBorders>
        <div className="flex flex-col gap-8" id="industry">
          <div className="px-4">
            <HeaderOne text={"Our Values"} />
          </div>
          <div className="grid md:grid-cols-2 gap-4 md:gap-8 ">
            {ourValues.map((item, index) => (
              <div key={index}>
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
      {/*  Reason to be a tinqer*/}
      <PageBorders background={"bg-darkestBlue"}>
        <div className="flex flex-col gap-8" id="industry">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 items-center ">
            {" "}
            <div className="col-span-1 md:col-span-2">
              {" "}
              <HeaderTwo
                text={"Benefits Of Working With TinqLab"}
                color={"text-mainWhite"}
              />
            </div>
            <div className="hidden md:block bg-retailBg2 bg-contain bg-left-bottom bg-no-repeat min-h-[20vh]"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-4 md:gap-8 ">
            {benefits.map((item, index) => (
              <div key={index}>
                {" "}
                <MoreContentCard
                  useIndexes={true}
                  indexes={index + 1}
                  title={item.title}
                  items={item.items}
                  bgColor={"bg-darkBlue"}
                />
              </div>
            ))}
          </div>
        </div>
      </PageBorders>
      {/* job Openings */}
      <PageBorders>
        <div className="flex flex-col gap-8" id="industry">
          <div className="px-4">
            <HeaderOne text={"Consider our job openings!"} />
          </div>

          <div className="grid md:grid-cols-2 gap-4 md:gap-8 ">
            {jobOpenings.map((item, index) => (
              <div key={index}>
                {" "}
                <IndustryCard
                  title={item.title}
                  subtitle={item.subtitle}
                  bgImg={item.bgImage}
                  background={null}
                  hasbtnText={false}
                  btnLink={item.btnLink}
                  btnText={item.btnText2}
                />
              </div>
            ))}
          </div>
        </div>
      </PageBorders>
      {/* Feedbackfrom Team mate */}
      <PageBorders>
        <div className="flex flex-col gap-8" id="career">
          <div className="px-4">
            <HeaderOne text={"Feedback From Teammate's"} />
          </div>
          <FeedbackCard />
        </div>
      </PageBorders>
    </div>
  );
}
