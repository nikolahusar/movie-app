import { SEARCH_FAIL, SEARCH_LOADING, SEARCH_SUCCESS } from "../actionTypes";

const initialState = {
  movies: [],
  loading: false,
  errorMsg: "",
};

const searchReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case SEARCH_LOADING:
      return { ...state, loading: true, errorMsg: "" };
    case SEARCH_SUCCESS:
      return {
        ...state,
        movies: actions.payload,
        errorMsg: "",
        loading: false,
      };
    case SEARCH_FAIL:
      return { ...state, loading: false, errorMsg: "unable to get results" };
    default:
      return state;
  }
};

export default searchReducer;
