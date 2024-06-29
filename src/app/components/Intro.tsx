"use client";
import Title from "@/components/Title";
import useScrollAnimations from "@/hooks/useScrollAnimations";

const Intro = () => {
  const ref = useScrollAnimations(); 
    return (
      <div ref={ref} className="px-5 md:pt-14 pt-10 relative">
        <h3 className="fade-up flex justify-center">
            <img src="/assets/images/intro-title.png" alt="" />
        </h3>
        <div className="md:mt-16 mt-8">
          <Title>TOP LIVE とは</Title>
          <p className="fade-up md:text-[18px] text-[14px] py-6 px-3 tracking-wider">
          17LIVEにおいてOfficial Business Partnerの最高ランクである【Gold Partner】及び【Silver Partner】に認定された実績を持ち、所属累計は3,000名以上の事務所である【Good Fellows Co.,Ltd.】が手掛ける、TikTok LIVE 専門事務所です。
          </p>
        </div>
      </div>
    );
  };
  
  export default Intro;
  