import { SET_LOADING, SET_COORDS, FETCH_CURRENT } from "../types";

export default (state, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case SET_COORDS:
      return {
        ...state,
        coords: action.payload,
      };
    case FETCH_CURRENT:
      return {
        ...state,
        current: action.payload,
      };
    default:
      return state;
  }
};
