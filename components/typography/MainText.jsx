export default function MainText({ text, color, size, centerText, bold }) {
  return (
    <p
      className={`${
        size ? size : 'text-[18px] leading-[28px]'
      } ${color ? color : 'text-darkestBlue'} ${centerText === true ? 'text-center' : 'text-left '} ${bold === true ? 'font-semibold' : 'font-normal'} font-lato`}
    >
      {text}
    </p>
  );
}
