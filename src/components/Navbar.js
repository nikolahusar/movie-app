import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getSearchResults } from "../redux/actions";
import { useDebounce } from "../hooks/useDebounce";
import { baseImageUrl } from "../services/instances";
const Navbar = () => {
  const dispatch = useDispatch();
  const searchRes = useSelector((state) => state.searchResults);
  const [query, setQuery] = useState("");
  const [input, setInput] = useState("");
  const debouncedValue = useDebounce(query, 500);
  const favourite = useSelector((state) => state.favourites);
  const favouriteTvShows = useSelector((state) => state.favouriteTvShows);
  useEffect(() => {
    dispatch(getSearchResults(query));
    // eslint-disable-next-line
  }, [debouncedValue]);

  const data = searchRes.movies.results;

  return (
    <div className="max-w-screen top-0 fixed z-20 bg-black  w-full">
      <div className=" flex container  mx-auto justify-between  p-4 text-indigo-400 font-bold items-center  ">
        <div className="text-3xl flex-1 sm:text-base">
          <Link to="/">Moviex</Link>
        </div>

        <div className="flex-2 sm:hidden">
          <ul className="font-bolder px-4 text-md text-indigo-400  font-ubuntu inline-flex mr-10  sm:flex sm:flex-col sm:text-xs sm:gap-2  md:flex md:flex-col md:text-xs md:gap-2">
            <li className="px-6 hover:text-indigo-600 sm:none">
              <Link to="/movie-list">Movie list</Link>
            </li>
            <li className="px-6 hover:text-indigo-600">
              <Link to="/tv-show-list">Tv Show list</Link>
            </li>
            <li className="px-6 hover:text-indigo-600">
              <Link to="/favourites">Favourites: </Link>
              <span className="text-indigo-600">
                {favourite.favourites.length +
                  favouriteTvShows.favourites.length}
              </span>
            </li>
          </ul>
        </div>

        <div className="flex-1 ">
          <form onChange={(e) => setQuery(e.target.value)} className="relative">
            <div className="flex items-center">
              <input
                type="text"
                className="text-gray-800 font-bold bg-indigo-600 w-300 md:w-160 sm:w-160  outline-0 rounded placeholder:text-sm placeholder:text-indigo-400 p-1 font-familiy"
                value={input}
                placeholder="Search movie"
                onChange={(e) => setInput(e.target.value)}
              />
            </div>

            <div className=" z-10 absolute   w-300 sm:w-160 md:w-160 text-gray-800 font-bold bg-indigo-600 text-sm flex justify-center items-start overflow-auto flex-col px-2 ">
              {input.length > 0
                ? data?.slice(0, 5).map((movie) => (
                    <div
                      key={movie.id}
                      onClick={() => setInput("")}
                      className="mb-4 pt-4 flex items-start"
                    >
                      <img
                        src={baseImageUrl + movie?.poster_path}
                        alt={""}
                        className="w-10 "
                      />
                      {movie.title ? (
                        <div className="ml-2 sm:text-xs md:text-xs">
                          <Link to={`/movie/${movie.id}`}>{movie.title}</Link>
                          <p>Movie</p>
                        </div>
                      ) : (
                        <div className="ml-2 sm:text-xs md:text-xs">
                          <Link to={`/tv/${movie.id}`}>{movie.name}</Link>
                          <p>Tv Show</p>
                        </div>
                      )}
                    </div>
                  ))
                : null}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
