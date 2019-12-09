import React from "react";
import { compose } from "recompose";

import Navigation from "../Navigation";
import withAuthentication from "../Session/withAuthentication";
import withAuthorisation from "../Session/withAuthorisation";

const App = ({ children }) => (
  <div className="app">
    <Navigation />
    <hr />
    {children}
  </div>
);
const AppWithAuthentication = compose(
  withAuthentication,
  withAuthorisation(false)
)(App);
const AppWithAuthorisation = compose(
  withAuthentication,
  withAuthorisation(true)
)(App);
export { AppWithAuthentication, AppWithAuthorisation };
