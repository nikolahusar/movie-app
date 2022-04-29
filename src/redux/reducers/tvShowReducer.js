import { TV_SHOW_FAIL, TV_SHOW_SUCCESS, TV_SHOW_LOADING } from "../actionTypes";

const initialState = {
  tvShow: {},
  loading: false,
  errorMsg: "",
};

const tvShowReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case TV_SHOW_LOADING:
      return { ...state, loading: true, errorMsg: "" };
    case TV_SHOW_FAIL:
      return { ...state, loading: false, errorMsg: "unbable to get TvShow" };
    case TV_SHOW_SUCCESS:
      return {
        ...state,
        loading: false,
        errorMsg: "",
        tvShow: actions.payload,
      };
    default:
      return state;
  }
};
export default tvShowReducer;
