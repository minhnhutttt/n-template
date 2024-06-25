const Header = () => {
  return (
    <header className="z-40 flex items-center pt-3 px-3 md:pt-8">
      <div className="flex h-[66px] w-full">
        <div className="flex items-center pr-4 pl-4 md:pr-10">
          <a
            href="/"
            className=" block duration-150 hover:opacity-75"
          >
            <img className="md:w-[240px]" src="/assets/images/logo-bk.svg" alt="" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
