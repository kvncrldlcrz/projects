'use client'

import Header from '@/component/Header/header'
import Footer from '@/component/Footer/footer'
import Bottle from '@/component/Bottle_Menu/bottle-menu'
import BestSeller from '@/component/Best_Seller/best-seller'
import './shop.css'


import { useRouter } from 'next/navigation';
import React from "react";




const shop = () => {

  const router = useRouter();

  const goToOtherPage = (e) => {
    e.preventDefault()
    router.push('/shop')
  }

  const bottlesData = [
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
  

  return (
    <div>
      <Header />      
        <div className='bodyshop'>
          <div className='bottleshelvecontainer'>
            <div className='bottleshelve'>  
              {bottlesData.map((bottle, index) => (
              <Bottle key={index} {...bottle} />
              ))}
            </div>
          </div>
          <div className='shop-title'>
            SHOP
          </div>
          <div className='shop-subtitle'>
            Elevate Your Tastes with Our Premium Selection
          </div>
          <button className='view-all-button'>
            View All
          </button>
        </div>
        <div className='bottle-family-list-container'>
          <div className='bottle-family-list'>
            <h1 className='bottle-family-name'>
              Whiskey
            </h1>
            <BestSeller />
          </div> 
        </div>
      <Footer />
    </div>
  )
}

export default shop;