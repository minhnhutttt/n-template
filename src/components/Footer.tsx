const Footer = () => {
  return (
    <footer className="bg-[#101541] md:pt-[100px] pt-[60px] pb-6">
        <div className="flex justify-center">
            <a href="/" className="hover:opacity-75 duration-150">
                <img src="/assets/images/logo-footer.png" alt="" />
            </a>
        </div>
        <div className="flex justify-center md:text-[18px] text-[15px] text-white py-10 gap-10">
            <a href="/company" className="hover:opacity-75 duration-150">企業情報</a>
            <a href="/privacy-policy" className="hover:opacity-75 duration-150">プライバシーポリシー</a>
        </div>
        <div className="flex justify-center items-cenrer gap-16 pt-3 pb-14">
            <a href="/"><img src="/assets/images/logo-tiktok.png" alt="" /></a>
            <a href="/"><img src="/assets/images/logo-instagram.png" alt="" /></a>
            <a href="/"><img src="/assets/images/logo-line.png" alt="" /></a>
        </div>
        <p className="text-center md:text-[16px] text-[14px] text-white font-light">copyright © 2024 TOP LIVE</p>
    </footer>
  );
};

export default Footer;
