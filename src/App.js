import logo from './logo.svg';
import './App.css';
import { DiYeoman } from "react-icons/di";
import { MdOutlineArrowDropDown } from "react-icons/md";


export default function App() {
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
          <button className='bs'> Sign-Up </button>
          <button className='bl' > Login </button>
          <ul> English <MdOutlineArrowDropDown /> </ul>
        </div>
      </nav>
      <div className='container'>
          <section className='first-sec'>
            <h1 className='txt'>Selling online has never been easier</h1>
          </section>
      </div>
    </div>
  );
}
