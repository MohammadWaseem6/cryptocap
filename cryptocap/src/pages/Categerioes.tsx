import React from 'react';
interface Category {
    sno: number;
    name: string;
    lastPrice: number;
    change: number;
    marketStatus?: string;
    trade?: string;
}
const Categerioes: React.FC = () => {
    const categerios: Category[] = [
        { sno: 1, name: "Bitcoin | BTC", lastPrice: 56523.6, change: 1.4, marketStatus: "Bullish", trade: "Buy" },
        { sno: 2, name: "Ethereum | ETH", lastPrice: 4325.6, change: 2.2, marketStatus: "Bullish", trade: "Buy" },
        { sno: 3, name: "Dogecoin | DOGE", lastPrice: 0.245, change: -1.1, marketStatus: "Bearish", trade: "Sell" },
        { sno: 4, name: "Solana | SOL", lastPrice: 198.4, change: 0.9, marketStatus: "Bullish", trade: "Buy" },
        { sno: 5, name: "Ripple | XRP", lastPrice: 1.12, change: 0.5, marketStatus: "Bullish", trade: "Buy" },
        { sno: 6, name: "Cardano | ADA", lastPrice: 2.15, change: -0.3, marketStatus: "Bearish", trade: "Sell" }
    ];

    const labels = ['Popular', 'Metaverse', 'Entertainment', 'Energy', 'Gaming', 'Music', 'SeeAll 12+'];
    const listLabels = ['NO', 'Name', 'LAST PRICE', 'CHANGE', 'MARKET STATUS', 'TRADE'];

    return (
        <div className="bg-[#26012D] w-min-screen h-[800px]">
            <h1 className="text-white text-2xl font-extrabold pl-8">Market Updates</h1>
            <p className="text-gray-300 pl-8 mt-2">CryptoCurrencies Categories</p>
            <div className="flex  w-fit gap-4 sm:grid-cols-2 p-8">
                {labels.map((item, index) => (
                    <p
                        key={index}
                        className="ml-7 mt-6 w-[90px] h-[30px] rounded-sm bg-[#1D0D2A] flex items-center justify-center text-white font-semibold text-center"
                    >
                        {item}
                    </p>
                ))}
                <input
                    type="search"
                    placeholder="Search Coins"
                    className="w-[300px] h-[30px] mt-6 rounded-sm ml-20 text-white border border-[#957a9b] bg-transparent px-2"
                />
            </div>
            <div className="flex w-full h-[50px]">
                {listLabels.map((label, index) => (
                    <p
                        key={index}
                        className="ml-7 mt-2 w-[200px] h-[30px] rounded-sm bg-[#1D0D2A] flex items-center justify-center text-white font-semibold text-center"
                    >
                        {label}
                    </p>
                ))}
            </div>
            <div className="w-full ">
                {categerios.map((item, index) => (
                    <div key={index} className="flex border-1 border-gray-600 rounded-2xl m-2 font-bold text-gray-400 h-[70px] items-center hover:bg-teal-900 hover:text-black">
                        <p className=" gap-3  ml-7 mt-2 w-[200px] h-[30px] flex items-center justify-center ">{item.sno}</p>
                        <p className="ml-7 mt-2 w-[200px] h-[30px] flex items-center justify-center ">{item.name}</p>
                        <p className="ml-7 mt-2 w-[200px] h-[30px] flex items-center justify-center ">${item.lastPrice.toLocaleString()}</p>
                        <p
                            className={`ml-7 mt-2 w-[200px] h-[30px] flex items-center justify-center ${item.change >= 0 ? 'text-green-400' : 'text-red-400'
                                }`}
                        >
                            {item.change}%
                        </p>
                        <p className="ml-7 mt-2 w-[200px] h-[30px] flex items-center justify-center ">{item.marketStatus}</p>
                        <p className="ml-15 mt-2 h-[30px] flex items-center justify-center bg-teal-400 w-[100px]  rounded-2xl text-black hover:bg-black hover:text-white cursor-pointer">{item.trade}</p>
                    </div>
                ))}
                <p className='text-teal-500 font-bold   w-[150px] h-[40px] items-center text-center rounded-2xl justify-items-center ml-6 mt-3 hover:text-red-500 cursor-pointer underline'>See All Coins</p>
            </div>
        </div>
    );
};
export default Categerioes;
