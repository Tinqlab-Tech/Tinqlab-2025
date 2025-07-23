export const OutlineButton = ({ text, textColor }) => {
  return (
    <button
      className={`cursor-pointer font-normal rounded-full shadow-lg font-lato border-[1px] border-primary ${
        textColor ? textColor : "text-primary"
      } py-[12px] px-[24px] text-[16px] tracking-tight`}
    >
      {text}
    </button>
  );
};
