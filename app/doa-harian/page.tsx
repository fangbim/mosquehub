"use client";
import React  from "react";
import { useEffect, useState } from "react";
import DoaHarian from "../utils/api/DoaHarian";
import Navbar from "../components/lp/Navbar";
import { amiri, cangaOne, pOne } from "../lib/fonts";

import { Button, IconButton } from "@material-tailwind/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";
import { CardPlacehoderSkeleton } from "../components/Skeleton";

function DoaList() {
  const [doaList, setDoaList] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 5; // Jumlah doa per halaman

  useEffect(() => {
    const fetchData = async () => {
      const data = await DoaHarian();
      if (data) {
        setDoaList(data);
      }
    };
    fetchData();
  }, []);

  const totalPages = Math.ceil(doaList.length / itemsPerPage);

  const getItemProps = (index) =>
    ({
      variant: currentPage === index ? "filled" : "text",
      color: "gray",
      onClick: () => {
        setCurrentPage(index) 
        window.scrollTo(0, 0)
    },
      
    } as any);

  const currentDoaList = doaList.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const goToNextPage = () => {
    if (currentPage === 5) return;
    setCurrentPage(currentPage + 1);

    window.scrollTo(0, 0);
  };

  const goToPreviousPage = () => {
    if (currentPage === 1) return;
    setCurrentPage(currentPage - 1);

    window.scrollTo(0, 0);
  };
  return (
    <>
      {" "}
      {currentDoaList.length > 0 ? (
        <div>
          {currentDoaList.map((doa) => (
            <section
              className="flex items-center justify-center pb-5"
              key={doa.id}
            >
              <div className="grid bg-[#384B70] w-full py-4  md:py-10 px-6 md:px-20 rounded-xl text-white gap-1 md:gap-3">
                <p
                  className={`${cangaOne.className} text-3xl md:text-6xl text-[#F5EFFF]`}
                >
                  {doa.judul}
                </p>
                <p
                  className={`${amiri.className} text-2xl md:text-5xl text-right my-7 leading-[4rem] lg:leading-[7rem]`}
                >
                  {doa.arab}
                </p>
                <p className="font-medium font-sans text-gray-50 text-xs md:text-base">
                  {doa.latin}
                </p>
                <p className="font-serif font-light bg-[#000000] px-4 py-2 rounded-md text-[9px] md:text-base">
                  &quot;{doa.terjemah}&quot;
                </p>
              </div>
            </section>
          ))}
        </div>
      ) : (
        <CardPlacehoderSkeleton />
      )}
      <div className="flex items-center gap-0 md:gap-4 justify-center my-7">
        <Button
          variant="text"
          className="flex items-center gap-2"
          onClick={goToPreviousPage}
          disabled={currentPage === 1}
        >
          <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" /> <span className=" hidden md:inline">Previous</span>
        </Button>
        <div className="flex items-center gap-2">
          {Array.from({ length: totalPages }, (_, index) => (
            <IconButton key={index + 1} {...getItemProps(index + 1)}>
              {index + 1}
            </IconButton>
          ))}
        </div>
        <Button
          variant="text"
          className="flex items-center gap-2"
          onClick={goToNextPage}
          disabled={currentPage === totalPages}
        >
          <span className=" hidden md:inline">Next</span>
          <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
        </Button>
      </div>
    </>
  );
}

export default function Page() {
  return (
    <>
      <Navbar />
      <div className="mx-5 md:mx-32">
        <div className="flex flex-col my-8">
          <h1
            className={`${pOne.className} text-6xl md:text-8xl md:text-left text-center`}
          >
            Doa Harian
          </h1>
          <div className="w-full h-[1px] bg-black"></div>
          <p className="my-6 text-sm md:text-base md:text-left text-justify font-normal font-poppins">
            Doa Harian adalah kumpulan doa-doa pendek yang dapat dibaca setiap
            hari untuk memulai dan menutup aktivitas harian. Doa-doa ini berisi
            permohonan perlindungan, petunjuk, serta rasa syukur kepada Tuhan
            atas segala nikmat dan kesempatan. Dengan melafalkan doa harian,
            seseorang diingatkan untuk selalu bersyukur, tetap rendah hati, dan
            berserah diri kepada kehendak Tuhan dalam setiap aspek kehidupan.
          </p>
        </div>
        <DoaList />
        <div className="w-full items-start pb-10">
          <div className="w-full h-[1px] bg-black"></div>
          <p className="py-3">
            API by{" "}
            <a href="https://open-api.my.id/" target="_blank">
              santrikoding.com
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
