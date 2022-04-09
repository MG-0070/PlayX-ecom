import "./Pricecart.css";

const Pricecart = () => {
  return (
    <div>
        <div class="cart-price ">
            <div class="cart-priceHeading f-m font-xl mt-l pb-s ml-s">PRICE DETAILS</div>
            <div class="cart-info flex pl-s pr-s mt-s mb-s font-l">
                <span>PRICE (2 items)</span>
                <span>रु6000</span>
            </div>
            <div class="cart-info flex pl-s pr-s mt-s mb-s font-l">
                <span>DISCOUNT</span>
                <span>-रु3000</span>
            </div>
            <div class="cart-info flex pl-s pr-s mt-s mb-s font-l">
                <span>Delivery Charges</span>
                <span>रु500</span>
            </div>
            <div class="cartinfo-two flex mt-l mb-s p-s font-xxl">
                <span>TOTAL AMOUNT</span>
                <span>रु3500</span>
            </div>
            <div class="p-s font-xxl">You will save रु3000 on this order </div>
            <div class="flex flex-center mt-s mb-s">
                <button class="cart-orderBtn p-xs font-s f-s ">Place Order</button>
            </div>
        </div> 
 </div>
  )
}

export {Pricecart}