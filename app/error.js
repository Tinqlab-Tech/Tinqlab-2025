"use client";

import { MainButton } from "@/components/button/MainButton";
import PageStarter from "@/components/section/PageStarter";
import Link from "next/link";
import PageBorders from "@/components/wrappers/PageBorders";
import MainText from "@/components/typography/MainText";
import HeaderOne from "@/components/typography/HeaderOne";

export default function Page() {
  return (
    <center className="min-h-screen grid grid-cols-1 justify-items-center">
      <div className=" divide-y-8 flex flex-col justify-start items-center text-center ">
        <PageBorders>
          <HeaderOne
            text={"An Error Occured"}
            color={"text-[#131313]"}
            size={
              "text-[24px] lg:text-[32px] leading-[30px] lg:leading-[40px] "
            }
          />
          <div className="my-[20px]"></div>
          <MainText text=" Refresh the page after a few minutes or try again later. We are working on it." />
          <div className="my-[20px]"></div>
          <Link href="/">
            <MainButton text={"Go Home"} />
          </Link>
        </PageBorders>
      </div>
    </center>
  );
}
