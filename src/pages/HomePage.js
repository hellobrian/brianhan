import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import NavContainer from "../containers/NavContainer";

export default class HomePage extends Component {
  render() {
    return (
      <Fragment>
        <NavContainer />
        Home Page
        <Link to="/uses">UsesPage</Link>
      </Fragment>
    );
  }
}
