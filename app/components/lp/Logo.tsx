import Image from "next/image";
import { oswald } from "../../lib/fonts";

export default function Logo() {
    const imgresponsive : number = 80;
    return (
        <div className="flex items-center justify-center">
        <Image
          width={imgresponsive}
          height={imgresponsive}
          src="/images/logo4.png"
          alt="logo"
        />
        <div className="px-3 items-center h-fit w-fit justify-center">
          <h1 className={`${oswald.className} text-4xl font-bold cursor-pointer`}>Mosque<span className="text-primary">Hub</span></h1>
          <h5 className="font-light -tracking-[-0.27em] text-[12px]">
            Solusi Digital Umat
          </h5>
        </div>
      </div>
    );
};
