import React from 'react';
import Slider from 'react-slick';

const LogoCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: 'linear',
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className='relative max-w-6xl mx-auto mt-8 p-6'>
        <Slider {...settings} className=''>
      <div className="swiper-slide ml-12">
        <img src="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2021/03/client-logo-1.png" alt="client-logo-1" />
      </div>
      <div className="swiper-slide ml-12">
        <img src="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2021/03/client-logo-2.png" alt="client-logo-2" />
      </div>
      <div className="swiper-slide ml-12">
        <img src="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2021/03/client-logo-3.png" alt="client-logo-3" />
      </div>
      <div className="swiper-slide ml-12">
        <img src="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2022/08/client-logo-5.png" alt="client-logo-5" />
      </div>
      <div className="swiper-slide ml-12">
        <img src="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2021/03/client-logo-4.png" alt="client-logo-4" />
      </div>
    </Slider>
    
    </div>
  );
};

export default LogoCarousel;
