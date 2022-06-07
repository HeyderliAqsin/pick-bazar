import { ADD_TO_CART } from "../constants/AddtoCart";
import { DELETE_TO_CART, REMOVE_ONE } from "../constants/DeleteToCart";

export const ADD = (item) => {
  return {
    type: ADD_TO_CART,
    payload: item,
  };
};

export const DELETE = (id) => {
  return {
    type: DELETE_TO_CART,
    payload: id,
  };
};

export const REMOVE = (iteam) => {
  return {
    type: REMOVE_ONE,
    payload: iteam,
  };
};
