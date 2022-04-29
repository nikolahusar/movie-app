const moviesinitialState = {
  favourites: [],
};
const tvshowsinitialState = {
  favourites: [],
};
export const favouriteMoviesReducer = (state = moviesinitialState, action) => {
  switch (action.type) {
    case "ADD":
      const movie = action.payload;
      const check = state.favourites.find((x) => x.id === movie.id);
      if (check) {
        return state;
      } else {
        return {
          ...state,
          favourites: [...state.favourites, movie],
        };
      }
    case "REMOVE":
      const filtered = state.favourites.filter(
        (movie) => movie.id !== action.payload
      );
      return {
        ...state,
        favourites: filtered,
      };
    default:
      return state;
  }
};
export const favouriteTvShowsReducer = (
  state = tvshowsinitialState,
  action
) => {
  switch (action.type) {
    case "ADD_TV_SHOW":
      const tvShow = action.payload;
      const check = state.favourites.find((x) => x.id === tvShow.id);
      if (check) {
        return state;
      } else {
        return {
          ...state,
          favourites: [...state.favourites, tvShow],
        };
      }
    case "REMOVE_TV_SHOW":
      const filtered = state.favourites.filter(
        (tvShow) => tvShow.id !== action.payload
      );
      return {
        ...state,
        favourites: filtered,
      };
    default:
      return state;
  }
};
