"use client";
import useScrollAnimations from "@/hooks/useScrollAnimations";

const data = [
  {
    image: "/assets/images/reason-01.png",
    title: "365日対応の相談窓口",
    text: "専属マネージャーが、配信に関するお悩みはもちろんのこと、適切な配信時間の提案や操作方法、運営への連絡まで何でも相談できます。",
  },
  {
    image: "/assets/images/reason-02.png",
    title: "所属ライバー × 協力",
    text: "TOP LIVE所属ライバー専用の配信告知ルームでは、ライバー同士が応援し合い、相互効果を生み出します。新人ライバーもすぐに仲間ができます。",
  },
  {
    image: "/assets/images/reason-03.png",
    title: "ライブ配信攻略資料",
    text: "初級編から中級編まで網羅された資料があり、また、配信についてのテストも出来るので自分の成長を確認できます。",
  },
  {
    image: "/assets/images/reason-04.png",
    title: "新人講習",
    text: "いつでも自由に読めるTOP LIVE所属ライバー専用の新人講習ルームがあります。過去にあったTOPライバーの成功事例や悩みを1ヶ月間、1日1～2項目学べます。",
  },
  {
    image: "/assets/images/reason-05.png",
    title: "新人豪華特典",
    text: "新人期間中の成績に応じて、マイクやライトなどの機材、Amazonギフト権をプレゼント！",
  },
  {
    image: "/assets/images/reason-06.png",
    title: "企業案件あり",
    text: "テレビ出演のオファーや企業案件(不定期)もあります。ライバーになりたい方は、いつでもお問い合わせください。",
  },
];

const Reasons = () => {
  const ref = useScrollAnimations();
  return (
    <div ref={ref} className="relative pt-[100px] px-5 md:pt-[150px]">
      <div className="fade-up relative mx-auto flex w-full max-w-[414px] justify-between">
        <div className="absolute top-[-36px] md:left-[-30px] left-[-15px]">
          <img className="max-md:w-[90px]" src="/assets/images/hand.png" alt="" />
        </div>
        <span className="w-[42px] border border-r-0 border-[#101541]"></span>
        <p className="py-4 text-center text-[24px] font-semibold md:text-[32px]">
          なぜTOP LIVEが <br />
          トップライバーを
          <br />
          輩出し続けられるか
        </p>
        <span className="w-[42px] border border-l-0 border-[#101541]"></span>
      </div>
      <div className="w-full max-w-[460px] mx-auto md:mt-6 mt-4 space-y-8">
        {data.map((item,index)=>(
          <div className="fade-up pt-2 pl-2 relative" key={index}>
            <div className="relative w-[calc(100%-12px)] md:w-[440px] h-[380px] md:h-[440px]">
              <div className="bg-white border border-[#BD84FA] w-full h-full pt-10 px-4 relative z-10 bg-[url('/assets/images/reason-doco.png')] bg-no-repeat bg-[bottom_12px_right_12px] max-md:bg-[length:50px_auto]">
                <div className="md:w-[376px] h-[380px] mx-auto flex flex-col items-center">
                  <figure>
                    <img className="max-md:w-[140px]" src={item.image} alt="" />
                  </figure>
                  <p className="text-center md:text-[24px] text-[18px] font-semibold mt-4">{item.title}</p>
                  <p className="md:text-[18px] text-[14px] px-5 pt-5">{item.text}</p>
                </div>
              </div>
              <div className="absolute w-full h-full u-bg-gradient-01 -right-3 -bottom-3"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reasons;
