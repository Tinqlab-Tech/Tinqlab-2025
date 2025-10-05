"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import ImageWrapper from "../wrappers/ImageWrapper";
import logo from "@/public/images/logowhite.svg";
import NavItem from "../typography/NavItem";
import MobileNav from "./MobileNav";
import { usePathname } from "next/navigation";
import { MainButton } from "../button/MainButton";

export default function Header({ hero }) {
  const pathname = usePathname();
  const [activeIndex, setActiveIndex] = useState(null);

  const usefulLinks = [
    { id: 1, title: "Industry", link: "/industry" },
    { id: 2, title: "Services", link: "/services" },
    { id: 3, title: "Career", link: "/career" },
    { id: 4, title: "About", link: "/about" },
  ];

  const nestedLinks = [
    { parentId: 1, title: "Fintech", link: "/industry/fintech" },
    { parentId: 1, title: "Edtech", link: "/industry/edtech" },
    { parentId: 1, title: "Retail", link: "/industry/retail" },
    { parentId: 1, title: "Real Estate", link: "/industry/real-estate" },

    {
      parentId: 2,
      title: "Software Engineering",
      link: "/services/software-engineering",
    },
    { parentId: 2, title: "Product Design", link: "/services/product-design" },
    { parentId: 2, title: "Consulting", link: "/services/consulting" },
  ];

  // Auto-expand parent if pathname matches nested
  useEffect(() => {
    const parentIndex = usefulLinks.findIndex((parent) =>
      nestedLinks.some(
        (nested) =>
          nested.parentId === parent.id && pathname.startsWith(nested.link)
      )
    );
    if (parentIndex !== -1) {
      setActiveIndex(parentIndex);
    }
  }, [pathname]);

  // 🔑 Close dropdown automatically after any route change
  useEffect(() => {
    setActiveIndex(null);
  }, [pathname]);

  const handleClick = (index, hasChildren) => {
    if (hasChildren) {
      setActiveIndex(activeIndex === index ? null : index);
    }
  };

  return (
    <header className="bg-hero bg-cover bg-no-repeat relative">
      <div className="flex justify-between items-center sticky top-0 z-50 bg-black/70 px-[8vw] py-[2vh]">
        {/* Logo */}
        <Link href={"/"}>
          <ImageWrapper
            src={logo}
            width={150}
            height={50}
            alt={"Tinqlab logo"}
          />
        </Link>

        <div className="flex items-center justify-end gap-2 md:gap-2 lg:gap-8">
          <div className="hidden md:flex items-center justify-end gap-2 md:gap-8 relative">
            {/* Parent links */}
            {usefulLinks.map((item, index) => {
              const hasChildren = nestedLinks.some(
                (nested) => nested.parentId === item.id
              );

              return (
                <div key={item.id} className="relative">
                  {hasChildren ? (
                    <button
                      onClick={() => handleClick(index, hasChildren)}
                      className="text-left"
                    >
                      <NavItem
                        text={item.title}
                        color={
                          pathname.startsWith(item.link) ||
                          activeIndex === index
                            ? "text-primary"
                            : "text-mainWhite"
                        }
                      />
                    </button>
                  ) : (
                    <Link href={item.link}>
                      <NavItem
                        text={item.title}
                        color={
                          pathname.startsWith(item.link)
                            ? "text-primary"
                            : "text-mainWhite"
                        }
                      />
                    </Link>
                  )}

                  {/* Floating nested menu */}
                  {activeIndex === index && hasChildren && (
                    <div className="absolute top-full left-0 mt-2 flex flex-col gap-4 p-6 bg-mainWhite rounded-[10px] shadow-lg z-50 min-w-[200px]">
                      {nestedLinks
                        .filter((nested) => nested.parentId === item.id)
                        .map((nested, i) => (
                          <Link key={i} href={nested.link}>
                            <NavItem
                              text={nested.title}
                              color={
                                pathname.startsWith(nested.link)
                                  ? "text-primary"
                                  : "text-mainBlack"
                              }
                            />
                          </Link>
                        ))}
                    </div>
                  )}
                </div>
              );
            })}

            {/* Contact button */}
            <MainButton
              textColor={"text-black"}
              bgcolor={"bg-white"}
              text={"Contact Us"}
            />
          </div>

          {/* Mobile Nav */}
          <div className="flex gap-4 justify-end items-center md:hidden">
            <MobileNav />
          </div>
        </div>
      </div>

      {/* Hero */}
      <div className="flex justify-center items-center">{hero}</div>
    </header>
  );
}
