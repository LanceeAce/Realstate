import imgBuilding from "./assets/building.png";


const About = () => {
  return (
    <div id="about">
    <div>
      <div className="flex justify-between items-center px-[10rem] pt-[3rem] pb-20 ">
        <div className="w-[80rem] pr-[5rem]">
          <h2 className="text-[3rem] font-semibold text-Poppins pb-[2rem]">
            We are <span className="font-bold">TechState</span>
          </h2>
          <br />

          <p className="text-[grey]  ">
            Welcome to Property Street, your gateway to a world of exceptional
            real estate opportunities. At Property Street, we understand that
            finding the perfect home or investment property is more than a
            transaction—it's a significant milestone in your life. <br />
            <br />
            Our platform is designed to simplify your property search, providing
            a seamless experience as you explore a diverse range of apartments,
            villas, plots, and more.
          </p>
          <br />

          <div className="">
            <a
              href="#"
              className="bg-[#333333] hover:bg-white hover:border-2 hover:border-gray-800 hover:text-black rounded-[.6rem] px-[2rem] py-[0.5rem] text-white "
            >
              Read more
            </a>
          </div>
        </div>
        <div className="">
          <img src={imgBuilding} alt="Building pic" width={1000} height={350} />
        </div>
      </div>
    </div>
    </div>
  );
};

export default About;
