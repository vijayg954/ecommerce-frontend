
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div>
      <div className="flex mx-10 flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div>
          Ecommerce
          <p className="w-full md:w-2/3 text-gray-700">
            haskjdh wahkf fhhfklhf oif oisdfiosf oiudsdfiosdfl
            eriuoiekldshaskjdh wahkf fhhfklhf oif oisdfiosf oiudsdfiosdfl
            eriuoiekldshaskjdh wahkf fhhfklhf oif oisdfiosf oiudsdfiosdfl
            eriuoieklds
          </p>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">Company</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div>
            <p className="text-xl font-medium mb-5">Get in touch</p>
            <ul className="flex flex-col gap-1 text-gray-600">
            <li>+1-212-23-23241</li>
            <li>abc@gmail.com</li>

            </ul>
        </div>
      </div>
      <div>
        <hr></hr>
        <p className="py-5 text-sm text-center">Copyright 2024@vshop.com-All rights reserved</p>
      </div>
      
    </div>
  );
};

export default Footer;
