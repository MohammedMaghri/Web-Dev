import logo from './logo.svg';
import React, { useRef } from 'react';
import './App.css';
import { DiYeoman } from "react-icons/di";
import { MdOutlineArrowDropDown } from "react-icons/md";


export default function App() {
  let this_array = [
    "https://static-portal.youcan.shop/images/new_portal_design/home/shop-global-1.webp" ,
    "https://static-portal.youcan.shop/images/new_portal_design/home/shop-global-2.webp"
  ];

  function chCotent(){
    let flag = 0;
    while(true)
    {
      flag += 1;
      if (flag = 5000)
        console.log(this_array[1]);
      flag = 0;
    }
  };

  setInterval(function (){
    let this_text =  document.getElementById('this');
    this_text.style.opacity = 0.5;
    this_text.src = this_array[1];
    this_text.style.opacity = 1;
  }, 4000);
  return (
    <div className='all'>
      <nav className='nav_bar'>
        <div className='left-side'>
          <div className='both'>
            <DiYeoman className='log' />
            <span className='sp'> Tr1ple.x.x.x</span>
          </div>
          <div className='clik'>
            <ul > Features </ul>
            <ul> Pricing  </ul>
          </div>
        
        </div>
        <div className='right-s'>
          <button className='bs' onClick={chCotent}> Sign-Up </button>
          <button className='bl' > Login </button>
          <ul> English <MdOutlineArrowDropDown /> </ul>
        </div>
      </nav>
     <div className='container'>
       <div className='two-ones'>
         <div className='fir'>
           <section className='first-sec'>
              <h1 className='txt'>Selling online has never been easier</h1>
              <p className='ttx'> 
              Montez votre boutique en ligne en quelques clics 
              et beneficiez de tous les outils essentiels pour 
              reussir dans l'e-commerce
              </p>
              <div className='Mark'>
                <img src='https://static-portal.youcan.shop/images/home_page_images_v2/marks.svg'/>
                <p className='text_in_mark' > Easy and intuitive store setup </p>
             </div>
              <div className='Mark'>
               <img src='https://static-portal.youcan.shop/images/home_page_images_v2/marks.svg'/>
               <p className='text_in_mark' >No charge until you succeed</p>
             </div>
             <div className='Mark'>
               <img src='https://static-portal.youcan.shop/images/home_page_images_v2/marks.svg'/>
                <p className='text_in_mark' >All the e-commerce tools you need in one place </p>
              </div>
             <div className='for_bott'>
               <button className='Stor'> Build You're Store</button>
              </div>
           </section>
         </div>
         <div className='other-pag'>
            <div className='for-img'>
              <img className='image-js' id='this' src="https://static-portal.youcan.shop/images/new_portal_design/home/shop-global-1.webp"/>
           </div>
           <div className='benifits'>
              <div className='benif'>
               <p className='bntext'>+150k</p>
               <p className='bndetail'>Boutique active </p>
              </div>
              <div className='sep'> </div>
              <div className='benif'>
                <p className='bntext'>+20</p>
                <p className='bndetail'> Pays </p>
              </div>
              <div className='sep'> </div>
             <div className='benif'>
               <p className='bntext'>+20%</p>
               <p className='bndetail'> Taux de conversion </p>
              </div>
            </div>
          </div>
        </div>
        <div className='unde'>
          <div className='jtext'>
            <h2> How does it work? </h2>
          </div>
          <div className='suggest'>
            <div className='features'>
              <img className='imgstor' src="https://static-portal.youcan.shop/images/home_page_images_v2/feature-1.svg" />
              <div className='txt-in'>
                <p className='for-tg'>1. Setup your store</p>
              </div>
            </div>
            <div className='features'>
              <img className='imgstor' src="https://static-portal.youcan.shop/images/home_page_images_v2/feature-2.svg" />
              <div className='txt-in'>
                <p className='for-tg'>2. List your products</p>
              </div>
            </div>
            <div className='features'>
              <img className='imgstor' src="https://static-portal.youcan.shop/images/home_page_images_v2/feature-3.svg" />
              <div className='txt-in'>
                <p className='for-tg'> 3. Drive traffic and sales </p>
              </div>
            </div>
            <div className='features'>
              <img className='imgstor' src="https://static-portal.youcan.shop/images/home_page_images_v2/feature-4.svg" />
              <div className='txt-in'>
                <p className='for-tg'> 4. Get paid </p>
              </div>
            </div>
          </div>
        </div>
        <div className='for-lower'>
          <div className='inner-div'>
            <img className='inner-image' src='https://static-portal.youcan.shop/images/new_portal_design/home/setup-store-animation.gif'/>
          </div>
          <div className='inner-text'>
            <h2 className='header'> Easy and intuitive store setup </h2>
            <div className='save-ur'>
              <p className='tet'> Save yourself hours of hassle with our well-optimized, highly convertible, simple, and easy to setup store themes. </p>
              <div className='f-btt'>
                <button className='lernm'> Learn More </button>
              </div>
            </div>
          </div>
        </div>
        <div className='bg-color'>
          <div className='both'>
            <div className='inner'>
              <h2 className='nch'>  No charge until you succeed </h2>
            </div>
          </div>
        </div>
       </div>
    </div>
  );
}
