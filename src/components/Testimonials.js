import bag2 from "../assets/img/testi-1.jpg";

const Testimonials = () => {
  return (
    <section id="testimonials" className="pt-20">
      <div className="container px-10">
        <div className="">
          <div className="text-center mb-6 lg:mb-10">
            <h3 className="text-2xl text-slate-800 font-semibold uppercase">
              Testimonials
            </h3>
          </div>
          <div className="flex flex-col lg:flex-row justify-center items-center">
            <div className="w-full mb-6 border shadow-lg px-4 py-4">
              <p className="text-slate-600 font-light mb-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Suscipit minus tenetur aperiam laboriosam dolor possimus ex
                nobis debitis aliquam dignissimos.
              </p>
              <div className="flex items-center">
                <div className="w-7 h-7 rounded-full mr-2 overflow-hidden">
                  <img src={bag2} alt="" className="w-full h-full" />
                </div>
                <p className="text-slate-600 ">Akmal Maulfi</p>
              </div>
            </div>
            <div className="w-full mb-6 border shadow-lg px-4 py-4 lg:mx-4">
              <p className="text-slate-600 font-light mb-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Suscipit minus tenetur aperiam laboriosam dolor possimus ex
                nobis debitis aliquam dignissimos.
              </p>
              <div className="flex items-center">
                <div className="w-7 h-7 rounded-full bg-red-500 mr-2 overflow-hidden">
                  <img src={bag2} alt="" className="w-full h-full" />{" "}
                </div>
                <p className="text-slate-600 ">Mega Septi</p>
              </div>
            </div>
            <div className="w-full mb-6 border shadow-lg px-4 py-4">
              <p className="text-slate-600 font-light mb-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Suscipit minus tenetur aperiam laboriosam dolor possimus ex
                nobis debitis aliquam dignissimos.
              </p>
              <div className="flex items-center">
                <div className="w-7 h-7 rounded-full bg-red-500 mr-2 overflow-hidden">
                  <img src={bag2} alt="" className="w-full h-full" />{" "}
                </div>
                <p className="text-slate-600 ">Sismawati</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
