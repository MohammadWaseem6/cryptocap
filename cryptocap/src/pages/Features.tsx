import React from 'react'

// icons
import { IoIosArrowRoundForward } from "react-icons/io";

const Features: React.FC = () => {
    return (
        <div className='bg-[#26012D] h-[ 600px] w-full'>
            <div className='items-center justify-items-center'>
                <p className='text-4xl text-white'>CryptoCap Amazing Features</p>
                <p className='text-gray-300 mt-3.5'>Explore Sensational features to prepare best investment in CryptoCurrency</p>
            </div>
            <div className="grid gap-3 p-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 rounded-sm">
                <div className="min-h-[300px] rounded-sm bg-[#200326]">
                    <h1 className='text-center text-2xl font-semibold mt-20 text-gray-200 tracking-wider'>Manage Portfoilio</h1>
                    <p className='text-white  text-start tracking-widest  p-5'>Buy and sell popuplar digital currencies,keep track of them in one place </p>
                    <div className="flex items-center ml-25 cursor-pointer">
                        <p className="text-teal-400">See Explained</p>
                        <IoIosArrowRoundForward className="text-teal-400 text-3xl ml-1" />
                    </div>


                </div>
                <div className="min-h-[300px] rounded-sm bg-[#200326]">
                    <h1 className='text-center text-2xl font-semibold mt-20 text-gray-200 tracking-wider'>Protected Securely</h1>
                    <p className='text-white  text-start tracking-widest  p-5'>All cash blances are covered by FDIC insurance , upto maximum of <span className='text-green-400 font-bold'>$250,000</span>  </p>
                    <div className="flex items-center ml-25 cursor-pointer">
                        <p className="text-teal-400">See Explained</p>
                        <IoIosArrowRoundForward className="text-teal-400 text-3xl ml-1" />
                    </div>


                </div>
                <div className="min-h-[300px] rounded-sm bg-[#200326]">
                    <h1 className='text-center text-2xl font-semibold mt-20 text-gray-200 tracking-wider'>CryptoCurrency Variety</h1>
                    <p className='text-white  text-start tracking-widest  p-5'>Supports a Variety of the most popular digital Currencies and always update </p>
                    <div className="flex items-center ml-25 cursor-pointer">
                        <p className="text-teal-400">See Explained</p>
                        <IoIosArrowRoundForward className="text-teal-400 text-3xl ml-1" />
                    </div>
                </div>
                <div className="min-h-[300px] rounded-sm bg-[#200326]">
                    <h1 className='text-center text-2xl font-semibold mt-20 text-gray-200 tracking-wider'>Learn Best Practices</h1>
                    <p className='text-white  text-start tracking-widest  p-5'>Easy to know <span className='text-green-400 font-bold'>cryptycurrency</span> works and friendly to newbie </p>
                    <div className="flex items-center ml-25 cursor-pointer">
                        <p className="text-teal-400">See Explained</p>
                        <IoIosArrowRoundForward className="text-teal-400 text-3xl ml-1" />
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Features
