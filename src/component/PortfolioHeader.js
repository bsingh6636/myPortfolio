import React, { useContext } from 'react';
import { MyContext } from '..';
import { PortfolioHeaderLan } from '../Language/PortfolioHeaderLan';
import Hover from './ImageHover';
// import photo2 from '../../images/photo2.jpg'

const PortfolioHeader = () => {
  const { language } = useContext(MyContext)
  const lan = PortfolioHeaderLan[language]
  const imageUrl = `${process.env.PUBLIC_URL}/images/photo2.jpg`;

  return (
    <div className="min-h-screen text-white">

      {/* Content */}
      <div className="flex  flex-col-reverse md:flex-row items-center justify-between  py-20 md:py-20 max-md:pb-0 ">
        <div className="text-left max-w-lg">
          <h2 className="text-blue-400 text-xl max-md:text-2xl max-sm:text-xl max-md:items-center">{lan.greeting}</h2>
          <h1 className="myName text-4xl max-md:text-2xl max-sm:text-xl font-bold mt-2 leading-tight max-md:items-center">
            <span className="line1">{lan.name.split(' ')[0]}</span>
            <span className="line2">{lan.name.split(' ')[1]}</span>
            <span className="line3">{lan.name.split(' ')[2]}</span>
          </h1>
          <div className='bg-blue-400 w-max rounded-xl '>
            <p className="fullstackp mt-4 p-2 w-max bg-blue-400  rounded-lg max-md:text-xs font-extrabold uppercase">
              {lan.role}
            </p>
          </div>
          <p className=" mt-6 text-gray-300  leading-relaxed">
          {/* uppercase font-extrabold text-3xl md:text-5xl font-serif */}
            {lan.description}
          </p>
        </div>

        <div className="max-w-xs sm:max-w-sm md:max-w-lg mb-6 md:mb-0">
          <img src='./images/photo2.jpg' alt="Brijesh SIngh" className="rounded-lg shadow-lg max-md:h-44 md:h-96 md:hidden"  />
          <Hover imageUrl={imageUrl}/>
        </div>
      </div>


    </div>
  );
};

export default PortfolioHeader;
