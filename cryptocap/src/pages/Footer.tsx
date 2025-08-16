import React from "react";
import { FaTwitter, FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#26012D] text-gray-400 p-8">
     
      <hr className="border-t border-gray-600 my-6" />

     
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center md:text-left">
        
        
        <div>
          <h1 className="text-3xl font-bold text-white">CryptoCap</h1>
          <p className="mt-4">Stay connected with us</p>
          <div className="flex justify-center md:justify-start gap-4 mt-6 text-xl">
            <FaTwitter className="hover:text-white transition-colors cursor-pointer" />
            <FaFacebook className="hover:text-white transition-colors cursor-pointer" />
            <FaInstagram className="hover:text-white transition-colors cursor-pointer" />
            <FaLinkedin className="hover:text-white transition-colors cursor-pointer" />
          </div>
        </div>

       
        <div>
          <h2 className="text-lg font-semibold text-white mb-3">About Us</h2>
          <ul className="space-y-2">
            <li className="hover:text-white cursor-pointer">About</li>
            <li className="hover:text-white cursor-pointer">Careers</li>
            <li className="hover:text-white cursor-pointer">Blog</li>
            <li className="hover:text-white cursor-pointer">Legal & Privacy</li>
          </ul>
        </div>

      
        <div>
          <h2 className="text-lg font-semibold text-white mb-3">Services</h2>
          <ul className="space-y-2">
            <li className="hover:text-white cursor-pointer">Applications</li>
            <li className="hover:text-white cursor-pointer">Buy Crypto</li>
            <li className="hover:text-white cursor-pointer">Affiliate</li>
            <li className="hover:text-white cursor-pointer">Institutional Services</li>
          </ul>
        </div>

      
        <div>
          <h2 className="text-lg font-semibold text-white mb-3">Learn</h2>
          <ul className="space-y-2">
            <li className="hover:text-white cursor-pointer">What is Cryptocurrency?</li>
            <li className="hover:text-white cursor-pointer">How to Buy Cryptocurrency</li>
            <li className="hover:text-white cursor-pointer">Cryptocurrency Wallets</li>
            <li className="hover:text-white cursor-pointer">Market Analysis</li>
          </ul>
        </div>
      </div>

     
      <div className="mt-8 text-center text-sm text-gray-500 border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} CryptoCap. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
