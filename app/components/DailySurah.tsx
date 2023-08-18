'use client';
import { useEffect, useState } from "react";
import getSurat from "../api/DailySurah"

const temporary = {
  ayat: 32,
  textarab: 'وَلَا تَقْرَبُوا الزِّنٰىٓ اِنَّهٗ كَانَ فَاحِشَةً ۗوَسَاۤءَ سَبِيْلً',
  isi: 'Dan janganlah kamu mendekati zina; (zina) itu sungguh suatu perbuatan keji, dan suatu jalan yang buruk.',
  surat: 'Al-Isra'
}

export default function DailySurah () {
  const [ayat, setAyat] = useState(temporary.ayat);
  const [isi, setIsi] = useState(temporary.isi);
  const [surat, setSurat] = useState(temporary.surat);
  const [textArab, setTextArab] = useState(temporary.textarab);

  const getQuranData = async () => {
    const randomAyat = Math.floor(Math.random() * 100) + 1;
    const newData : any = await getSurat();
  
    const dataAyat = newData?.data.ayat[randomAyat]?.nomorAyat;
    const teksArab = newData?.data.ayat[randomAyat]?.teksArab;
    const isiSurat = newData?.data.ayat[randomAyat]?.teksIndonesia;
    const namaSurat = newData?.data.namaLatin;
  
    setAyat(dataAyat);
    setIsi(isiSurat);
    setSurat(namaSurat);
    setTextArab(teksArab);
  }

  console.log(ayat);
  
  
  useEffect(() => {
    const interval = setInterval(() => {
      getQuranData();
    }, 24 * 60 * 60 * 1000); //24 * 60 * 60 * 1000

    return () => clearInterval(interval);
  })

  return (
    <section className='flex items-center justify-center md:pb-28'>
      <div className='bg-secondary 2xl:w-[91.5rem] w-full py-16 px-6 md:px-36 2xl:rounded-[50px] justify-center grid text-white text-center gap-11'>
        <h1 className='text-3xl font-bold'>Daily Surah</h1>
        <p className='font-light md:text-3xl'>{textArab}</p>
        <p className='font-light text-xs md:text-sm'>&quot;{isi}&quot;</p>
        <p className='text-lg md:text-xl'>
          QS. {surat}, Ayat ke - {ayat}
        </p>
      </div>
    </section>
  )
}
