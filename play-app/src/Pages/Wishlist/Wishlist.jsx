import React from 'react'
import { ProdCard } from '../../Components/ProdCard/ProdCard';
import { useCart } from '../../Context/CartCont'
import "./Wishlist.css";


const Wishlist = () => {
   const {cartState} = useCart();
   const {wishList } = cartState;
  return (
    <div>
     <h2 className='mt-l f-l font-xl'>My WishList({wishList.length})</h2>
     <div className="whislist-product flex flex-center mb-l  mt-l">
     {wishList.length > 0 ? (<>{ wishList.map(item => (
         <ProdCard key={item._id} product={item} />
       )) }</>) : (<div className='f-l font-l mt-xl'>
         Your wishlist is  empty!! 😔
       </div>

       )}
     
     </div>
    </div>
  )
}

export  {Wishlist}