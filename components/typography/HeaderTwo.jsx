export default function HeaderTwo({ text, color, size }) {
  return (
    <h1
      className={` ${color ? color : "text-darkestBlue"} ${
        size ? size : "text-[30px] md:text-[40px] leading-[40px]"
      } font-bold font-lato`}
    >
      {text}
    </h1>
  );
}
