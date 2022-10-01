const Navbar = () => {
  return (
    <section id="navbar" className="relative">
      <div className="md:flex justify-around md:py-4 py-2 text-slate-800 font-semibold top-0 left-0 right-0 shadow backdrop-blur-md bg-white/30 fixed">
        <div className="flex justify-between items-center px-4">
          <div>
            <h3>urBg.co</h3>
          </div>
          <button
            id="hamburger"
            name="hamburger"
            className="block md:hidden right-4 top-0"
            type="button"
          >
            <span className="block w-[30px] h-[2px] my-2 bg-slate-600 transition duration-300 ease-in-out origin-top-left"></span>
            <span className="block w-[30px] h-[2px] my-2 bg-slate-600 transition duration-300 ease-in-out"></span>
            <span className="block w-[30px] h-[2px] my-2 bg-slate-600 transition duration-300 ease-in-out origin-bottom-left"></span>
          </button>
        </div>
        <div
          id="nav-menu"
          className="hidden md:block absolute md:static md:max-w-full  min-w-[200px] top-full rounded-lg md:rounded-none py-5 md:py-0 right-4 md:bg-transparent shadow-lg md:shadow-none bg-white/80 "
        >
          <ul className="flex box-border">
            <li className="ml-7">
              <a href="#">Home</a>
            </li>
            <li className="ml-7">
              <a href="#about">About</a>
            </li>
            <li className="ml-7">
              <a href="#testimonials">Testimonials</a>
            </li>
          </ul>
        </div>
        <div className="hidden md:block">
          <ul className="flex">
            <li>
              <a href="#deals">Offer</a>
            </li>
            <li>
              <a
                href=""
                className="ml-4 py-1 px-4 text-slate-100 bg-slate-800 hover:bg-slate-600 hover:text-slate-50 transition"
              >
                Shop Now
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
