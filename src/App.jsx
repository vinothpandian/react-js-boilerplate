import React from "react";
import { Provider } from "react-redux";
import { ConnectedRouter as Router } from "connected-react-router";

import store, { history } from "./store";
import Routes from "./routes";

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Routes />
      </Router>
    </Provider>
  );
}

export default App;
