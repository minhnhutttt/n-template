const LineButton = () => {
  return (
    <div className="w-[510px] mx-auto">
      <div className="md:text-[18px] text-[14px] bg-[#101541] rounded-2xl text-center text-white relative p-1.5 mb-7">
        楽しく稼げるLIVE配信をしたい方お待ちしております
        <span className="absolute top-full left-1/2 -translate-x-1/2">
          <img src="/assets/images/bg-bubble.png" alt="" />
        </span>
      </div>
      <div className="w-full flex justify-center h-[124px]">
          <a href="https://lin.ee/6PgmBNE" target="_blank" className="w-full max-w-[510px] h-[115px] gap-3 relative rounded-[24px] md:text-[28px] text-[20px] text-white font-black bg-bg-line flex items-center justify-center hover:border-b border-b-[9px] hover:mt-[8px] border-[#005800] duration-200 tracking-[0.2em]">
            <figure><img className="max-md:w-6" src="/assets/images/ic-line.png" alt="" /></figure>
            <span>LINEでご応募</span>
            <svg className="absolute right-3" xmlns="http://www.w3.org/2000/svg" width="17" height="26" viewBox="0 0 17 26" fill="none">
              <path d="M16.1331 10.9635C17.2273 11.9111 17.2273 13.6085 16.1331 14.5561L4.3692 24.7439C2.8302 26.0767 0.437239 24.9835 0.437239 22.9476L0.43724 2.57198C0.43724 0.536069 2.8302 -0.557154 4.3692 0.77566L16.1331 10.9635Z" fill="white"/>
            </svg>
          </a>
        </div>
    </div>
  );
};

export default LineButton;
