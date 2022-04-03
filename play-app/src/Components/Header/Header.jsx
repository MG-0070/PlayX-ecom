import React from 'react'
import "./Header.css";
import dyinglight from "../../Assets/dyinglight2.jpg";
import {FaAngleRight} from "react-icons/fa";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
         <div className="scroll-images">
            <img className="image-slide" src={dyinglight} alt="dyinglight" />
            <div className='scroll-btn'>
           <Link to='/products' className="scrll-btn-link f-l flex"><span className='header-link-name f-m'>Get it now</span> <FaAngleRight /></Link>
            </div>
       </div>
    </div>
  )
}

export {Header}