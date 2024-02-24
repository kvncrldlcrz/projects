import React from 'react';
import Image from 'next/image'
import './footer.css'
import { useRouter } from 'next/navigation';

const Footer = () => {

  const router = useRouter();

  const goToHome = (e) => {
    e.preventDefault()
    router.push('/')
  }

  const goToShop = (e) => {
    e.preventDefault()
    router.push('/shop')
  }


  return (
    <div className='footer-container'>
      <h1 className='footer-follow-us'>Follow Us</h1>
      <div className='socmed-container'>
        <button>
          <Image src='/image/footer-icons/fb-link.svg' width={49.16} height={49.16}/>
        </button>
        <button>
          <Image src='/image/footer-icons/insta-link.svg' width={49.16} height={49.16}/>
        </button>
        <button>
          <Image src='/image/footer-icons/x-link.svg' width={49.16} height={49.16}/>
        </button>
      </div>
      <div className='about-us-group'>
        <button>
          About Us
        </button>
        <h1 className='line-separator'>|</h1>
        <button>
          Payment Method
        </button>
        <h1 className='line-separator'>|</h1>
        <button>
          Delivery
        </button>
        <h1 className='line-separator'>|</h1>
        <button>
          Contact Us
        </button>
      </div>
      <h1 className='all-rights'>
        © Walwalph. All Rights Reserved.</h1>
    </div>
    
  )
  }

export default Footer;