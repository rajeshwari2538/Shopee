import React, { useState, useEffect } from 'react';

const HomePage = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="relative overflow-hidden min-h-screen">
      <div className="absolute inset-0 z-0 opacity-80" style={{backgroundImage: `url('https://images.pexels.com/photos/3756777/pexels-photo-3756777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundPositionY: `calc(50% + ${scrollY * 0.5}px)`}}></div>
      <div className="relative ml-28 z-10 text-white flex items-center justify-start min-h-screen py-12 px-4">
        <div className="p-8 rounded-lg max-w-[40rem]">
          <h1 className="text-6xl font-semibold mb-4 leading-snug">Raining Offers For Hot Summer!</h1>
          <p className="text-3xl font-semibold my-7">25% Off On All Products</p>
          <a href="#" className="text-black text-lg bg-white px-4 py-2 rounded-md font-semibold">FIND MORE</a>
          <button className=" border text-white text-lg font-semibold px-4 py-2 rounded-md ml-4 hover:bg-white hover:text-black">SHOP NOW</button>
        </div>
      </div>
    </div>
  );
}

export default HomePage;

