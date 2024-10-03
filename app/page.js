import DailySurah from "./components/lp/DailySurah";
import Features from "./components/lp/Features";
import Feedback from "./components/lp/Feedback";
import Footer from "./components/lp/Footer";
import Hero from "./components/lp/Hero";
import Navbar from "./components/lp/Navbar";

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