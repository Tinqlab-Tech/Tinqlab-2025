import Link from "next/link";
import { MainButton } from "../button/MainButton";
import { OutlineButton } from "../button/OutlineButton";
import { ContactUsModal } from "../forms/ContactUsModal";
import HeaderOne from "../typography/HeaderOne";
import MainText from "../typography/MainText";
import ImageWrapper from "../wrappers/ImageWrapper";
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from "react-responsive-carousel";
import cover from "@/public/images/cover.jpeg";

export default function OtherPageHero({
  bgImage,
  title,
  subtitle,
  btnText,
  btnLink,
  image,
}) {
  const services = ["Software Engineering", "Product Design", "Consulting"];

  return (
    <div
      className={`${bgImage ? bgImage : "bg-white"} min-h-[80vh] bg-cover bg-no-repeat bg-center`}
    >
      <section
        className={`tracking-normal md:p-[6vw] grid grid-cols-1 md:grid-cols-2 md:gap-4 `}
      >
        {" "}
        <div className="flex flex-col items-start justify-center gap-8 px-[4vw] py-[8vh] order-2 md:order-1">
          <HeaderOne
            text={title}
            color={`${bgImage === null ? "text-black" : "text-white"} `}
            size={"text-[38px] leading-[45px] md:text-[55px] md:leading-[70px]"}
          />
          <MainText
            text={subtitle}
            size={"text-[20px] leading-[34px] font-light "}
            color={`${bgImage === null ? "text-[#12152E] opacity-50" : "text-white"} `}
          />
          <Link href={btnLink}>
            <MainButton text={btnText} />
          </Link>
        </div>
        <div className="order-1 md:order-2">
          {" "}
          <ImageWrapper
            src={image}
            width={120}
            height={60}
            alt={"Tinqlab image"}
            style={"h-full object-contain w-full"}
          />
        </div>
      </section>
    </div>
  );
}
