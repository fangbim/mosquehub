'use client'
import { useEffect, useState } from "react";
import DoaHarian from "../utils/api/DoaHarian";
import Navbar from "../components/landing-page/Navbar";
import { Bungee, Changa_One } from "@next/font/google";

const bungee = Bungee({ subsets: ['latin'], weight: ['400']})
const cangaOne = Changa_One({ subsets: ['latin'], weight: ['400']})

export default function Page() {
    const [doaList, setDoaList] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    // State untuk pagination
    const [currentPage, setCurrentPage] = useState<number>(1);
    const itemsPerPage = 5; // Jumlah doa per halaman

    useEffect(() => {
        const fetchData = async () => {
            const data = await DoaHarian();
            if (data) {
                setDoaList(data);
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    // Menghitung total halaman
    const totalPages = Math.ceil(doaList.length / itemsPerPage);

    // Mengambil doa yang sesuai dengan halaman saat ini
    const currentDoaList = doaList.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    // Fungsi untuk mengganti halaman
    const goToNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
        window.scrollTo(0, 0)
    };

    const goToPreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
        window.scrollTo(0, 0)
    };

    if (loading) {
        return (
            <div className="flex items-center justify-center py-8 w-full h-screen">
                <h1 className="text-[3rem] ">Lagi Loading tadz...</h1>
            </div>
        );
    }

    return (
        <>
            <Navbar />
            <div className="flex flex-col items-center justify-center mb-8">
                <h1 className={`${bungee.className} text-4xl md:text-6xl`}>Doa Harian</h1>
                <p className="mx-10 xl:mx-72 my-6 text-sm md:text-base text-center font-normal font-poppins">
                    Doa Harian adalah kumpulan doa-doa pendek yang dapat dibaca setiap hari untuk memulai dan menutup aktivitas harian. Doa-doa ini berisi permohonan perlindungan, petunjuk, serta rasa syukur kepada Tuhan atas segala nikmat dan kesempatan. Dengan melafalkan doa harian, seseorang diingatkan untuk selalu bersyukur, tetap rendah hati, dan berserah diri kepada kehendak Tuhan dalam setiap aspek kehidupan.
                </p>
            </div>

            <div>
                {currentDoaList.map((doa) => (
                    <section className="flex items-center justify-center pb-5 px-5 md:px-32" key={doa.id}>
                        <div className="grid bg-[#384B70] w-full py-10 px-6 md:px-20 rounded-xl text-white gap-3">
                            <p className={`${cangaOne.className} text-6xl text-[#F5EFFF]`}>{doa.judul}</p>
                            <p className="text-4xl text-right my-7 leading-loose font-serif">{doa.arab}</p>
                            <p className="font-serif font-light">{doa.latin}</p>
                            <p className="font-serif font-light bg-[#3C3D37] px-4 py-2">&quot;{doa.terjemah}&quot;</p>
                        </div>
                    </section>
                ))}
            </div>

            {/* Kontrol Pagination */}
            <div className="flex justify-center my-8 items-center">
                <button
                    onClick={goToPreviousPage}
                    disabled={currentPage === 1}
                    className={`mx-2 px-4 py-2 border ${currentPage === 1 ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-200"}`}
                >
                    Previous
                </button>
                <span className="mx-4 py-2 text-lg text-center justify-center"> {currentPage} / {totalPages}</span>
                <button
                    onClick={goToNextPage}
                    disabled={currentPage === totalPages}
                    className={`mx-2 px-4 py-2 border ${currentPage === totalPages ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-200"}`}
                >
                    Next
                </button>
            </div>
        </>
    );
}
