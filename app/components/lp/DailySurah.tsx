'use client';
import { useEffect, useState } from "react";
import getSurat from "../../utils/api/DailySurah"
import { amiri, lilitaOne } from "../../lib/fonts";

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

  const availableNumber = Math.floor(Math.random() * 3) + 1;

  const getQuranData = async () => {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    const newData : any = await getSurat();

    if (newData && newData.data && newData.data.ayat && newData.data.ayat[randomNumber]) {
      const dataAyat = newData?.data.ayat[randomNumber]?.nomorAyat;
      const teksArab = newData?.data.ayat[randomNumber]?.teksArab;
      const isiSurat = newData?.data.ayat[randomNumber]?.teksIndonesia;
      const namaSurat = newData?.data.namaLatin;
    
      setAyat(dataAyat);
      setIsi(isiSurat);
      setSurat(namaSurat);
      setTextArab(teksArab);
    } else {
      setAyat(temporary.ayat);
      setIsi(temporary.isi);
      setSurat(temporary.surat);
      setTextArab(temporary.textarab);
    }
  }

  const fiveMinute = 300000
  
  useEffect(() => {
    const interval = setInterval(() => {
      getQuranData();
    }, fiveMinute);

    return () => clearInterval(interval);
  }, [])

  return (
    <section className='flex items-center justify-center md:pb-28'>
      <div className='bg-secondary 2xl:w-[91.5rem] w-full py-6 md:py-16 px-6 md:px-36 2xl:rounded-[50px] justify-center grid text-white text-center gap-6 md:gap-11'>
        <h1 className={`${lilitaOne.className} text-xl md:text-5xl`}>Ayat hari ini</h1>
        <p className={`${amiri.className} text-2xl md:text-5xl leading-[4rem] lg:leading-[7rem]`}>{textArab}</p>
        <p className='bg-[#16423C] font-light text-xs md:text-sm -mt-4'>&quot;{isi}&quot;</p>
        <p className='text-lg md:text-xl -mt-3 md:-mt-9'>
          QS. {surat}, Ayat ke - {ayat}
        </p>
      </div>
    </section>
  )
}
