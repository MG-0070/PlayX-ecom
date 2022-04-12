import "./Cartcard.css"
import {GoPlus} from "react-icons/go";
import {BiMinus} from "react-icons/bi";
import { useCart } from "../../Context/CartCont";

const Cartcard = ({product}) => {
    const {_id,image,title,newPrice,previousPrice,discount} = product;
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
                    <button  className="cart-btn br-s pr-s font-l"><GoPlus />{' '} </button>
                    <input type="text"  className="cart-input" value="1" />
                    <button  className="cart-btn br-s pl-s font-l"><BiMinus /> </button>
                </div>
                <div  className="card-click">
                    <button  className="card-cart-btn p-xs f-s font-s">Remove from Cart</button>
                    <button  className="card-whislist-btn p-xs f-s font-s mt-s">Move to whislist </button>
                </div>
            </div>
        </div>
        
        </div> 
    
  )
}

export {Cartcard}