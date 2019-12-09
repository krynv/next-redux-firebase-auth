import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

import { AppWithAuthentication } from "../src/components/App";

const styles = theme => ({
  button: {
    margin: theme.spacing(2)
  },
  input: {
    display: "none"
  }
});

const LandingPage = ({ classes }) => (
  <AppWithAuthentication>
    <h1>Landing</h1>
    <p>
      The Landing Page is open to everyone, even though the user isn't signed
      in.
      <br />
      <Button variant="contained" color="primary" className={classes.button}>
        This is a material UI button that is rendered using SSR and does nothing
      </Button>
    </p>
  </AppWithAuthentication>
);

LandingPage.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(LandingPage);
