import { ADD_TO_CART } from "../constants/AddtoCart";
import { DELETE_TO_CART, REMOVE_ONE } from "../constants/DeleteToCart";

const INIT_STATE = {
  carts: [],
};

export const cartreducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const IteamIndex_increase = state.carts.findIndex(
        (iteam) => iteam.id === action.payload.id
      );

      if (IteamIndex_increase >= 0) {
        state.carts[IteamIndex_increase].quantity += 1;
      } else {
        const temp = { ...action.payload, quantity: 1 };
        return {
          ...state,
          carts: [...state.carts, temp],
        };
      }
    case DELETE_TO_CART:
      const data = state.carts.filter((el) => el.id !== action.payload);
      return {
        ...state,
        carts: data,
      };
    case REMOVE_ONE:
      const IteamIndex_decrease = state.carts.findIndex(
        (iteam) => iteam.id === action.payload.id
      );
      if (state.carts[IteamIndex_decrease].quantity >= 1) {
        const removeitem = (state.carts[IteamIndex_decrease].quantity -= 1);
        console.log([...state.carts, removeitem]);
        return{
          ...state,
          carts:[...state.carts]
        }
      }else if(state.carts[IteamIndex_decrease].quantity === 1){
        const data = state.carts.filter((el) => el.id !== action.payload);
        return {
          ...state,
          carts: data,
        };
      }
    default:
      return state;
  }
};
