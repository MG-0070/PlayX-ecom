import React from 'react'
import "./Cart.css"
import { Cartcard, Pricecart } from '../../Components'
import { useCart } from '../../Context/CartCont'
import { Link } from 'react-router-dom'

const Cart = () => {
  const { cartState} = useCart();
  const {cart} = cartState;


  return (
    <div>
      <div className="cart-heading mb-l mt-l f-l font-xl">My Cart ({cart.length})</div>
     {cart.length>0 ? (
       <div className='cart flex  mt-s'>
       <div className='mb-s'> 
       {cart.map(item => (
         <Cartcard key={item._id} product={item} />
       ))}
       </div>
       <div >
            <Pricecart />
          </div>
       </div> 
     ):(<div className='ProductLink-cart  flex  f-l font-l '>
       Your Cart is empty..  <Link to='/products' className='ProductLink'>Continue Shoping
         </Link>     🙂
     </div>)}
      </div>
  )
}


export {Cart}