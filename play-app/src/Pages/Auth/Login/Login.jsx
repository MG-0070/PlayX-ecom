import React, { useState } from "react";
import "./Login.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";
import axios from "axios";
import { useAuth } from "../../../Context/AuthContext";

const Login = () => {
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [showpass,setShowPass] = useState(false);
  const [error,setError] = useState(null);
  const {setUser} = useAuth()
  const navigate = useNavigate();
  const location = useLocation();

    const loginHandler = async(e) => {
          e.preventDefault()
          try {
            const response = await axios.post("api/auth/login",{
              email,
           password
            })
            localStorage.setItem("token",response.data.encodedToken)
            setUser(response.data.foundUser)
            navigate(location.state?.from?.pathname ?? "/", { replace: true })
          } catch (error) {
            console.log(error.response)
            setError("something went worng 🥺")
          }  
    }
   
   const loginAsGuestHandler = () =>{
    setEmail("aniketSingh@gmail.com");
    setPassword("aniketSingh")
   }

  const disablefield = email !== "" && password !== "";

  return (
    <div className="flex flex-center mt-l">
      <form className="login-form  pt-l" onSubmit={loginHandler}>
        <div className="f-m font-xxl mb-s">Login</div>
        <div className=" mt-l ">
          <label className="login-email-label font-s">Email Address</label>
          <input
            type="text"
            className="f-s mt-s "
            name="email"
            id="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mt-l">
          <label className="login-email-label font-s">Password</label>
          <input
            type={showpass ? "text" : "password"}
            className="f-s  mt-s "
            name="password"
            id="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="mt-s">{error}</div>
        <div className="mt-l flex">
          <input
            type="checkbox"
            id="remember"
            name="remember"
            className="login-checkbox"
            checked={showpass}
            onChange={(e) => setShowPass(!showpass)}
          />
          <label className="font-xs f-s">Show Password</label>
          <h3 className="login-text pl-s font-xs">Forgot your password?</h3>
        </div>
        <div className="mt-l">
          <button className="login-btn f-s" type="submit" disabled={!disablefield}>Login</button>
        </div>
        <div className="mt-l">
          <button className="login-btn f-s" onClick={loginAsGuestHandler}>Login as Guest</button>
        </div>
        <div className="mt-l mb-l">
          <Link to="/signup" className="f-s">
            Create New Account
            <FaChevronRight className="pl-s pt-s" />
          </Link>
        </div>
      </form>
    </div>
  );
};

export { Login };
