import React from 'react';
import Image from 'next/image'
import './bottle-menu.css'

const Bottle = ({ image, family }) => (
  <button className='bottle-container'>
    <Image className="blur-bottle" src={image} width={63.793} height={241.831} />
    <Image className="tilted-bottle" src={image} width={120.426} height={230.851} />
    <Image className="bottle-hover" src={image} width={120.426} height={230.851} />
    <div className='patch'></div>
    <div className='liquor-family'>{family}</div>
  </button>
);

export default Bottle;
