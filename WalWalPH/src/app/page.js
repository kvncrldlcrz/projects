'use client'

import Header from '@/component/Header/header'
import Footer from '@/component/Footer/footer'
import './body.css'
import Image from 'next/image'
import Bottle from '@/component/Bottle_Menu/bottle-menu'
import BestSeller from '@/component/Best_Seller/best-seller'
import { Carousel } from "@material-tailwind/react";
import { useRouter } from 'next/navigation';




const main = () => {

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
        <div className='section-one-body'><div/>
        <div>
          <div className='qoute-container'>

            <p className='quote-title'>
              Welcome to WalwalPH
            </p>

            <p className='quote-content'>
              Uncover a world of unparalleled quality and craftsmanship in every bottle.
            </p>
            
            <button className='shop-now-button' onClick={(e) => goToOtherPage(e)}>
              Shop Now
            </button>

          </div>
        </div>
        </div>

        <div className='section-two-body'>
          <div className='bottle-shelve-container'>
            <div className='bottle-shelve'> 
              {bottlesData.map((bottle, index) => (
              <Bottle key={index} {...bottle} />
              ))}
            </div>
          </div>
          
          <button className='shop-button'>
            Shop Now
          </button>
        </div>

        <div className='section-three-body'>
          <div className='section-title'>
            <span style={{ color: '#fa923d' }}>Special</span> Offer
            <p className='section-sub-title'>
              Indulge in <strong style={{fontWeight: '600'}}>exclusive promotions</strong> and <strong style={{fontWeight: '600'}}>limited-time offers</strong>. Elevate your moments with savings on our handpicked selection of premium liquors.
            </p>
          </div>

          <div className='carousel-container'>
            <Carousel transition={{ duration: 1 }}>

              <div className='bundle-positioning'>                
                <div className='bundle-box'>                  
                  <div className='bundle-a-container'>
                    <Image className='bundle-a' src='/image/bottle/bundle-promo/bundle-a/bundle-absolut-tonic.png' width={308.06} height={308.06}/>          
                  </div>
                  <div className='special-offer-container'>
                    <div className='special-offer-pricing'>
                      <strong style={{fontWeight: '600'}}>Absolut + 2 Schweppes</strong>
                    </div>
                    <div className='special-offer-pricing' > 
                      For only <span style={{color: '#fa923d', fontWeight: '600', marginLeft: '5px' }}>₱1,500</span>
                    </div>
                    <div className='add-to-cart-container'> 
                      <button className='add-to-cart'>
                        + Cart
                      </button>
                    </div>
                  </div>
                </div>
                <div className='bundle-box'>
                  <div className='bundle-b-container'>
                    <Image className='bundle-b' src='/image/bottle/bundle-promo/bundle-b/bundle-jack-jose.png' width={308.06} height={308.06}/>
                  </div>
                  <div className='special-offer-container'>                    
                    <div className='special-offer-pricing'>
                      <strong style={{fontWeight: '600'}}>Jack Daniels + Jose Cuervo</strong>
                    </div>
                    <div className='special-offer-pricing' > 
                      For only <span style={{color: '#fa923d', fontWeight: '600', marginLeft: '5px' }}>₱2,000</span>
                    </div>
                    <div className='add-to-cart-container'> 
                      <button className='add-to-cart'>
                        + Cart
                      </button>
                    </div>
                  </div>
                </div>
                <div className='bundle-box'>
                  <div className='bundle-c-container'>                   
                    <Image className='bundle-c' src='/image/bottle/bundle-promo/bundle-c/bundle-bombay-bacardi-hennessy.png' width={308.06} height={308.06}/>                  
                  </div>
                  <div className='special-offer-container'>
                    <div className='special-offer-pricing'>
                      <strong style={{fontWeight: '600'}}>Bombay + Bacardi + Hennessy</strong>
                    </div>
                    <div className='special-offer-pricing' > 
                      For only <span style={{color: '#fa923d', fontWeight: '600', marginLeft: '5px' }}>₱3,100</span>
                    </div>
                    <div className='add-to-cart-container'> 
                      <button className='add-to-cart'>
                        + Cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className='bundle-positioning'>                
                <div className='bundle-box'>                  
                  <div className='bundle-a-container'>
                    <Image className='bundle-a' src='/image/bottle/bundle-promo/bundle-a/bundle-absolut-tonic.png' width={308.06} height={308.06}/>          
                  </div>
                  <div className='special-offer-container'>
                    <div className='special-offer-pricing'>
                      <strong style={{fontWeight: '600'}}>Absolut + 2 Schweppes</strong>
                    </div>
                    <div className='special-offer-pricing' > 
                      For only <span style={{color: '#fa923d', fontWeight: '600', marginLeft: '5px' }}>₱1,500</span>
                    </div>
                    <div className='add-to-cart-container'> 
                      <button className='add-to-cart'>
                        + Cart
                      </button>
                    </div>
                  </div>
                </div>
                <div className='bundle-box'>
                  <div className='bundle-b-container'>
                    <Image className='bundle-b' src='/image/bottle/bundle-promo/bundle-b/bundle-jack-jose.png' width={308.06} height={308.06}/>
                  </div>
                  <div className='special-offer-container'>                    
                    <div className='special-offer-pricing'>
                      <strong style={{fontWeight: '600'}}>Jack Daniels + Jose Cuervo</strong>
                    </div>
                    <div className='special-offer-pricing' > 
                      For only <span style={{color: '#fa923d', fontWeight: '600', marginLeft: '5px' }}>₱2,000</span>
                    </div>
                    <div className='add-to-cart-container'> 
                      <button className='add-to-cart'>
                        + Cart
                      </button>
                    </div>
                  </div>
                </div>
                <div className='bundle-box'>
                  <div className='bundle-c-container'>                   
                    <Image className='bundle-c' src='/image/bottle/bundle-promo/bundle-c/bundle-bombay-bacardi-hennessy.png' width={308.06} height={308.06}/>                  
                  </div>
                  <div className='special-offer-container'>
                    <div className='special-offer-pricing'>
                      <strong style={{fontWeight: '600'}}>Bombay + Bacardi + Hennessy</strong>
                    </div>
                    <div className='special-offer-pricing' > 
                      For only <span style={{color: '#fa923d', fontWeight: '600', marginLeft: '5px' }}>₱3,100</span>
                    </div>
                    <div className='add-to-cart-container'> 
                      <button className='add-to-cart'>
                        + Cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
             
            </Carousel>
          </div>
        </div>

        <div className='section-four-body'>
          <div className='section-title'>
              Our <span style={{ color: '#fa923d' }}>Best Seller</span>
            <p className='section-sub-title'>
              Explore our curated collection of fine wines, rare whiskies, craft beers, and artisanal spirits. Each bottle tells a unique story, waiting to be uncorked and shared.
            </p>
          </div>
          <BestSeller />
        </div>

        <div className='section-five-body'>
          <div className='section-title'>
            <span style={{ color: '#fa923d' }}>Why</span> Choose us?
          </div>
          <div className='reason-container'>
            <div className='reason-a'>
              <h1 className='reason-title'>
                Wide Selection
              </h1>
              <p className='reason-subtitle'>
                From classic favorites to rare finds, our diverse range caters to every palate.
              </p>
            </div>
            <div className='reason-b'>
              <h1 className='reason-title'>
                Expertly Curated
              </h1>
              <p className='reason-subtitle'>
                Our team of connoisseurs ensures that each bottle meets the highest standards of quality and taste.
              </p>
            </div>
            <div className='reason-c'>
              <h1 className='reason-title'>
                Convenient Delivery
              </h1>
              <p className='reason-subtitle'>
                Enjoy doorstep delivery, ensuring your favorite spirits are just a click away.
              </p>
            </div>
            <div className='reason-d'>
              <h1 className='reason-title'>
                Secure Transactions
              </h1>
              <p className='reason-subtitle'>
                Shop with confidence, knowing your transactions are secure and your satisfaction is guaranteed.
              </p>
            </div>
          </div>             
        </div>  

        <div className='section-six-body'>
          <div className='section-title'>
              Customer <span style={{ color: '#fa923d' }}>Reviews</span>
            <p className='section-sub-title'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elitaw sed do
            </p>
          </div>
          <div className='review-carousel-container'>
            <Carousel transition={{ duration: 1 }}>
              <div className='review-container'>
                <div className='review-box'>
                <div className='review-content'>
                    <Image className='review-avatar' src='/image/review-avatar/nerd.svg' width={60} height={60}/>
                    <h1 className='reviewer-username'>
                      User102990
                    </h1>
                    <h1 className='review-detail '>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elitaw sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </h1>
                  </div>
                  <div className='review-content'>
                    <Image className='review-avatar' src='/image/review-avatar/long-hair.svg' width={60} height={60}/>
                    <h1 className='reviewer-username'>
                      User102990
                    </h1>
                    <h1 className='review-detail '>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elitaw sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </h1>
                  </div>
                  <div className='review-content'>
                    <Image className='review-avatar' src='/image/review-avatar/blonde.svg' width={60} height={60}/>
                    <h1 className='reviewer-username'>
                      User102990
                    </h1>
                    <h1 className='review-detail '>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elitaw sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </h1>
                  </div>
                </div>
              </div>


              <div className='review-container'>
                <div className='review-box'>
                  <div className='review-content'>
                    <Image className='review-avatar' src='/image/review-avatar/nerd.svg' width={60} height={60}/>
                    <h1 className='reviewer-username'>
                      User102990
                    </h1>
                    <h1 className='review-detail '>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elitaw sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </h1>
                  </div>
                  <div className='review-content'>
                    <Image className='review-avatar' src='/image/review-avatar/long-hair.svg' width={60} height={60}/>
                    <h1 className='reviewer-username'>
                      User102990
                    </h1>
                    <h1 className='review-detail '>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elitaw sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </h1>
                  </div>
                  <div className='review-content'>
                    <Image className='review-avatar' src='/image/review-avatar/blonde.svg' width={60} height={60}/>
                    <h1 className='reviewer-username'>
                      User102990
                    </h1>
                    <h1 className='review-detail '>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elitaw sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </h1>
                  </div>
                </div>
              </div>
            </Carousel>
          </div>
          <div className='community-bar'>
            <div className='section-title'>
                Join <span style={{ color: '#fa923d' }}>Our Community</span>
              <p className='section-sub-title'>
                Become part of our community of enthusiasts. <strong style={{fontWeight: '600'}}>Follow us on social media</strong> for updates, tasting notes, and exclusive insights into the world of fine spirits.
              </p>
            </div>
          </div>
          
        </div>

      <Footer />
    </div>  
  ) 
}

export default main;

              