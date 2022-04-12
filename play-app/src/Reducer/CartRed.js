
export const CartRed = (state,action) => {
  switch(action.type){
    case "add-to-cart":
      return {
        ...state,cart:[...state.cart,{...action.payload}]

      }
  }
}
