import HeaderOne from "../typography/HeaderOne";
import ImageWrapper from "../wrappers/ImageWrapper";
import MainText from "../typography/MainText";

export default function PageStarter({ Title, SubtitleText, color }) {
  return (
    <div className="flex flex-col items-start gap-4">
      <HeaderOne text={Title} color={color} />
      <MainText text={SubtitleText} color={"text-darkBlue opacity-50"} />
    </div>
  );
}
