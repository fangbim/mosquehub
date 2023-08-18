import DailySurah from "./components/DailySurah";
import Features from "./components/Features";
import Feedback from "./components/Feedback";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <Features/>
    <DailySurah/>
    <Feedback/>
    <Footer/>
    </>
  )
}