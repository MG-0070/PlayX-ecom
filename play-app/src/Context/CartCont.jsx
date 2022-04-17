import { createContext,useContext,useReducer } from "react";
import { CartRed } from "../Reducer/CartRed";

const CartContext = createContext();

const CartProvider = ({children}) =>{
    const [cartState,cartDispatch] = useReducer(CartRed,{
        cart : [],
        wishList : []
    })
   
    return(
        <CartContext.Provider value={{cartState,cartDispatch}}>
            {children}
            </CartContext.Provider>
    )
}
const useCart =() => useContext(CartContext);

export {CartProvider,useCart}