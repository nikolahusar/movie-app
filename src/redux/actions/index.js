import { api } from "../../services/instances";
import {
  MOVIE_FAIL,
  MOVIE_GENRE_FAIL,
  MOVIE_GENRE_LOADING,
  MOVIE_GENRE_SUCCESS,
  MOVIE_LIST_FAIL,
  MOVIE_LIST_LOADING,
  MOVIE_LIST_SUCCESS,
  MOVIE_LOADING,
  MOVIE_RECOM_FAIL,
  MOVIE_RECOM_LOADING,
  MOVIE_RECOM_SUCCESS,
  MOVIE_SUCCESS,
  POPULAR_MOVIES_FAIL,
  POPULAR_MOVIES_LOADING,
  POPULAR_MOVIES_SUCCESS,
  POPULAR_TV_SHOWS_FAIL,
  POPULAR_TV_SHOWS_LOADING,
  POPULAR_TV_SHOWS_SUCCESS,
  SEARCH_FAIL,
  SEARCH_LOADING,
  SEARCH_SUCCESS,
  TV_GENRES_FAIL,
  TV_GENRES_LOADING,
  TV_GENRES_SUCCESS,
  TV_SHOW_FAIL,
  TV_SHOW_LIST_FAIL,
  TV_SHOW_LIST_LOADING,
  TV_SHOW_LIST_SUCCESS,
  TV_SHOW_LOADING,
  TV_SHOW_RECOM_FAIL,
  TV_SHOW_RECOM_LOADING,
  TV_SHOW_RECOM_SUCCESS,
  TV_SHOW_SUCCESS,
} from "../actionTypes";
export const getPopularMovies = () => async (dispatch) => {
  try {
    dispatch({
      type: POPULAR_MOVIES_LOADING,
    });
    const res = await api.get("/movie/popular");
    dispatch({
      type: POPULAR_MOVIES_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: POPULAR_MOVIES_FAIL,
    });
  }
};

export const getMovie = (id, setVideoPlayer) => async (dispatch) => {
  try {
    dispatch({
      type: MOVIE_LOADING,
    });
    const res = await api.get(`/movie/${id.movieId}`, {
      params: {
        append_to_response: "videos",
      },
    });
    setVideoPlayer(false);
    dispatch({
      type: MOVIE_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: MOVIE_FAIL,
    });
  }
};

export const getSearchResults = (query) => async (dispatch) => {
  try {
    dispatch({ type: SEARCH_LOADING });
    if (!query) {
      return;
    }
    const res = await api.get("/search/multi", {
      params: { query },
    });
    dispatch({ type: SEARCH_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({
      type: SEARCH_FAIL,
    });
  }
};

export const getPopularTvShows = () => async (dispatch) => {
  try {
    dispatch({
      type: POPULAR_TV_SHOWS_LOADING,
    });
    const res = await api.get("/tv/popular");
    dispatch({
      type: POPULAR_TV_SHOWS_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: POPULAR_TV_SHOWS_FAIL,
    });
  }
};
export const getTvShow = (id, setVideoPlayer) => async (dispatch) => {
  try {
    dispatch({
      type: TV_SHOW_LOADING,
    });

    const res = await api.get(`/tv/${id.tvShowId}`, {
      params: {
        append_to_response: "videos",
      },
    });
    setVideoPlayer(false);
    dispatch({
      type: TV_SHOW_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: TV_SHOW_FAIL,
    });
  }
};
export const getMovieList =
  (pageNumber, genreId, options) => async (dispatch) => {
    try {
      dispatch({ type: MOVIE_LIST_LOADING });
      const res = await api.get("/discover/movie", {
        params: {
          page: pageNumber,
          with_genres: genreId.join(","),
          sort_by: options,
        },
      });
      dispatch({ type: MOVIE_LIST_SUCCESS, payload: res.data });
    } catch (error) {
      dispatch({ type: MOVIE_LIST_FAIL });
    }
  };

export const getTvShowList =
  (pageNumber, genreId, options) => async (dispatch) => {
    try {
      dispatch({ type: TV_SHOW_LIST_LOADING });

      const res = await api.get("/discover/tv", {
        params: {
          page: pageNumber,
          with_genres: genreId.join(","),
          sort_by: options,
        },
      });
      dispatch({ type: TV_SHOW_LIST_SUCCESS, payload: res.data });
    } catch (error) {
      dispatch({ type: TV_SHOW_LIST_FAIL });
    }
  };

export const getMovieGenres = () => async (dispatch) => {
  try {
    dispatch({ type: MOVIE_GENRE_LOADING });
    const res = await api.get("/genre/movie/list");
    dispatch({ type: MOVIE_GENRE_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: MOVIE_GENRE_FAIL });
  }
};

export const getTvShowGenres = () => async (dispatch) => {
  try {
    dispatch({ type: TV_GENRES_LOADING });
    const res = await api.get("/genre/tv/list");
    dispatch({ type: TV_GENRES_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: TV_GENRES_FAIL });
  }
};

export const getMovieRec = (id) => async (dispatch) => {
  try {
    dispatch({ type: MOVIE_RECOM_LOADING });
    const res = await api.get(`/movie/${id.movieId}/recommendations`);
    dispatch({ type: MOVIE_RECOM_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: MOVIE_RECOM_FAIL });
  }
};

export const getTvShowRec = (id) => async (dispatch) => {
  try {
    dispatch({ type: TV_SHOW_RECOM_LOADING });
    const res = await api.get(`/tv/${id.tvShowId}/recommendations`);
    dispatch({ type: TV_SHOW_RECOM_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: TV_SHOW_RECOM_FAIL });
  }
};
