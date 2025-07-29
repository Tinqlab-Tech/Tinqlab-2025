import MainText from "../typography/MainText";
import ImageWrapper from "./../wrappers/ImageWrapper";
import show from "@/public/images/show.svg";

export const SpecificationItem = ({ title, subTitle }) => {
  return (
    <>
      <ul className="w-full  bg-white text-mainBlack px-[10px] py-[10px] md:px-[24px] md:py-[10px] rounded-[10px] lg:rounded-[40px] shadow-custom-primary dark:bg-mainGrey dark:text-white">
        <li className="">
          <details className="group">
            <summary className="flex justify-between w-full items-center gap-4 md:p-2 marker:content-none hover:cursor-pointer">
              <MainText centerText={false} text={title} bold={true} />

              <ImageWrapper
                src={show}
                alt={`Tinqlab ${title} services`}
                height={30}
                width={30}
                style={
                  "group-open:rotate-45 scale-75 group-open:scale-100 transition "
                }
              />
            </summary>
            <article className=" w-4/5 list-inside list-disc break-words px-2 pb-4">
              <MainText
                text={subTitle}
                color={"text-[#12152E] opacity-50"}
                size={"text-[16px] leading-[24px]"}
              />
            </article>
          </details>
        </li>
      </ul>
    </>
  );
};
