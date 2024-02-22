import './App.css';
import React from 'react';
import logo from './icon.gif'
import { First, Second } from './App'; // Import named exports
import MySVGIcon from './grid.svg';
import { FiGrid } from 'react-icons/fi'

export default function App() {
  return (
    <div className='app'>
      <div className='th'>
        <div className='user'>
          <img src={logo} alt="Logo" />
        </div>
        <div className='for-every'>
          <input placeholder='User-name' />
          <input type='password' placeholder='Passcode' />
        </div>
        <div className='but'>
          <button> Login </button>
          <div className='nm'>
            <ul> Forget-pass</ul>
            <ul> Remember-me</ul>
          </div>
        </div>
      </div>
      <div className='oth'>
        <div className='logs'>
          <div className='bt'>
            <button> Sign-Up </button>
            <button> About </button>
            <button> Parcing </button>
            <button> Login </button>
          </div>
          <div className='icon'>
            <FiGrid />
          </div>
        </div>
        <div className='text'>
          <div className='wlcm'>
            <ul> Welcome</ul>
          </div>
        </div>
      </div>
    </div>
  );
}


