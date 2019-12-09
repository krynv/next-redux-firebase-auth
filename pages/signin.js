import React, { Component } from "react";
import Router from "next/router";

import { AppWithAuthentication } from "../src/components/App";
import { auth, provider } from "../src/firebase/firebase";
import { db } from "../src/firebase";
import * as routes from "../src/constants/routes";

const SignInPage = () => (
  <AppWithAuthentication>
    <h1>SignIn</h1>
    <SignInForm />
  </AppWithAuthentication>
);

const updateByPropertyName = (propertyName, value) => () => ({
  [propertyName]: value
});

const INITIAL_STATE = {
  user: null,
  error: null
};

class SignInForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onClick = () => {
    auth
      .signInWithPopup(provider)
      .then(({ user }) => {
        console.log(user);

        db.doCreateUser(
          user.uid,
          user.email,
          user.displayName,
          user.photoURL,
          false
        )
          .then(() => {
            this.setState(() => ({ ...INITIAL_STATE }));
            Router.push(routes.HOME);
          })
          .catch(error => {
            this.setState(updateByPropertyName("error", error));
          });

        Router.push(routes.HOME);
      })
      .catch(error => {
        this.setState(updateByPropertyName("error", error));
      });
  };

  render() {
    return <button onClick={this.onClick}>Sign In with Google</button>;
  }
}

export default SignInPage;

export { SignInForm };
