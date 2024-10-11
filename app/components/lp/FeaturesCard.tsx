'use client'
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function FeatureCard({icon, title, path}) {
    const router = useRouter() 
    
    const content = {
        icon: icon,
        title: title,
        path: path
    }

    return (
        <button onClick={() => router.push(path) } className="bg-[#F5F5F5] border-2 hover:border-4 hover:border-primary rounded-3xl md:w-[163px] h-[206px] border-gray-500 border-opacity-40 drop-shadow-lg w-screen group">
          <div className="items-center justify-center flex-col flex gap-y-3 mx-10"> 
            <Image src={content.icon} alt="icon-praying" width={80} height={80} />
            <h3 className="text-xl font-light group-hover:font-medium">
              {content.title}
            </h3>
          </div>
        </button>
    );
};
