import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

export default class Nav extends Component {
  static propTypes = {
    toggleNav: PropTypes.func.isRequired,
    isNavOpen: PropTypes.bool.isRequired
  };

  render() {
    const { toggleNav, isNavOpen } = this.props;
    return (
      <Fragment>
        <button onClick={toggleNav}>trigger</button>
        {isNavOpen ? <nav>open</nav> : null}
      </Fragment>
    );
  }
}
