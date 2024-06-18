import Image from 'next/image';
import React from 'react';
import { aminities } from '../../utils/aminities.data';
import { Button } from '@nextui-org/react';

export default function Feature() {
  return (
    <div>
      <div className='mx-auto'>
        <h1 className='lg:text-[36px] text-[30px] font-[500] text-[#00357B] lg:mt-[1.5rem] mt-[1rem] text-center uppercase '>
          Features & Amenities
        </h1>
        <p className='lg:text-[16px] text-[12px] text-center text-[#343434]'>
          Harbour Lights beautifully honours maritime voyages while embracing an
          opulent seafront lifestyle. Its maritime-inspired amenities provide an
          unmatched seaside experience, offering a life of tranquility and
          bliss.
        </p>
      </div>
      <div className='grid grid-cols-2 lg:flex sm:gap-[6rem] gap-[3rem] lg:justify-evenly lg:gap-2 lg:mt-[8rem] sm:mt-[6rem] mt-[4rem]'>
        {aminities.map((item, index) => (
          <div
            key={index}
            className='lg:w-[227px] sm:w-[200px] w-[150px] mx-auto lg:h-[221px] sm:h-[190px] h-[170px] rounded-[20px] shadow-xl cursor-pointer transition transform duration-300 ease-in-out md:hover:scale-105'
          >
            <div className='lg:w-[193px] sm:w-[175px] w-[125px] sm:-mt-[5rem] -mt-[2rem] mx-auto lg:h-[210px] sm:h-[190px] h-[135px] aminitiesImage rounded-full'>
              <Image
                className='lg:w-[193px] sm:w-[175px] w-[125px] lg:h-[193px] sm:h-[175px] h-[125px] mx-auto rounded-full'
                src={item?.img}
                alt='Aminities'
              />
            </div>
            <div className='lg:w-[123px] w-[110px] lg:text-[14px] text-[11px] text-[#00357B] font-[600] mx-auto text-center mt-[1rem]'>
              {item?.title}
            </div>
          </div>
        ))}
      </div>
      <div className='w-[240px] sm:w-full mx-auto sm:text-end text-center lg:mt-[2rem] mt-[2rem] lg:text-[10px] text-[8px]'>
        *T&Cs apply | ** Based on similar branded projects in the last 2 years.
        Source 1 | Source 2
      </div>
      <div className='flex sm:justify-end justify-center gap-3 sm:mt-[2rem] mt-[1rem]'>
        <Button className='exteriorbtn'>EXTERIORS</Button>
        <Button variant='bordered' className='interiorbtn'>
          INTERIORS
        </Button>
      </div>
    </div>
  );
}
