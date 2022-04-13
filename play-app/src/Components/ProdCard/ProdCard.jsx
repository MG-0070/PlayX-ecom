
import "./ProdCard.css";
import {
  FiHeart,
  FiStar
} from "react-icons/fi";
import {AiFillHeart} from "react-icons/ai";
import { Link } from 'react-router-dom';
import { useCart } from '../../Context/CartCont';
import { IteminList } from '../../Utils/CartUtils/IteminList';
import axios from 'axios';
import { itemWishlist } from "../../Utils/CartUtils/itemWishlist";


const ProdCard = ({product}) => {
const {cartState,cartDispatch} = useCart();
const{_id,image,title,rating,newPrice,previousPrice,discount,} = product;
const IsIteminyourList = IteminList(_id,cartState.cart);
const itemInYourWishlist = itemWishlist(_id,cartState.wishList );

const addtoCartHandler =async (product) =>{
  {
  try{
       const response= await axios.post("api/user/cart",{product}, 
       {
        headers: { authorization: process.env.REACT_APP_ENCODED_TOKEN}
      });
      cartDispatch({type: "add-to-cart", payload : product}) 
   }

   catch(error){
     console.log(error.response);
   }}
  }

  const addToWishlist=async(product)=>{
    {
      try{
       const result = await axios.post("/api/user/wishlist",{product},{
         headers : {
          authorization: process.env.REACT_APP_ENCODED_TOKEN
         }
       })
       cartDispatch({type: "add-to-wishlist", payload: product})
      }
      catch(e){
       console.log(e.result)
      }
    }
    
  }
  
  const removeFromWishlist = async(_id) =>{
   {
     try {
       const removeResponse = await axios.delete(`api/user/wishlist/${_id}`,{
        headers : {
          authorization: process.env.REACT_APP_ENCODED_TOKEN
         }
       })
       cartDispatch({type : "delete-from-wishlist" , payload: _id})
     } catch (error) {
       console.log(error.removeResponse,'error here')
     }
   }
  }
  


  return ( <div >
    <div className = "cards_withBadge" >
    < div className = "header" >
      < img className = "card-image_one" src = { image } alt = "product-image" />
      {itemInYourWishlist ? (<span className = "card-icon p-xs br-s"  onClick={() => removeFromWishlist(_id)} > < AiFillHeart /></span>):(<span className = "card-icon p-xs br-s" onClick={() => addToWishlist(product)} > <FiHeart />  </span>)}
         
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
      {IsIteminyourList ? (<Link to='/cart'><button className='card-btn  f-m font-l'> Go to cart</button></Link>) : (
      <button className='card-btn  f-m font-l' onClick={() =>addtoCartHandler(product)}> Add to cart</button> )}
     </div>
  </div>
   </div>
  )
}

export {
  ProdCard
}