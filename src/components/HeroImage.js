import img from "../assets/img/heroImage.png";

const HeroImage = () => {
  return (
    <section id="hero" className="pt-[100px]">
      <div className="container">
        <div className="md:flex h-[75vh] lg:h-[90vh] items-center overflow-y-hidden">
          <div className="w-full lg:w-1/2 px-6">
            <h3 className="text-4xl lg:text-6xl mb-4 font-semibold text-slate-900">
              Backpaking is <br /> the cure of <br /> greedliness
            </h3>
            <p className="text-slate-500 mb-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem veritatis provident, vel quos sapiente eum, itaque iure
              expedita accusantium fugiat pariatur adipisci nostrum est error
              mollitia eveniet odit, temporibus excepturi!
            </p>
            <a
              href=""
              className="border text-slate-100 bg-slate-800 py-2 px-4 font-light"
            >
              Click To Buy Now
            </a>
            <div className="pt-14">
              <h3 className="text-xl text-slate-800 mb-4 font-semibold">
                Trusted by :
              </h3>
              <div className="flex items-center">
                <a href="">
                  <svg
                    role="img"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    width="30px"
                  >
                    <title>Amazon</title>
                    <path
                      fill="#94a3b8"
                      d="M.045 18.02c.072-.116.187-.124.348-.022 3.636 2.11 7.594 3.166 11.87 3.166 2.852 0 5.668-.533 8.447-1.595l.315-.14c.138-.06.234-.1.293-.13.226-.088.39-.046.525.13.12.174.09.336-.12.48-.256.19-.6.41-1.006.654-1.244.743-2.64 1.316-4.185 1.726a17.617 17.617 0 01-10.951-.577 17.88 17.88 0 01-5.43-3.35c-.1-.074-.151-.15-.151-.22 0-.047.021-.09.051-.13zm6.565-6.218c0-1.005.247-1.863.743-2.577.495-.71 1.17-1.25 2.04-1.615.796-.335 1.756-.575 2.912-.72.39-.046 1.033-.103 1.92-.174v-.37c0-.93-.105-1.558-.3-1.875-.302-.43-.78-.65-1.44-.65h-.182c-.48.046-.896.196-1.246.46-.35.27-.575.63-.675 1.096-.06.3-.206.465-.435.51l-2.52-.315c-.248-.06-.372-.18-.372-.39 0-.046.007-.09.022-.15.247-1.29.855-2.25 1.82-2.88.976-.616 2.1-.975 3.39-1.05h.54c1.65 0 2.957.434 3.888 1.29.135.15.27.3.405.48.12.165.224.314.283.45.075.134.15.33.195.57.06.254.105.42.135.51.03.104.062.3.076.615.01.313.02.493.02.553v5.28c0 .376.06.72.165 1.036.105.313.21.54.315.674l.51.674c.09.136.136.256.136.36 0 .12-.06.226-.18.314-1.2 1.05-1.86 1.62-1.963 1.71-.165.135-.375.15-.63.045a6.062 6.062 0 01-.526-.496l-.31-.347a9.391 9.391 0 01-.317-.42l-.3-.435c-.81.886-1.603 1.44-2.4 1.665-.494.15-1.093.227-1.83.227-1.11 0-2.04-.343-2.76-1.034-.72-.69-1.08-1.665-1.08-2.94l-.05-.076zm3.753-.438c0 .566.14 1.02.425 1.364.285.34.675.512 1.155.512.045 0 .106-.007.195-.02.09-.016.134-.023.166-.023.614-.16 1.08-.553 1.424-1.178.165-.28.285-.58.36-.91.09-.32.12-.59.135-.8.015-.195.015-.54.015-1.005v-.54c-.84 0-1.484.06-1.92.18-1.275.36-1.92 1.17-1.92 2.43l-.035-.02zm9.162 7.027c.03-.06.075-.11.132-.17.362-.243.714-.41 1.05-.5a8.094 8.094 0 011.612-.24c.14-.012.28 0 .41.03.65.06 1.05.168 1.172.33.063.09.099.228.099.39v.15c0 .51-.149 1.11-.424 1.8-.278.69-.664 1.248-1.156 1.68-.073.06-.14.09-.197.09-.03 0-.06 0-.09-.012-.09-.044-.107-.12-.064-.24.54-1.26.806-2.143.806-2.64 0-.15-.03-.27-.087-.344-.145-.166-.55-.257-1.224-.257-.243 0-.533.016-.87.046-.363.045-.7.09-1 .135-.09 0-.148-.014-.18-.044-.03-.03-.036-.047-.02-.077 0-.017.006-.03.02-.063v-.06z"
                    />
                  </svg>
                </a>
                <a href="" className="ml-4">
                  <svg
                    role="img"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    width="40px"
                  >
                    <title>SpaceX</title>
                    <path
                      fill="#94a3b8"
                      d="M24 7.417C8.882 8.287 1.89 14.75.321 16.28L0 16.583h2.797C10.356 9.005 21.222 7.663 24 7.417zm-17.046 6.35c-.472.321-.945.68-1.398 1.02l2.457 1.796h2.778zM2.948 10.8H.189l3.25 2.381c.473-.321 1.02-.661 1.512-.945Z"
                    />
                  </svg>
                </a>
                <a href="" className="ml-4">
                  <svg
                    role="img"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    width="30px"
                  >
                    <title>PayPal</title>
                    <path
                      fill="#94a3b8"
                      d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81 1.01 1.15 1.304 2.42 1.012 4.287-.023.143-.047.288-.077.437-.983 5.05-4.349 6.797-8.647 6.797h-2.19c-.524 0-.968.382-1.05.9l-1.12 7.106zm14.146-14.42a3.35 3.35 0 0 0-.607-.541c-.013.076-.026.175-.041.254-.93 4.778-4.005 7.201-9.138 7.201h-2.19a.563.563 0 0 0-.556.479l-1.187 7.527h-.506l-.24 1.516a.56.56 0 0 0 .554.647h3.882c.46 0 .85-.334.922-.788.06-.26.76-4.852.816-5.09a.932.932 0 0 1 .923-.788h.58c3.76 0 6.705-1.528 7.565-5.946.36-1.847.174-3.388-.777-4.471z"
                    />
                  </svg>
                </a>
                <a href="" className="ml-4">
                  <svg
                    role="img"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    width="30px"
                  >
                    <title>Wallabag</title>
                    <path
                      fill="#94a3b8"
                      d="M20.376.0007c-.0433-.0046-.0911.014-.1388.0528-.1028.0835-.9982.2919-1.529.7058-.857.6687-1.3854 1.9404-1.6248 2.6435a5.6065 5.6065 0 00-.047.1408c-.1116.2692-.3343.2698-.3343.2698a3.0022 3.0022 0 00-.3246-.0176c-.097 0-.1948.0043-.2913.0137-.0022.0004-.0037-.0002-.006 0-.284.0419-.4404-.3045-.473-.3871-.332-.9534-1.2247-2.8338-3.232-3.3397 0 0-.3653-.2788-.2543.1935.1057.4514.3243.9065.2757 1.5701-.0223.3063-.2117 1.877 1.2318 2.6944.1372.0777.26.1445.3696.1995-.7266.5814-1.3884 1.39-1.9533 2.3092.287-.1764 1.836-.9975 4.3328.0332 2.5684 1.06 4.1607.139 4.3582.0137-.6209-1.0206-1.358-1.9094-2.1743-2.5066.0544-.015.1094-.0297.1681-.047 1.0826-.313 1.3577-1.2306 1.4156-2.0158.0655-.8905.1097-.9039.303-1.705.1392-.5772.0578-.8074-.0723-.8212zM13.2022 9.03c-.2261 0-.4135.0631-.5553.1877-.1458.1276-.219.2755-.219.44v2.841c0 .3573.0352.696.1037 1.005.0706.316.1934.592.3656.8231.174.2335.41.4188.702.5494.2888.1287.6495.1936 1.0733.1936.4417 0 .8113-.0828 1.099-.2444.2413-.1355.4447-.313.6062-.5299.1556.217.3546.3945.5924.53.284.1615.6595.2443 1.1165.2443.4237 0 .7841-.0666 1.0695-.1955.2878-.1305.5217-.3144.696-.5475.1726-.2319.2958-.508.3657-.8232.0685-.309.1017-.6476.1017-1.005v-2.841c0-.1637-.0699-.312-.2112-.44-.1378-.1252-.3271-.1876-.5611-.1876-.2123 0-.389.0635-.524.1896-.1366.1277-.2053.275-.2053.438v2.886c0 .3872-.068.6726-.2034.8486-.1308.17-.3403.2522-.6394.2522-.306 0-.516-.0814-.6393-.2502-.1287-.176-.1936-.4623-.1936-.8506V9.646c0-.1973-.0896-.3575-.26-.4653-.2317-.146-.4609-.1987-.741-.1056a1.1842 1.1842 0 00-.2406.1095.6958.6958 0 00-.1955.178c-.0579.0776-.088.1612-.088.2502v2.931c0 .3878-.0649.6743-.1936.8504-.1236.1688-.332.2503-.6374.2503-.3064 0-.5181-.0829-.6452-.2522-.132-.176-.1994-.461-.1994-.8486v-2.886c0-.1632-.0686-.3104-.2053-.438-.135-.1262-.3142-.1896-.5338-.1896zm-3.0521 5.774a5.613 5.613 0 00.3363 1.0324c.1197.6731.2803 2.2572-.481 3.6446-.6706 1.2223-3.981 2.8883-8.8945 1.9318 0 0-.1964-.1367-.2561-.0235-.0883.1675.272.303.6433.4008 3.4209.906 8.583.5362 10.204-.7997.7398-.609 1.0264-1.4282 1.099-2.311 0 0 .0197-.2306.309-.0568.0828.0498.3824.2452.43.4654.0417.3133.0445.6964-.1172.9659-.2314.3854-.2341.4414.0703.6589.187.1334.9515.6952 2.014 1.3335.0026.0018.0031.0025.0058.0039.2247.1353.5377.4673.5377.4673.4785.5534 1.518 1.6664 1.971 1.4566.2138-.099-.0079-.5436-.0079-.5436s.3545.4607.5456.3031c.1454-.12-.0841-.5807-.0841-.5807s.3099.2699.4947.1701c.226-.122-.0326-.8295-1.8105-1.9103-1.7787-1.0817-2.261-1.2476-2.3033-1.7304 0 0-.0014-.023 0-.0645.0138-.1066.0739-.3332.3324-.309a7.454 7.454 0 001.1889.0958 7.391 7.391 0 001.355-.1231s.0226-.0048.0293-.006c.051-.0064.1502-.0025.1506.1213-.0162.1569-.0602.3136-.1526.4516-.26.3897-.174.4438.0978.6942.1677.1544.9373.8313 1.9905 1.486.0022.0016.0014.0026.0039.0039.2245.1351.614.5064.614.5064.4364.4432 1.2384 1.1847 1.6757 1.14.2958-.0302.0547-.5397.0547-.5397s.3737.3603.5573.2542c.2052-.1184-.0841-.4947-.0841-.4947s.2407.1283.4106.086c.1704-.0424.2125-.4768-1.5564-1.572-1.769-1.0961-2.364-1.4811-2.3267-1.9005 0 0 .0002-.0682.0176-.172.043-.2223.1784-.601.612-.8174a.2517.2517 0 00.0372-.0235c1.3783-.7998 2.386-2.0874 2.7413-3.6954-.3577.8882-3.0083 1.578-6.2275 1.578-3.218 0-5.87-.6898-6.2275-1.578z"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="w-1/2 justify-center hidden md:flex ">
            <img src={img} alt="" className="bg-cover h-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroImage;