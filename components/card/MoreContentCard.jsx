// import React from "react";
// import MainText from "../typography/MainText";

// export default function MoreContentCard({
//   bgColor,
//   title,
//   items,
//   useIndexes,
//   indexes,
// }) {
//   return (
//     <div
//       className={`${bgColor ? bgColor : "bg-white"} shadow-custom-primary  h-full  p-[20px] flex flex-col gap-8 justify-between rounded-[10px]`}
//     >
//       <div
//         className={`${bgColor === null ? "text-black" : "text-white"} flex gap-4 items-center text-[18px] lg:text-[24px] font-semibold leading-[24px] lg:leading-[32px]`}
//       >
//         {" "}
//         {useIndexes === true && (
//           <span
//             className={`${bgColor === null ? "border-[2px] border-mainBlack border-opacity-20" : "bg-darkestBlue/30"} h-12 w-12 rounded-full  flex justify-center items-center`}
//           >
//             {indexes}
//           </span>
//         )}
//         {title}
//       </div>
//       {items.map((item, index) => (
//         <div
//           key={index}
//           className={`${bgColor === null ? "text-[#12152E] " : "text-white"} text-[18px] leading-[28px]`}
//         >
//           <span className="text-primary">{item.title}</span>
//           <span className="opacity-50"> {item.subtitle}</span>
//         </div>
//       ))}
//     </div>
//   );
// }
import React from "react";
import ImageWrapper from "../wrappers/ImageWrapper";

export default function MoreContentCard({
  bgColor,
  title,
  icon,
  items,
  useIndexes,
  indexes, // passed from map as index+1
  addImage,
  gridSize = [], // e.g. [2, 4]
  gridImg = [], // e.g. ["/img2.png", "/img4.png"]
}) {
  // check if current card index should be replaced with an image
  const imgIndex = Array.isArray(gridSize) ? gridSize.indexOf(indexes) : -1;
  const isImageCard = addImage && imgIndex !== -1 && gridImg[imgIndex];

  // ✅ If image card → just render image (no index, no card styles)
  if (isImageCard) {
    return (
      <div className="bg-transparent hidden md:block h-full w-full">
        <ImageWrapper
          src={gridImg[imgIndex]}
          alt={`Tinqlab Services image ${indexes}`}
          width={500}
          height={500}
          className="bg-contain bg-no-repeat"
        />
      </div>
    );
  }

  // ✅ Otherwise → normal card with bgColor + optional index + icon
  return (
    <div
      className={`${
        bgColor ? bgColor : "bg-white"
      } shadow-custom-primary h-full p-[20px] flex flex-col gap-8 justify-between rounded-[10px]`}
    >
      {/* Title + index bubble */}
      <div
        className={`${
          bgColor === null ? "text-black" : "text-white"
        } flex gap-4 items-center text-[18px] lg:text-[24px] font-semibold leading-[24px] lg:leading-[32px]`}
      >
        {useIndexes && !isImageCard && (
          <span
            className={`${
              bgColor === null
                ? "border-[2px] border-mainBlack border-opacity-20"
                : "bg-darkestBlue/30"
            } h-12 w-12 rounded-full flex justify-center items-center`}
          >
            {indexes}
          </span>
        )}

        {icon && (
          <ImageWrapper
            src={icon}
            alt={`Icon for ${title}`}
            width={24}
            height={24}
            className="bg-contain bg-no-repeat"
          />
        )}
        {title}
      </div>

      {/* Items */}
      {items.map((item, index) => (
        <div
          key={index}
          className={`${
            bgColor === null ? "text-[#12152E]" : "text-white"
          } text-[18px] leading-[28px]`}
        >
          <span className="text-primary">{item.title}</span>
          <span className="opacity-50"> {item.subtitle}</span>
        </div>
      ))}
    </div>
  );
}
