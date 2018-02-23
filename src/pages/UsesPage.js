import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
export default class UsesPage extends Component {
  render() {
    return (
      <Fragment>
        Uses Page
        <Link to="/">Home Page</Link>
      </Fragment>
    );
  }
}
