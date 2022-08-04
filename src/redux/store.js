import { composeWithDevTools } from "redux-devtools-extension";
import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { cartreducer } from "./reducers/CartReducer";
<<<<<<< HEAD
import { userLoginReducers, userRegisterReducers } from "./reducers/UserReducer";
=======
import { userLoginReducers, userRegisterReducers } from "./reducers/UserReducers";
>>>>>>> 6a59d2383598a1839a9a619ce33b618076584032

const reducer = combineReducers({
  cart: cartreducer,
  userLogin:userLoginReducers,
  userRegister:userRegisterReducers
});

const cartItemsFromLocalStorage = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];

<<<<<<< HEAD
  const userInfoFromLocalStorage=localStorage.getItem("userInfo")?
  JSON.parse(localStorage.getItem("userInfo")):null
=======
  const userInfoFromLS=localStorage.getItem("userInfo") ?
  JSON.parse(localStorage.getItem("userInfo")) : null;
>>>>>>> 6a59d2383598a1839a9a619ce33b618076584032


const initialState = {
  cart: {
    cartItems: cartItemsFromLocalStorage,
  },
<<<<<<< HEAD
  userLogin:{userInfo:userInfoFromLocalStorage}
=======
  userLogin:{userInfo:userInfoFromLS}
>>>>>>> 6a59d2383598a1839a9a619ce33b618076584032
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
