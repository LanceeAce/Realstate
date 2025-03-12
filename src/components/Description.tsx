import imgHouse from "./assets/House.png";
import icon1 from "./assets/icon1.png";
import icon2 from "./assets/icon2.png";
import icon3 from "./assets/icon3.png";

const Description = () => {
  return (
    <div id="service">
    <div className="block md:flex justify-between  pb-[10rem]  gap-20">
      <div className="w-[50rem] flex ">
        <img src={imgHouse} alt="House picture" width={700} height={200} />
      </div>

      <div className="block w-full">
        <div className="pb-[2rem]">
          <h2 className="text-[2.5rem] font-semibold">
            We've got new properties for everyone
          </h2>
          <br />
          <p className="text-[1rem]">One Place for everyone needs.</p>
        </div>

        <div>
          <div className="flex items-center">
            <div>
              <img src={icon1} alt="Icon 1" className="pr-[1rem]" />
            </div>

            <br />

            <div className="">
              <p>600+ Apartments</p>
              <p>Explore stylish apartments for modern living.</p>
            </div>
          </div>
          <br />

          <div className="flex">
            <div className="pr-[1rem]">
              <img src={icon2} alt="Icon 2" />
            </div>
            <div>
              <p>250+ Plots</p>
              <p>Find the perfect space with us.</p>
            </div>
          </div>
          <br />

          <div className="flex">
            <div>
              <img src={icon3} alt="Icon 3" className="pr-[1rem]" />
            </div>
            <div>
              <p>60+ Villas</p>
              <p>Your dream villa awaits—explore with us.</p>
            </div>
          </div>

          <br />

          <div className="">
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
    </div>
  );
};

export default Description;
