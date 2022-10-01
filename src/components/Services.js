import managerLogo from "../assets/img/manager.png";
import deliveryLogo from "../assets/img/delivery-car.png";
import moneyLogo from "../assets/img/money.png";

const Services = () => {
  return (
    <section id="services">
      <div className="px-6 font-raleway pt-16">
        <h3 className="text-2xl lg:text-3xl font-semibold text-slate-800 text-center ">
          WHAT WE OFFER?
        </h3>
        <p className="text-center font-light pt-2 text-slate-600">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam, maxime
          asperiores autem porro error deserunt enim nobis iure officia nemo.
        </p>
        <div className="pt-10 flex md:flex-row flex-col lg:mx-6 justify-center items-center">
          <div className="w-80 border text-center px-4 py-6 my-6 lg:mx-5">
            <img
              src={managerLogo}
              alt=""
              className="m-auto mb-4"
              width="40px"
              height="40px"
            />
            <h3 className="font-semibold">Effective Marketing</h3>
            <p className="text-slate-600 pt-4 pb-4">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est, non
              ab! Explicabo, earum. Tempora, odio.
            </p>
            <a href="" className="underline font-medium">
              View details
            </a>
          </div>
          <div className="w-80 border text-center px-4 py-6 my-6 lg:mx-5 shadow-lg shadow-slate-300">
            <img
              src={deliveryLogo}
              alt=""
              className="m-auto mb-4"
              width="40px"
              height="40px"
            />
            <h3 className="font-semibold">AI-power</h3>
            <p className="text-slate-600 pt-4 pb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
              aut deserunt, quis perferendis omnis velit!
            </p>
            <a href="" className="underline font-medium">
              View details
            </a>
          </div>
          <div className="w-80 border text-center px-4 py-6 my-6 lg:mx-5">
            <img
              src={moneyLogo}
              alt=""
              className="m-auto mb-4"
              width="40px"
              height="40px"
            />
            <h3 className="font-semibold">Writter's block</h3>
            <p className="text-slate-600 pt-4 pb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
              aut deserunt, quis perferendis omnis velit!
            </p>
            <a href="" className="underline font-medium">
              View details
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
