import {
    GET_IP_SUCCESS,
    GET_IP_REQUEST,
    GET_IP_FAILURE,
    GET_IP_RESET
  } from "../../actionTypes/ipAddress";
  
  const initialState = {
    isLoading: false,
    isError: false,
    data: [],
    error: null
  };
  
  const ipReducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_IP_REQUEST:
        return {
          ...state,
          isLoading: true
        };
      case GET_IP_SUCCESS:
        return {
          isLoading: false,
          isError: false,
          data: action.payload,
          error: null
        };
      case GET_IP_FAILURE:
        return {
          isLoading: false,
          data: [],
          isError: true,
          error: action.payload
        };
      case GET_IP_RESET:
        return {
          isLoading: false,
          isError: false,
          data: [],
          error: null
        };
      default:
        return state;
    }
  };
  
  export default ipReducer;
  