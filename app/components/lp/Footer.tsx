import { LPData } from "../../data/LPData";
import Logo from "./Logo";
import SocialMedia from "./SocialMedia";

export default function Footer() {

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
        </div>
        </section>
        
    );
};
