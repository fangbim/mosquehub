"use client";
import { useEffect, useState } from "react";
import Navbar from "../components/lp/Navbar";
import { amiri, cangaOne, lilitaOne, pOne } from "../lib/fonts";
import Dzikir from "../utils/api/Dzikir";
import { XMarkIcon } from "@heroicons/react/24/outline";

import React from "react";
import {
  Dialog,
  DialogHeader,
  DialogBody,
  IconButton,
  Typography,
} from "@material-tailwind/react";
import Loading from "../components/loading";
import ScrollToTopButton from "../components/button/ScrollToTopButton";

// Component for rendering dzikir list
function DzikirList({ condition }: { condition: string }) {
  const [dzikirList, setDzikirList] = useState<any[]>([]);
  const [open, setOpen] = useState(false);
  const [selectedBenefit, setSelectedBenefit] = useState<string | null>(null);

  const handleOpen = (benefit?: string) => {
    setSelectedBenefit(benefit || null);
    setOpen(!open);
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await Dzikir(condition);
      if (data) {
        setDzikirList(data);
      }
    };
    fetchData();
  }, [condition]); // Re-fetch when condition changes

  return (
    <div>
      <Dialog
        open={open}
        handler={handleOpen}
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0.9, y: -100 },
        }}
      >
        <DialogHeader className="relative m-0 block">
          <Typography variant="h4" color="blue-gray">
            Faedah
          </Typography>
          <IconButton
            size="sm"
            variant="text"
            className="!absolute right-3.5 top-3.5"
            onClick={() => handleOpen()}
          >
            <XMarkIcon className="h-4 w-4 stroke-2" />
          </IconButton>
        </DialogHeader>
        <DialogBody className="mb-7">
          {selectedBenefit ? (
            <p>{selectedBenefit}</p>
          ) : (
            <p>No benefit available</p>
          )}
        </DialogBody>
      </Dialog>
      {dzikirList.length > 0 ? (
        dzikirList.map((dzikir) => (
          <section
            className="flex items-center justify-center pb-5"
            key={dzikir.id}
          >
            <div
              className={`grid w-full py-10 px-6 md:px-20 rounded-xl text-white gap-3 ${
                condition === "pagi" ? "bg-[#557C56]" : "bg-[#16423C]"
              }`}
            >
              <div className="flex items-center justify-end">
                <div className="w-fit p-2 text-2xl md:text-3xl flex space-x-3 text-[#000000] bg-[#E9EFEC] rounded-md">
                  <p
                    className={`${cangaOne.className} `}
                  >
                    {dzikir.read}
                  </p>
                  {!dzikir.benefit ? (
                    ""
                  ) : (
                    <IconButton
                      onClick={() => handleOpen(dzikir.benefit)}
                      className="bg-[#000000] rounded-full items-center justify-center shadow-lg"
                    >
                      <span className={`${lilitaOne.className} text-3xl`}>?</span>
                    </IconButton>
                  )}
                </div>
                
              </div>
              <p
                className={`${amiri.className} text-4xl md:text-5xl text-right my-7 leading-[5rem] lg:leading-[7rem]`}
              >
                {dzikir.arabic}
              </p>
              <p className="font-serif font-light bg-[#0f0e0e] px-4 py-2 rounded-md">
                {dzikir.translation};
              </p>
            </div>
          </section>
        ))
      ) : (
        <Loading />
      )}
    </div>
  );
}

export default function Page() {
  const [condition, setCondition] = useState("pagi");
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked((prevChecked) => {
      const newCondition = !prevChecked ? "sore" : "pagi";
      setCondition(newCondition); 
      return !prevChecked;
    });
  };

  return (
    <>
      <Navbar />
      <div className="mx-5 md:mx-32">
        <div className="flex flex-col my-8">
          <div className="flex flex-col-reverse md:flex-row items-center justify-end md:justify-between">
            <h1
              className={`${pOne.className} text-6xl md:text-8xl md:text-left text-center`}
            >
              Bacaan Dzikir{" "}
              <span className={condition !== 'sore' ? ' text-[#557C56]' : ' text-[#16423C]'}>
                {condition.replace(/^./, condition[0].toUpperCase())}
              </span>
            </h1>
            <label className="flex cursor-pointer select-none items-center">
              <div className="relative">
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={handleCheckboxChange}
                  className="sr-only"
                />
                <div
                  className={`box block h-8 w-14 rounded-full ${
                    isChecked ? "bg-primary" : "bg-[#557C56]"
                  }`}
                ></div>
                <div
                  className={`absolute left-1 top-1 flex h-6 w-6 items-center justify-center rounded-full bg-white transition ${
                    isChecked ? "translate-x-full" : "" 
                  }`}
                ></div>
              </div>
            </label>
          </div>
          <div className="w-full h-[1px] bg-black"></div>
          <p className="my-6 text-sm md:text-base md:text-left text-justify font-normal font-poppins">
            Dzikir adalah amalan dalam Islam yang melibatkan pengulangan
            nama-nama Allah dan kalimat pujian untuk mengingat dan mendekatkan
            diri kepada-Nya. Dilakukan secara lisan atau dalam hati, dzikir
            membawa ketenangan dan kedamaian. Jenis dzikir meliputi tasbih
            (Subhanallah), tahmid (Alhamdulillah), tahlil (La ilaha illallah),
            dan takbir (Allahu Akbar). Manfaat dzikir mencakup peningkatan
            keimanan, pengurangan stres, dan rasa syukur atas nikmat Allah.
          </p>
        </div>
        <DzikirList condition={condition} />
        <ScrollToTopButton/>
        <div className="w-full items-start pb-10">
          <div className="w-full h-[1px] bg-black"></div>
          <p className="py-3">
            API by{" "}
            <a href="https://dzikir.zakiego.com/list-api" target="_blank">
              zakiego
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
