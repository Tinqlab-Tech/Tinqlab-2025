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
import careerHerobg from "@/public/images/careerHerobg.png";
import DoublePageBorders from "@/components/wrappers/DoublePageBorders";
import vector1 from "@/public/images/vector1.png";
import vector2 from "@/public/images/vector2.png";
import vector3 from "@/public/images/vector3.png";
import SlideUp from "@/animation/SlideUp";
import SlideRight from "@/animation/SlideRight";
import SlideDown from "@/animation/SlideDown";
import SlideLeft from "@/animation/SlideLeft";
import AddIndexCard from "@/components/card/AddIndexCard";
import { ContactUsModal } from "@/components/forms/ContactUsModal";
import { MainButton } from "@/components/button/MainButton";
import ImageWrapper from "@/components/wrappers/ImageWrapper";

export const metadata = {
  title: "Tinqlab - Expert software and blockchain developers",
  description:
    "We Build Efficient And Low Cost Web, Mobile And Blockchain Applications With Great User Interface And Experience. | Software development company in Nigeria.",
};

export default function Home() {
  const connect = [
    { title: "", subtitle: "", icon: "" },
    { title: "", subtitle: "", icon: "" },
    { title: "", subtitle: "", icon: "" },
    { title: "", subtitle: "", icon: "" },
    { title: "", subtitle: "", icon: "" },
  ];
  return (
    <div className="min-h-screen">
      {/* hero */}
      <div className="w-screen">
        {" "}
        <HeaderTwo text={"Get in Touch with Us "} />
        <MainText
          text={"We're delightedtowork with you on your incredible project"}
        />
      </div>
      <PageBorders>
        <div className="grid grid-cols-2 gap-4 md:gap-8">
          {/* grid 1 */}
          <div>
            <div>
              <HeaderTwo text={"Have Questions? We're Just a Message Away"} />
              <MainText
                text={
                  "Fill out the form below, and one of our team members will get back to you shortly. "
                }
              />{" "}
              <ContactUsModal />
            </div>
            <MainButton text={"Send Message"} />
          </div>
          {/* grid 2 */}
          <div>
            <div>
              <HeaderTwo text={"Connect with us today"} />
              <MainText text={"Let us know how we can help you "} />{" "}
            </div>
            <div>
              {connect.map((item, index) => (
                <div key={index}>
                  <div className=" bg-primary h-full  p-[20px] md:py-[40px] flex flex-col gap-8 md:gap-8 justify-between rounded-[10px] shadow-custom-primary">
                    {" "}
                    <div>
                      {" "}
                      <MainText
                        text={item.title}
                        bold={true}
                        color={"text-mainWhite"}
                      />
                      <MainText text={item.subtitle} color={"text-mainWhite"} />
                    </div>
                    <ImageWrapper
                      src={item.icon}
                      alt={"Contact Tinqlab"}
                      width={30}
                      height={30}
                      className={"bg-contain bg-center bg-no-repeat"}
                    />{" "}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </PageBorders>
      <DoublePageBorders background={"bg-darkestBlue"}>
        <div>
          <div>
            <HeaderTwo text={"Get the Latest Industry News & Insights"} />
          </div>
          {/* input */}
          <div>
            <div className="flex flex-end">
              <input type="email" placeholder="Enter Your Email Address ">
                {" "}
                <button> Subscribe</button>
              </input>
            </div>
          </div>
        </div>
      </DoublePageBorders>
    </div>
  );
}
