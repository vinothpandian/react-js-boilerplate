import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import greetingReducers from "./greeting";

export default history =>
  combineReducers({
    router: connectRouter(history),
    greetings: greetingReducers
  });
