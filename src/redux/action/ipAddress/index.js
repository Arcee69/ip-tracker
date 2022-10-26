import {
    GET_IP_SUCCESS,
    GET_IP_REQUEST,
    GET_IP_FAILURE,
    GET_IP_RESET
  } from "../../actionTypes/ipAddress";
  
  export const getIpRequest = () => {
    return {
      type: GET_IP_REQUEST
    };
  };
  
  export const getIpSuccess = (data) => {
    return {
      type: GET_IP_SUCCESS,
      payload: data
    };
  };
  
  export const getIpFailure = (error) => {
    return {
      type: GET_IP_FAILURE,
      payload: error
    };
  };
  
  export const getIpReset = () => {
    return {
      type: GET_IP_RESET,
      payload: null
    };
  };
  