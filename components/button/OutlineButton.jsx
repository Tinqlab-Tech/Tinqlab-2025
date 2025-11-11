export const OutlineButton = ({ text, textColor, icon, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`font-lato flex cursor-pointer items-center justify-center gap-3 rounded-full border-[1px] border-primary font-normal shadow-lg ${
        textColor ? textColor : 'text-primary'
      } px-[24px] py-[12px] text-[14px] tracking-tight md:text-[16px]`}
    >
      {icon && <span>{icon}</span>}
      {text}
    </button>
  );
};
