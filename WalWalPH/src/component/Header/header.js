import React, { useState } from 'react';
import Image from 'next/image'
import './header.css'
import { useRouter } from 'next/navigation';
import {
  Drawer,
  Button,
  Typography,
  IconButton,
} from "@material-tailwind/react";

const header = () => {

  const router = useRouter();

  const goToHome = (e) => {
    e.preventDefault()
    router.push('/')
  }

  const goToShop = (e) => {
    e.preventDefault()
    router.push('/shop')
  }

  const goToContact = (e) => {
    e.preventDefault()
    router.push('/contact')
  }

  const goToCheckout = (e) => {
    e.preventDefault()
    router.push('/checkout')
  }

  const goToShipping = (e) => {
    e.preventDefault()
    router.push('/shipping')
  }
  
  const [openRight, setOpenRight] = React.useState(false); 
  const openDrawerRight = () => setOpenRight(true);
  const closeDrawerRight = () => setOpenRight(false);

  return (
    <div className='header-container'>
      <header className="header">
        <div className="left-navagition">
            <button className="home-nav" onClick={(e) => goToHome(e)}>HOME</button>
            <button className="shop-nav" onClick={(e) => goToShop(e)}>SHOP</button>
            <button className="contact-nav" onClick={(e) => goToContact(e)}>CONTACT</button>
        </div>





        
        <div className="center-logo">
          <Image src='/image/header-icons/walwalphLogo.svg' width={91.992} height={100.279} />
        </div>





        <div className="right-user-ui">
            <div className="search-bar-container">
              <input className="search-bar" type="text" placeholder="Search"></input>
              <Image className="search-icon" src='/image/header-icons/search-icon.svg' width={20} height={20} alt='Header Search Icon'/>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" width="3" height="46" viewBox="0 0 3 46" fill="none">
              <path d="M1.5 1L1.5 45" stroke="#FED7AA" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
            <button className="truck-button" onClick={(e) => goToShipping(e)}>
              <Image src='/image/header-icons/truck.svg' width={20} height={20} alt='Header Shipping Icon'/>
            </button>

            <React.Fragment>
              <Drawer
                placement="right"
                open={openRight}
                onClose={closeDrawerRight}
                className="main-drawer p-4"
                size={500}
              >
                <div className='drawer-container'>
                  <div className='drawer-top-button-container'>
                    <Image className="drawer-cart-icon" src='/image/drawer-icon/drawer-cart.svg' width={29.5} height={29.5} alt='Drawer Cart Icon'/>
                    <div className='drawer-my-cart-text'>
                      My Cart
                    </div>
                    <button className='drawer-close-button' onClick={closeDrawerRight}>
                      <Image src='/image/drawer-icon/x-circle.svg' width={29.5} height={29.5} alt='Drawer Close Icon'/>
                    </button>
                    {/* <div className="mb-6 flex items-center justify-between">
                      <IconButton
                        variant="text"
                        color="blue-gray"
                        onClick={closeDrawerRight}
                        className='x-close-drawer'
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={2}
                          stroke="white"
                          className="h-6 w-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </IconButton>         
                    </div> */}
                  </div>
                  <div className='drawer-bottom-button-container'>
                    <button className='drawer-add-items-button'>
                      + Add Items
                    </button>
                    <button className='drawer-checkout-button' onClick={(e) => goToCheckout(e)}>
                      Checkout
                    </button>
                  </div>  
                </div>
                
              </Drawer>
             </React.Fragment>

            <button onClick={openDrawerRight} className="cart-button">
                <Image src='/image/header-icons/shopping-cart.svg' width={20} height={20} alt='Header Cart Icon'/>
            </button>
            <button className="user-button">
              <Image src='/image/header-icons/user.svg' width={20} height={20} alt='Header User Icon'/>
            </button>
        </div>      
     </header>
    </div>
    
  )
  }

export default header;