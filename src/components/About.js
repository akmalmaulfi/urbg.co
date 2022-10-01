const About = () => {
  return (
    <section id="about" className="pt-24">
      <div className="flex flex-col md:flex-row items-center justify-center lg:px-12 px-10">
        <div className="lg:w-1/2 w-full lg:text-left text-center mb-14">
          <h3 className="text-2xl font-semibold text-slate-800 mb-4">
            About Us
          </h3>
          <p className="mb-4 text-slate-600 font-light">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
            beatae libero eos accusamus eligendi tempore nihil deleniti, tempora
            maxime, atque rerum nulla, consectetur soluta sunt optio.
            Exercitationem, perspiciatis. Impedit, possimus!
          </p>
          <p className="mb-8 text-slate-600 font-light">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic eos
            aperiam impedit? Asperiores, reprehenderit optio!
          </p>
          <a
            href=""
            className="border px-8 py-2 bg-slate-800 text-slate-100 font-light hover:bg-slate-700 hover:text-slate-200 transition"
          >
            Click To Buy Now
          </a>
        </div>
        <div className="lg:w-1/2 w-full lg:flex lg:justify-center lg:items-center">
          <div className="flex flex-col justify-center items-center mb-8 lg:mx-4">
            <div className="w-72 shadow-xl rounded  h-36 mb-4 box-border px-4 py-2 border flex flex-col justify-center items-center">
              <h3 className="text-2xl font-medium text-slate-800">
                Product User
              </h3>
              <p className="text-green-500 text-sm">+ 25.00%</p>
            </div>
            <div className="w-72 shadow-xl rounded  h-36 mt-6 px-4 py-2 flex flex-col justify-center items-center text-center border">
              <h3 className="text-2xl font-semibold text-green-500">2.5K+</h3>
              <p className="text-xl font-medium my-2 text-slate-800">
                Insta Followers
              </p>
              <p className="text-slate-600 font-light text-sm">
                Lorem ipsum dolor sit amet consec tetur adipisicing.
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center lg:w-full lg:h-full">
            <div className="w-72 h-36 shadow-xl rounded border px-4 py-2 flex flex-col justify-center items-center text-center">
              <h3 className="text-2xl font-semibold text-green-500">95%</h3>
              <p className="text-xl font-medium my-2 text-slate-800">
                Positive Feedback
              </p>
              <p className="text-sm text-slate-600 font-light">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
