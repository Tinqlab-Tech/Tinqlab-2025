export default function PageBorders({
  children,
  background,
  padding,
  overflow,
}) {
  return (
    <div
      className={`${
        background ? `${background}` : "bg-white"
      }   ${padding === null ? "" : "px-[6vw] py-[10vh] "}  ${overflow === null ? "" : "overflow-hidden"}`}
    >
      {children}
    </div>
  );
}
