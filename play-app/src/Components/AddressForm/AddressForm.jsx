import React from "react";
import "./AddressForm.css";
import { useReducer } from "react";
import { ImCross } from "react-icons/im";
import { AddressRed } from "../../Reducer/AddressRed";
import { useAddress } from "../../Context/Address";
import { v4 as uuid } from "uuid";
import { useToast } from "../../Hooks/useToast";


export const AddressForm = ({ setIsAddress }) => {
  const [state, dispatch] = useReducer(AddressRed, {
    name: "",
    city: "",
    addState: "",
    country: "",
    pincode: "",
    phone: "",
  });

  const { setAddress } = useAddress();
  const { name, city, addState, country, pincode, phone } = state;
  const {showToast} = useToast()

  const addressHandler = (e) => {
    e.preventDefault();
    const newAddress = {
      ...state,
      _id: uuid(),
      checked: false,
    };
    setAddress((prevAddress) => [...prevAddress, newAddress]);
    setIsAddress(false);
    showToast("success","Address added successfully")
  };

  return (
    <div className="addressForm_container" onClick={() => setIsAddress(false)}>
      <div className="addressForm_card" onClick={(e) => e.stopPropagation()}>
        <div>
          <div className="addressCard_header flex p-xs">
            <h3 className="addressCard_head font-l f-m">Address Form</h3>
            <div
              className="address_closeBtn mt-s mr-s"
              onClick={() => setIsAddress(false)}
            >
              <ImCross />
            </div>
          </div>
          <form className="mt-s" onSubmit={addressHandler}>
            <div>
              <label className="font-xl">Name : </label>
              <input
                type="text"
                className="addressForm_details"
                placeholder="Enter Name"
                value={name}
                onChange={(e) =>
                  dispatch({ type: "SET_NAME", payload: e.target.value })
                }
                required
              />
            </div>
            <div className="mt-m">
              <label className="font-xl">City : </label>
              <input
                type="text"
                className="addressForm_details"
                placeholder="Enter City"
                value={city}
                onChange={(e) =>
                  dispatch({ type: "SET_CITY", payload: e.target.value })
                }
                required
              />
            </div>
            <div className="mt-m">
              <label className="font-xl">State : </label>
              <input
                type="text"
                className="addressForm_details"
                placeholder="Enter State"
                value={addState}
                onChange={(e) =>
                  dispatch({ type: "SET_STATE", payload: e.target.value })
                }
                required
              />
            </div>
            <div className="mt-m">
              <label className="font-xl">Country : </label>
              <input
                type="text"
                className="addressForm_details"
                placeholder="Enter Country"
                value={country}
                onChange={(e) =>
                  dispatch({ type: "SET_COUNTRY", payload: e.target.value })
                }
                required
              />
            </div>
            <div className="mt-m">
              <label className="font-xl">Pincode : </label>
              <input
                type="text"
                className="addressForm_details"
                placeholder="Enter Pincode"
                value={pincode}
                onChange={(e) =>
                  dispatch({ type: "SET_Pincode", payload: e.target.value })
                }
                required
              />
            </div>
            <div className="mt-m">
              <label className="font-xl">Phone : </label>
              <input
                type="text"
                className="addressForm_details"
                placeholder="Enter phone Number"
                value={phone}
                onChange={(e) =>
                  dispatch({ type: "SET_PHONENUMBER", payload: e.target.value })
                }
                required
              />
            </div>
            <button className="mt-s addressForm_btn p-xs" type="submit">
              Add new address
            </button>
            <button
              className="mt-s addressForm_btn p-xs"
              type="submit"
              onClick={() => dispatch({ type: "SET_DUMMYADDRESS" })}
            >
              Add dummy address
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
