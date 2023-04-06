import {
  FETCH_DASHBOARD_DATA,
  FETCH_DASHBOARD_DATA_FAILURE,
  FETCH_DASHBOARD_DATA_SUCCESS,
  FETCH_ERROR_TOKEN,
  FETCH_SUCCESS_TOKEN,
  FETCH_TOKEN,
  FETCH_USER_DATA,
  FETCH_USER_DATA_FAILURE,
  FETCH_USER_DATA_SUCCESS,
  LOGOUT,
} from "./constant";

const fetchToken = (obj) => {
  return {
    type: FETCH_TOKEN,
    payload: obj,
  };
};

const fetchSuccessToken = (token) => {
  return {
    type: FETCH_SUCCESS_TOKEN,
    payload: token,
  };
};

const fetchErrorToken = (error) => {
  return {
    type: FETCH_ERROR_TOKEN,
    payload: error,
  };
};

const fetchUserData = (newUserData) => {
  return {
    type: FETCH_USER_DATA,
    payload: newUserData,
  };
};

const fetchUserDataSuccess = (userData) => {
  return {
    type: FETCH_USER_DATA_SUCCESS,
    payload: { userData },
  };
};

const fetchUserDataFailure = (error) => {
  return {
    type: FETCH_USER_DATA_FAILURE,
    payload: { error },
  };
};

const fetchDashBoardData = () => {
  return {
    type: FETCH_DASHBOARD_DATA,
  };
};

const fetchDashBoardDataSuccess = (dashBoardData) => {
  return {
    type: FETCH_DASHBOARD_DATA_SUCCESS,
    payload: { dashBoardData },
  };
};

const fetchDashBoardDataFailure = (error) => {
  return {
    type: FETCH_DASHBOARD_DATA_FAILURE,
    payload: { error },
  };
};

const logout = () => {
  return {
    type: LOGOUT,
  };
};
export {
  fetchToken,
  fetchSuccessToken,
  fetchErrorToken,
  fetchUserData,
  fetchUserDataSuccess,
  fetchUserDataFailure,
  fetchDashBoardData,
  fetchDashBoardDataSuccess,
  fetchDashBoardDataFailure,
  logout,
};
