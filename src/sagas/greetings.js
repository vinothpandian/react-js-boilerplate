import { call, put, takeEvery } from "redux-saga/effects";
import { SET_GREETINGS, CHANGE_GREETINGS_ASYNC } from "../actions/greetings";

const packages = [
  "connected-react-router",
  "history",
  "immutable",
  "node-sass",
  "prop-types",
  "react",
  "react-dom",
  "react-redux",
  "react-router",
  "react-router-dom",
  "react-scripts",
  "react-spring",
  "redux",
  "redux-actions",
  "redux-saga",
  "styled-components"
];

function changeName() {
  return new Promise(resolve => {
    setTimeout(() => {
      const index = Math.floor(Math.random() * (packages.length - 1));
      const name = packages[index];
      resolve(`Hello ${name}`);
    }, 500);
  });
}

function* setNameAsync() {
  const greetings = yield call(changeName);
  yield put({ type: SET_GREETINGS, greetings });
}

export function* watchChangeGreetingsAsync() {
  yield takeEvery(CHANGE_GREETINGS_ASYNC, setNameAsync);
}
