import React from 'react';
import "./ProdCard.css";
import {
  FiHeart,
  FiStar
} from "react-icons/fi";

const ProdCard = ({prod}) => {
   const{image,title,rating,newPrice,previousPrice,discount} = prod;
  return ( <div >
    <div className = "cards_withBadge" >
    < div className = "header" >
      < img className = "card-image_one" src = { image } alt = "product-image" />
        <span className = "card-icon p-xs br-s" > < FiHeart /> </span> 
    </div>  
       <div className = "card-body flex flex-row " >
       <div className='font-l' > {title}</div>
         <div className='card-star flex ' > <div className='pl-s'>{rating}</div ><div className='pr-s'><FiStar /> </div> </div> 
    </div>
    <div className=' flex'>
      <div className='f-m font-xl'>रु{newPrice}</div>
      <div className='card-originalPrice f-s font-xl ml-m pt-s'>रु{previousPrice}</div>
      <div className='f-s font-xl pt-s'>({discount}% off)</div>
    </div>
    <div className=" p-xs mt-s mb-s">
         <button className='card-btn  f-m font-l'> Add to cart</button>
     </div>
  </div>
   </div>
  )
}

export {
  ProdCard
}