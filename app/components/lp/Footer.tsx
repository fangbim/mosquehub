import { LPData } from "../../data/LPData";
import Logo from "./Logo";
import SocialMedia from "./SocialMedia";

export default function Footer({credit = "", linkAPI = ""}) {
    
    return (
        <section id="about">
            <div className="bg-secondary py-9 px-6 md:px-72 flex items-center justify-between flex-wrap flex-col md:flex-row gap-y-10">
            <div className="grid text-white">
                <Logo/>
                <SocialMedia/>
            </div>
            <div className="grid text-white text-center md:text-left md:w-3/5 gap-3 md:gap-6">
                <h1 className="text-lg md:text-3xl font-semibold md:mt-10">About us</h1>
                <p className="font-light text-[10px] md:text-sm text-justify">{LPData.about_us}</p>
            </div>
            <div className="grid w-full text-white font-light space-y-2 text-sm">
                <div className="w-full h-[1px] bg-gray-400"></div>
                <div className="flex justify-between">
                    <p className="">© 2023 Mosque Hub </p>
                    <p><a href={linkAPI} target="_blank">{credit}</a></p>
                </div>
            </div>
        </div>
        </section>
        
    );
};
