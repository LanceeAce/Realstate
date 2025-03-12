import imgBuilding from "./assets/building.png";

const About = () => {
  return (
    <div id="about" className="px-4 sm:px-8  lg:px-16 py-10">
      <div className="flex flex-col-reverse lg:flex-row justify-center items-center gap-10">
        
        <div className="w-full lg:w-[50%] text-center lg:text-left">
          <h2 className="text-[2rem] sm:text-[2.5rem] lg:text-[3rem] font-semibold text-Poppins pb-6">
            We are <span className="font-bold">TechState</span>
          </h2>
          <p className="text-gray-600 text-sm sm:text-base">
            Welcome to Property Street, your gateway to a world of exceptional
            real estate opportunities. At Property Street, we understand that
            finding the perfect home or investment property is more than a
            transaction—it's a significant milestone in your life.
            <br />
            <br />
            Our platform is designed to simplify your property search,
            providing a seamless experience as you explore a diverse range of
            apartments, villas, plots, and more.
          </p>
          <div className="mt-6">
            <a
              href="#"
              className="bg-gray-800 hover:bg-white hover:border-2 hover:border-gray-800 hover:text-black rounded-lg px-6 py-2 text-white inline-block"
            >
              Read more
            </a>
          </div>
        </div>
       
        <div className="w-full lg:w-[50%] flex justify-center">
          <img
            src={imgBuilding}
            alt="Building pic"
            className="w-[90%] sm:w-[80%] md:w-[70%] lg:w-full max-w-[500px] h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default About;