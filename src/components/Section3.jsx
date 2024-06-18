import Image from 'next/image';
import React from 'react';
import HarbourLights from './HarbourLights/HarbourLights';
import Feature from './Features/Feature';

export default function Section3() {
  return (
    <div className='section3'>
      <HarbourLights />
      <Feature />
    </div>
  );
}
