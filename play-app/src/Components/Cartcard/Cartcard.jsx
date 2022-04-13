import "./Cartcard.css"
import {GoPlus} from "react-icons/go";
import {BiMinus} from "react-icons/bi";
import { useCart } from "../../Context/CartCont";
import axios from "axios";
import { itemWishlist } from "../../Utils/CartUtils/itemWishlist";

const Cartcard = ({product}) => {
    const {_id,image,title,newPrice,previousPrice,discount,qty} = product;
    const {cartState,cartDispatch} = useCart();
    const itemInYourWishlist = itemWishlist(_id,cartState.wishList );

   const deleteFromCart= async(_id)=>{
     {
         try {
            const cartResponse = await axios.delete(`api/user/wishlist/${_id}`,{
                headers : {
                    authorization: process.env.REACT_APP_ENCODED_TOKEN
                   }
             })
            cartDispatch({type: 'remove-from-cart',payload: _id})
         } catch (error) {
             console.log(error.cartResponse)
         }
     }
   }

   const moveToWishlist=(product)=>{
    cartDispatch({type: 'remove-from-cart',payload: product._id})
    if(!itemInYourWishlist){
    cartDispatch({type: "add-to-wishlist", payload: product})
    }
   }
    
   const increaseHandler=(_id)=>{
    cartDispatch({type: "increase-quantity",payload: _id})
   }
   
   const decreaseHandler=(_id)=>{
       if(qty>1){
        cartDispatch({type: "decrease-quantity",payload: _id})
       }
    
   }


  return (
    <div>
         <div  className="horizotal-card flex flex-row m-s">
            <div  className="header-one">
                <img  className="card-image-one" src={image}  alt="" />
            </div>
            <div  className="body-horzCard  flex flex-colum ">
                <div  className="card-info">
                    <div  className="f-m font-s p-xs">{title}</div>
                    <div  className="f-m font-m p-xs">रु{newPrice}<span  className="card-disc pl-s f-s font-l">रु{previousPrice}</span>
                    </div>
                    <div  className="card-off p-xs f-m font-s">{discount}% OFF</div>
                </div>
                <div  className="cart-quatity mt-xs mb-s ">
                    <span  className="font-l">Quantity : </span>
                    <button  className="cart-btn br-s pr-s font-l" onClick={() => increaseHandler(_id)}><GoPlus />{' '} </button>
                    <span   className="cart-input" >{qty}</span>
                    <button  className="cart-btn br-s pl-s font-l" onClick={() => decreaseHandler(_id)}><BiMinus /> </button>
                </div>
                <div  className="card-click">
                    <button  className="card-cart-btn p-xs f-s font-s" onClick={() => deleteFromCart(_id)}>Remove from Cart</button>
                    <button  className="card-whislist-btn p-xs f-s font-s mt-s" onClick={() => moveToWishlist(product)}>Move to whislist </button>
                </div>
            </div>
        </div>
        
        </div> 
    
  )
}

export {Cartcard}