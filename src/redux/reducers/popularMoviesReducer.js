import {
  POPULAR_MOVIES_FAIL,
  POPULAR_MOVIES_LOADING,
  POPULAR_MOVIES_SUCCESS,
} from "../actionTypes";

const initialState = {
  popularMovies: [],
  loading: false,
  errorMsg: "",
};

const popularMoviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case POPULAR_MOVIES_LOADING:
      return {
        ...state,
        loading: true,
        errorMsg: "",
      };
    case POPULAR_MOVIES_FAIL:
      return {
        ...state,
        loading: true,
        errorMsg: "Unable to get popular movies list",
      };
    case POPULAR_MOVIES_SUCCESS:
      return {
        ...state,
        loading: false,
        errorMsg: "",
        popularMovies: action.payload,
      };
    default:
      return state;
  }
};

export default popularMoviesReducer;
