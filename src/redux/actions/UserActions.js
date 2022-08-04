import axios from "axios";
import {BASE_URL} from "../../api/ApiConfig"
import { USER_LOGIN_FAIL, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGOUT } from "../constants/UserConstants"


export const loginAction=(email,password)=> async (dispatch,getstate)=>{
    try{
        dispatch({type:USER_LOGIN_REQUEST})
        const config ={
            headers:{
                "Content-Type":"application/json"
            },
        };
        const {data}=await axios.post(`${BASE_URL}/api/Account/login`,{email,password},config);
        console.log(data);

        dispatch({type:USER_LOGIN_SUCCESS,payload:data})
        localStorage.setItem("userInfo",JSON.stringify(data))
    }
    catch(error){
        dispatch({type:USER_LOGIN_FAIL,payload:error})
    }
}

export const registerAction=
 (firstName,lastName,email,password,confirmPassword)=>(dispatch,getState)=>{
  try {
    dispatch({type:USER_LOGIN_REQUEST})
    const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
    const {data}=axios.post(`${BASE_URL}/api/Account/register`,
    {firstName,lastName,email,password,confirmPassword},config);
    console.log(data)
    dispatch({type:USER_LOGIN_SUCCESS,payload:data})
    localStorage.setItem("userInfo",JSON.stringify(data))
} catch (error) {
    dispatch({type:USER_LOGIN_FAIL,payload:error})
}
}


export const logoutAction=()=>(dispatch,getState)=>{
    dispatch({type:USER_LOGOUT})
    localStorage.removeItem("userInfo")
  }