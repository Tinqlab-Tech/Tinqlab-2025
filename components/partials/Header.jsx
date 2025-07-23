"use client";

import Link from "next/link";
import ImageWrapper from "../wrappers/ImageWrapper";
import logo from "@/public/images/logowhite.svg";
import usicon from "@/public/images/usicon.png";
import NavItem from "../typography/NavItem";
import MobileNav from "./MobileNav";
import { ContactUsModal } from "../forms/ContactUsModal";
import HomepageHero from "../hero/HomepageHero";
import { usePathname } from "next/navigation";
import { LanguageSwitcher } from "./../language-switcher";
import { MainButton } from "../button/MainButton";

export default function Header({ hero }) {
  // const t = useTranslations("Menu");
  const pathname = usePathname();
  const usefulLinks = [
    {
      title: "Industry",
      link: "/industry",
    },
    {
      title: "Services",
      link: "/services",
    },
    {
      title: "Career",
      link: "/career",
    },
    {
      title: "About",
      link: "/about",
    },
  ];

  return (
    <header className="bg-hero bg-cover bg-no-repeat">
      <div className="flex justify-between items-center sticky top-0 z-50 bg-black/70 px-[8vw] py-[2vh]">
        {" "}
        <Link href={"/"}>
          <ImageWrapper
            src={logo}
            width={150}
            height={50}
            alt={"Tinqlab logo"}
          />
        </Link>
        <div className="flex items-center justify-end gap-2 md:gap-2 lg:gap-8">
          <div className=" hidden md:flex items-center justify-end gap-2 md:gap-8 ">
            <div className="flex gap-1 items-center justify-start">
              {" "}
              {/* <ImageWrapper
                src={usicon}
                width={20}
                height={20}
                alt={"United states flag"}
                style={""}
              />
              <NavItem text={"EN"} /> */}
              {/* <LanguageSwitcher /> */}
            </div>
            {usefulLinks.map((item, index) => (
              <Link key={index} href={item.link}>
                <NavItem text={item.title} />
              </Link>
            ))}

            <MainButton
              textColor={"text-black"}
              bgcolor={"bg-white"}
              text={"Contact Us"}
            />
          </div>
          <div className="flex gap-4 justify-end items-center md:hidden">
            <div className="">
              <div className="flex gap-1 items-center justify-start">
                {" "}
                {/* <LanguageSwitcher /> */}
              </div>
            </div>

            <MobileNav />
          </div>
        </div>
      </div>
      {/* {pathname === "/" ? (
  
      ) : (
        <></>
      )} */}
      <div className="flex justify-center items-center">{hero}</div>
    </header>
  );
}
