"use client";
import Title from "@/components/Title";
import useScrollAnimations from "@/hooks/useScrollAnimations";

const Reasons = () => {
  const ref = useScrollAnimations(); 
    return (
      <div ref={ref} className="px-5 md:pt-[150px] pt-[100px] relative">
        <div className="w-full max-w-[414px] mx-auto flex justify-between relative">
            <div className="absolute top-[-36px] left-[-30px]">
                <img src="/assets/images/hand.png" alt="" />
            </div>
            <span className="border border-[#101541] w-[42px] border-r-0"></span>
            <p className="md:text-[32px] text-[24px] text-center font-semibold py-4">
                なぜTOP LIVEが <br />
                トップライバーを<br />
                輩出し続けられるか
            </p>
            <span className="border border-[#101541] w-[42px] border-l-0"></span>
        </div>
      </div>
    );
  };
  
  export default Reasons;
  