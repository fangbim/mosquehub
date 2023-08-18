import Logo from "./Logo";
import SocialMedia from "./SocialMedia";

export default function Footer() {
    const aboutUs : string = "Mosqueku adalah startup digital yang fokus pada informasi mengenai keuangan dan kegiatan masjid di lingkungan anda. Kami memiliki tujuan untuk membantu para jamaah menemukan informasi mengenai masjid-masjid sekitar mereka. Kami juga menyediakan platform yang mudah digunakan bagi para takmir dan pengelola masjid untuk membagikan informasi tentang kegiatan masjid mereka kepada jamaah. Kami percaya bahwa dengan menyediakan informasi yang akurat dan tepat waktu, kami dapat membantu para jamaah menjalankan ibadah dengan lebih lancar dan nyaman. Kami terus berupaya untuk meningkatkan layanan kami demi kebaikan para jamaah masjid di Indonesia."

    return (
        <section id="about">
            <div className="bg-secondary py-9 px-6 md:px-72 flex items-center justify-between flex-wrap flex-col md:flex-row gap-y-10">
            <div className="grid text-white">
                <Logo/>
                <SocialMedia/>
            </div>
            <div className="grid text-white text-center md:text-left md:w-3/5 gap-3 md:gap-6">
                <h1 className="text-lg md:text-3xl font-semibold md:mt-10">About us</h1>
                <p className="font-light text-[10px] md:text-sm text-justify">{aboutUs}</p>
            </div>
        </div>
        </section>
        
    );
};
