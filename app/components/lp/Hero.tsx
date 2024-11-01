import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { LPData } from "../../data/LPData";

export default function Hero() {
  return (
    <section id="header">
      <div className="flex items-center justify-center  mt-36 bg-secondary md:bg-inherit">
        <div className="px-24 flex md:gap-40 2xl:w-[91.5rem] w-screen bg-secondary py-16 2xl:rounded-[50px] items-center justify-center">
          <div className="grid">
            <h1 className="font-black text-4xl text-center md:text-left md:text-5xl text-white mb-5 my-2">
              {LPData.tagline}
            </h1>
            <div className="grid md:hidden mx-16 my-4">
              <Image
                src="/images/muslim.png"
                alt="hero-img"
                width={2785}
                height={1178}
              />
            </div>
            <div className="py-5 flex justify-center md:w-[31rem] w-screen gap-y-2 relative px-5 md:px-0">
              <input
                className="w-full h-10 md:h-12 rounded-full bg-transparent border-white border border-opacity-50 outline-none font-light text-base md:text-2xl p-5 pr-14 md:pr-16 backdrop-blur-sm text-white placeholder-gray-200 placeholder-opacity-50 placeholder:text-sm md:placeholder:text-xl"
                placeholder="Cari masjid yang ingin kamu tahu!"
              />
              <MagnifyingGlassIcon
                strokeWidth={2}
                className="absolute right-10 md:right-4 top-1/2 transform -translate-y-1/2 h-5 w-5 md:h-6 md:w-6 text-white"
              />
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
