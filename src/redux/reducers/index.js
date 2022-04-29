import { combineReducers } from "redux";
import {
  favouriteMoviesReducer,
  favouriteTvShowsReducer,
} from "./favouritesReducer";
import movieGenresReducer from "./movieGenresReducer";
import listReducer from "./movielistReducer";
import movieRecommendationsReducer from "./movieRecommendationsReducer";
import movieReducer from "./movieReducer";
import popularMoviesReducer from "./popularMoviesReducer";
import popularTvShowsReducer from "./popularTvReducer";
import searchReducer from "./searchReducer";
import tvGenreReducer from "./tvGenreReducer";
import tvshowListReducer from "./tvShowListReducer";
import tvShowRecommendationsReducer from "./tvShowRecommendationsReducer";
import tvShowReducer from "./tvShowReducer";

const rootReducer = combineReducers({
  popularMovies: popularMoviesReducer,
  movie: movieReducer,
  searchResults: searchReducer,
  popularTvShows: popularTvShowsReducer,
  tvShow: tvShowReducer,
  favourites: favouriteMoviesReducer,
  favouriteTvShows: favouriteTvShowsReducer,
  movielist: listReducer,
  tvshowlist: tvshowListReducer,
  movieGenres: movieGenresReducer,
  tvShowGenres: tvGenreReducer,
  movieRecommendations: movieRecommendationsReducer,
  tvShowRecommendations: tvShowRecommendationsReducer,
});

export default rootReducer;
