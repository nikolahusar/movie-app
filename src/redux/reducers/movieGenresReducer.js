import {
  MOVIE_GENRE_FAIL,
  MOVIE_GENRE_LOADING,
  MOVIE_GENRE_SUCCESS,
} from "../actionTypes";

const initialState = {
  genres: [],
  loading: false,
  errorMsg: "",
};

const movieGenresReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case MOVIE_GENRE_LOADING:
      return { ...state, loading: true, errorMsg: "" };
    case MOVIE_GENRE_SUCCESS:
      return {
        ...state,
        genres: actions.payload,
        loading: false,
        errorMsg: "",
      };
    case MOVIE_GENRE_FAIL:
      return { ...state, loading: false, errorMsg: "unable to get genres" };
    default:
      return state;
  }
};
export default movieGenresReducer;
