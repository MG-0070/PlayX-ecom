import React from 'react'
import { Link } from 'react-router-dom';
import "./Signup.css";
import {FaChevronRight} from "react-icons/fa";

const Signup = () => {
  return (
    <div className='flex flex-center mt-l'>
       <form className="login-form  pt-l">
            <div className="f-m font-xxl mb-s">Signup</div>
            <div className=" mt-l ">
                <label  className="login-email-label font-s">Email Address</label>
                <input type="text" className="f-s mt-s " name="email" id="email" placeholder="Enter your email" />
            </div>
            <div className="mt-l">
                <label  className="login-email-label font-s">Password</label>
                <input type="text" className="f-s  mt-s " name="email" id="email" placeholder="Enter your password" />
            </div>
            <div className="mt-l flex">
                <input type="checkbox" id="remember" name="remember" className="login-checkbox" />
                <label for="remember" className="font-xs f-s">I accept all term & conditions</label>
            </div>
            <div className="mt-l">
                <button className="login-btn f-s">Create New Account</button>
            </div>
            <div className="mt-l mb-l">
                <Link to='/login' className='f-m'>Already have an account<FaChevronRight className='pl-s pt-s f-m'/></Link>
            </div>
        </form>
    </div>
  )
}

export { Signup}