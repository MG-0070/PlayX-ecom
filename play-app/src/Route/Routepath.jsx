import React from 'react'
import {Routes, Route} from "react-router-dom";
import {Home,Login,Signup,Cart,Products,Wishlist} from "../Pages"

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
  </Routes>
    </div>
  )
}

export default Routespath