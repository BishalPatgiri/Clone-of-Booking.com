import * as types from "./actionTypes"
const initialState = {
  hotel: [],
  isLoading: false,
  isError: false,
};

export const reducer = (state = initialState,action) => {
  const {type,payload}=action
  switch(type){
    case types.GET_STAY_REQUEST:return {...state,isLoading:true}
    case types.GET_STAY_SUCCESS:return {...state,isLoading:false,hotel:payload}
    case types.GET_STAY_FAILURE:return {...state,isError:true}
    default: return state;
  }
};
