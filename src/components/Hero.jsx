import { assets } from "../assets/assets";

const Hero = () => {
  return (
    <div className=" flex flex-col sm:flex-row border border-gray-400 mx-10 h-[75vh]">
      {/* heroleft */}
      <div className="w-full sm:w-1/2 flex items-center justify-center py-10 sm:p-0">
        <div className="text-[#414141]">
          <div className="flex items-center gap-2">
            <p className="w-8 md:w-11 h-2[2px] bg-[#414141]"></p>
            <p className="font-medium text-sm md:text-base">OUR BESTSELLERS</p>
          </div>
          <h1 className="prata-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed">
            Latest Arrivals
          </h1>
          <div className="flex items-center gap-2">
            <p className="font-semibold text-sm md:text-base">Shop Now</p>
            <p className="w-8 md:w-11 h-[1px] bg-[#414141]"></p>
          </div>
        </div>
      </div>
      {/* hero right  */}
      <img
        className="w-full sm:w-1/2"
        src="https://img.freepik.com/free-photo/gorgeous-woman-posing-with-floral-top-fashion-concept_144627-19125.jpg?t=st=1727578734~exp=1727582334~hmac=1f4f8db994b2043a8d74dea2f0f6155521f0f3416547674b12f75d61a1d334eb&w=996"
      ></img>
    </div>
  );
};

export default Hero;
