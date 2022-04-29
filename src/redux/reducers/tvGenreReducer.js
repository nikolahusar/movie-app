import {
  TV_GENRES_FAIL,
  TV_GENRES_LOADING,
  TV_GENRES_SUCCESS,
} from "../actionTypes";

const initialState = {
  tvgenres: [],
  loading: false,
  errorMsg: "",
};

const tvGenreReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case TV_GENRES_LOADING:
      return { ...state, loading: true, errorMsg: "" };
    case TV_GENRES_SUCCESS:
      return {
        ...state,
        loading: false,
        tvgenres: actions.payload,
        errorMsg: "",
      };
    case TV_GENRES_FAIL:
      return {
        ...state,
        loading: false,
        errorMsg: "unable to get tv genres list",
      };
    default:
      return state;
  }
};
export default tvGenreReducer;
