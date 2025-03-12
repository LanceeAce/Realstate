import FaceImg from "./assets/fbyt.png";
const Footer = () => {
  return (
    <div className="bg-[#333333] text-white py-[3rem]">
      <div className="flex flex-col lg:flex-row justify-between px-[2rem] lg:px-[5rem] gap-10">
     
        <div className="text-center lg:text-left">
          <h2 className="text-2xl font-semibold">TECHSTATE</h2>
          <p className="mt-2">Navigate the lively Real Estate Encyclopedia</p>
          <h2 className="font-bold mt-4">Stay Connected</h2>
          <img src={FaceImg} alt="Face" className="pt-[2rem] mx-auto lg:mx-0" />
        </div>
    
        <div className="text-center lg:text-left">
          <h2 className="font-bold text-2xl">Property</h2>
          <p>Buy Property</p>
          <p>Sell Property</p>
          <p>Speak with expert</p>
          <p>Search Property</p>
        </div>
      
        <div className="text-center lg:text-left">
          <h2 className="font-bold text-2xl">Service</h2>
          <p>Property Consultant</p>
          <p>Interior Support</p>
          <p>Legal advisory support</p>
          <p>Housing loan support</p>
          <p>Property management support</p>
        </div>
     
        <div className="text-center lg:text-left">
          <h2 className="font-bold text-2xl">Useful Links</h2>
          <p>Home</p>
          <p>About Us</p>
          <p>Properties</p>
          <p>FAQ’s</p>
        </div>
      </div>
    </div>
  );
};
export default Footer;