import {
  MOVIE_RECOM_FAIL,
  MOVIE_RECOM_LOADING,
  MOVIE_RECOM_SUCCESS,
} from "../actionTypes";

const initialState = {
  recom: [],
  loading: false,
  errorMsg: "",
};
const movieRecommendationsReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case MOVIE_RECOM_LOADING:
      return { ...state, loading: true, errorMsg: "" };
    case MOVIE_RECOM_SUCCESS:
      return { ...state, loading: false, errorMsg: "", recom: actions.payload };
    case MOVIE_RECOM_FAIL:
      return {
        ...state,
        loading: false,
        errorMsg: "unable to get movie recommendations list",
      };
    default:
      return state;
  }
};
export default movieRecommendationsReducer;
