import React, { useState } from 'react';
import Image from 'next/image';
import './best-seller.css'
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Carousel,
} from "@material-tailwind/react";

  const bestSellerBottles = [
    {
      name: "Patron Anejo 750ml",
      price: "₱3,929",
      imageSrc: "/image/bottle/best-seller-bottles/patron-anejo.svg",
    },
    {
      name: "Chivas Regal 1L",
      price: "₱1,249",
      imageSrc: "/image/bottle/best-seller-bottles/chivas.svg",
    },
    {
      name: "Asti Martini 750ml",
      price: "₱949",
      imageSrc: "/image/bottle/best-seller-bottles/martini.svg",
    },
    {
      name: "Tanqueray 750ml",
      price: "₱1,089",
      imageSrc: "/image/bottle/best-seller-bottles/tanqueray.svg",
    },
    {
      name: "Bombay Sapphire 750ml",
      price: "₱1,249",
      imageSrc: "/image/bottle/best-seller-bottles/bombay.svg",
    },
    {
      name: "Johnnie Walker Black Label 1L",
      price: "₱1,379",
      imageSrc: "/image/bottle/best-seller-bottles/jhonnie-walker.svg",
    },
  ];

 
const BestSeller = () => {

  const [size, setSize] = React.useState(null);
 
  const handleOpen = (value) => setSize(value);

  return (
    <div className='best-seller-shelve-container'>
      {bestSellerBottles.map((bottle, index) => (
        <div className='best-seller-bottle-container' key={index}>
          <button className="plus-icon">
            <Image src='/image/bottle/best-seller-bottles/plus-icon.svg' width={30} height={30}/>
          </button>
          <div className='best-seller-box'>
            <button onClick={() => handleOpen("lg")} variant="gradient">
              <Image className="best-seller-bottle" src={bottle.imageSrc} width={359} height={520} alt='Best Seller Bottle Image'/>
            </button>
              <Dialog
              open={size === "lg"}
              size={size || "lg"}
              // handler={handleOpen}
              animate={{
                mount: { scale: 1, y: 0 },
                unmount: { scale: 0.9, y: -100 },
              }}
              className='product-dialog-box'
              >
                <div className='product-image-dialog-carousel-container'>
                  <Carousel>
                    <div className='image-container'>
                      <Image className='product-image' src='image/bottle/best-seller-bottles/patron-anejo.svg' width={460} height={700} alt='Product Image'/>
                    </div>
                    <div className='image-container'>
                      <Image className='product-image' src='image/bottle/best-seller-bottles/patron-anejo.svg' width={460} height={700} alt='Product Image'/>
                    </div>
                    <div className='image-container'>
                      <Image className='product-image' src='image/bottle/best-seller-bottles/patron-anejo.svg' width={460} height={700} alt='Product Image'/> 
                    </div>
                  </Carousel>
                </div>

                <div className='product-full-detail-container'>
                  <div className='product-full-detail'>
                    <button className='product-dialog-close-button'>
                      <Image src='/image/drawer-icon/x-circle.svg' width={40} height={40} alt='Dialog Close Icon' onClick={() => handleOpen(null)}/>
                    </button>
                    <div className='product-name'>
                      Patron Anejo 750ml
                    </div>
                    <div className='product-price'>
                      ₱3,929
                    </div>
                    <Image className='product-line-separator' src='image/product-dialog-icon/line-3.svg' width={600} height={1} alt='Product Line Separator'/>
                    <div className='product-dialog-buttons'>
                      <div className="dialog-add-remove-button-container">
                        <button className='dialog-add-remove-button'>
                          -
                        </button>
                        <span className='dialog-product-quantity'>
                          1
                        </span>
                        <button className='dialog-add-remove-button'>
                          +
                        </button>
                      </div>
                      <button className="dialog-add-to-cart">
                        Add To Cart
                      </button>
                    </div>
                    <p className='product-paragraph'>
                      Patron Reposado is a high-quality tequila that is aged for at least two months in oak barrels before being bottled. This 750ml bottle of Patron Reposado has a smooth and balanced taste profile, with notes of agave, vanilla, and oak, and a long and warming finish. It is made using only the finest 100% Weber Blue Agave, which is grown in the highlands of Jalisco, Mexico. Patron Reposado is a versatile tequila that can be enjoyed neat, on the rocks, or in a variety of cocktails. It is a great choice for tequila lovers who appreciate the finer things in life, and who are looking for a premium tequila with a sophisticated and complex flavor profile. Overall, Patron Reposado is a top-quality tequila that is sure to impress even the most discerning palates.
                    </p>
                  </div>                
                </div>
              </Dialog>
            

            <div className='bottle-name'>{bottle.name}</div>
            <div className='bottle-price'>{bottle.price}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BestSeller;