import Image from "next/image";

export default function Hero() {
  return (
    <section id="header">
      <div className="flex items-center justify-center mt-9">
      <div className="px-24 flex md:gap-40 2xl:w-[91.5rem] w-screen bg-secondary py-16 2xl:rounded-[50px] md:flex items-center justify-center">
        <div className="grid">
          <h1 className="font-black text-4xl text-center md:text-left md:text-5xl text-white mb-5">
            Dapatkan Kemudahan Dalam Menjangkau Informasi Masjid
          </h1>

          <div className="grid md:hidden mx-16 my-4">
          <Image
            src="/images/muslim.png"
            alt="hero-img"
            width={2785}
            height={1178}
            priority={true}
          />
        </div>

          <div className="py-5 flex md:w-[31rem] w-screen justify-between flex-wrap flex-col md:flex-row gap-y-2 md:px-0 px-16">
            <button className="bg-white py-4 px-5 rounded-[40px] text-secondary font-bold text-[16px] hover:bg-gradient-to-r from-teal-200 to-lime-200 shadow-lg">
              Buat halaman masjid
            </button>
            <button
              className="border-2 py-4 px-5 rounded-[40px] text-white font-bold text-[16px] hover:bg-gradient-to-r from-emerald-500 to-lime-600 drop-shadow-lg"
              type="button"
            >
              Gabung halaman masjid
            </button>
          </div>
        </div>

        <div className="hidden md:grid">
          <Image
            src="/images/muslim.png"
            alt="hero-img"
            width={2785}
            height={1178}
            priority={true}
          />
        </div>
      </div>
    </div>
    </section>
    
  );
}
