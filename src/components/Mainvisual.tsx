"use client"
import { usePathname } from "next/navigation";
import Fv from "./Fv";
import LineButton from "./LineButton";

const Mainvisual = () => {
    const pathname = usePathname();
    return (
        <div className={`flex-1 xl:h-screen xl:overflow-hidden max-xl:absolute max-xl:inset-0 max-xl:z-50 xl:sticky top-0 max-xl:animate-[fadeOut_8s_forwards] ${pathname !== "/" ? 'max-xl:!hidden' : ''}`}>
        <Fv />
        <div className="max-xl:hidden">
          <LineButton />
        </div>
      </div>
    );
  };
  
  export default Mainvisual;
  