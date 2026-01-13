import MainText from "../typography/MainText";
import ImageWrapper from "./../wrappers/ImageWrapper";
import show2 from "@/public/images/show2.svg";
import HeaderOne from "../typography/HeaderOne";
import HeaderTwo from "../typography/HeaderTwo";

export const SpecificationWrapper = ({ title, subTitle, items }) => {
  return (
    <>
      <div className="w-full bg-white text-mainBlack p-[20px]  md:p-[40px]  rounded-[10px] lg:rounded-[20px] shadow-custom-primary dark:bg-mainGrey dark:text-white">
        <details className="group ">
          <summary className="flex justify-between  w-full marker:content-none hover:cursor-pointer">
            <HeaderTwo centerText={false} text={title} bold={true} />{" "}
            <ImageWrapper
              src={show2}
              alt={`Tinqlab ${title} services`}
              height={50}
              width={50}
              style="group-open:rotate-180 scale-50 group-open:scale-65 transition duration-300"
            />
          </summary>
          <div className="mt-4 md:mt-8 ">
            <MainText
              text={subTitle}
              color="text-[#12152E] opacity-50"
              size="text-[16px] leading-[24px]"
            />
          </div>
          <ul className="flex flex-col gap-8 mt-4 ">
            {items.map((item, index) => (
              <li
                key={index}
                className="block space-y-4 text-[18px] leading-[28px] text-mainBlack"
              >
                <h2 className="flex items-center gap-4">
                  <span>{index + 1 + `${"."}`}</span>
                  {item.title}
                </h2>
                <article className="list-inside list-disc break-words  ">
                  <MainText
                    text={item.subTitle}
                    color="text-mainBlack opacity-50"
                    size="text-[16px] leading-[24px]"
                  />
                </article>
              </li>
            ))}
            ;
          </ul>
        </details>
      </div>
    </>
  );
};
