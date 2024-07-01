const LineButton = () => {
  return (
    <div>
      <div className="w-full max-w-[510px] mx-auto">
        <div className="md:text-[clamp(1px,1.636vh,18px)] text-[clamp(1px,1.55vh,18px)] bg-[#101541] rounded-2xl text-center text-white relative p-1.5 mb-[clamp(1px,2.545vh,28px)]">
          楽しく稼げるLIVE配信をしたい方お待ちしております
          <span className="absolute top-full left-1/2 -translate-x-1/2">
            <img src="/assets/images/bg-bubble.png" alt="" />
          </span>
        </div>
        <div className="w-full flex justify-center h-[65px] md:h-[clamp(1px,11.273vh,124px)]">
            <a href="https://lin.ee/RFM7pae" target="_blank" className="w-full max-w-[510px] h-[60px] md:h-[clamp(1px,10.455vh,115px)] gap-3 relative md:rounded-[24px] rounded-[10px] md:text-[clamp(1px,2.545vh,28px)] text-[20px] text-white font-black bg-bg-line flex items-center justify-center hover:border-b md:border-b-[9px] border-b-[5px] hover:mt-[8px] hover:mt-[4px] border-[#005800] duration-200 tracking-[0.2em]">
              <figure><img className="max-md:w-[32px]" src="/assets/images/ic-line.png" alt="" /></figure>
              <span>LINEでご応募</span>
              <svg className="absolute right-3 max-md:w-3 md:w-[17px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 26" fill="none">
                <path d="M16.1331 10.9635C17.2273 11.9111 17.2273 13.6085 16.1331 14.5561L4.3692 24.7439C2.8302 26.0767 0.437239 24.9835 0.437239 22.9476L0.43724 2.57198C0.43724 0.536069 2.8302 -0.557154 4.3692 0.77566L16.1331 10.9635Z" fill="white"/>
              </svg>
            </a>
          </div>
      </div>
    </div>
  );
};

export default LineButton;
