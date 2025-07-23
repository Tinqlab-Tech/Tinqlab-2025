export default function MainText({ text, color, size, centerText }) {
  return (
    <p
      className={`${
        size ? size : "text-[18px] leading-[28px]"
      } ${color ? color : "text-mainBlack"}  ${centerText === true ? "text-center" : "text-left"} font-normal font-lato `}
    >
      {text}
    </p>
  );
}
