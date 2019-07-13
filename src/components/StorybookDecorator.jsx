import React from "react";
import styled from "styled-components";
import createMemoryHistory from "history/createMemoryHistory";
import { MemoryRouter, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../store";

const history = createMemoryHistory();

const FullPage = styled.div`
  display: flex;
  place-content: center;
`;

const StorybookDecorator = story => {
  return (
    <Provider store={store}>
      <FullPage>{story()}</FullPage>
    </Provider>
  );
};

const Router = story => {
  return (
    <MemoryRouter history={history}>
      <Route path="*" component={() => story()} />
    </MemoryRouter>
  );
};

export { StorybookDecorator, Router };
