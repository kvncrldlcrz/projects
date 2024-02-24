import React from 'react';
import Image from 'next/image'

const bottles = [
  { family: 'Whiskey', image: '/image/bottle/whiskey/jackdaniel.png' },
  { family: 'Vodka', image: '/image/bottle/vodka/absolut.png' },
  { family: 'Rhum', image: '/image/bottle/rhum/bacardi.png' },
  { family: 'Gin', image: '/image/bottle/gin/bombay.png' },
  { family: 'Liquor', image: '/image/bottle/liquor/tequila-rose.png' },
  { family: 'Cognac', image: '/image/bottle/cognac/hennessy.png' },
  { family: 'Brandy', image: '/image/bottle/brandy/alfonso-light.png' },
  { family: 'Tequila', image: '/image/bottle/tequila/jose-cuervo.png' },
  { family: 'Soju', image: '/image/bottle/soju/jinro.png' },
  { family: 'Beer', image: '/image/bottle/beer/tiger-black.png' },
  { family: 'Wine', image: '/image/bottle/wine/yellow-tail.png' },
  { family: 'Tonic Water', image: '/image/bottle/tonic-water/schweppes.png' },
];

const BottleContainer = ({ family, image }) => (
  <button className='bottle-container'>
    <Image className="blur-bottle" src={image} width={63.793} height={241.831}/>
    <Image className="tilted-bottle" src={image} width={120.426} height={230.851}/>
    <Image className="bottle-hover" src={image} width={120.426} height={230.851}/>
    <div className='patch'></div>
    <div className='liquor-family'>{family}</div>
  </button>
);

const BottleMenu = () => {
  return (
    <div className='section-two-body'>
      <div className='bottle-shelve'>
        {bottles.map((bottle, index) => (
          <BottleContainer key={index} {...bottle} />
        ))}
      </div>
    </div>
  );
};

export default BottleMenu;