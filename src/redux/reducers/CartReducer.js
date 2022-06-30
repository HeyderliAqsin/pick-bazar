import { ADD_TO_CART, REMOVE_TO_CART } from "../constants/CartConstants";

export const cartreducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const item=action.payload;
      const existItem=state.cartItems.find(c=>c.id===item.id)
      console.log(existItem)
      if(existItem){
        return{
          ...state,
          cartItems: state.cartItems.map(x=> x.id===existItem.id ? item : x)
        }
      }
      else{
        return{
          ...state,
          cartItems: [...state.cartItems, item]
        }
      }
      case REMOVE_TO_CART:
        return{
          ...state,
          cartItems: state.cartItems.filter((x)=>x.product !== item)
        };
    default:
      return state;
  }
};
