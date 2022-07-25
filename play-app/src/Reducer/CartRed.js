
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
          case "remove-from-cart":
            return{
              ...state,cart:state.cart.filter((item) => item._id !== action.payload)
            }
            case "increase-quantity":
              return{
                ...state,cart:state.cart.map((product) => product._id === action.payload ?
                {...product, qty: product.qty + 1 }: product)
              }
              case "decrease-quantity":
              return{
                ...state,cart:state.cart.map((product) => product._id === action.payload ?
                {...product, qty: product.qty - 1 }: product)
              };
              case "CLEAR_CART":
                return {...state,cart: []}
              default:
                return state;
  }
}
