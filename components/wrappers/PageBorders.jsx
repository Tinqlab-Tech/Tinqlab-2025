export default function PageBorders({ children, background }) {
  return (
    <div
      className={`${
        background ? `${background}` : "bg-white"
      }  px-[6vw] py-[10vh] `}
    >
      {children}
    </div>
  );
}
