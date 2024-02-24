'use client'

import Header from '@/component/Header/header'
import Footer from '@/component/Footer/footer'
import React from "react";
import Image from 'next/image';
import './checkout.css'
import { Typography } from '@material-tailwind/react';
import { useRouter } from 'next/navigation';


const Checkout = () => {

  const router = useRouter();

  const goToShipping = (e) => {
    e.preventDefault()
    router.push('/shipping')
  }


  return (
    <div>
      <Header />
        <div className='checkout-body-container'>
          <div className='checkout-body'>
            <div className='checkout-title'>
              Checkout
              <Image className='checkout-spark' src='/image/checkout-page/sparkles.svg' width={39} height={39} alt='Checkout Spark Icon'/>
            </div>
            <a className='checkout-subtitle' href="/user">
              Login to your existing account
            </a>
            <div className='checkout-guest-container'>
              <div className='checkout-as-guest-details'>
                <Typography className='continue-as'>
                  or continue as <strong style={{ fontWeight: 600 }}>Guest</strong>
                </Typography>
                <input className='checkout-inputs' placeholder='Name' type="text"/>
                <input className='checkout-inputs' placeholder='Mobile Number' type="number"/>
                <div className='checkout-select-address'>
                  <input className='checkout-inputs' placeholder='Select Address' type="text"/>
                  <button>
                   <Image className='chevron-address' src='/image/checkout-page/chevron-right.svg' width={20} height={20} alt='Checkout Chevron Icon'/>
                  </button>
                </div>
                <div>
                  <span style={{ color: '#FFF7ED' }}>By continuing, you agree with our </span>
                  <button style={{ color: '#fa923d', textDecoration: 'underline' }}>Privacy Policy </button>
                  <span style={{ color: '#FFF7ED' }}> and </span>
                  <button style={{ color: '#fa923d', textDecoration: 'underline' }}>Terms and Conditions.</button>
                </div>
              </div>
              <button className='checkout-payment-button' onClick={(e) => goToShipping(e)}>Proceed to payment</button>
            </div>
          </div>
        </div>
      <Footer />
    </div>
  )
}

export default Checkout;