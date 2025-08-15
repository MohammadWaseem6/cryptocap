import React from "react";
import { motion } from "framer-motion";

const Customer: React.FC = () => {
  return (
    <div className="bg-[#26012D] w-full h-[600px]">
      <div className="grid grid-cols-1 md:grid-cols-2 h-full">


        <div className="flex flex-col items-center justify-center min-h-[400px] p-6">
          <p className="text-3xl text-gray-400 font-extrabold text-center">
            How to get Started in CryptoCurrencies
          </p>
          <p className="text-xl font-semibold text-gray-400 mt-4 text-center">
            Simple and Easy way to start your <br /> investment in CryptoCurrency
          </p>
        </div>

        <div className="text-gray-200 font-bold h-[400px] flex flex-col gap-6 mt-10 rounded-2xl p-6 items-center justify-center">


          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            whileHover={{ x: 20 }}
            transition={{ duration: 0.3, type: "spring", stiffness: 200 }}
            className="relative bg-[#2A1547] border border-gray-500 cursor-pointer h-[100px] w-[300px] rounded-2xl flex items-center justify-center overflow-hidden"
          >
            <span className="z-10">Create Your Account</span>
          </motion.div>

          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            whileHover={{ x: -20 }}
            transition={{ duration: 0.3, type: "spring", stiffness: 200 }}
            className="relative bg-[#2A1547] border border-gray-500 cursor-pointer h-[100px] w-[300px] rounded-2xl flex items-center justify-center overflow-hidden"
          >
            <span className="z-10">Verify Your Identity</span>
          </motion.div>


          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            whileHover={{ x: 20 }}
            transition={{ duration: 0.3, type: "spring", stiffness: 200 }}
            className="relative bg-[#2A1547] border border-gray-500 cursor-pointer h-[100px] w-[300px] rounded-2xl flex items-center justify-center overflow-hidden"
          >
            <span className="z-10">Start Investing</span>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default Customer;
