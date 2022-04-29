import {
  POPULAR_TV_SHOWS_FAIL,
  POPULAR_TV_SHOWS_LOADING,
  POPULAR_TV_SHOWS_SUCCESS,
} from "../actionTypes";

const initialState = {
  tvShows: [],
  loading: false,
  errorMsg: "",
};

const popularTvShowsReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case POPULAR_TV_SHOWS_LOADING:
      return {
        ...state,
        loading: true,
        errorMsg: "",
      };
    case POPULAR_TV_SHOWS_FAIL:
      return {
        ...state,
        loading: false,
        errorMsg: "unable to get popular tv shows list",
      };
    case POPULAR_TV_SHOWS_SUCCESS:
      return {
        ...state,
        loading: false,
        tvShows: actions.payload,
        errorMsg: "",
      };
    default:
      return state;
  }
};
export default popularTvShowsReducer;
