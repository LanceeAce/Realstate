import imgBuilding from "./assets/building.png";

const About = () => {
  return (
    <div id="about">
      <div>
        <div className="flex flex-col lg:flex-row justify-center items-center px-[2rem] lg:px-[10rem] pt-[3rem] pb-20">
          <div className="w-full lg:w-[80rem] pr-[5rem]">
            <h2 className="text-[2.5rem] lg:text-[3rem] font-semibold text-Poppins pb-[2rem] text-center lg:text-left">
              We are <span className="font-bold">TechState</span>
            </h2>

            <p className="text-[grey] text-center lg:text-left">
              Welcome to Property Street, your gateway to a world of exceptional
              real estate opportunities. At Property Street, we understand that
              finding the perfect home or investment property is more than a
              transaction—it's a significant milestone in your life. <br />
              <br />
              Our platform is designed to simplify your property search,
              providing a seamless experience as you explore a diverse range of
              apartments, villas, plots, and more.
            </p>
            <div className="text-center lg:text-left mt-6">
              <a
                href="#"
                className="bg-[#333333] hover:bg-white hover:border-2 hover:border-gray-800 hover:text-black rounded-[.6rem] px-[2rem] py-[0.5rem] text-white"
              >
                Read more
              </a>
            </div>
          </div>

          <div className="mt-6 lg:mt-0">
            <img
              src={imgBuilding}
              alt="Building pic"
              className="w-full max-w-[1000px] h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
