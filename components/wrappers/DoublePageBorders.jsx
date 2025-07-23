export default function DoublePageBorders({ children, background }) {
  return (
    <div className={`bg-white px-[4vw]`}>
      <div
        className={`${
          background ? `${background}` : "bg-white"
        }  px-[4vw] py-[10vh] rounded-[10px] md:rounded-[20px] `}
      >
        {children}
      </div>
    </div>
  );
}
