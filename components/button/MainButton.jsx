export const MainButton = ({ text, bgcolor, textColor }) => {
  return (
    <button
      className={`cursor-pointer font-normal rounded-full font-lato shadow-custom-primary  ${
        bgcolor ? bgcolor : "bg-primary"
      } ${
        textColor ? textColor : "text-white"
      } py-[12px] px-[24px] text-[16px] tracking-tight`}
    >
      {text}
    </button>
  );
};
