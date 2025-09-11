import React from "react";
import MainText from "../typography/MainText";
import ImageWrapper from "../wrappers/ImageWrapper";
import feedback1 from "@/public/images/feedback1.png";
import feedback2 from "@/public/images/feedback2.png";

export default function FeedbackCard({}) {
  const clientFeedback = [
    {
      description:
        "“TinqLab has helped us get to market faster, allowing us to fill products gaps easily.”",
      icon: feedback1,
      title: "Gavin Aaron",
      subTitle: "Lead Software Developer, Hungrit Ltd",
    },
    {
      description:
        "“They were able to handle everything we threw at them fairly easily.”",
      icon: feedback2,
      title: "Dimitry Konoval",
      subTitle: "Founder & CEO, BlackBunny Capital",
    },
  ];
  return (
    <div className="grid md:grid-cols-2 gap-8">
      {clientFeedback.map((item, index) => (
        <div
          key={index}
          className={` h-full p-[20px] md:py-[40px] flex flex-col gap-8 justify-between rounded-[10px] shadow-custom-primary`}
        >
          <div className="flex items-center justify-start  gap-4 md:gap-8 ">
            <div className="bg-quote bg-no-repeat bg-contain w-12 h-12" />
            <MainText text={item.description} color={"opacity-50"} />
          </div>
          <div className="flex items-center justify-end gap-4 px-6 ">
            <ImageWrapper
              alt={`Tinqlab Services `}
              src={item.icon}
              width={40}
              height={40}
              style={
                " bg-no-repeat bg-cover w-24 h-24 border-[2px] border-mainBlack border-opacity-20 rounded-full"
              }
            />
            <div className="flex flex-col gap-4">
              <MainText text={item.title} />

              <MainText text={item.subTitle} color={"opacity-50"} />
            </div>
          </div>
        </div>
      ))}
      ;
    </div>
  );
}
