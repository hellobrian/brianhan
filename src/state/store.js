import { createStore } from 'redux';
import { reducer } from 'state/nav/reducers';

const reduxDevTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(reducer, reduxDevTools);

export default store;
