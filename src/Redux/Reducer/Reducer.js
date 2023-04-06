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
} from "../Action/constant";

const initial_state = {
  isloading: false,
  Data: [],
  error: "",
  token: "",
  message: "",
};

const Reducer = (state = initial_state, action) => {
  switch (action.type) {
    case FETCH_TOKEN: {
      return {
        ...state,
        isloading: true,
      };
    }
    case FETCH_SUCCESS_TOKEN: {
      return {
        ...state,
        isloading: false,
        token: action.payload.Token,
        message: action.payload.message,
        error: "",
      };
    }
    case FETCH_ERROR_TOKEN: {
      return {
        ...state,
        isloading: false,
        error: action.payload.error,
        message: action.payload.error,
        token: "",
      };
    }
    case FETCH_USER_DATA: {
      return {
        ...state,
        isloading: true,
      };
    }
    case FETCH_USER_DATA_SUCCESS: {
      return {
        ...state,
        isloading: false,
        message: action.payload.message,
        error: "",
      };
    }
    case FETCH_USER_DATA_FAILURE: {
      return {
        ...state,
        isloading: false,
        error: action.payload.error,
        message: action.payload.error,
      };
    }
    case FETCH_DASHBOARD_DATA: {
      return {
        ...state,
        isloading: true,
      };
    }
    case FETCH_DASHBOARD_DATA_SUCCESS: {
      return {
        ...state,
        isloading: false,
        Data: action.payload.dashBoardData.data,
        error: "",
      };
    }
    case FETCH_DASHBOARD_DATA_FAILURE: {
      return {
        ...state,
        isloading: false,
        error: action.payload.message,
        Data: "",
      };
    }
    case LOGOUT: {
      return {
        isloading: false,
        Data: [],
        error: "",
        token: "",
        message: "",
      };
    }
    default:
      return state;
  }
};

export default Reducer;
