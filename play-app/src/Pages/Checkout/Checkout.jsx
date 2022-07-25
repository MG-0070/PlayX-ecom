import React, { useState } from "react";
import "./Checkout.css";
import AddressCard from "../../Components/AddressCard/AddressCard";
import { AddressForm } from "../../Components/AddressForm/AddressForm";
import { useAddress } from "../../Context/Address";
import { useCart } from "../../Context/CartCont";
import { priceItem } from "../../Utils/CartUtils/priceItem";
import { v4 as uuid } from "uuid";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext";
import { useOrder } from "../../Context/Order-Context";
import { useToast } from "../../Hooks/useToast";
import { useDocumentTitle } from "../../Hooks/useDocumentTitle";

const Checkout = () => {
  const { address } = useAddress();
  const [isAddress, setIsAddress] = useState(false);
  const { cartState, cartDispatch } = useCart();
  const { cart } = cartState;
  const totalPriceofItems = priceItem(cart);
  const totalDiscount = totalPriceofItems / 10;
  const amount = totalPriceofItems + 500 - totalDiscount;
  const { orderDispatch } = useOrder();
  const navigate = useNavigate();
  const { user } = useAuth();
  const {showToast} = useToast();
  useDocumentTitle("Checkout")

  const loadScript = (url) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = url;
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };
  const displayRazorPay = async (amount) => {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      alert("Failed to load RazorPay SDK 😢");
      return;
    }

    const options = {
      key: "rzp_test_BSk6yoiCabuxa3",
      currency: "INR",
      amount: amount * 100,
      name: "playX-Ecom",
      description: "Thanks for purchasing",
      image: "/logo192.png",

      handler: function ({ razorpay_payment_id }) {
        const newOrder = {
          paymentId: razorpay_payment_id,
          orderId: uuid(),
          totalAmount: amount,
          items: cart,
          address: address.find((address) => address.checked),
        };
        orderDispatch({ type: "SAVE_ORDER", payload: newOrder });
        if (razorpay_payment_id) {
          cartDispatch({ type: "CLEAR_CART" });
          navigate("/order");
          showToast("success","payment is succesfull")
        }
      },
      prefill: {
        name: `${user.firstName} ${user.lastName}`,
        email: `${user.email}`,
        contact: "4849494933",
      },
      theme: {
        color: "#49a0eb",
      },
    };
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  return (
    <div>
      <div className="mt-l f-l font-xl">Checkout</div>
      <div className="checkout_container flex ">
        <div className="addressMangement mt-l">
          {address?.map((address) => (
            <AddressCard key={address._id} address={address} />
          ))}
          <button
            className="address_button p-xs mt-s font-l"
            onClick={() => setIsAddress((prev) => !prev)}
          >
            Add Address
          </button>
        </div>
        <div className="priceManagement mt-l ">
          <h3 className="font-l f-m flex ">
            ORDER DETAILS ({cart.length}items)
          </h3>
          <h3 className="mt-s font-l  checkout_items p-xs">PURCHASED ITEMS</h3>
          <div className="mt-s ">
            <div className="checkout_Items flex mb-s">
              <h4 className="font-l">Item</h4>
              <h4 className="font-l">Price</h4>
            </div>
            <div className="mb-m">
              {cart?.map(({ _id, title, qty, newPrice }) => (
                <div key={_id}>
                  <div className="flex checktout_tilePrice">
                    <h4 className="font-l">{title}</h4>
                    <h4 className="font-l">₹{qty * newPrice}</h4>
                  </div>
                  <h4 className="font-l f-ss flex mt-s mb-s">
                    ₹({qty} x {newPrice} )
                  </h4>
                </div>
              ))}
            </div>
          </div>
          <h3 className="mt-s font-l  checkout_items p-xs">BILLING</h3>
          <div>
            <div className="flex checkout_priceItems mt-m">
              <h4 className="font-l">Total MRP:</h4>
              <h4 className="font-l">₹{totalPriceofItems}</h4>
            </div>
            <div className="flex checkout_priceItems mt-s">
              <h4 className="font-l">Discount:</h4>
              <h4 className="font-l">-{totalDiscount}</h4>
            </div>
            <div className="flex checkout_priceItems mt-s">
              <h4 className="font-l">Delivery Charges:</h4>
              <h4 className="font-l">₹500</h4>
            </div>
            <div className="flex checkout_priceItems mt-s">
              <h4 className="font-l f-m">Total :</h4>
              <h4 className="font-l">{amount}</h4>
            </div>
          </div>
          <h4 className="mt-s font-l  checkout_items p-xs">DEVILERING TO</h4>
          <div className="mt-s">
            {address.map(
              ({
                _id,
                name,
                city,
                addState,
                country,
                pincode,
                checked,
                phone,
              }) =>
                checked && (
                  <div key={_id}>
                    <h4 className="flex font-l p-xss">{name}</h4>
                    <h4 className="flex font-l p-xss">{`${city},${addState},${country} - ${pincode}`}</h4>
                    <h4 className="flex font-l p-xss">
                      Phone Number : {phone}
                    </h4>
                  </div>
                )
            )}
          </div>
          <button
            className="checkout_button mt-s p-xs"
            disabled={!cart.length}
            onClick={() => displayRazorPay(amount)}
          >
            Proceed to pay
          </button>
        </div>
      </div>
      {isAddress && <AddressForm setIsAddress={setIsAddress} />}
    </div>
  );
};

export default Checkout;
