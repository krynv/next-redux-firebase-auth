import React from "react";
import { connect } from "react-redux";

import { AppWithAuthorisation } from "../src/components/App";

const AccountPage = ({ authUser }) => {
  if (null === authUser) {
    return (
      <h1>
        authUser doesn't exist. <br />
        Please <a href="/signin">Sign In</a>
      </h1>
    );
  }
  return (
    <AppWithAuthorisation>
      <h1>Account: {authUser.email}</h1>
    </AppWithAuthorisation>
  );
};

const mapStateToProps = state => ({
  authUser: state.sessionState.authUser
});

export default connect(mapStateToProps)(AccountPage);
