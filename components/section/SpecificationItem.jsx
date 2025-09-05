import MainText from "../typography/MainText";
import ImageWrapper from "./../wrappers/ImageWrapper";
import show from "@/public/images/show.svg";
import HeaderOne from "../typography/HeaderOne";

export const SpecificationItem = ({ title, subTitle, bgIcon, icon }) => {
  return (
    <ul className="w-full bg-white text-mainBlack px-[10px] py-[10px] md:px-[24px] md:py-[10px] rounded-[10px] lg:rounded-[40px] shadow-custom-primary dark:bg-mainGrey dark:text-white">
      <li>
        <details className="group ">
          <summary className="flex justify-between w-full items-center gap-4 md:p-2 marker:content-none hover:cursor-pointer">
            <div className="flex justify-between w-full items-center gap-4 md:p-2">
              <div className="flex items-center gap-4">
                {bgIcon && (
                  <ImageWrapper
                    src={bgIcon}
                    alt={`Tinqlab ${title} services`}
                    height={30}
                    width={30}
                    style=""
                  />
                )}
                <MainText centerText={false} text={title} bold={true} />
              </div>
            </div>
            <ImageWrapper
              src={icon || show}
              alt={`Tinqlab ${title} services`}
              height={30}
              width={30}
              style="group-open:rotate-45 scale-75 group-open:scale-100 transition duration-300"
            />
          </summary>
          {subTitle && (
            <article className="list-inside list-disc break-words px-2 pb-4">
              <MainText
                text={subTitle}
                color="text-[#12152E] opacity-50"
                size="text-[16px] leading-[24px]"
              />
            </article>
          )}
        </details>
      </li>
    </ul>
  );
};
