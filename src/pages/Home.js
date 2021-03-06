import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Moviecard from "../components/Moviecard";
import TvShowCard from "../components/TvShowCard";
import { getPopularMovies, getPopularTvShows } from "../redux/actions";

const Home = () => {
  const dispatch = useDispatch();
  const popularMovies = useSelector((state) => state.popularMovies);
  const popularTvShows = useSelector((state) => state.popularTvShows);
  const movies = popularMovies.popularMovies.results;
  const tvShows = popularTvShows.tvShows.results;

  useEffect(() => {
    dispatch(getPopularMovies());
    dispatch(getPopularTvShows());
  }, [dispatch]);

  const renderMovies = movies?.map((movie) => (
    <Moviecard
      key={movie.id}
      title={movie.title}
      image={movie.poster_path}
      year={movie.release_date}
      description={movie.overview}
      rating={movie.vote_average}
      id={movie.id}
      movie={movie}
      button={
        <button
          className="bg-yellow-400 font-bold py-1 hover:bg-yellow-500 px-4 text-black text-sm rounded sm:text-xs md:text-xs"
          onClick={() => dispatch({ type: "ADD", payload: movie })}
        >
          add to favourites
        </button>
      }
    />
  ));
  const renderTvShows = tvShows?.map((tvShow) => (
    <TvShowCard
      key={tvShow.id}
      tvShow={tvShow}
      name={tvShow.name}
      description={tvShow.overview}
      id={tvShow.id}
      image={tvShow.poster_path}
      rating={tvShow.vote_average}
      year={tvShow.first_air_date}
      button={
        <button
          className="bg-yellow-400 font-bold py-1 hover:bg-yellow-500 px-4 text-black text-sm rounded sm:text-xs md:text-xs"
          onClick={() => dispatch({ type: "ADD_TV_SHOW", payload: tvShow })}
        >
          add to favourite
        </button>
      }
    />
  ));

  return (
    <div className="text-indigo-600 bg-gray-800  ">
      <div className="container mx-auto py-8 font-ubuntu  ">
        <div className="flex flex-col px-4 ">
          <div className=" ">
            <h2 className="text-2xl mb-4 mt-20 font-semibold sm:pt-10 md:pt-6 ">
              Popular movies:
            </h2>
            <div className="grid grid-rows-3 gap-y-8 mb-20 sm:mb-10 grid-flow-col sm:grid-cols-2   sm:grid-flow-row">
              {renderMovies}
            </div>
          </div>
          <div className="flex-1">
            <h2 className="text-2xl mb-4 font-semibold md:mt-10 mt-20">
              Popular TvShows:
            </h2>
            <div className="grid grid-rows-3 gap-y-8  mb-20  grid-flow-col sm:grid-cols-2  sm:grid-flow-row">
              {renderTvShows}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
