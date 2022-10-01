const Navbar = () => {
  return (
    <section id="navbar">
      <div className="hidden md:flex justify-around py-4 text-slate-800 font-semibold">
        <div>
          <h3>urBg.co</h3>
        </div>
        <div>
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
        <div>
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
