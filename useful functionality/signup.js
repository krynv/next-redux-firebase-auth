import React, { Component } from "react";
import Link from "next/link";
import Router from "next/router";

import { AppWithAuthentication } from "../src/components/App";
import { auth, db } from "../src/firebase";
import * as routes from "../src/constants/routes";

const SignUpPage = () => (
  <AppWithAuthentication>
    <h1>SignUp</h1>
    <SignUpForm />
  </AppWithAuthentication>
);

const updateByPropertyName = (propertyName, value) => () => ({
  [propertyName]: value
});

const INITIAL_STATE = {
  user: null,
  error: null
};

class SignUpForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    const { username, email } = this.state;

    auth
      .doSignInWithPopup()
      .then(authUser => {
        // Create a user in your own accessible Firebase Database too
        db.doCreateUser(authUser.user.uid, username, email)
          .then(() => {
            this.setState(() => ({ ...INITIAL_STATE }));
            Router.push(routes.HOME);
          })
          .catch(error => {
            this.setState(updateByPropertyName("error", error));
          });
      })
      .catch(error => {
        this.setState(updateByPropertyName("error", error));
      });

    event.preventDefault();
  };

  render() {
    return <button>Sign Up</button>;
  }
}

const SignUpLink = () => (
  <p>
    Don't have an account?{" "}
    <Link href={routes.SIGN_UP}>
      <a>Sign Up</a>
    </Link>
  </p>
);

export default SignUpPage;
export { SignUpForm, SignUpLink };
