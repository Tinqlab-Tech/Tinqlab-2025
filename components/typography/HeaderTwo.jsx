export default function HeaderTwo({ text, color, size }) {
  return (
    <h1
      className={` ${color ? color : "text-black"} ${
        size ? size : "text-[30px] md:text-[36px] leading-[40px]"
      } font-bold font-lato`}
    >
      {text}
    </h1>
  );
}
