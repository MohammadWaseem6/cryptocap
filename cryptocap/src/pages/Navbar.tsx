import React from "react";
import { CiGlobe } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";

// cards icons
import { FaBitcoin } from "react-icons/fa";
import { TbArrowCurveRight } from "react-icons/tb";
import { MdOutlineAutoGraph } from "react-icons/md";

// framer motion 



const Navbar: React.FC = () => {
  return (
    <div className="bg-[#26012D] w-full h-[1000px]">
      <div className="text-white grid grid-cols-12 ">
        <div className="col-span-2">
          <h1 className="text-2xl font-bold text-white pl-8 pt-4">CryptoCap</h1>
        </div>
        <div className="col-span-8 mt-5 ">
          <ul className="flex  items-center justify-center space-x-20 ">
            <li className="hover:text-blue-600 cursor-pointer">Home</li>
            <li className="hover:text-blue-600 cursor-pointer">Business</li>
            <li className="hover:text-blue-600 cursor-pointer">Trade</li>
            <li className="hover:text-blue-600 cursor-pointer">Market</li>
            <li className="hover:text-blue-600 cursor-pointer">Learn</li>
          </ul>
        </div>
        <div className="col-span-2 flex mt-5">
          <CiGlobe className="mr-3.5 text-2xl" />
          <p className="font-bold">En </p>
          <IoIosArrowDown className="mt-1 ml-1" />
          <button className="bg-blue-400 w-[50px] h-[30px] ml-6 rounded-sm">
            Login
          </button>
        </div>
      </div>
      <div className="text-gray-400  w-full  grid items-center justify-items-center  py-40 ">
        <div className="">
          <h1 className="flex text-4xl font-bold tracking-wider">
            Start and Build Your Crypto Portfolio Here
          </h1>
        </div>
        <div className="flex items-center justify-items-center text-2xl">
          <p className="tracking-wider mt-4 text-center text-gray-400">
            Only at CryptoCap, you can build a good portfolio <br />
            and learn best practices about CrypotCurrency
          </p>
        </div>

        <button className="mt-11 bg-blue-400 rounded-sm text-white w-[100px] h-[50px] cursor-pointer hover:bg-gray-700 hover:text-white ">
          Get Started
        </button>
      </div>
      <div className="text-white font-semibold px-6">
        <h1>Market Trend</h1>
        <div className=" p-6 gap-6 rounded-sm flex grid-cols-12 md:grid-cols-2">
          <div className="bg-[#2A1547] text-white rounded-xl p-4 w-[400px]">
            {/* Top row */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                {/* Bitcoin Icon in a circle */}
                <div className="bg-orange-500 p-3 rounded-full">
                  <FaBitcoin className="text-white text-2xl" />
                </div>

                {/* BTC and label */}
                <div className="flex items-center space-x-2">
                  <span className="text-lg font-bold">BTC</span>
                  <span className="bg-gray-200 text-gray-800 px-2 py-0.5 text-xs rounded-sm">BITCOIN</span>
                </div>
              </div>

              {/* Arrow Icon */}
              <div className="bg-purple-600 p-2 rounded-full">
                <TbArrowCurveRight className="text-white text-lg" />
              </div>
            </div>

            {/* Middle Section */}
            <div className="mt-4">
              <p className="text-2xl font-bold">$56,623.54</p>
              <p className="text-green-400 text-sm">1.41%</p>
            </div>

            {/* Bottom Graph */}
            <div className="mt-4">
              <MdOutlineAutoGraph className="text-cyan-400 text-4xl" />
            </div>
          </div>
           <div className="bg-[#2A1547] text-white rounded-xl p-4 w-[400px]">
            {/* Top row */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                {/* Bitcoin Icon in a circle */}
                <div className="bg-orange-500 p-3 rounded-full">
                  <FaBitcoin className="text-white text-2xl" />
                </div>

                {/* BTC and label */}
                <div className="flex items-center space-x-2">
                  <span className="text-lg font-bold">BTC</span>
                  <span className="bg-gray-200 text-gray-800 px-2 py-0.5 text-xs rounded-sm">BITCOIN</span>
                </div>
              </div>

              {/* Arrow Icon */}
              <div className="bg-purple-600 p-2 rounded-full">
                <TbArrowCurveRight className="text-white text-lg" />
              </div>
            </div>

            {/* Middle Section */}
            <div className="mt-4">
              <p className="text-2xl font-bold">$56,623.54</p>
              <p className="text-green-400 text-sm">1.41%</p>
            </div>

            {/* Bottom Graph */}
            <div className="mt-4">
              <MdOutlineAutoGraph className="text-cyan-400 text-4xl" />
            </div>
          </div>
           <div className="bg-[#2A1547] text-white rounded-xl p-4 w-[400px]">
            {/* Top row */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                {/* Bitcoin Icon in a circle */}
                <div className="bg-orange-500 p-3 rounded-full">
                  <FaBitcoin className="text-white text-2xl" />
                </div>

                {/* BTC and label */}
                <div className="flex items-center space-x-2">
                  <span className="text-lg font-bold">BTC</span>
                  <span className="bg-gray-200 text-gray-800 px-2 py-0.5 text-xs rounded-sm">BITCOIN</span>
                </div>
              </div>

              {/* Arrow Icon */}
              <div className="bg-purple-600 p-2 rounded-full">
                <TbArrowCurveRight className="text-white text-lg" />
              </div>
            </div>

            {/* Middle Section */}
            <div className="mt-4">
              <p className="text-2xl font-bold">$56,623.54</p>
              <p className="text-green-400 text-sm">1.41%</p>
            </div>

            {/* Bottom Graph */}
            <div className="mt-4">
              <MdOutlineAutoGraph className="text-cyan-400 text-4xl" />
            </div>
          </div>
           <div className="bg-[#2A1547] text-white rounded-xl p-4 w-[400px]">
            {/* Top row */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                {/* Bitcoin Icon in a circle */}
                <div className="bg-orange-500 p-3 rounded-full">
                  <FaBitcoin className="text-white text-2xl" />
                </div>

                {/* BTC and label */}
                <div className="flex items-center space-x-2">
                  <span className="text-lg font-bold">BTC</span>
                  <span className="bg-gray-200 text-gray-800 px-2 py-0.5 text-xs rounded-sm">BITCOIN</span>
                </div>
              </div>

              {/* Arrow Icon */}
              <div className="bg-purple-600 p-2 rounded-full">
                <TbArrowCurveRight className="text-white text-lg" />
              </div>
            </div>

            {/* Middle Section */}
            <div className="mt-4">
              <p className="text-2xl font-bold">$56,623.54</p>
              <p className="text-green-400 text-sm">1.41%</p>
            </div>

            {/* Bottom Graph */}
            <div className="mt-4">
              <MdOutlineAutoGraph className="text-cyan-400 text-4xl" />
            </div>
          </div>
           <div className="bg-[#2A1547] text-white rounded-xl p-4 w-[400px]">
            {/* Top row */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                {/* Bitcoin Icon in a circle */}
                <div className="bg-orange-500 p-3 rounded-full">
                  <FaBitcoin className="text-white text-2xl" />
                </div>

                {/* BTC and label */}
                <div className="flex items-center space-x-2">
                  <span className="text-lg font-bold">BTC</span>
                  <span className="bg-gray-200 text-gray-800 px-2 py-0.5 text-xs rounded-sm">BITCOIN</span>
                </div>
              </div>

              {/* Arrow Icon */}
              <div className="bg-purple-600 p-2 rounded-full">
                <TbArrowCurveRight className="text-white text-lg" />
              </div>
            </div>

            {/* Middle Section */}
            <div className="mt-4">
              <p className="text-2xl font-bold">$56,623.54</p>
              <p className="text-green-400 text-sm">1.41%</p>
            </div>

            {/* Bottom Graph */}
            <div className="mt-4">
              <MdOutlineAutoGraph className="text-cyan-400 text-4xl" />
            </div>
          </div>
           <div className="bg-[#2A1547] text-white rounded-xl p-4 w-[400px]">
            {/* Top row */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                {/* Bitcoin Icon in a circle */}
                <div className="bg-orange-500 p-3 rounded-full">
                  <FaBitcoin className="text-white text-2xl" />
                </div>

                {/* BTC and label */}
                <div className="flex items-center space-x-2">
                  <span className="text-lg font-bold">BTC</span>
                  <span className="bg-gray-200 text-gray-800 px-2 py-0.5 text-xs rounded-sm">BITCOIN</span>
                </div>
              </div>

              {/* Arrow Icon */}
              <div className="bg-purple-600 p-2 rounded-full">
                <TbArrowCurveRight className="text-white text-lg" />
              </div>
            </div>

            {/* Middle Section */}
            <div className="mt-4">
              <p className="text-2xl font-bold">$56,623.54</p>
              <p className="text-green-400 text-sm">1.41%</p>
            </div>

            {/* Bottom Graph */}
            <div className="mt-4">
              <MdOutlineAutoGraph className="text-cyan-400 text-4xl" />
            </div>
          </div>


        

        </div>
      </div>
    </div>
  );
};

export default Navbar;
