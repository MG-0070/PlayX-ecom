import React from 'react'
import {Routes, Route} from "react-router-dom";
import {Home,Login,Signup,Cart,Products,Wishlist, NotFound, Checkout} from "../Pages"
import Mockman from "mockman-js";
import RequireAuth from '../Utils/RequireAuth';


const Routespath = () => {
  return (
    <div>
<Routes>
  <Route path='/' element={<Home />}  />
  <Route path='/products' element={<Products />}  />
  <Route path='/wishList' element={<RequireAuth><Wishlist /></RequireAuth>}  />
  <Route path='/login' element={<Login />}  />
  <Route path='/signup'  element={<Signup />} />
  <Route path='/cart'  element={<RequireAuth><Cart/></RequireAuth>} />
  <Route path='/checkout' element={<RequireAuth><Checkout /></RequireAuth>} />
  <Route path='*' element={<NotFound />} />
  <Route path='/mockman' element={<Mockman />} />
  </Routes>
    </div>
  )
}

export default Routespath