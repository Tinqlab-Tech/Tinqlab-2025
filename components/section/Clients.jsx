"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ImageSlider.css";
import Image from "next/image";
import MainText from "../typography/MainText";
import PageStarter from "./PageStarter";

export default function Clients() {
  let setting = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 820,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const slideImages = [
    {
      url: "https://sethex.com",
      // logo: sethex,
      caption: "sethex",
    },
    {
      url: "https://enorvex.org",
      // logo: enorvex,
      caption: "enorvex",
    },
    {
      url: "https://ricapital.org",
      // logo: ricapital,
      caption: "ricapital",
    },
  ];

  return (
    <div
      id={"subsidiaries"}
      className="bg-vectorone scroll-mt-4 bg-no-repeat bg-cover px-[20px] py-[40px]  md:px-[40px] md:py-[60px] lg:px-[40px] lg:py-[80px] gap-2 md:gap-4 lg:gap-8   flex flex-col md:grid grid-cols-3 md:items-center md:justify-center items-start justify-center"
    >
      <div className=" mt-[40px] mb-[10px] md:mt-0 text-white md:text-[28px] font-bold text-[18px] tracking-normal flex-col gap-4 justify-center items-start md:justify-start md:border-r-[1px] col-span-1">
        <PageStarter
          Title={"Our Subsidiaries"}
          SubtitleText={""}
          color={"text-white"}
        />

        <MainText
          text={"We take pride in our subsidiaries and partners."}
          color={"text-white"}
        />
      </div>

      <div className="m-0 w-screen md:w-[450px] lg:w-full col-span-2 ">
        <Slider {...setting} className="flex justify-center items-center">
          {slideImages.map((i, index) => (
            <a
              href={i.url}
              target="_blank"
              rel="noreferrer"
              key={index}
              className=""
            >
              {" "}
              {/* <Image
                src={i.logo}
                width={100}
                height={68}
                alt={i.caption}
                className=""
              /> */}
            </a>
          ))}
        </Slider>
      </div>
    </div>
  );
}
