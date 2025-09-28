export default function NavItem({ text, color }) {
  return (
    <nav
      className={`${color ? color : "text-mainWhite"} group text-[16px] hover:font-bold font-Gilroy font-normal hover:text-primary cursor-pointer`}
    >
      {text}
    </nav>
  );
}
