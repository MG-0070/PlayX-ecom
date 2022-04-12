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
        <div class="cart-price ">
            <div class="cart-priceHeading f-m font-xl mt-l pb-s ml-s pt-s">PRICE DETAILS</div>
            <div class="cart-info flex pl-s pr-s mt-s mb-s font-l">
                <span>PRICE ({totalQuantity} items)</span>
                <span>रु{totalPrice}</span>
            </div>
            <div class="cart-info flex pl-s pr-s mt-s mb-s font-l">
                <span>DISCOUNT(10%)</span>
                <span>-रु{discount}</span>
            </div>
            <div class="cart-info flex pl-s pr-s mt-s mb-s font-l">
                <span>Delivery Charges</span>
                <span>रु500</span>
            </div>
            <div class="cartinfo-two flex mt-l mb-s p-s font-xxl">
                <span>TOTAL AMOUNT</span>
                <span>रु{totalAmount}</span>
            </div>
            <div class="p-s font-xxl">You will save रु{discount} on this order </div>
            <div class="flex flex-center mt-s mb-s">
                <button class="cart-orderBtn p-xs font-s f-s ">Place Order</button>
            </div>
        </div> 
 </div>
  )
}

export {Pricecart}