import {
  MOVIE_LIST_FAIL,
  MOVIE_LIST_LOADING,
  MOVIE_LIST_SUCCESS,
} from "../actionTypes";

const initialState = {
  movielist: [],
  loading: false,
  errorMsg: "",
};

const listReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case MOVIE_LIST_LOADING:
      return { ...state, loading: true, errorMsg: "" };
    case MOVIE_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        errorMsg: "",
        movielist: actions.payload,
      };
    case MOVIE_LIST_FAIL:
      return { ...state, loading: false, errorMsg: "Unable to get movie list" };
    default:
      return state;
  }
};
export default listReducer;
