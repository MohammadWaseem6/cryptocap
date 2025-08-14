import React from "react";

const Customer: React.FC = () => {
  return (
    <div className="bg-[#26012D] w-full h-[600px]">
      <div className="grid grid-cols-1 md:grid-cols-2 h-full">
        
        {/* Left side */}
        <div className="flex flex-col items-center justify-center min-h-[400px] p-6">
          <p className="text-3xl text-gray-400 font-extrabold text-center">
            How to get Started in CryptoCurrencies
          </p>
          <p className="text-xl font-semibold text-gray-400 mt-4 text-center">
            Simple and Easy way to start your <br /> investment in CryptoCurrency
          </p>
        </div>

       
        <div className=" h-[400px] flex flex-col gap-6 mt-10 rounded-2xl p-6 items-center justify-center">
          <div className="bg-gray-300 h-[100px] w-[300px] rounded-2xl flex items-center justify-center">
            Create Your Account
          </div>
          <div className="bg-gray-300 h-[100px] w-[300px] rounded-2xl flex items-center justify-center">
            Verify Your Identity
          </div>
          <div className="bg-gray-300 h-[100px] w-[300px] rounded-2xl flex items-center justify-center">
            Start Investing
          </div>
        </div>

      </div>
    </div>
  );
};

export default Customer;
