import React from "react";
import { useOrder } from "../../Context/Order-Context";
import { useNavigate } from "react-router-dom";
import "./Orders.css";
import { useDocumentTitle } from "../../Hooks/useDocumentTitle";

const Orders = () => {
  const { orderState } = useOrder();
  const navigate = useNavigate();
  const { order } = orderState;
  const { orderId, paymentId, totalAmount, address, items } = order;
  const { name, city, addState, country, pincode, phone } = address ?? {};
  useDocumentTitle("Order")

  return (
    <div>
      <h2 className="mt-l font-l f-m mb-l">Congratulations 🎉</h2>
      <div className="orderSuccessContainer flex ">
        <div>
          <h3 className="font-xl f-m p-s" style={{ color: "green" }}>
            Order placed successfully
          </h3>
          <h3 className="font-l f-s mb-m">Payment Id: {paymentId}</h3>
          <h3 className="font-l f-s mb-m">Order ID: {orderId}</h3>
          <h3 className="font-l f-s mb-m">Amount paid: ₹{totalAmount}</h3>
          <h3 className="font-l f-s ">Delivering to:</h3>
          <div className="p-xs">
            <h3 className="font-l f-s mb-s">{name}</h3>
            <p className="font-l f-s mb-s">{`${city},${addState}, ${country} - ${pincode}`}</p>
            <p className="font-l f-s mb-s">Phone Number : {phone}</p>
          </div>
        </div>
        <div className="p-s">
          {items?.map(({ _id, title, image, newPrice, qty }) => (
            <div className="itemContainer  p-xs flex" key={_id}>
              <img src={image} alt={title} className="item_image" />
              <div className="ml-s">
                <h3 className="font-l f-s mb-s">{title}</h3>
                <h3 className="font-l f-s mb-s">Price : ₹{newPrice}</h3>
                <h3 className="font-l f-s mb-s">Quantity : {qty}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
      <button
        className=" mt-m p-s order_btn"
        onClick={() => navigate("/products")}
      >
        {" "}
        Shop more 🤗
      </button>
    </div>
  );
};

export default Orders;
