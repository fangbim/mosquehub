import { lilitaOne } from "../../lib/fonts";
import FeatureCard from "./FeaturesCard";

const features = [
  {
    id: "01",
    path: "/jadwal-sholat",
    title: "Waktu Sholat",
    icon: "001-praying",
  },
  {
    id: "02",
    path: "/doa-harian",
    title: "Doa Harian",
    icon: "010-praying-1",
  },
  {
    id: "03",
    path: "/bacaan-dzikir",
    title: "Bacaan Dzikir",
    icon: "007-beads",
  },
  {
    id: "04",
    path: "/belajar-islam",
    title: "Belajar Islam",
    icon: "003-quran-1",
  },
  {
    id: "05",
    path: "/berbagi-sesama",
    title: "Berbagi Sesama",
    icon: "009-infaq-1",
  },
];

export default function Features() {
  return (
    <section id="features">
      <div className="justify-center flex flex-col items-center my-6 md:my-16 gap-y-16">
        <h1
          className={`${lilitaOne.className} text-3xl md:text-5xl -mb-7 py-2 px-3 text-center`}
        >
          Fitur lain dari Mosqueku
        </h1>
        <div className="grid lg:flex gap-4 lg:gap-24 px-24 md:px scale-75 sm:scale-100 -my-36 sm:my-0">
          {features.map((features) => (
            <FeatureCard
              key={features.id}
              path={features.path}
              title={features.title}
              icon={`/icons/features/${features.icon}.png`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
