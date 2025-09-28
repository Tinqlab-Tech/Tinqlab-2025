export default function PageBorders({ children, background, padding }) {
  return (
    <div
      className={`${
        background ? `${background}` : "bg-white"
      }   ${padding === null ? "" : "px-[6vw] py-[10vh] "} `}
    >
      {children}
    </div>
  );
}
