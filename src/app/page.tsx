"use client"
import { useEffect } from "react";
import ScrollOut from "scroll-out";
import Intro from "./components/Intro";
import Slider from "./components/slider";
import Liver from "./components/liver";
import Reasons from "./components/reasons";
import Process from "./components/process";
export default function Home() {
  useEffect(()=>{
    ScrollOut({
      once: true
    });
  },[])
  return (
    <main>
      <div className="relative">
        <div className="absolute inset-0 bg-black/60 xl:hidden max-xl:animate-[fadeOut_8s_forwards]"></div>
        <img className="w-full" src="/assets/images/img-fv.png" alt="" />
      </div>
      <Intro />
      <Slider />
      <Liver />
      <Reasons />
      <Process />
    </main>
  );
}
