import Image from "next/image";

export default function Logo() {
    const imgresponsive : number = 80;
    return (
        <div className="flex items-center">
        <Image
          width={imgresponsive}
          height={imgresponsive}
          src="/images/logo-mosqueku.png"
          alt="logo"
        />
        <div className="px-3 items-center h-fit w-fit">
          <h1 className="text-4xl font-bold cursor-pointer">Mosqueku</h1>
          <h5 className="font-light -tracking-[-0.4em] text-[12px]">
            Solusi Digital Umat
          </h5>
        </div>
      </div>
    );
};
