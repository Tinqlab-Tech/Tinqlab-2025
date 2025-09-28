export const OutlineButton = ({ text, textColor, icon, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={` flex items-center justify-center gap-3 cursor-pointer font-normal rounded-full shadow-lg font-lato border-[1px] border-primary ${
        textColor ? textColor : "text-primary"
      } py-[12px] px-[24px] text-[16px] tracking-tight`}
    >
      {icon && <span>{icon}</span>}
      {text}
    </button>
  );
};
