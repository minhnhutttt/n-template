"use client"
import { useEffect } from "react";
import ScrollOut from "scroll-out";
import Intro from "./components/Intro";
export default function Home() {
  useEffect(()=>{
    ScrollOut({
      once: true
    });
  },[])
  return (
    <main>
      <div className="relative">
        <div className="absolute inset-0 bg-black/60 max-xl:animate-[fadeOut_8s_forwards]"></div>
        <img src="/assets/images/img-fv.png" alt="" />
      </div>
      <Intro />
    </main>
  );
}
