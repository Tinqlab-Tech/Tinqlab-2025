export default function HeaderTwo({ text, color, size }) {
  return (
    <h1
      className={` ${color ? color : "text-darkestBlue"} ${
        size ? size : "text-[20px] md:text-[32px] leading-[1.2em]"
      } font-bold font-lato`}
    >
      {text}
    </h1>
  );
}
