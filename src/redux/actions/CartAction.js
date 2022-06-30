import { ADD_TO_CART, REMOVE_TO_CART } from "../constants/CartConstants";
import { BASE_URL } from "../../api/ApiConfig";
import axios from "axios";

export const ADD = (id, qty) => async (dispatch,getstate) => {
  const {data }= await axios.get(`${BASE_URL}/api/Product/${id}`);
  const product = {
    id: data.id,
    name: data.name,
    price: data.price,
    discount: data.discount,
    photoUrl:data.photoUrl,
    quantity: qty,
  };
  dispatch({
    type: ADD_TO_CART,
    payload:product 
  });
  localStorage.setItem("cartItems", JSON.stringify(getstate().cart.cartItems)); 
};

export const Remove=(id)=>(dispatch,getstate)=>{
  dispatch({
    type: REMOVE_TO_CART,
    payload:id
  })

  localStorage.setItem("cartItems", JSON.stringify(getstate().cart.cartItems))
}


