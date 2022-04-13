
export const CartRed = (state,action) => {
  switch(action.type){
    case "add-to-cart":
      return {
        ...state,cart:[...state.cart,{...action.payload}]
      }
      case "add-to-wishlist":
        return{
          ...state,wishList:[...state.wishList,{...action.payload}]
        }
        case "delete-from-wishlist":
          return{
            ...state,wishList:state.wishList.filter((item) => item._id !== action.payload)
          }
  }
}
