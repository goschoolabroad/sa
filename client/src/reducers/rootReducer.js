import {
  FETCH_RESULTS_PENDING, FETCH_RESULTS_RECEIVED, FETCH_RESULTS_REJECTED
 } from '../actions/actions.js';

const initialState = {
  isFetching: false,
  isUserAuthenticated: false,
  user : {
    userName: "",
    userId: "",
    userToken: "",
  },
  errorMessage: ""
};

export const schoolabroad = (state=initialState, action) => {
  switch(action.type) {
    case FETCH_RESULTS_PENDING: return { ...state, isFetching: true};
    case FETCH_RESULTS_RECEIVED: return { ...state, isFetching: false};
    case FETCH_RESULTS_REJECTED: return { ...state, isFetching: false, error: action.error};
    default: return state;
  }
};