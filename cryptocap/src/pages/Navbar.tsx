import React, { useState } from "react";
import { motion } from "framer-motion";
import { CiGlobe } from "react-icons/ci";
import { IoIosArrowDown, IoMdMenu, IoMdClose } from "react-icons/io";
import { FaBitcoin } from "react-icons/fa";
import { TbArrowCurveRight } from "react-icons/tb";
import { MdOutlineAutoGraph } from "react-icons/md";

const Navbar: React.FC = () => {
  const coins = [
    { symbol: "BTC", name: "BITCOIN", price: "$56,623.54", change: "1.41%", color: "bg-orange-500" },
    { symbol: "ETH", name: "ETHEREUM", price: "$4,112.34", change: "0.85%", color: "bg-blue-500" },
    { symbol: "BNB", name: "BINANCE", price: "$512.43", change: "2.14%", color: "bg-yellow-400" },
    { symbol: "XRP", name: "RIPPLE", price: "$1.34", change: "0.53%", color: "bg-green-500" },
    { symbol: "ADA", name: "CARDANO", price: "$2.12", change: "3.12%", color: "bg-red-500" },
    { symbol: "DOGE", name: "DOGECOIN", price: "$0.32", change: "5.41%", color: "bg-pink-500" },
  ];

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-[#26012D] min-h-screen w-full">
      {/* Navbar */}
      <nav className="text-white p-4 flex items-center justify-between max-w-7xl mx-auto">
        <div className="text-2xl font-bold">CryptoCap</div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-10 text-lg font-medium">
          {["Home", "Business", "Trade", "Market", "Learn"].map((item) => (
            <li
              key={item}
              className="hover:text-blue-600 cursor-pointer transition-colors duration-300"
            >
              {item}
            </li>
          ))}
        </ul>

        {/* Right section */}
        <div className="hidden md:flex items-center space-x-3">
          <CiGlobe className="text-2xl" />
          <p className="font-bold">En</p>
          <IoIosArrowDown />
          <button className="bg-blue-400 w-20 h-9 rounded-sm hover:bg-blue-500 transition-colors">
            Login
          </button>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-white text-3xl"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <IoMdClose /> : <IoMdMenu />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#26012D] px-6 py-4 space-y-6 text-white font-semibold text-lg border-t border-gray-700 max-w-7xl mx-auto">
          <ul className="flex flex-col space-y-4">
            {["Home", "Business", "Trade", "Market", "Learn"].map((item) => (
              <li key={item} className="hover:text-blue-600 cursor-pointer">
                {item}
              </li>
            ))}
          </ul>
          <div className="flex items-center space-x-3">
            <CiGlobe className="text-2xl" />
            <p className="font-bold">En</p>
            
            <IoIosArrowDown />
            <button className="bg-blue-400 w-20 h-9 rounded-sm hover:bg-blue-500 transition-colors">
              Login
            </button>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="text-gray-400 text-center py-20 px-4 max-w-3xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-wide">
          Start and Build Your Crypto Portfolio Here
        </h1>
        <p className="mt-4 text-base sm:text-xl leading-relaxed">
          Only at CryptoCap, you can build a good portfolio <br /> and learn best
          practices about Cryptocurrency
        </p>
        <button className="mt-10 bg-blue-400 rounded-sm text-white w-32 h-12 hover:bg-gray-700 transition-colors">
          Get Started
        </button>
      </section>

     
      <section className="text-white font-semibold px-6 max-w-7xl mx-auto pb-20">
        <h1 className="text-2xl mb-8">Market Trend</h1>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {coins.map((coin, index) => (
            <motion.div
              key={index}
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
                type: "spring",
                stiffness: 100,
              }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#2A1547] text-white rounded-xl p-6 w-full cursor-pointer"
            >
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  
                  <div className={`${coin.color} p-3 rounded-full flex items-center justify-center`}>
                    <FaBitcoin className="text-white text-2xl" />
                  </div>
                 
                  <div className="flex items-center space-x-3">
                    <span className="text-lg font-bold">{coin.symbol}</span>
                    <span className="bg-gray-200 text-gray-800 px-2 py-0.5 text-xs rounded-sm select-none">
                      {coin.name}
                    </span>
                  </div>
                </div>
               
                <div className="bg-purple-600 p-2 rounded-full">
                  <TbArrowCurveRight className="text-white text-lg" />
                </div>
              </div>

             
              <div className="mt-6">
                <p className="text-2xl font-bold">{coin.price}</p>
                <p className="text-green-400 text-sm">{coin.change}</p>
              </div>

            {/* Graph */}
              <div className="mt-6">
                <MdOutlineAutoGraph className="text-cyan-400 text-5xl mx-auto" />
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Navbar;
