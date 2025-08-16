import React from 'react'

const Footer: React.FC = () => {
  return (
    <div className="bg-[#26012D] text-white p-6">
     
      <hr className="border-t border-gray-400 my-6" />

     
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
        <div className=" h-[200px]">
            <h1 className='text-3xl font-bold'>CryptoCap</h1>
            <p className='mt-11'>social media icons</p>

        </div>
        <div className=" h-[200px]">
            <h1>About Us</h1>
            <p>about </p>
            <p>careers</p>
            <p>blog</p>
            <p>Legal & privacy</p>
        </div>
        <div className=" h-[200px]">
            <h1>Services</h1>
            <p>Applications</p>
            <p>Buy Crypto</p>
            <p>Affilate</p>
            <p>Institutional Services</p>
        </div>
        <div className=" h-[200px]">
         
        </div>
      </div>

      
      <div className="mt-6 text-sm text-gray-400">
        © {new Date().getFullYear()} Your Company. All rights reserved.
      </div>
    </div>
  )
}

export default Footer
