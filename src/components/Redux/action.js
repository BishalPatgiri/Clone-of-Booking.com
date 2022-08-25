//Write the action creator functions here
import axios from "axios"
import * as types from "./actionTypes"

export const getStayRequest=()=>{
    return {type:types.GET_STAY_REQUEST}
}

export const getStaySuccess=(payload)=>{
    return {type:types.GET_STAY_SUCCESS,payload}
}

export const getStayFailure=()=>{
    return {type:types.GET_STAY_FAILURE}
}

export const getData=(city,params)=>(dispatch)=>{
    dispatch(getStayRequest())
    return axios.get(`http://localhost:8080/${city}`,{params}).then(res=>dispatch(getStaySuccess(res.data))).catch(e=>dispatch(getStayFailure()))
}
