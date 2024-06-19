const Header = () => {
  return (
    <header className="z-40 flex items-center pt-3 px-3 md:pt-8">
      <div className="flex h-[66px] w-full items-center justify-between">
        <div className="flex items-center justify-between pr-4 pl-4 md:pr-10">
          <a
            href="/"
            className="relative block text-[50px] font-bold duration-150 hover:opacity-75"
          >
            Logo
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
