import { all } from "redux-saga/effects";
import { watchChangeGreetingsAsync } from "./greetings";

export default function* rootSaga() {
  yield all([watchChangeGreetingsAsync()]);
}
