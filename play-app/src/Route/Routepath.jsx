import React from 'react'
import {Routes, Route} from "react-router-dom";
import {Home,Login,Signup,Cart,Products,Wishlist} from "../Pages"
import Mockman from "mockman-js";

const Routespath = () => {
  return (
    <div>
<Routes>
  <Route path='/' element={<Home />}  />
  <Route path='/products' element={<Products />}  />
  <Route path='/wishList' element={<Wishlist />}  />
  <Route path='/login' element={<Login />}  />
  <Route path='/signup'  element={<Signup />} />
  <Route path='/cart'  element={<Cart/>} />
  <Route path='/mockman' element={<Mockman />} />
  </Routes>
    </div>
  )
}

export default Routespath