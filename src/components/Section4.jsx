import React from 'react';
import exteriorImg1 from '../images/Gallery/gallery1.jpeg';
import exteriorImg2 from '../images/Gallery/gallery2.jpeg';
import exteriorImg3 from '../images/Gallery/gallery3.jpeg';
import exteriorImg4 from '../images/Gallery/gallery4.jpeg';
import exteriorImg5 from '../images/Gallery/gallery5.jpeg';
import Image from 'next/image';
import Carousel from 'react-multi-carousel';

export default function Section4() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const gallery = [exteriorImg2, exteriorImg3, exteriorImg4, exteriorImg5];
  return (
    <>
      <div className='section4'>
        <Carousel
          autoPlaySpeed={3000}
          infinite
          autoPlay
          responsive={responsive}
        >
          <div className='flex flex-col justify-center items-center gap-4'>
            <div>
              <Image
                className='lg:h-[494px] md:h-[400px] sm:h-[300px] h-[220px] rounded-xl'
                src={exteriorImg1}
              />
            </div>
            <div className='flex sm:gap-2 gap-1 w-[100%] justify-between mx-auto'>
              {gallery?.map((item) => (
                <Image
                  className='w-[24%] lg:h-[168px] md:h-[138px] sm:h-[110px] h-[70px] rounded-xl'
                  src={item}
                />
              ))}
            </div>
          </div>
        </Carousel>
      </div>
      <div className='bg-[#091D41] lg:h-[108px] lg:text-[14px] text-[11px] h-[92px] text-[#FCFCFC] text-center pt-[40px]'>
        © DAMAC Copyright 2024 All rights reserved.
      </div>
    </>
  );
}
