// import { FaTrashRestoreAlt } from "react-icons/fa";
import { useCart } from "../../Context/CartCont";
import { priceItem } from "../../Utils/CartUtils/priceItem";
import { totalItem } from "../../Utils/CartUtils/totalItem";
import "./Pricecart.css";

const Pricecart = () => {
    const {cartState} = useCart();
    const {cart} = cartState;
  const  totalQuantity=totalItem(cart);
  const totalPrice = priceItem(cart);
  const discount =totalPrice / 10;
  const totalAmount = totalPrice + 500 - discount;
  return (
    <div>
        <div className="cart-price ">
            <div className="cart-priceHeading f-m font-xl mt-l pb-s ml-s pt-s">PRICE DETAILS</div>
            <div className="cart-info flex pl-s pr-s mt-s mb-s font-l">
                <span>PRICE ({totalQuantity} items)</span>
                <span>रु{totalPrice}</span>
            </div>
            <div className="cart-info flex pl-s pr-s mt-s mb-s font-l">
                <span>DISCOUNT(10%)</span>
                <span>-रु{discount}</span>
            </div>
            <div className="cart-info flex pl-s pr-s mt-s mb-s font-l">
                <span>Delivery Charges</span>
                <span>रु500</span>
            </div>
            <div className="cartinfo-two flex mt-l mb-s p-s font-xxl">
                <span>TOTAL AMOUNT</span>
                <span>रु{totalAmount}</span>
            </div>
            <div className="p-s font-xxl">You will save रु{discount} on this order </div>
            <div className="flex flex-center mt-s mb-s">
                <button className="cart-orderBtn p-xs font-s f-s ">Place Order</button>
            </div>
        </div> 
 </div>
  )
}

export {Pricecart}