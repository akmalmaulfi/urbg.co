import bag1 from "../assets/img/bag-1.png";
import bag2 from "../assets/img/bag-2.png";

const ArticleDeals = () => {
  return (
    <section id="deals" className="pt-20">
      <div className="container mx-auto">
        <div className="px-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl uppercase font-semibold text-slate-800 mb-2">
              Best Deals for you
            </h3>
            <p className="text-slate-500  font-light">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur, saepe?
            </p>
          </div>
          <div className="flex flex-col lg:flex-row justify-center items-center lg:items-baseline lg:mt-16 px-0 lg:px-6">
            <div className="w-96 h-[550px] py-4 px-0 lg:px-4 text-center shadow-lg mb-12 lg:mr-10">
              <h3 className="text-xl font-semibold text-slate-800">
                Everest Mountain Undertaker Backpack
              </h3>
              <p className="font-light text-slate-500 mt-4 my-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto,
                nulla?
              </p>
              <div className="w-[300px] h-[300px] m-auto mb-8">
                <img src={bag1} className="w-full h-full" />
              </div>
              <a href="" className="px-8 py-2 bg-slate-800 text-slate-100">
                Buy Now
              </a>
            </div>
            <div className="w-96 h-[550px] py-4 px-0 lg:px-4 text-center shadow-lg">
              <h3 className="text-xl font-semibold text-slate-800">
                Canyon Anti-theft Backpack
              </h3>
              <p className="font-light text-slate-500 mt-4 my-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto,
                nulla?
              </p>
              <div className="w-[300px] h-[300px] m-auto mb-8">
                <img src={bag2} className="w-full h-full" />
              </div>
              <a href="" className="px-8 py-2 bg-slate-800 text-slate-100">
                Buy Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArticleDeals;
