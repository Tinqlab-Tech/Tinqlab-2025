export default function HeaderTwo({ text, color, size }) {
  return (
    <h1
      className={` ${color ? color : 'text-darkestBlue'} ${
        size ? size : 'text-[30px] leading-[40px] md:text-[40px]'
      } font-lato font-bold`}
    >
      {text}
    </h1>
  );
}
