"use client"
import { useEffect } from "react";
import ScrollOut from "scroll-out";
export default function Home() {
  useEffect(()=>{
    ScrollOut({
      once: true
    });
  },[])
  return (
    <main>
      <div>
        <img src="/assets/images/img-fv.png" alt="" />
      </div>
    </main>
  );
}
