import React from 'react'
import "./Cart.css"
import { Cartcard, Pricecart } from '../../Components'

const Cart = () => {
  return (
    <div>
      <div class="cart-heading mb-l mt-l f-l font-xl">My Cart</div>
      <div class="cart flex  flex-center mt-l">  
      <Cartcard />
      <Pricecart />
     </div>
      </div>
  )
}


export {Cart}