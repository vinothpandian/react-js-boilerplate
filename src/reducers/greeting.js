import { handleActions } from "redux-actions";
import { Map } from "immutable";
import { SET_GREETINGS } from "../actions/greetings";

const defaultState = Map({
  text: "Hello React!"
});

const setGreetings = (state, action) => state.set("text", action.greetings);

const greetingReducers = handleActions(
  {
    [SET_GREETINGS]: setGreetings
  },
  defaultState
);

export default greetingReducers;
