import { MOVIE_FAIL, MOVIE_LOADING, MOVIE_SUCCESS } from "../actionTypes";

const initialState = {
  movie: [],
  loading: false,
  errorMsg: "",
};

const movieReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case MOVIE_LOADING:
      return {
        ...state,
        loading: true,
        errorMsg: "",
      };
    case MOVIE_FAIL:
      return {
        ...state,
        loading: false,
        errorMsg: "unable to get movie",
      };
    case MOVIE_SUCCESS:
      return {
        ...state,
        loading: false,
        movie: actions.payload,
        errorMsg: "",
      };
    default:
      return state;
  }
};
export default movieReducer;
