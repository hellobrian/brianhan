import React, { Component, Fragment } from "react";

export default class Nav extends Component {
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
