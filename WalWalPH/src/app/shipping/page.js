'use client'

import Header from '@/component/Header/header'
import Footer from '@/component/Footer/footer'
import './shipping.css'
import Image from 'next/image'

import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { CursorArrowRaysIcon } from "@heroicons/react/24/solid";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
  Card,
  Typography,
} from "@material-tailwind/react";




const shipping = () => {

  // const router = useRouter();

  // const goToOtherPage = (e) => {
  //   e.preventDefault()
  //   router.push('/shop')
  // }

  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const paymentOptions = [
    { id: 1, name: 'Cash On Delivery' },
    { id: 2, name: 'Gcash / Maya' },
    { id: 3, name: 'Credit Card' }
  ];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (paymentOptions) => {
    setSelectedOption(paymentOptions);
    setIsOpen(false);
  };
  
  const menuItems = [
    {
      title: "Cash On Delivery"      
    },
    {
      title: "Gcash / MAYA"
    },
  ];

  const [openMenu, setOpenMenu] = React.useState(false);

  return (
    <div>
      <Header />      
      <div className='payment-shipping-body'>
        <div className='payment-shipping-content'>

          <div className='shipping-page-title'>
            Payment & Shipping
          </div>

          <div className='delivery-address-section'>
            <div className='shipping-location-container'>
              <Image className='location-marker-image' src='/image/payment-shipping-page/location-marker.svg' width={50} height={50} alt='Location Marker'/>
            </div>
            <div className='delivery-address-container'>
              <div className='delivery-address-title'>
                <p style={{ position: 'absolute', top: '25px' }}>Delivery Address</p>
              </div>
              <div className='delivery-receiver-name'>
                <p>Dada Periodico <span style={{ fontWeight: '400' }}> | </span> (+63) 917 519 2469</p>
              </div>
              <div className='delivery-receiver-address'>
                Rada St. Greenbelt Chancellor 112, San Lorenzo Makati City, Metro Manila, 1229
              </div>
            </div>
          </div>

          <div className='delivery-payment-option-container'>
            <div className='delivery-payment-option-text'>
              <Image src='/image/payment-shipping-page/currency-dollar.svg' width={50} height={50} alt='Currency Dollar Image'/>
              <p>Payment Option</p>
            </div>

            <div className='selected-payment-method'>
              <div>
                {selectedOption ? selectedOption.name : 'Select Payment Option'}
              </div>
              <div >
                <Menu
                  open={openMenu}
                  handler={setOpenMenu}
                  animate={{
                    mount: { y: 0 },
                    unmount: { y: 25 },}}
                >
                  <MenuHandler>
                    <Button variant="text" className="flex items-center gap-3 text-base font-normal capitalize tracking-normal">
                      <ChevronDownIcon
                        strokeWidth={2.5}
                        className={`h-3.5 w-3.5 transition-transform ${
                          openMenu ? "rotate-180" : ""
                        }`}
                        color='white'/>
                    </Button>
                  </MenuHandler>


                  <MenuList className='payment-dropdown-menu-list'>
                    <MenuItem>
                      {paymentOptions.map((paymentOptions) => (
                        <a key={paymentOptions.id}
                          onClick={() => handleOptionClick(paymentOptions)}
                          href="#"
                        >
                          <div className='select-payment-dropdown'>
                            {paymentOptions.name}
                          </div>
                        </a>
                      ))}
                    </MenuItem>
                  </MenuList>
                </Menu>
              </div>
            </div>
          </div>

          <div className='shipping-option-container'>
            <div className='shipping-option'>
              <Image src='/image/payment-shipping-page/truck.svg' width={50} height={50} alt='Shipping Option Image'/>
              <p>Shipping Option</p>
            </div>
          </div>

        </div>
      </div>
      <Footer />
    </div>
  )
}

export default shipping;