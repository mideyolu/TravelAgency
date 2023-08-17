import React from 'react'

const Banner = ({ bannerAPI : {title, text, imgSrc, btnText} }) => {
  return (
    <>
       <div className="relative w-[75vw] max-w-3xl ml-auto mr-auto mt-0 mb-3 xl:w-[95vw] rounded-lg">
        <div className="relative flex items-center">
            <img src={imgSrc} alt="" className='h-[35vh] rounded-lg w-full' />
        </div>

        <div className="absolute top-24 left-12 w-80  flex flex-col items-start md:items-center md:justify-center md:left-0 md:top-14">
            <h1 className='text-3xl font-bold text-slate-900 filter drop-shadow-lg'>{title}</h1>
            <p className="text-base sm:text-sm">{text}</p>
            <button className='py-1.5 px-5 bg-gradient-to-b from-gray-900 to-slate-800 text-slate-300 text-sm rounded-full shadow-lg shadow-slate-900 transition-all duration-300 active:scale-110'>{btnText}</button>
        </div>
       </div>
    </>

  );
};

export default Banner