import { takeLatest, call, put } from "redux-saga/effects";
import {
  fetchDashBoardDataFailure,
  fetchDashBoardDataSuccess,
  fetchErrorToken,
  fetchSuccessToken,
  fetchUserDataFailure,
  fetchUserDataSuccess,
} from "../Redux/Action/Action";
import { dashBoardApi, signUp, userToken } from "./Services/services";
import {
  FETCH_DASHBOARD_DATA,
  FETCH_TOKEN,
  FETCH_USER_DATA,
} from "../Redux/Action/constant";

function* tokenWatcher() {
  yield takeLatest(FETCH_TOKEN, tokenWorker);
  yield takeLatest(FETCH_USER_DATA, userDataWorker);
  yield takeLatest(FETCH_DASHBOARD_DATA, dashBoardDataWorker);
}

function* tokenWorker(action) {
  try {
    const data = yield call(userToken, action.payload);
    if (!data.error) yield put(fetchSuccessToken(data));
    else yield put(fetchErrorToken(data));
  } catch (error) {
    yield put(fetchErrorToken(error));
  }
}

function* userDataWorker(action) {
  try {
    const userData = yield call(signUp, action.payload);
    yield put(fetchUserDataSuccess(userData));
  } catch (error) {
    yield put(fetchUserDataFailure(error));
  }
}

function* dashBoardDataWorker() {
  try {
    const dashBoardData = yield call(dashBoardApi);
    yield put(fetchDashBoardDataSuccess(dashBoardData));
  } catch (error) {
    yield put(fetchDashBoardDataFailure(error));
  }
}

export default tokenWatcher;
