import Image from "next/image";
import { oswald } from "../../lib/fonts";

export default function Logo() {
    const imgresponsive : number = 80;
    return (
        <div className="flex flex-row items-center justify-center">
        <Image
          width={imgresponsive}
          height={imgresponsive}
          src="/images/logo4.png"
          alt="logo"
          className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20"
        />
        <div className="px-3 items-center h-fit w-fit justify-center">
          <h1 className={`${oswald.className} text-2xl  sm:text-4xl font-bold cursor-pointer`}>Mosque<span className="text-primary">Hub</span></h1>
          <h5 className="font-light -tracking-[-0.27em] text-[8px] sm:text-[12px]">
            Solusi Digital Umat
          </h5>
        </div>
      </div>
    );
};
