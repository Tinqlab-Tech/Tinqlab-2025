import Link from "next/link";
import { MainButton } from "../button/MainButton";
import { OutlineButton } from "../button/OutlineButton";
import { ContactUsModal } from "../forms/ContactUsModal";
import HeaderOne from "../typography/HeaderOne";
import MainText from "../typography/MainText";
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from "react-responsive-carousel";

export default function HomepageHero({ bgImage }) {
  const services = ["Software Engineering", "Product Design", "Consulting"];

  return (
    <div className="min-h-[80vh]">
      <div className="bg-features1 min-h-[40vh] bg-cover bg-no-repeat  bg-center">
        <div className="bg-darkBlue/50 min-h-[40vh] bg-cover bg-no-repeat  bg-center">
          <section className={`tracking-normal md:p-[6vw] `}>
            {" "}
            <div className="flex flex-col items-start justify-center gap-8 px-[4vw] lea py-[8vh]">
              <HeaderOne
                text={"Consulting"}
                color={"text-white"}
                size={"text-[60px] leading-[70px] "}
              />
              <MainText
                text={
                  "Elevating your business to new heights and increasing your process efficiency with customized, results driven consulting services. Our experts help you grow longer feathers for your wings."
                }
                size={"text-[22px] leading-[38px] "}
                color={"text-white md:w-3/5"}
              />
              <MainButton text={"Discover more"} />
            </div>
          </section>
          <div className="grid grid-cols-3 gap-4 divide-x-[1px] divide-[#2B305E]  justify-items-center border-[1px] border-[#2B305E] p-[10px]">
            {services.map((item, index) => (
              <Link href={"/"} key={index}>
                <MainText
                  text={item}
                  size={"text-[10px] md:text-[18px]"}
                  color={`${item === "Software Engineering" ? "text-white" : "text-mainGrey opacity-60 "} w-full cursor-pointer hover:text-primary`}
                  centerText={true}
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
