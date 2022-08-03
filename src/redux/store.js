import { composeWithDevTools } from "redux-devtools-extension";
import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { cartreducer } from "./reducers/CartReducer";
import { userLoginReducers, userRegisterReducers } from "./reducers/UserReducers";

const reducer = combineReducers({
  cart: cartreducer,
  userLogin:userLoginReducers,
  userRegister:userRegisterReducers
});

const cartItemsFromLocalStorage = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];

  const userInfoFromLS=localStorage.getItem("userInfo") ?
  JSON.parse(localStorage.getItem("userInfo")) : null;


const initialState = {
  cart: {
    cartItems: cartItemsFromLocalStorage,
  },
  userLogin:{userInfo:userInfoFromLS}
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
