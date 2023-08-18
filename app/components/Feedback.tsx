import BTNPrimary from "./button/BtnPrimary";

export default function Feedback() {
  return (
    <section className=" ">
      <div className="grid bg-[#DAD7CD] py-14 md:py-28 justify-center items-center gap-6">
        <h1 className="text-xl md:text-4xl font-bold text-center text-wh">Bantu Kami Mengembangkan{<br/>}Layanan Lebih Baik Lagi</h1>
        <div className="flex justify-center">
            <BTNPrimary>Send Feedback</BTNPrimary> 
        </div>
      </div>
    </section>
  );
}
