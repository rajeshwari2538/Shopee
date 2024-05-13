import React from 'react';

const LatestProducts = ({latestProductItems}) => {
  return (
    <div className="bg-white p-4 max-w-[75rem] mx-auto mt-8">
      <div className="flex">
        {latestProductItems.map((item, index) => (
          <div key={index} className="relative mx-2">
            <img
              src={item.image}
              alt={`Image ${index + 1}`}
              className="w-[430px] h-[480px] object-left opacity-90"
            />
            <div className="absolute bottom-1 left-1 right-1 text-left py-4 px-10 bg-black opacity-50">
              <h2 className="text-white text-2xl py-2 font-semibold">{item.title}</h2>
              <p className="text-white text-lg py-2">{item.paragraph}</p>
              <button className="mt-2 bg-white text-black hover:text-white hover:bg-black font-semibold py-2 px-4 rounded">
                {item.buttonText}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestProducts; 