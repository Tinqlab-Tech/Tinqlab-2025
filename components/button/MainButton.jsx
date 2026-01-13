export const MainButton = ({ text, bgcolor, textColor, lessPadding }) => {
  return (
    <button
      className={`flex items-center justify-center cursor-pointer font-normal rounded-full font-lato shadow-custom-primary  ${
        bgcolor ? bgcolor : "bg-primary"
      } ${textColor ? textColor : "text-white"} ${
        lessPadding ? "py-[10px] px-[20px]" : "py-[10px] px-[20px]"
      } text-[12px] md:text-[16px]  hover:scale-95 font-semibold transition-all duration-300`}
    >
      {text}
    </button>
  );
};
