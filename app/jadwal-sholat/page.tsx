import Navbar from "../components/lp/Navbar";

export default function Page() {
    const location = 'Lamongan'
    return(
        <>
            <Navbar />
            <div className="flex items-center justify-center py-8">
                <h1 className="text-[3rem] ">Jadwal Sholat untuk Wilayah {location}</h1>
            </div>
        </>
        
        
    );
};
