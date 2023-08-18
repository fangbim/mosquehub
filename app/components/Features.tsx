import FeatureCard from "./FeatureCard";

export default function Features() {
  return (
    <section id="features">
      <div className="justify-center flex flex-col items-center my-16 gap-y-16">
      <h1 className="text-3xl md:text-5xl font-bold p-2 px-3 text-center">
        Fitur lain dari Mosqueku
      </h1>
      <div className="grid lg:flex gap-4 lg:gap-24">
        <FeatureCard title={'Jadwal Sholat'} icon={'/icons/001-praying.png'}/>
        <FeatureCard title={'Doa Harian'} icon={'/icons/010-praying-1.png'}/>
        <FeatureCard title={'Bacaan Dzikir'} icon={'/icons/007-beads.png'}/>
        <FeatureCard title={'Belajar Islam'} icon={'/icons/003-quran-1.png'}/>
        <FeatureCard title={'Berbagi Sesama'} icon={'/icons/009-infaq-1.png'}/>
      </div>
    </div>
    </section>
    
  );
}
