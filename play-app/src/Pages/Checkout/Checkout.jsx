import React, { useState } from "react";
import AddressCard from "../../Components/AddressCard/AddressCard";
import { AddressForm } from "../../Components/AddressForm/AddressForm";
import { useAddress } from "../../Context/Address";
import "./Checkout.css";

const Checkout = () => {
  const { address } = useAddress();
  const [isAddress, setIsAddress] = useState(false);

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
            onClick={() => setIsAddress(prev => !prev)}
          >
            Add Address
          </button>
        </div>
        <div className="priceManagement mt-l"></div>
      </div>
      {isAddress && (<AddressForm setIsAddress={setIsAddress} />)}
    </div>
  );
};

export default Checkout;
