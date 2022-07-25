import React, { useReducer, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import SignupReducer from "../../../Reducer/SignupReducer";
import "./Signup.css";
import axios from "axios";
import { useAuth } from "../../../Context/AuthContext";
import { useToast } from "../../../Hooks/useToast";

const Signup = () => {
  const [state, dispatch] = useReducer(SignupReducer, {
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    confirmPassword: "",
  });
  const { email, password, firstName, lastName, confirmPassword } = state;
  const [error, setError] = useState(null);
  const [showPass, setShowPass] = useState(false);
  const { setUser } = useAuth();
  const navigate = useNavigate();
  const { showToast } = useToast();

  const signupHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/auth/signup", {
        email,
        firstName,
        lastName,
        password,
      });
      localStorage.setItem("token", response.data.encodedToken);
      setUser(response.data.createdUser);
      navigate("/", { replace: true });
      showToast("success", "Account Created and Logged In!");
    } catch (error) {
      showToast("error", error.response.data.errors[0]);
      setError("somethig went wrong 🥺");
    }
  };

  return (
    <div className="flex flex-center mt-l">
      <form className="Signup-form  pt-l mb-s" onSubmit={signupHandler}>
        <div className="f-m font-xxl mb-s">Signup</div>
        <div className=" mt-l ">
          <label className="Signup-email-label font-s">First Name</label>
          <input
            type="text"
            className="f-s mt-s "
            name="firstName"
            id="firstName"
            placeholder="Enter your firstName"
            value={firstName}
            onChange={(e) =>
              dispatch({ type: "FIRST_NAME", payload: e.target.value })
            }
            required
          />
        </div>
        <div className=" mt-l ">
          <label className="Signup-email-label font-s">Last Name</label>
          <input
            type="text"
            className="f-s mt-s "
            name="lastName"
            id="lastName"
            placeholder="Enter your LastName"
            value={lastName}
            onChange={(e) =>
              dispatch({ type: "LAST_NAME", payload: e.target.value })
            }
            required
          />
        </div>
        <div className=" mt-l ">
          <label className="Signup-email-label font-s">Email Address</label>
          <input
            type="text"
            className="f-s mt-s "
            name="email"
            id="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) =>
              dispatch({ type: "EMAIL", payload: e.target.value })
            }
            required
          />
        </div>
        <div className="mt-l">
          <label className="Signup-email-label font-s">Password</label>
          <input
            type={showPass ? "text" : "password"}
            className="f-s  mt-s "
            name="password"
            id="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) =>
              dispatch({ type: "PASSWORD", payload: e.target.value })
            }
            required
          />
        </div>
        <div className="mt-l">
          <label className="Signup-email-label font-s">Confirm Password</label>
          <input
            type={showPass ? "text" : "password"}
            className="f-s  mt-s "
            name="confirpass"
            id="confirmpass"
            placeholder="Enter your password again"
            value={confirmPassword}
            onChange={(e) =>
              dispatch({ type: "CONFPASS", payload: e.target.value })
            }
            required
          />
        </div>
        <div className="mt-s">
          {confirmPassword.length > 0 && password !== confirmPassword && (
            <span>password not matching </span>
          )}
        </div>
        <div className="mt-s">{error}</div>
        <div className="mt-s flex">
          <input
            type="checkbox"
            id="Show"
            name="Show"
            className="Signup-checkbox"
            value={showPass}
            onChange={(e) => setShowPass(!showPass)}
          />
          <label className="Signup-text font-l f-s pl-s">Show Password</label>
        </div>
        <div className="mt-s flex">
          <input
            type="checkbox"
            id="remember"
            name="remember"
            className="Signup-checkbox"
          />
          <label className="Signup-text font-l f-s pl-s">
            I accept all term & conditions
          </label>
        </div>
        <div className="mt-l">
          <button className="Signup-btn f-s" type="submit">
            Create New Account
          </button>
        </div>
        <div className="mt-s mb-l">
          <Link to="/login" className="f-s font-l">
            Already have an account
          </Link>
        </div>
      </form>
    </div>
  );
};

export { Signup };
