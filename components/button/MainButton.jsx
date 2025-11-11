export const MainButton = ({ text, bgcolor, textColor, lessPadding }) => {
  return (
    <button
      className={`font-lato flex cursor-pointer items-center justify-center rounded-full font-normal shadow-custom-primary ${
        bgcolor ? bgcolor : 'bg-primary'
      } ${textColor ? textColor : 'text-white'} ${
        lessPadding ? 'px-[24px] py-[12px]' : 'px-[50px] py-[12px]'
      } text-nowrap text-[14px] md:text-[16px]`}
    >
      {text}
    </button>
  );
};
