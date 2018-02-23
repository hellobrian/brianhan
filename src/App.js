import React, { Component, Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';
import NavContainer from 'containers/NavContainer';

const Loading = ({ error, pastDelay }) => {
  if (error) {
    return <div>Error!</div>;
  } else if (pastDelay) {
    return <div>Loading...</div>;
  } else {
    return null;
  }
};

const Home = Loadable({
  loader: () => import('pages/HomePage'),
  loading: Loading
});

const Uses = Loadable({
  loader: () => import('pages/UsesPage'),
  loading: Loading
});

class App extends Component {
  render() {
    return (
      <Fragment>
        <NavContainer />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/uses" component={Uses} />
        </Switch>
      </Fragment>
    );
  }
}

export default App;
