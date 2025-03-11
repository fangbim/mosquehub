import DailySurah from "./components/lp/DailySurah";
import Features from "./components/lp/Features";
import Feedback from "./components/lp/Feedback";
import Footer from "./components/lp/Footer";
import Hero from "./components/lp/Hero";
import Navbar from "./components/lp/Navbar";
import {NextUIProvider} from '@nextui-org/react';


export default function Home() {
  return (
    <NextUIProvider>
      <main className="min-w-full overflow-x-hidden ">
      <Navbar/>
      <Hero/>
      <Features/>
      <DailySurah/>
      <Feedback/>
      <Footer/>
    </main>
    </NextUIProvider>
  )
}