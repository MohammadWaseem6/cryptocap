import React from 'react';

interface Card {
  title: string;
  content: string;
  image: string;
}

const LearnCrypto: React.FC = () => {
  // Example array of cards
  const cards: Card[] = [
    {
      title: "Card 1",
      content: "This is card 1 content",
      image: "https://via.placeholder.com/100"
    },
    {
      title: "Card 2",
      content: "This is card 2 content",
      image: "https://via.placeholder.com/100"
    },
    {
      title: "Card 3",
      content: "This is card 3 content",
      image: "https://via.placeholder.com/100"
    }
  ];

  return (
    <div className='grid bg-amber-950 sm:grid-cols-12 gap-2 p-2'>
     
      <div className=' flex bg-teal-300 sm:col-span-12 h-[500px] p-3'>
        <div className='w-[300px] h-[auto] bg-yellow-700'>
          {cards.map((card: Card, index: number) => (
            <div key={index} className='mb-4 p-2 bg-teal-200 rounded'>
              <h3 className='font-bold'>{card.title}</h3>
              <p>{card.content}</p>
              <img src={card.image} alt={card.title} className='mt-2' />
            </div>
          ))}
        </div>
      </div>

     
      <div className='bg-teal-900 sm:col-span-3 h-[300px]'></div>
      <div className='bg-green-900 sm:col-span-3 h-[300px]'></div>
    </div>
  );
}

export default LearnCrypto;
