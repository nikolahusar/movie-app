import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Moviecard from "../components/Moviecard";
import TvShowCard from "../components/TvShowCard";
const Favourites = () => {
  const favourite = useSelector((state) => state.favourites);
  const movies = favourite.favourites;
  const favouriteTvShows = useSelector((state) => state.favouriteTvShows);
  const tvShows = favouriteTvShows.favourites;
  const dispatch = useDispatch();

  return (
    <div className="bg-gray-800 text-white min-h-screen">
      <div className="container mx-auto p-8 font-ubuntu text-indigo-600">
        <h1 className="text-2xl mb-4 mt-20 font-semibold">Favourite movies:</h1>
        {movies.length === 0 && (
          <p className="text-red-600">You dont have anything in your list</p>
        )}
        <div className="max-w-screen-2xl flex-wrap flex gap-4 mb-20">
          {movies.map((fave) => (
            <Moviecard
              key={fave.id}
              title={fave.title}
              image={fave.poster_path}
              year={fave.release_date}
              description={fave.overview}
              rating={fave.vote_average.toFixed(1)}
              id={fave.id}
              fave={fave}
              button={
                <button
                  className="bg-yellow-400 font-bold py-1 hover:bg-yellow-500 px-4 text-black text-sm rounded sm:text-xs md:text-xs"
                  onClick={() => dispatch({ type: "REMOVE", payload: fave.id })}
                >
                  remove
                </button>
              }
            />
          ))}
        </div>
        <h1 className="text-2xl mb-4 mt-20 font-semibold text-indigo-600">
          Favourite Tv Shows:
        </h1>
        {tvShows.length === 0 && (
          <p className="text-red-600">You dont have anything in your list</p>
        )}
        <div className="max-w-screen-2xl flex-wrap flex gap-4 mb-20">
          {tvShows.map((fave) => (
            <TvShowCard
              key={fave.id}
              name={fave.name}
              image={fave.poster_path}
              year={fave.first_air_date}
              description={fave.overview}
              rating={fave.vote_average.toFixed(1)}
              id={fave.id}
              fave={fave}
              button={
                <button
                  className="bg-yellow-400 font-bold py-1 hover:bg-yellow-500 px-4 text-black text-sm rounded sm:text-xs md:text-xs"
                  onClick={() =>
                    dispatch({ type: "REMOVE_TV_SHOW", payload: fave.id })
                  }
                >
                  remove
                </button>
              }
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Favourites;
