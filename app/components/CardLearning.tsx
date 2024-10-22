"use client";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import React from "react";
import Image from "next/image";
import { roboto } from "../lib/fonts";
import { slugify } from "../utils/slugify";
import { useRouter } from "next/navigation";

export default function CardLearning({ title, category, description, imgURL }) {
  const router = useRouter();
  const sTitle = title.split(" ")[0];
  const bTitle = title.split(" ").slice(1).join(" ");
  const slug = slugify(title);

  console.log(title)

  console.log(slug)
  function handleClick() {
    router.push(`/belajar-islam/${slug}`);
  }

  return (
    <div className="w-auto h-auto lg:w-[488px] lg:h-[680px] bg-white flex flex-col justify-between py-3 md:py-7 space-y-2 md:space-y-0">
      <p
        className={`${roboto.className} w-fit text-sm font-light bg-[#F9F9F9] p-2 rounded-sm`}
      >
        {category}
      </p>
      <div className="flex flex-wrap w-full h-[296px] bg-[#F9F9F9] overflow-hidden rounded-sm">
        <Image
          src={imgURL}
          width={1080}
          height={1080}
          alt="img-1"
          className="w-full object-cover"
        />
      </div>
      <div className="space-y-6 mx-2 md:mx-4">
        <div className="-space-y-1">
          <p className={`${roboto.className} text-base font-light`}>{sTitle}</p>
          <h1 className={`${roboto.className} text-5xl font-medium`}>
            {bTitle}
          </h1>
        </div>
        <p className={`${roboto.className} text-xs font-light text-justify`}>
          {description}
        </p>
        <button
          className="w-full bg-primary flex items-center justify-between rounded-md py-3 px-6"
          onClick={handleClick}
        >
          <p className="text-white text-lg md:text-2xl font-light">
            Pelajari Selengkapnya
          </p>
          <ArrowRightIcon strokeWidth={1} className="h-8 w-8 text-white" />
        </button>
      </div>
    </div>
  );
}
