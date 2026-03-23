import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

import logo from "../assets/images/logo.png";

export default function Footer() {
  return (
    <footer className="bg-[#21173B] text-white">

      <div className="max-w-[1200px] mx-auto px-6 pt-12 pb-2">

        {/* ROW 1 → LOGO */}
        <div className="mb-10">
          <img
            src={logo}
            alt="logo"
         
          />
        </div>


        {/* ROW 2 → CONTACT + MENU */}
        <div className="grid md:grid-cols-2 gap-10">

          {/* LEFT → CONTACT */}
          <div>
            <p className="text-[20px] leading-9 text-gray-200">
              Rera Number: TN/xx/Building/xxxx/xxxx <br />
              Number: 044 - 4393 7979 <br />
              Email: sales@vgnhomes.com
            </p>
          </div>


          {/* RIGHT → MENU + FOLLOW */}
          <div className="flex flex-col md:items-end">

            {/* MENU */}
            <ul className="flex flex-wrap md:flex-nowrap gap-6 text-[18px] text-gray-200 mb-6">

              <li className="cursor-pointer hover:text-white">
                About Us
              </li>

              <li className="cursor-pointer hover:text-white">
                Our Gallery
              </li>

              <li className="cursor-pointer hover:text-white">
                Salient Features
              </li>

              <li className="cursor-pointer hover:text-white">
                Agents
              </li>

              <li className="cursor-pointer hover:text-white">
                Our Location
              </li>

            </ul>


            {/* FOLLOW */}
            <div className="flex items-center gap-2">

              <span className="text-gray-200 text-[16px]">
                Follow us
              </span>

              <FaFacebookF size={22}/>
              <FaInstagram size={22}/>
              <FaTwitter size={22}/>
              <FaLinkedinIn size={22}/>
              <FaYoutube size={22}/>

            </div>

          </div>

        </div>

      </div>


      {/* DIVIDER */}
      <div className="border-t border-gray-400"></div>


      {/* BOTTOM */}
      <div className="max-w-[1200px] mx-auto px-6 py-5 flex flex-col md:flex-row justify-between text-[16px] text-gray-200">

        <p>© 2024 All Right Reserved</p>

        <p className="mt-2 md:mt-0 cursor-pointer">
          Terms and conditions
        </p>

      </div>

    </footer>
  );
}