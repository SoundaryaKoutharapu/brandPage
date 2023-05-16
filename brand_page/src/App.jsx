//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
// import './App.css'

const App = () => {
  return (
    <div>
     <nav>
          <div className="logo">
           <img src="./images/brand_logo.png" alt="logo"/>
          </div>

          <ul>
            <li href = '#' >MENU</li>
            <li href='#'>LOCATION</li>
            <li href='#'>ABOUT</li>
            <li href='#'>CONTACT</li>
          </ul>

          <div>
            <button className="button">LOGIN</button>
          </div>
     </nav>
   </div>
  ); 
};

export default App