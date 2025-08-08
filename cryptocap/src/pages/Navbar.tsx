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
                        <li className='hover:text-blue-600'>Home</li>
                        <li>Business</li>
                        <li>Trade</li>
                        <li>Market</li>
                        <li>Learn</li>
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

        </div>
    )
}

export default Navbar
