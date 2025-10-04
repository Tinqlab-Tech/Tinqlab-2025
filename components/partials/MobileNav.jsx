"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Drawer, ActionIcon } from "rizzui";
import Link from "next/link";
// Image imports
import logo from "@/public/images/logo.svg";
import MainText from "@/components/typography/MainText";
import { GiBookCover } from "react-icons/gi";
import { CiMenuFries } from "react-icons/ci";
import { FaMusic, FaPodcast, FaVideo } from "react-icons/fa6";

import { FaHome } from "react-icons/fa";
import { OutlineButton } from "../button/OutlineButton";
import { MainButton } from "../button/MainButton";
import { MdCancel } from "react-icons/md";
import { usePathname } from "next/navigation";
import NavItem from "../typography/NavItem";
import ImageWrapper from "../wrappers/ImageWrapper";
import show2 from "@/public/images/show2.svg";

export default function MobileNav() {
  const [drawerState, setDrawerState] = useState(false);
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
      title: "Software-engineering",
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
    <>
      <div
        role="button"
        tabIndex={0}
        onClick={() => {
          if (drawerState === false) {
            setDrawerState(true);
          }
        }}
        className="relative inline-flex cursor-pointer  darks:bg-darkGray  md:hidden font-Gilroy "
      >
        <CiMenuFries className="text-[32px] md:hidden flex text-white" />
      </div>
      <Drawer
        isOpen={drawerState}
        onClose={() => setDrawerState(false)}
        placement="left"
        size="sm"
      >
        <div className="z-50 flex min-h-full flex-col bg-white p-[20px] ">
          <header className="border-b-[.5px] border-lightGrayBorder px-0  darks:border-[#2f3030] md:px-[40px]">
            <div className="flex items-center justify-between gap-2 font-Gilroy my-2">
              <Link href={"/"}>
                <Image
                  src={logo}
                  width={180}
                  height={100}
                  alt={"Tinqlab Logo"}
                />
              </Link>

              <ActionIcon
                size="sm"
                variant="outline"
                rounded="DEFAULT"
                className="border-0  rounded-[5px]  "
                onClick={() => setDrawerState(false)}
              >
                <MdCancel className="text-primary text-[26px]" />
              </ActionIcon>
            </div>
          </header>

          <div className="px-0 pb-4 space-y-2 darks:border-[#2f3030] md:px-[40px]">
            {usefulLinks.map((item, index) => {
              const hasChildren = nestedLinks.some(
                (nested) => nested.parentId === item.id
              );
              const isOpen = activeIndex === index && hasChildren;

              return (
                <div key={item.id} className="">
                  {hasChildren ? (
                    <button
                      onClick={() => handleClick(index, hasChildren)}
                      className="flex items-center justify-between w-full text-left"
                      aria-expanded={isOpen}
                    >
                      <NavItem
                        text={item.title}
                        color={
                          pathname.startsWith(item.link) || isOpen
                            ? "text-primary"
                            : "text-mainBlack"
                        }
                      />

                      {/* wrap the ImageWrapper so transforms are applied reliably */}
                      <span
                        className={`inline-flex items-center transform transition-transform duration-300 ${
                          isOpen ? "rotate-180 scale-100" : "rotate-0 scale-75"
                        }`}
                      >
                        <ImageWrapper
                          src={show2}
                          alt={`Tinqlab ${item.title} services`}
                          height={20}
                          width={20}
                        />
                      </span>
                    </button>
                  ) : (
                    <Link href={item.link}>
                      <NavItem
                        text={item.title}
                        color={
                          pathname.startsWith(item.link)
                            ? "text-primary"
                            : "text-mainBlack"
                        }
                      />
                    </Link>
                  )}

                  {/* submenu is always in DOM so it can animate */}
                  <div
                    className={`overflow-hidden transition-all duration-500 ease-in-out
            ${isOpen ? "max-h-60 opacity-100 translate-y-0 pointer-events-auto" : "max-h-0 opacity-0 -translate-y-2 pointer-events-none"}
            bg-darkestBlue py-2 px-4 rounded-[10px]`}
                    aria-hidden={!isOpen}
                  >
                    {nestedLinks
                      .filter((nested) => nested.parentId === item.id)
                      .map((nested, i) => (
                        <Link key={i} href={nested.link}>
                          <NavItem
                            text={nested.title}
                            color={
                              pathname.startsWith(nested.link)
                                ? "text-primary"
                                : "text-mainWhite"
                            }
                          />
                        </Link>
                      ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Drawer>
    </>
  );
}
