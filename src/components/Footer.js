const Footer = () => {
  return (
    <footer className="mt-20 lg:mt-28 bg-slate-800 ">
      <div className="lg:flex lg:py-12 lg:px-8">
        <div className="w-full lg:w-1/2 px-4 py-4">
          <h3 className="text-slate-200 mb-2 text-xl">Urbg.co</h3>
          <p className="text-sm text-slate-400 font-light">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            sapiente reiciendis similique minima odio exercitationem, aliquid
            laudantium excepturi suscipit provident!
          </p>
        </div>
        <div className="w-full lg:w-1/2 px-4 pb-4 lg:py-16">
          <ul className="text-slate-400 font-light flex justify-center items-center text-sm lg:text-lg">
            <li className="ml-4">
              <a href="#navbar" className="hover:underline">
                Home
              </a>{" "}
            </li>
            <li className="ml-4 hover:underline">
              <a href="#about">About</a>{" "}
            </li>
            <li className="ml-4 hover:underline">
              <a href="#testimonials">Testimoni</a>{" "}
            </li>
            <li className="ml-4 hover:underline">
              <a href="#deals">Offer</a>{" "}
            </li>
          </ul>
        </div>
      </div>
      <div className="pb-8">
        <h3 className="text-sm text-slate-500 font-light text-center">
          Copyright &copy; 2022 Akmal Maulfi
        </h3>
      </div>
    </footer>
  );
};

export default Footer;
