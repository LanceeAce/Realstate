import imgHouse from "./assets/House.png";
import icon1 from "./assets/icon1.png";
import icon2 from "./assets/icon2.png";
import icon3 from "./assets/icon3.png";

const Description = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between pt-[11.5rem] pb-[1rem] px-[5rem] lg:px-[15rem] gap-20">
      <div className="w-full lg:w-[50rem] flex justify-center">
        <img
          src={imgHouse}
          alt="House picture"
          className="w-full max-w-[700px] h-auto"
        />
      </div>

      <div className="w-full">
        <div className="pb-[2rem]">
          <h2 className="text-[2.5rem] font-semibold text-center lg:text-left">
            We've got new properties for everyone
          </h2>
          <p className="text-[1rem] text-center lg:text-left">
            One Place for everyone needs.
          </p>
        </div>

        <div>
          <div className="flex flex-col lg:flex-row items-center mb-6">
            <div className="mb-4 lg:mb-0 lg:pr-[1rem]">
              <img src={icon1} alt="Icon 1" className="w-[40px] h-[40px]" />
            </div>
            <div>
              <p className="font-semibold">600+ Apartments</p>
              <p>Explore stylish apartments for modern living.</p>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row items-center mb-6">
            <div className="mb-4 lg:mb-0 lg:pr-[1rem]">
              <img src={icon2} alt="Icon 2" className="w-[40px] h-[40px]" />
            </div>
            <div>
              <p className="font-semibold">250+ Plots</p>
              <p>Find the perfect space with us.</p>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row items-center mb-6">
            <div className="mb-4 lg:mb-0 lg:pr-[1rem]">
              <img src={icon3} alt="Icon 3" className="w-[40px] h-[40px]" />
            </div>
            <div>
              <p className="font-semibold">60+ Villas</p>
              <p>Your dream villa awaits—explore with us.</p>
            </div>
          </div>

          <div className="text-center lg:text-left">
            <a
              href="#"
              className="bg-[#333333] text-white rounded-[1rem] px-[2.5rem] py-[0.5rem] hover:bg-white hover:border-gray-800 hover:border-2 hover:text-black"
            >
              Explore
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;
