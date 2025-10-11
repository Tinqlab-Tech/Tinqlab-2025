export const MainButton = ({ text, bgcolor, textColor, lessPadding }) => {
  return (
    <button
      className={`flex items-center justify-center cursor-pointer font-normal rounded-full font-lato shadow-custom-primary  ${
        bgcolor ? bgcolor : "bg-primary"
      } ${textColor ? textColor : "text-white"} ${
        lessPadding ? "py-[12px] px-[24px]" : "py-[12px] px-[50px]"
      } text-[16px]  hover:scale-105 font-semibold transition-all duration-300`}
    >
      {text}
    </button>
  );
};
