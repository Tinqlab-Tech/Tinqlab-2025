export default function DoublePageBorders({ children, background, padding }) {
  return (
    <div className={`bg-white px-[4vw] py-[8vh] overflow-hidden`}>
      <div
        className={`${background ? `${background}` : "bg-white"} 
       
         ${padding === null ? "" : "px-[4vw] py-[10vh] "} rounded-[10px] md:rounded-[20px] `}
      >
        {children}
      </div>
    </div>
  );
}
