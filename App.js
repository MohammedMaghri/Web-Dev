import logo from './logo.svg';
import React, { useRef } from 'react';
import './App.css';
import { DiYeoman } from "react-icons/di";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { SlArrowDown } from "react-icons/sl";
import { click } from '@testing-library/user-event/dist/click';
import { useEffect } from 'react';

export default function App() {
  let this_array = [
    "https://static-portal.youcan.shop/images/new_portal_design/home/shop-global-1.webp",
    "https://static-portal.youcan.shop/images/new_portal_design/home/shop-global-2.webp"
  ];

  useEffect( ()=>
  {
    document.title = 'Tr-Store';
  });

  function chCotent() {
    let flag = 0;
    while (true) {
      flag += 1;
      if (flag = 5000)
        console.log(this_array[1]);
      flag = 0;
    }
  };

  function forHpdrag(args){
    let for_drag = document.getElementById(args);
  
    if (for_drag.style.display == 'none') {
      for_drag.style.display = 'block'
    }
    else {
      for_drag.style.display = 'none6'
    }
  }

  function ropText() {
    let hide_var = document.getElementById('hide');

    if (hide_var.style.display == 'none') {
      hide_var.style.display = 'block'
    }
    else {
      hide_var.style.display = 'none'
    }
  }

  setInterval(function () {
    let this_text = document.getElementById('this');
    this_text.style.opacity = 0.5;
    this_text.src = this_array[1];
    this_text.style.opacity = 1;
    this_text.src = this_array[0];
  }, 1000);

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
          <div className='this-drop'>
            <ul id='cli' onClick={ropText}> English  <MdOutlineArrowDropDown /> </ul>
            <div id='hide' className='drop-by'>
              <div className='inside'>
                <li> French </li>
                <li> العربية </li>
              </div>
            </div>
          </div>
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
                <img src='https://static-portal.youcan.shop/images/home_page_images_v2/marks.svg' />
                <p className='text_in_mark' > Easy and intuitive store setup </p>
              </div>
              <div className='Mark'>
                <img src='https://static-portal.youcan.shop/images/home_page_images_v2/marks.svg' />
                <p className='text_in_mark' >No charge until you succeed</p>
              </div>
              <div className='Mark'>
                <img src='https://static-portal.youcan.shop/images/home_page_images_v2/marks.svg' />
                <p className='text_in_mark' >All the e-commerce tools you need in one place </p>
              </div>
              <div className='for_bott'>
                <button className='Stor'> Build You're Store</button>
              </div>
            </section>
          </div>
          <div className='other-pag'>
            <div className='for-img'>
              <img className='image-js' id='this' src="https://static-portal.youcan.shop/images/new_portal_design/home/shop-global-1.webp" />
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
            <img className='inner-image' src='https://static-portal.youcan.shop/images/new_portal_design/home/setup-store-animation.gif' />
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
          <div className='both-nch'>
            <div className='inner'>
              <h2 className='nch'>  No charge until you succeed </h2>
              <p className='nch-txt'> Enjoy all Tr1plexx features and services without any limitations and without having to pay until you reach $10,000 in sales. </p>
              <div className='btnch'>
                <button> Learn More </button>
              </div>
            </div>
          </div>
          <div className='for-elempic'>
            <div className='both-elem'>
              <span class="icon">🎉</span>
              <p className='hit'>
                you just hit
                <span className='hotsp'> 10K in sales</span>
              </p>
              <div className='sperat'></div>
              <div className='sppic'>
                <img src='https://static-portal.youcan.shop/images/home_page_images_v2/charts.png' />
              </div>
            </div>
            <div className='elempic'>
              <img src='https://static-portal.youcan.shop/images/new_portal_design/home/navigate-illustration-3.webp' />
            </div>
          </div>
        </div>
        <div className='under-elem'>
          <div className='under-img'>
            <img src='https://static-portal.youcan.shop/images/home_page_images_v2/store-setup.png' />
          </div>
          <div className='near-by'>
            <h2 className='intex'> All the e-commerce tools you need in one place. </h2>
            <div className='inp'>
              <p className='for-p'> Get all the design, fulfillment, payment, and analytics tools you need to manage your business seamlessly </p>
            </div>
            <div className='fbott'>
              <button className='bottin'> Learn More  </button>
            </div>
          </div>
        </div>
        <div className='q-toask'>
          <div className='txt-t'>
            <h2 className='txt'> Frequently asked questions </h2>
          </div>

          <div className='bars-of'>
            <div className='show'>
              <p className='ptext'>  How can I change my store name and email?</p>
              <div className='drop'>
              <SlArrowDown onClick={() => forHpdrag('hb_drag')} className='ic' />

              </div>
            </div>
            <div className='dropout'>
              <p id='hb_drag' >To change your store name, you can do it manually from your store settings, for your store slug and your store/seller email, please send an email to support@youcan.shop.</p>
            </div>
          </div>

          <div className='bars-of'>
            <div className='show'>
              <p className='ptext'>  Why should I buy credit to activate my store?</p>
              <div className='drop'>
                <SlArrowDown onClick={() => forHpdrag('hb_dr')} className='ic' />
              </div>
            </div>
            <div className='dropout'>
              <p id='hb_dr' >To avoid fake accounts and robots. The amount bought will be a deposit in your balance that you can always use later.</p>
            </div>
          </div>

          <div className='bars-of'>
            <div className='show'>
              <p className='ptext'>  Why should I buy credit to activate my store? </p>
              <div className='drop'>
                <SlArrowDown onClick={() => forHpdrag('hb_dra')} className='ic' />
              </div>
            </div>
            <div className='dropout'>
              <p id='hb_dra' >To change your store name, you can do it manually from your store settings, for your store slug and your store/seller email, please send an email to support@youcan.shop.</p>
            </div>
          </div>

          <div className='bars-of'>
            <div className='show'>
              <p className='ptext'>  Does YouCan take care of storage and shipping of my products?</p>
              <div className='drop'>
                <SlArrowDown onClick={() => forHpdrag('hb_d')} className='ic' />
              </div>
            </div>
            <div className='dropout'>
              <p id='hb_d' >We do not currently support storage and shipping, but we have an aggregator service (YouCan Ship) that provides you with a list of local shipping companies and you can choose from it.</p>
            </div>
          </div>

        </div>
      </div>
      <div className='last-elem'>
        <div className='all-e'>
          <div className='all-det'>
            <div className='lists'>
              <h2> Tr1ple.x.x.x </h2>
              <ul> About-Us </ul>
              <ul> Features </ul>
              <ul> Pricing </ul>
              <ul> Careers </ul>
            </div>
          </div>
          <div className='all-det'>
            <div className='lists'>
              <h2>Resources</h2>
              <ul> Contact us </ul>
              <ul> Help Center </ul>
              <ul> Developers </ul>
              <ul> Blog </ul>
              <ul> FAQs </ul>
              <ul> Press </ul>
              <ul> Learn E-commerce </ul>
            </div>
          </div>
          <div className='all-det'>
            <div className='lists'>
              <h2>Community</h2>
              <ul> Partners portal </ul>
              <ul> Affiliate and Referral </ul>
              <ul> YouCan Ambassadors </ul>
              <ul> Awards </ul>
              <ul> Become an expert </ul>
            </div>
          </div>
          <div className='all-det'>
            <div className='lists'>
              <h2>Conditions</h2>
              <ul> Terms of use </ul>
              <ul> Privacy policy </ul>
              <ul> Cookies </ul>
            </div>
          </div>
        </div>
        <div className='between'></div>
      </div>
    </div>
  );
}