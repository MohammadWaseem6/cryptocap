import React from 'react';

const Explore: React.FC = () => {
  return (
    <div className='bg-[#26012D] w-full h-[400px] grid place-items-center'>
      <div className='bg-[#30013a] w-[900px] h-[150px] rounded-sm p-8 flex items-center justify-between'>
        
        <div>
          <p className='text-2xl text-gray-300 tracking-wider font-bold'>
            New in CryptoCurrency
          </p>
          <p className='text-gray-300'>
            We'll tell you what CryptoCurrencies are, and how they work <br />
            and why you should own right now, so let's do it.
          </p>
        </div>
        
        <button className='bg-teal-400 w-[160px] h-[50px] rounded-sm'>
          Learn & Explore now
        </button>
        
      </div>
    </div>
  );
};

export default Explore;
