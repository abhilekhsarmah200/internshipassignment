import React from 'react';
import logo from '../images/Logo.png';
import rectangle from '../images/Rectangle.png';
import burgerMenu from '../images/Frame 20.svg';
import Image from 'next/image';
import { Button } from '@nextui-org/react';

export default function Section1() {
  return (
    <div className='relative'>
      <div className='bannerImage'>
        <div className='logoButton'>
          <Image className='logo' src={logo} alt='logo' />

          <Button
            variant='bordered'
            className='button md:block hidden'
            color='primary'
          >
            ENQUIRE NOW
          </Button>
          <div className='button md:hidden'>
            <Image
              className='w-[24px] h-[12px]'
              src={burgerMenu}
              alt='Burger Menu'
            />
          </div>
        </div>
        <div className='relative lg:top-[140px] md:top-[100px] top-[80px] flex lg:flex-row gap-[3rem] lg:gap-0 flex-col justify-between lg:px-[4rem] px-[2rem]'>
          <div>
            <div className='heading'>
              <h1 className='lg:text-[48px] sm:text-[38px] text-[28px] lg:w-[498.86px] w-[80%]'>
                <b className='text-white'>
                  Harbour Lights de <b className='text-[#17ABFF]'>GRESOGONO</b>
                </b>
                <div className='lg:text-[25px] sm:text-[16px] text-[12px] text-white'>
                  1, 2 & 3 Bedrooms Seaside Apartments in Dubai Maritime City
                </div>
              </h1>
            </div>
            <div className='descriptionText'>
              <div className='description flex items-center text-white'>
                <Image className='rectangle' src={rectangle} alt='rectangle' />
                <div className='p-2 lg:text-[14px] sm:text-[11px] text-[9px]'>
                  Rental Returns of UPTO 11%**
                </div>
              </div>
              <div className='description flex items-center text-white'>
                <Image className='rectangle' src={rectangle} alt='rectangle' />
                <div className='p-2 lg:text-[14px] sm:text-[11px] text-[9px]'>
                  Capital Appreciation of UPTO 32%**
                </div>
              </div>
            </div>
          </div>
          <div className='pricing flex flex-col justify-between'>
            <div className='text-white p-[1rem]'>
              <div className='lg:text-[13px] sm:text-[10px] text-[13px]'>
                PRICING STARTS FROM
              </div>
              <div className='lg:text-[48px] sm:text-[38px] text-[48px]'>
                $ 425,000
              </div>
              <div className='lg:text-[24px] sm:text-[18px] text-[24px]'>
                AED 1.3 Million
              </div>
              <div className='mt-[2rem]'>
                <Button className='containedButton'>GET A PRESENTATION</Button>
              </div>
            </div>
            <div className='sm:p-[1rem] p-[0.5rem] border-t-1 border-black lg:text-[13px] sm:text-[10px] text-[9px] text-[#98C5E8]'>
              Get an Expert’s Presentation of Real Estate in Dubai for Life and
              investment
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
