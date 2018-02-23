import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

export default class HomePage extends Component {
  render() {
    return (
      <Fragment>
        Home Page
        <Link to="/uses">UsesPage</Link>
      </Fragment>
    );
  }
}
