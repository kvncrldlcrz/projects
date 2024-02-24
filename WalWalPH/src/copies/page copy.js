'use client'

import Header from '@/component/Header/header'
import './body.css'
import Image from 'next/image'

import { Carousel } from "@material-tailwind/react";
import { useRouter } from 'next/navigation';


const main = () => {

  const router = useRouter();

  const goToOtherPage = (e) => {
    e.preventDefault()
    router.push('/shop')
  }

  return (
    <div>
      <Header />
        <div className='page-body'><div/>
        <div>
          <div className='qoute-container'>
            <p className='quote-title'>
              Lorem Ipsum
            </p>
            <p className='quote-content'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            
            <button className='order-now-button' onClick={(e) => goToOtherPage(e)}>
              Order Now
            </button>

            

          </div>
        </div>
        </div>

        <div className='section-two-body'>
          <div className='bottle-shelve'> 
            <button className='bottle-container'>
              <Image className="blur-bottle" src='/image/bottle/whiskey/jackdaniel.png' width={63.793} height={241.831}/>
              <Image className="tilted-bottle" src='/image/bottle/whiskey/jackdaniel.png' width={120.426} height={230.851}/>
              <Image className="bottle-hover" src='/image/bottle/whiskey/jackdaniel.png' width={120.426} height={230.851}/>
              <div className='patch'></div>
              <div className='liquor-family'>Whiskey</div>
            </button>
            <button className='bottle-container'>
              <Image className="blur-bottle" src='/image/bottle/vodka/absolut.png' width={63.793} height={241.831}/>
              <Image className="tilted-bottle" src='/image/bottle/vodka/absolut.png' width={120.426} height={230.851}/>
              <Image className="bottle-hover" src='/image/bottle/vodka/absolut.png' width={120.426} height={230.851}/>
              <div className='patch'></div>
              <div className='liquor-family'>Vodka</div>
            </button>
            <button className='bottle-container'>
              <Image className="blur-bottle" src='/image/bottle/rhum/bacardi.png' width={63.793} height={241.831}/>
              <Image className="tilted-bottle" src='/image/bottle/rhum/bacardi.png' width={120.426} height={230.851}/>
              <Image className="bottle-hover" src='/image/bottle/rhum/bacardi.png' width={120.426} height={230.851}/>
              <div className='patch'></div>
              <div className='liquor-family'>Rhum</div>
            </button>
            <button className='bottle-container'>
              <Image className="blur-bottle" src='/image/bottle/gin/bombay.png' width={63.793} height={241.831}/>
              <Image className="tilted-bottle" src='/image/bottle/gin/bombay.png' width={120.426} height={230.851}/>
              <Image className="bottle-hover" src='/image/bottle/gin/bombay.png' width={120.426} height={230.851}/>
              <div className='patch'></div>
              <div className='liquor-family'>Gin</div>
            </button>
            <button className='bottle-container'>
              <Image className="blur-bottle" src='/image/bottle/liquor/tequila-rose.png' width={63.793} height={241.831}/>
              <Image className="tilted-bottle" src='/image/bottle/liquor/tequila-rose.png' width={120.426} height={230.851}/>
              <Image className="bottle-hover" src='/image/bottle/liquor/tequila-rose.png' width={120.426} height={230.851}/>
              <div className='patch'></div>
              <div className='liquor-family'>Liquor</div>
            </button>
            <button className='bottle-container'>
              <Image className="blur-bottle" src='/image/bottle/cognac/hennessy.png' width={63.793} height={241.831}/>
              <Image className="tilted-bottle" src='/image/bottle/cognac/hennessy.png' width={120.426} height={230.851}/>
              <Image className="bottle-hover" src='/image/bottle/cognac/hennessy.png' width={120.426} height={230.851}/>
              <div className='patch'></div>
              <div className='liquor-family'>Cognac</div>
            </button>
            <button className='bottle-container'>
              <Image className="blur-bottle" src='/image/bottle/brandy/alfonso-light.png' width={63.793} height={241.831}/>
              <Image className="tilted-bottle" src='/image/bottle/brandy/alfonso-light.png' width={120.426} height={230.851}/>
              <Image className="bottle-hover" src='/image/bottle/brandy/alfonso-light.png' width={120.426} height={230.851}/>
              <div className='patch'></div>
              <div className='liquor-family'>Brandy</div>
            </button>
            <button className='bottle-container'>
              <Image className="blur-bottle" src='/image/bottle/tequila/jose-cuervo.png' width={63.793} height={241.831}/>
              <Image className="tilted-bottle" src='/image/bottle/tequila/jose-cuervo.png' width={120.426} height={230.851}/>
              <Image className="bottle-hover" src='/image/bottle/tequila/jose-cuervo.png' width={120.426} height={230.851}/>
              <div className='patch'></div>
              <div className='liquor-family'>Tequila</div>
            </button>
            <button className='bottle-container'>
              <Image className="blur-bottle" src='/image/bottle/soju/jinro.png' width={63.793} height={241.831}/>
              <Image className="tilted-bottle" src='/image/bottle/soju/jinro.png' width={120.426} height={230.851}/>
              <Image className="bottle-hover" src='/image/bottle/soju/jinro.png' width={120.426} height={230.851}/>
              <div className='patch'></div>
              <div className='liquor-family'>Soju</div>
            </button>
            <button className='bottle-container'>
              <Image className="blur-bottle" src='/image/bottle/beer/tiger-black.png' width={63.793} height={241.831}/>
              <Image className="tilted-bottle" src='/image/bottle/beer/tiger-black.png' width={120.426} height={230.851}/>
              <Image className="bottle-hover" src='/image/bottle/beer/tiger-black.png' width={120.426} height={230.851}/>
              <div className='patch'></div>
              <div className='liquor-family'>Beer</div>
            </button>
            <button className='bottle-container'>
              <Image className="blur-bottle" src='/image/bottle/wine/yellow-tail.png' width={63.793} height={241.831}/>
              <Image className="tilted-bottle" src='/image/bottle/wine/yellow-tail.png' width={120.426} height={230.851}/>
              <Image className="bottle-hover" src='/image/bottle/wine/yellow-tail.png' width={120.426} height={230.851}/>
              <div className='patch'></div>
              <div className='liquor-family'>Wine</div>
            </button>
            <button className='bottle-container'>
              <Image className="blur-bottle" src='/image/bottle/tonic-water/schweppes.png' width={63.793} height={241.831}/>
              <Image className="tilted-bottle" src='/image/bottle/tonic-water/schweppes.png' width={120.426} height={230.851}/>
              <Image className="bottle-hover" src='/image/bottle/tonic-water/schweppes.png' width={120.426} height={230.851}/>
              <div className='patch'></div>
              <div className='liquor-family'>Tonic Water</div>
            </button>
          </div>
          <button className='shop-button'>
            Shop Now
          </button>
        </div>


        <div className='section-three-body'>
          <div className='bundle-promo-text'>
            Bundle Promo
          </div>

          <div className='carousel-container'>
            <Carousel transition={{ duration: 1 }} className="bundle-carousel">
              <div className='bundle-positioning'>
                <div className='bundle-container'>
                  <div className='bundle-a'>
                    <Image className="promo-bottle" src='/image/bottle/bundle-promo/bundle-a/absolut.svg' width={180} height={300}/>
                    <Image className="promo-tonic-a" src='/image/bottle/bundle-promo/bundle-a/schweppes.svg' width={108} height={200}/>
                    <Image className="promo-tonic-b" src='/image/bottle/bundle-promo/bundle-a/schweppes.svg' width={108} height={200}/>
                  </div>
                  <Image className="crop-promo-bottle" src='/image/bottle/bundle-promo/bundle-a/crop-absolut.svg' width={180} height={300}/>
                </div>
                <div className='bundle-container'>
                  <div className='bundle-a'>
                    <Image className="promo-bottle" src='/image/bottle/bundle-promo/bundle-a/absolut.svg' width={180} height={300}/>
                    <Image className="promo-tonic-a" src='/image/bottle/bundle-promo/bundle-a/schweppes.svg' width={108} height={200}/>
                    <Image className="promo-tonic-b" src='/image/bottle/bundle-promo/bundle-a/schweppes.svg' width={108} height={200}/>
                  </div>
                  <Image className="crop-promo-bottle" src='/image/bottle/bundle-promo/bundle-a/crop-absolut.svg' width={180} height={300}/>
                </div>
              </div>
              <div className='bundle-positioning'>
                <div className='bundle-container'>
                  <div className='bundle-a'>
                    <Image className="promo-bottle" src='/image/bottle/bundle-promo/bundle-a/absolut.svg' width={180} height={300}/>
                    <Image className="promo-tonic-a" src='/image/bottle/bundle-promo/bundle-a/schweppes.svg' width={108} height={200}/>
                    <Image className="promo-tonic-b" src='/image/bottle/bundle-promo/bundle-a/schweppes.svg' width={108} height={200}/>
                  </div>
                  <Image className="crop-promo-bottle" src='/image/bottle/bundle-promo/bundle-a/crop-absolut.svg' width={180} height={300}/>
                </div>
                <div className='bundle-container'>
                  <div className='bundle-a'>
                    <Image className="promo-bottle" src='/image/bottle/bundle-promo/bundle-a/absolut.svg' width={180} height={300}/>
                    <Image className="promo-tonic-a" src='/image/bottle/bundle-promo/bundle-a/schweppes.svg' width={108} height={200}/>
                    <Image className="promo-tonic-b" src='/image/bottle/bundle-promo/bundle-a/schweppes.svg' width={108} height={200}/>
                  </div>
                  <Image className="crop-promo-bottle" src='/image/bottle/bundle-promo/bundle-a/crop-absolut.svg' width={180} height={300}/>
                </div>
              </div>
              <div className='bundle-positioning'>
                <div className='bundle-container'>
                  <div className='bundle-a'>
                    <Image className="promo-bottle" src='/image/bottle/bundle-promo/bundle-a/absolut.svg' width={180} height={300}/>
                    <Image className="promo-tonic-a" src='/image/bottle/bundle-promo/bundle-a/schweppes.svg' width={108} height={200}/>
                    <Image className="promo-tonic-b" src='/image/bottle/bundle-promo/bundle-a/schweppes.svg' width={108} height={200}/>
                  </div>
                  <Image className="crop-promo-bottle" src='/image/bottle/bundle-promo/bundle-a/crop-absolut.svg' width={180} height={300}/>
                </div>
                <div className='bundle-container'>
                  <div className='bundle-a'>
                    <Image className="promo-bottle" src='/image/bottle/bundle-promo/bundle-a/absolut.svg' width={180} height={300}/>
                    <Image className="promo-tonic-a" src='/image/bottle/bundle-promo/bundle-a/schweppes.svg' width={108} height={200}/>
                    <Image className="promo-tonic-b" src='/image/bottle/bundle-promo/bundle-a/schweppes.svg' width={108} height={200}/>
                  </div>
                  <Image className="crop-promo-bottle" src='/image/bottle/bundle-promo/bundle-a/crop-absolut.svg' width={180} height={300}/>
                </div>
              </div>
              <div className='bundle-positioning'>
                <div className='bundle-container'>
                  <div className='bundle-a'>
                    <Image className="promo-bottle" src='/image/bottle/bundle-promo/bundle-a/absolut.svg' width={180} height={300}/>
                    <Image className="promo-tonic-a" src='/image/bottle/bundle-promo/bundle-a/schweppes.svg' width={108} height={200}/>
                    <Image className="promo-tonic-b" src='/image/bottle/bundle-promo/bundle-a/schweppes.svg' width={108} height={200}/>
                  </div>
                  <Image className="crop-promo-bottle" src='/image/bottle/bundle-promo/bundle-a/crop-absolut.svg' width={180} height={300}/>
                </div>
                <div className='bundle-container'>
                  <div className='bundle-a'>
                    <Image className="promo-bottle" src='/image/bottle/bundle-promo/bundle-a/absolut.svg' width={180} height={300}/>
                    <Image className="promo-tonic-a" src='/image/bottle/bundle-promo/bundle-a/schweppes.svg' width={108} height={200}/>
                    <Image className="promo-tonic-b" src='/image/bottle/bundle-promo/bundle-a/schweppes.svg' width={108} height={200}/>
                  </div>
                  <Image className="crop-promo-bottle" src='/image/bottle/bundle-promo/bundle-a/crop-absolut.svg' width={180} height={300}/>
                </div>
              </div>
              <div className='bundle-positioning'>
                <div className='bundle-container'>
                  <div className='bundle-a'>
                    <Image className="promo-bottle" src='/image/bottle/bundle-promo/bundle-a/absolut.svg' width={180} height={300}/>
                    <Image className="promo-tonic-a" src='/image/bottle/bundle-promo/bundle-a/schweppes.svg' width={108} height={200}/>
                    <Image className="promo-tonic-b" src='/image/bottle/bundle-promo/bundle-a/schweppes.svg' width={108} height={200}/>
                  </div>
                  <Image className="crop-promo-bottle" src='/image/bottle/bundle-promo/bundle-a/crop-absolut.svg' width={180} height={300}/>
                </div>
                <div className='bundle-container'>
                  <div className='bundle-a'>
                    <Image className="promo-bottle" src='/image/bottle/bundle-promo/bundle-a/absolut.svg' width={180} height={300}/>
                    <Image className="promo-tonic-a" src='/image/bottle/bundle-promo/bundle-a/schweppes.svg' width={108} height={200}/>
                    <Image className="promo-tonic-b" src='/image/bottle/bundle-promo/bundle-a/schweppes.svg' width={108} height={200}/>
                  </div>
                  <Image className="crop-promo-bottle" src='/image/bottle/bundle-promo/bundle-a/crop-absolut.svg' width={180} height={300}/>
                </div>
              </div>
            </Carousel>
          </div>
        </div>

        <div className='section-four-body'>

          <div className='featured'> Featured </div>
          <div className='premium-shelve-container'>
            <div className='premium-bottle-container'>
              <div className="plus-icon" >
                <Image src='/image/bottle/premium-bottles/plus-icon.svg' width={30} height={30}/>
              </div>
              <div className='premium-bottle-box'>
                <Image className="premium-bottle" src='/image/bottle/premium-bottles/patron-anejo.svg' width={359} height={520}/>
                <div className='bottle-name'> Patron Anejo 750ml </div>
                <div className='bottle-price'> ₱3,929 </div>
              </div>
            </div>
            <div className='premium-bottle-container'>
              <div className="plus-icon" >
                <Image src='/image/bottle/premium-bottles/plus-icon.svg' width={30} height={30}/>
              </div>
              <div className='premium-bottle-box'>
                <Image className="premium-bottle" src='/image/bottle/premium-bottles/chivas.svg' width={359} height={520}/>
                <div className='bottle-name'> Patron Anejo 750ml </div>
                <div className='bottle-price'> ₱3,929 </div>
              </div>
            </div>
            <div className='premium-bottle-container'>
              <div className="plus-icon" >
                <Image src='/image/bottle/premium-bottles/plus-icon.svg' width={30} height={30}/>
              </div>
              <div className='premium-bottle-box'>
                <Image className="premium-bottle" src='/image/bottle/premium-bottles/martini.svg' width={359} height={520}/>
                <div className='bottle-name'> Patron Anejo 750ml </div>
                <div className='bottle-price'> ₱3,929 </div>
              </div>
            </div>
            <div className='premium-bottle-container'>
              <div className="plus-icon" >
                <Image src='/image/bottle/premium-bottles/plus-icon.svg' width={30} height={30}/>
              </div>
              <div className='premium-bottle-box'>
                <Image className="premium-bottle" src='/image/bottle/premium-bottles/patron-anejo.svg' width={359} height={520}/>
                <div className='bottle-name'> Patron Anejo 750ml </div>
                <div className='bottle-price'> ₱3,929 </div>
              </div>
            </div>
            <div className='premium-bottle-container'>
              <div className="plus-icon" >
                <Image src='/image/bottle/premium-bottles/plus-icon.svg' width={30} height={30}/>
              </div>
              <div className='premium-bottle-box'>
                <Image className="premium-bottle" src='/image/bottle/premium-bottles/chivas.svg' width={359} height={520}/>
                <div className='bottle-name'> Patron Anejo 750ml </div>
                <div className='bottle-price'> ₱3,929 </div>
              </div>
            </div>
            <div className='premium-bottle-container'>
              <div className="plus-icon" >
                <Image src='/image/bottle/premium-bottles/plus-icon.svg' width={30} height={30}/>
              </div>
              <div className='premium-bottle-box'>
                <Image className="premium-bottle" src='/image/bottle/premium-bottles/martini.svg' width={359} height={520}/>
                <div className='bottle-name'> Patron Anejo 750ml </div>
                <div className='bottle-price'> ₱3,929 </div>
              </div>
            </div>
          </div>
            

        </div>
    </div>  
  ) 
}

export default main;