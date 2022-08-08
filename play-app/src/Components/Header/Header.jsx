import React from "react";
import "./Header.css";
import { FaAngleRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useProudctFilter } from "../../Context/FilterCont";

const Header = () => {
 
  const {filterdispatch} = useProudctFilter();

  return (
    <div>
      <div className="scroll-images">
        <img
          className="image-slide"
          src="https://res.cloudinary.com/aniket-singh/image/upload/v1649403258/Images/dying-light-2_eps1hm.jpg"
          alt="dyinglight"
        />
        <div className="scroll-btn">
          <Link to="/products" className="scrll-btn-link f-l flex">
            <span className="header-link-name f-m" onClick={() => filterdispatch({type: "clearAll"})}>Get it now</span>{" "}
            <FaAngleRight />
          </Link>
        </div>
      </div>
    </div>
  );
};

export { Header };
