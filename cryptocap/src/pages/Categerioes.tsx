import { div } from 'framer-motion/client';
import React from 'react'

const Categerioes: React.FC = () => {

    const categerios = [
        { sno: 1, symbol: "BTC", name: "BITCOIN", price: "$56,623.54", change: "1.41%", color: "bg-orange-500" },
        { sno: 2, symbol: "ETH", name: "ETHEREUM", price: "$4,112.34", change: "0.85%", color: "bg-blue-500" },
        { sno: 3, symbol: "BNB", name: "BINANCE", price: "$512.43", change: "2.14%", color: "bg-yellow-400" },
        { sno: 4, symbol: "XRP", name: "RIPPLE", price: "$1.34", change: "0.53%", color: "bg-green-500" },
        { sno: 5, symbol: "ADA", name: "CARDANO", price: "$2.12", change: "3.12%", color: "bg-red-500" },
        { sno: 6, symbol: "DOGE", name: "DOGECOIN", price: "$0.32", change: "5.41%", color: "bg-pink-500" },
    ];
    const labels = ['Popular', 'Metaverse', 'Entertainment', 'Energy', 'Gaming', 'Music', 'SeeAll 12+']

    return (
        <div className='bg-[#26012D] w-[1600px] h-[800px]'>

            <h1 className='text-white text-2xl font-extrabold pl-8'>Market Updates</h1>

            <p className='text-gray-300 pl-8 mt-2'>CryptoCurrencies Categerios</p>

            <div className='flex gap-4'>
                {labels.map((item, index) => (
                    <p
                        key={index}
                        className='ml-7 mt-6 w-[90px] h-[30px] rounded-sm bg-[#1D0D2A] flex items-center justify-center text-white font-semibold text-center'
                    >
                        {item}
                    </p>
                ))}
                <input type="search" placeholder='Search Coins'

                    className='w-[300px] h-[30px]  mt-6 rounded-sm ml-20 text-white border-1 border-[#957a9b]'>

                </input>
            </div>




        </div>
    )
}
export default Categerioes;
