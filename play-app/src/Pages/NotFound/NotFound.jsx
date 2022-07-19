import React from "react";
import "./NotFound.css";

const NotFound = () => {
  return (
    <div className="flex flex-center flex-column p-xss ">
      <h2 className="page404_text f-l font-xl">Page Not Found</h2>
      <img
        src="https://res.cloudinary.com/aniket-singh/image/upload/v1650770954/Images/undraw_page_not_found_re_e9o6_ryedk6.svg"
        alt="404 page"
      />
    </div>
  );
};

export default NotFound;
