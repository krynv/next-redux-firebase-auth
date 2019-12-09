import React from "react";
import { connect } from "react-redux";

import { AppWithAuthorisation } from "../src/components/App";

const AccountPage = ({ authUser }) => {
  return (
    <AppWithAuthorisation>
      <h1>Account: {authUser ? authUser.email : null}</h1>
    </AppWithAuthorisation>
  );
};

const mapStateToProps = state => ({
  authUser: state.sessionState.authUser
});

export default connect(mapStateToProps)(AccountPage);
