import {
  TV_SHOW_RECOM_FAIL,
  TV_SHOW_RECOM_LOADING,
  TV_SHOW_RECOM_SUCCESS,
} from "../actionTypes";

const initialState = {
  recom: [],
  loading: false,
  errorMsg: "",
};

const tvShowRecommendationsReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case TV_SHOW_RECOM_LOADING:
      return { ...state, loading: true, errorMsg: "" };
    case TV_SHOW_RECOM_SUCCESS:
      return { ...state, loading: false, errorMsg: "", recom: actions.payload };
    case TV_SHOW_RECOM_FAIL:
      return {
        ...state,
        loading: false,
        errorMsg: "unable to get tv show recommendations list",
      };
    default:
      return state;
  }
};
export default tvShowRecommendationsReducer;
