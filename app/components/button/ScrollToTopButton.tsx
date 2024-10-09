import { ArrowTrendingUpIcon, ArrowUpCircleIcon } from "@heroicons/react/24/outline";
import React, { useState, useEffect } from "react";

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  // Fungsi untuk scroll ke atas
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Menampilkan tombol ketika scroll ke bawah
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-5 right-5 p-3 bg-blue-gray-900 text-white rounded-full shadow-lg hover:bg-gray-700 transition duration-300"
        >
          <ArrowUpCircleIcon strokeWidth={2} className="h-4 w-4"/>
        </button>
      )}
    </div>
  );
};
