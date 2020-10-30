import {
  SET_LOADING,
  SET_COORDS,
  FETCH_CURRENT,
  FETCH_DAILY,
  GET_DATE,
  SEARCH_PLACE,
  SEARCH_MODE,
} from "../types";

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
    case FETCH_DAILY:
      return {
        ...state,
        daily: action.payload,
      };
    case GET_DATE:
      return {
        ...state,
        date: action.payload,
      };
    case SEARCH_PLACE:
      return {
        ...state,
        placeSearched: action.payload,
      };
    case SEARCH_MODE:
      return {
        ...state,
        searchMode: action.payload,
      };
    default:
      return state;
  }
};
