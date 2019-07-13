import React from "react";
import PropTypes from "prop-types";
import { animated, useTransition } from "react-spring";

function Greeting({ children }) {
  const transitions = useTransition(children, null, {
    from: { position: "absolute", opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 }
  });

  return transitions.map(({ item, key, props }) => (
    <animated.p key={key} style={props}>
      {item}
    </animated.p>
  ));
}

Greeting.propTypes = {
  children: PropTypes.node.isRequired
};

export default Greeting;
