import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "../components/Button";
import { CHANGE_GREETINGS_ASYNC } from "../actions/greetings";
import Greeting from "../components/Greeting";

function Home() {
  const dispatch = useDispatch();
  const greetings = useSelector(state => state.greetings);

  const text = greetings.get("text");
  return (
    <div>
      <div style={{ position: "relative" }}>
        <Greeting>{text}</Greeting>
        <Button
          style={{ position: "absolute", top: "2.5rem" }}
          onClick={() => {
            dispatch({ type: CHANGE_GREETINGS_ASYNC });
          }}
        >
          Random
        </Button>
      </div>
    </div>
  );
}

export default Home;
