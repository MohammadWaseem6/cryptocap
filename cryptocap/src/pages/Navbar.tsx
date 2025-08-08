import React from 'react'
import { CiGlobe } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";


const Navbar: React.FC = () => {
    return (
        <div className='bg-[#26012D] w-full h-[1000px]'>

            <div className='text-white grid grid-cols-12 '>
                <div className='col-span-2'>
                    <h1 className='text-2xl font-bold text-white pl-8 pt-4'>CryptoCap</h1>
                </div>
                <div className='col-span-8 mt-5 '>
                    <ul className='flex  items-center justify-center space-x-20 '>
                        <li className='hover:text-blue-600 cursor-pointer'>Home</li>
                        <li className='hover:text-blue-600 cursor-pointer'>Business</li>
                        <li className='hover:text-blue-600 cursor-pointer'>Trade</li>
                        <li className='hover:text-blue-600 cursor-pointer'>Market</li>
                        <li className='hover:text-blue-600 cursor-pointer'>Learn</li>
                    </ul>
                </div>
                <div className='col-span-2 flex mt-5'>
                    <CiGlobe
                        className='mr-3.5 text-2xl'
                    />
                    <p className='font-bold'>En </p>
                    <IoIosArrowDown
                        className='mt-1 ml-1'
                    />
                    <button className='bg-blue-400 w-[50px] h-[30px] ml-6 rounded-sm'>Login</button>
                </div>





            </div>
            <div className='text-gray-400  w-full h-[200px] grid items-center justify-items-center  py-70  '>
                <div className=''>
                    <h1 className='flex text-4xl font-bold tracking-wider'>Start and Build Your Crypto Portfolio Here</h1>

                </div>
                <div className='flex items-center justify-items-center text-2xl'>
                    <p className='tracking-wider mt-4 text-center text-gray-400'>Only at CryptoCap, you can  build a good portfolio  <br />
                        and learn best practices about CrypotCurrency</p>
                </div>

                <button className='mt-11 bg-blue-400 rounded-sm text-white w-[100px] h-[50px] cursor-pointer hover:bg-gray-700 hover:text-white '>Get Started</button> 
            </div>
             

        </div>
    )
}

export default Navbar
