export default function HeaderOne({ text, color, size }) {
  return (
    <h1
      className={` ${color ? color : "text-black"} ${
        size ? size : "text-[32px] leading-[38px]"
      } font-bold font-lato`}
    >
      {text}
    </h1>
  );
}
