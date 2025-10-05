"use client";

import { MainButton } from "@/components/button/MainButton";
import PageStarter from "@/components/section/PageStarter";
import Link from "next/link";
import PageBorders from "@/components/wrappers/PageBorders";
import MainText from "@/components/typography/MainText";
import HeaderOne from "@/components/typography/HeaderOne";

export default function Page() {
  return (
    <div className="min-h-screen">
      <PageBorders>
        <div className="flex flex-col justify-center items-center text-center gap-4 ">
          <HeaderOne
            text={"Page not found"}
            color={"text-[#131313]"}
            size={
              "text-[24px] lg:text-[32px] leading-[30px] lg:leading-[40px] "
            }
          />
          <MainText
            centerText={true}
            text=" The resources you requested for does not exist, Please go back home."
          />
          <Link href="/">
            <MainButton text={"Go Home"} />
          </Link>
        </div>
      </PageBorders>
    </div>
  );
}
