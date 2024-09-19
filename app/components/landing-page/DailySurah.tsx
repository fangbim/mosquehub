'use client';
import { useEffect, useState } from "react";
import getSurat from "../../utils/api/DailySurah"

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

    if (newData && newData.data && newData.data.ayat && newData.data.ayat[randomAyat]) {
      const dataAyat = newData?.data.ayat[randomAyat]?.nomorAyat;
      const teksArab = newData?.data.ayat[randomAyat]?.teksArab;
      const isiSurat = newData?.data.ayat[randomAyat]?.teksIndonesia;
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

  const oneHour = 3600000 
  
  useEffect(() => {
    const interval = setInterval(() => {
      getQuranData();
    }, oneHour);

    return () => clearInterval(interval);
  }, [])

  return (
    <section className='flex items-center justify-center md:pb-28'>
      <div className='bg-secondary 2xl:w-[91.5rem] w-full py-16 px-6 md:px-36 2xl:rounded-[50px] justify-center grid text-white text-center gap-11'>
        <h1 className='text-2xl md:text-3xl font-bold'>Daily Surah</h1>
        <p className=' text-3xl md:text-5xl leading-loose font-serif'>{textArab}</p>
        <p className='bg-[#16423C] font-light text-xs md:text-sm -mt-4'>&quot;{isi}&quot;</p>
        <p className='text-lg md:text-xl -mt-9'>
          QS. {surat}, Ayat ke - {ayat}
        </p>
      </div>
    </section>
  )
}
