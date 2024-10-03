import { lilitaOne } from "../../lib/fonts";
import FeatureCard from "./FeaturesCard";

export default function Features() {
  return (
    <section id="features">
      <div className="justify-center flex flex-col items-center my-16 gap-y-16">
        <h1 className={`${lilitaOne.className} text-3xl md:text-5xl p-2 px-3 text-center`}>
          Fitur lain dari Mosqueku
        </h1>
        <div className="grid lg:flex gap-4 lg:gap-24 px-24 md:px">
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
