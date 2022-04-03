import React from 'react';
import "./ProdCard.css"
import Assasins from "../../Assets/Assasins.jpg"
import {
  FiHeart,
  FiStar
} from "react-icons/fi";

const ProdCard = () => {
  return ( <div >
    <div className = "cards_withBadge" >
    < div className = "header" >
      < img className = "card-image_one" src = {  Assasins} alt = "Accesories-image" />
        <span className = "card-icon p-xs br-s" > < FiHeart /> </span> 
    </div>  
       <div className = "card-body flex flex-row " >
       <div > Assasins Creed </div>
         <div className='card-star flex ' > <div className='pl-s'>2</div ><div className='pr-s'><FiStar /> </div> </div> 
    </div>
    <div className=' flex'>
      <div className='f-m font-xl'>रु3000</div>
      <div className='card-originalPrice f-s font-xl ml-m pt-s'>रु6000</div>
    </div>
    <div class=" p-xs mt-s mb-s">
         <button className='card-btn  f-m font-l'> Add to cart</button>
     </div>
  </div>
   </div>
  )
}

export {
  ProdCard
}