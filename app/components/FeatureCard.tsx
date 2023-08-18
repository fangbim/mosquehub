import Image from "next/image";

export default function FeatureCard({icon, title}) {

    const content = {
        icon: icon,
        title: title
    }

    return (
        <button className="border-2 hover:border-4 hover:border-primary rounded-3xl w-[163px] h-[206px] border-neutral-400 drop-shadow-lg">
          <div className="items-center justify-center grid gap-y-3 mx-10">
            <Image src={content.icon} alt="icon-praying" width={80} height={80} />
            <h3 className="text-xl font-light">
              {content.title}
            </h3>
          </div>
        </button>
    );
};
