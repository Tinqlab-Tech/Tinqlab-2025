import HeaderOne from "../typography/HeaderOne";
import NormalText from "../typography/NormalText";
import MainText from "../typography/MainText";
import { FaPodcast } from "react-icons/fa6";

export default function ComingSoon({ icon, Title, SubtitleText }) {
  return (
    <div
      className={` darks:bg-[#212124]   flex flex-col justify-center items-center gap-1 md:gap-2 my-[20px] `}
    >
      {icon ? icon : <FaPodcast className="text-[24px]" />}

      <HeaderOne
        text={Title}
        color={"text-primary darks:text-white"}
        size={
          "text-[18px] leading-[20px]  md:text-[18px] md:leading-[18px] lg:text-[20px] lg:leading-[22px]"
        }
      />
      <MainText text={SubtitleText} color={"darks:text-grayText "} />
    </div>
  );
}
