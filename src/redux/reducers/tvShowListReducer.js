import {
  TV_SHOW_LIST_FAIL,
  TV_SHOW_LIST_LOADING,
  TV_SHOW_LIST_SUCCESS,
} from "../actionTypes";

const initialState = {
  tvlist: [],
  loading: false,
  errorMsg: "",
};

const tvshowListReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case TV_SHOW_LIST_LOADING:
      return { ...state, loading: true, errorMsg: "" };
    case TV_SHOW_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        errorMsg: "",
        tvlist: actions.payload,
      };
    case TV_SHOW_LIST_FAIL:
      return {
        ...state,
        loading: false,
        errorMsg: "Unable to get tv-show list",
      };
    default:
      return state;
  }
};
export default tvshowListReducer;
