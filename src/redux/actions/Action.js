import { ADD_TO_CART } from "../constants/AddtoCart";
import { REMOVE_TO_CART } from "../constants/RemoveToCart";

export const ADD = (item) => {
  return {
    type: ADD_TO_CART,
    payload: item,
  };
};

export const REMOVE = (id) => {
    return {
      type: REMOVE_TO_CART,
      payload: id,
    };
  };
