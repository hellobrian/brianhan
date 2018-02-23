import { TOGGLE_NAV } from "./actions";

const initialState = {
  isNavOpen: false
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_NAV:
      return {
        ...state,
        isNavOpen: !state.isNavOpen
      };
    default:
      return state;
  }
}
