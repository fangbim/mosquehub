import DailySurah from "./components/landing-page/DailySurah";
import Features from "./components/landing-page/Features";
import Feedback from "./components/landing-page/Feedback";
import Footer from "./components/landing-page/Footer";
import Hero from "./components/landing-page/Hero";
import Navbar from "./components/landing-page/Navbar";

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