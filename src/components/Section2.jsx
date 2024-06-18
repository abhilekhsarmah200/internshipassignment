import React from 'react';
import Image from 'next/image';
import { featuresDetails } from '../utils/features.data';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export default function Section2() {
  const responsive = {
    mobile: {
      breakpoint: { max: 767, min: 0 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <div className='section2'>
      {/* For screens larger than mobile */}
      <div className='hidden sm:flex justify-evenly'>
        {featuresDetails?.map((item, index) => (
          <div key={index} className='flex flex-col items-center'>
            <div>
              <Image
                className='iconImages'
                src={item?.icon}
                alt={item?.title}
              />
            </div>
            <div className='lg:text-[16px] text-[12px] pt-4'>{item?.title}</div>
            <div className='lg:text-[30px] text-[22px] font-[500]'>
              {item?.content}
            </div>
          </div>
        ))}
      </div>

      {/* For mobile screens */}
      <div className='block sm:hidden pt-4'>
        <Carousel
          arrows={false}
          autoPlaySpeed={3000}
          infinite
          autoPlay
          responsive={responsive}
        >
          {featuresDetails?.map((item, index) => (
            <div key={index} className='flex flex-col items-center'>
              <div>
                <Image
                  className='iconImages'
                  src={item?.icon}
                  alt={item?.title}
                />
              </div>
              <div className='text-[12px] pt-4'>{item?.title}</div>
              <div className='text-[22px] font-[500]'>{item?.content}</div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}
