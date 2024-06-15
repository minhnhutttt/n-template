"use client";

import { useCallback, useState } from "react";
interface NavLink {
  link: string;
  text: string;
  target?: string;
}

const links: NavLink[] = [
  {
    link: "/",
    text: "メタでペット供養とは？",
  },
  {
    link: "/",
    text: "産官学連携",
  },
  {
    link: "/price",
    text: "料金",
  },
  {
    link: "#faq",
    text: "FAQ",
  },
];
const Header = () => {
  const [NavOpen, setNavOpen] = useState(false);

  const close = useCallback(() => {
    setNavOpen(false);
  }, []);
  return (
    <header className="absolute inset-x-0 top-0 z-40 flex items-center pt-3 px-3 md:pt-8">
      <div className="flex h-[66px] w-full items-center justify-between">
        <div className="flex items-center justify-between pr-4 pl-4 md:pr-10">
          <a href="/" className="relative block duration-150 hover:opacity-75">
            <img
              className="max-[1300px]:w-[20.923vw] max-xl:w-[260px] max-md:w-[200px]"
              src="/assets/images/logo.png"
              alt=""
            />
          </a>
        </div>
        <div
          className={`z-10 flex items-center justify-center px-5 max-xl:fixed max-xl:top-0 max-xl:left-0 max-xl:h-screen max-xl:w-full max-xl:flex-col max-xl:overflow-y-scroll max-xl:bg-[linear-gradient(122deg,_#8EC5FC_10.27%,_#E0C3FC_100.14%)] ${
            NavOpen ? "" : "max-xl:invisible max-xl:opacity-0"
          }`}
        >
          <ul className="flex gap-8 max-xl:mb-10 max-xl:flex-col md:mr-[60px] xl:items-center xl:gap-[60px]">
            {links.map(({ link, text, target }, index) => (
              <li key={index}>
                <a
                  href={link}
                  className="inline-block text-[20px] font-bold text-white duration-150 [text-shadow:1px_1px_0px_rgba(0,_0,_0,_0.50)] hover:opacity-75 md:text-[24px] xl:text-[18px]"
                  target={target}
                  onClick={close}
                >
                  {text}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <button
          className={`group relative z-30 mr-6 h-6 w-8 xl:hidden ${
            NavOpen ? "active" : ""
          }`}
          onClick={() => setNavOpen((prev) => !prev)}
        >
          <span className="absolute top-0 left-0 block h-0.5 w-full -translate-y-1/2 bg-white transition-transform duration-500 ease-in-out group-[.active]:top-1/2 group-[.active]:rotate-45"></span>
          <span className="absolute top-2.5 left-0 block h-0.5 w-full -translate-y-1/2 bg-white transition-transform duration-500 ease-in-out group-[.active]:opacity-0"></span>
          <span className="absolute bottom-0 left-0 block h-0.5 w-full -translate-y-1/2 bg-white transition-transform duration-500 ease-in-out group-[.active]:top-1/2 group-[.active]:-rotate-45"></span>
        </button>
      </div>
    </header>
  );
};

export default Header;
