import logo from "@/public/DuronnSmall.png";
import Image from "next/image";

export const Loading = () => {
  return (
    <>
      <div className="bg-white py-[260px] darks:bg-[#202121] ">
        <Image
          src={logo}
          width={40}
          alt="Blewbo"
          height={40}
          className=" mx-auto animate-bounce cursor-pointer opacity-0 transition-opacity duration-[2s]"
          onLoad={(e) => e.target.classList.remove("opacity-0")}
        />{" "}
        <p className="py-1 text-center text-gray">Loading ...</p>
      </div>
    </>
  );
};
