import React from "react";
import { connect } from "react-redux";

import { AppWithAuthorisation } from "../src/components/App";

const AccountPage = ({ authUser }) => (
  <AppWithAuthorisation>
    <h1>Account: {authUser.displayName}</h1>
  </AppWithAuthorisation>
);

const mapStateToProps = state => ({
  authUser: state.sessionState.authUser
});

export default connect(mapStateToProps)(AccountPage);
