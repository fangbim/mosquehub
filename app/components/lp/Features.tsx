import { lilitaOne } from "../../lib/fonts";
import FeatureCard from "./FeaturesCard";

export default function Features() {
  return (
    <section id="features">
      <div className="justify-center flex flex-col items-center my-6 md:my-16 gap-y-16">
        <h1 className={`${lilitaOne.className} text-3xl md:text-5xl -mb-7 py-2 px-3 text-center`}>
          Fitur lain dari Mosqueku
        </h1>
        <div className="grid lg:flex gap-4 lg:gap-24 px-24 md:px scale-75 sm:scale-100 -my-36 sm:my-0">
          <FeatureCard path={'/jadwal-sholat'} title={'Jadwal Sholat'} icon={'/icons/001-praying.png'}/>
          <FeatureCard path={'/doa-harian'} title={'Doa Harian'} icon={'/icons/010-praying-1.png'}/>
          <FeatureCard path={'/bacaan-dzikir'} title={'Bacaan Dzikir'} icon={'/icons/007-beads.png'}/>
          <FeatureCard path={'/belajar-islam'} title={'Belajar Islam'} icon={'/icons/003-quran-1.png'}/>
          <FeatureCard path={'/berbagi-sesama'} title={'Berbagi Sesama'} icon={'/icons/009-infaq-1.png'}/>
        </div>
      </div>
    </section>
    
  );
}
