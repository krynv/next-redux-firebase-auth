import React from "react";
import Router from "next/router";

import { firebase } from "../../firebase";
import * as routes from "../../constants/routes";

const withAuthorisation = needsAuthorization => Component => {
  class withAuthorisation extends React.Component {
    componentDidMount() {
      firebase.auth.onAuthStateChanged(authUser => {
        if (!authUser && needsAuthorization) {
          Router.push(routes.SIGN_IN);
        }
      });
    }

    render() {
      return <Component {...this.props} />;
    }
  }

  return withAuthorisation;
};

export default withAuthorisation;
