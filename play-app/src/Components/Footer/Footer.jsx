import React from 'react'
import "./Footer.css";
import {FaTwitter,FaGithub} from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <div className='footer-div'>
    <div className="footer-categ mt-s flex ">
      <div className=' p-s'>
          <ul className='fotter-content'>
              <li className='f-m font-xl '>Browse</li>
              <li>Games</li>
              <li>Console</li>
              <li>Accessories</li>
              <li>Vr</li>
          </ul>
      </div>
      <div className=' p-s'>
          <ul className='fotter-content'>
              <li className='f-m font-xl '>Resources</li>
              <li>Support</li>
              <li>Feedback</li>
              <li>Contact</li>
              <li>Standard</li>
          </ul>
      </div>
      <div className=' p-s'>
          <ul className='fotter-content'>
              <li className='f-m font-xl '>Playx-store</li>
              <li>Products</li>
              <li>Account</li>
              <li>WishLisht</li>
              <li>Order</li>
          </ul>
      </div>
    </div>
     <div>
       <ul className='flex flex-row p-s flex-center'>
         <li className='mr-l'><a href="https://twitter.com/ANIKETS42266714" target="blank" className='f-l' style={{color: "var(--offwhite)"}}><FaTwitter /></a></li>
         <li className=''><a href="https://github.com/aniketsingh13" target="_blank" className='f-l' style={{color: "var(--offwhite)"}}><FaGithub /></a></li>
       </ul>
     </div>
    </div>
  </div>
  )
}

export  {Footer}