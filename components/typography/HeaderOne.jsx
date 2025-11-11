export default function HeaderOne({ text, color, size }) {
  return (
    <h1
      className={` ${color ? color : 'text-darkestBlue'} ${
        size ? size : 'text-[32px] leading-[38px]'
      } font-lato text-left font-bold`}
    >
      {text}
    </h1>
  );
}
