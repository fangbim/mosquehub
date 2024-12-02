import Image from "next/image";
import { LPData } from "../../data/LPData";
import SearchListMosque from "../SearchListMosque";

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
            <SearchListMosque />
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
