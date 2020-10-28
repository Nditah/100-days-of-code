import {
  FETCH_SUCCESS,
  SET_LOADING
} from '../types'

export default (state, action) => {
  switch (action.type) {
    case FETCH_SUCCESS:
      return {
        ...state,
        daily: action.payload
      };
    case SET_LOADING:
      return {
        ...state,
        loading: false
      };
    default:
      return state;
  }
}