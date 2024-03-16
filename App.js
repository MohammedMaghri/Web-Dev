import logo from './logo.svg';
import './App.css';
import { AiOutlineSearch } from "react-icons/ai";
import image from "./pic.png"

function App() {
  return (
  <div className='all'>
    <nav className='nav-bar'>
      <div className='name'>
        <p>Flow With it</p>
      </div>
      <div className='search'>
        <input className='lil' placeholder="Whats On ur mind" />
        <div className='sear'>
          <AiOutlineSearch />
        </div>
      </div>
    </nav>
    <div className='news'>
      <div className='card'>
        <div className='cardpic'>
          <img src={image} />
        </div>
        <div className='text'>
          <p></p>
        </div>
      </div>
    </div>
  </div>
  );
}

export default App;
