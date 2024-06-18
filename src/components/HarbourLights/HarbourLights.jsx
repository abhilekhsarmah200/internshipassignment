import React from 'react';
import Image from 'next/image';

import {
  de,
  geneve,
  grisogono,
  harbour,
  light,
} from '../../utils/harbourlights.data';

export default function HarbourLights() {
  return (
    <div>
      <div className='flex flex-col gap-2'>
        <div className='flex gap-1 justify-center'>
          {harbour.map((item, index) => (
            <Image
              key={index}
              className='harbourtext'
              src={item}
              alt='Harbour Lights'
            />
          ))}
        </div>
        <div className='flex gap-1 justify-center'>
          {light.map((item, index) => (
            <Image
              key={index}
              className='harbourtext'
              src={item}
              alt='Harbour Lights'
            />
          ))}
        </div>
      </div>
      <div className='flex justify-center gap-1 mt-3'>
        <div className='flex justify-center items-center'>
          {de.map((item, index) => (
            <Image
              key={index}
              className='degrisogono'
              src={item}
              alt='de grisogono'
            />
          ))}
        </div>
        <div className='flex justify-center items-center'>
          {grisogono.map((item, index) => (
            <Image
              key={index}
              className='degrisogono'
              src={item}
              alt='de grisogono'
            />
          ))}
        </div>
      </div>
      <div className='flex justify-center gap-2 mt-1'>
        <div className='flex justify-center items-center'>
          {geneve.map((item, index) => (
            <Image
              key={index}
              className='geneve'
              src={item}
              alt='geneve details'
            />
          ))}
        </div>
      </div>
    </div>
  );
}
