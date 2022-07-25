import React from "react";
import { useAddress } from "../../Context/Address";
import "./AddressCard.css";

const AddressCard = ({ address }) => {
  const { _id, name, city, addState, country, pincode, phone, checked } =
    address;
  const { setAddress } = useAddress();

  const addressHandler = (e) => {
    setAddress((prevAddress) =>
      prevAddress.map((address) =>
        address._id === _id
          ? { ...address, checked: e.target.checked }
          : { ...address, checked: false }
      )
    );
  };

  return (
    <div>
      <div className="flex addressCard mb-s">
        <div className="p-xs">
          <input
            type="radio"
            name="address"
            id="address"
            checked={checked}
            onChange={(e) => addressHandler(e)}
          />
        </div>
        <div className="p-xs">
          <h4>{name}</h4>
          <p>{` ${city},${addState},${country} - ${pincode}`}</p>
          <p>phone Number : {phone} </p>
        </div>
      </div>
    </div>
  );
};

export default AddressCard;
