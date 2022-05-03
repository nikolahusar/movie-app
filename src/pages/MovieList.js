import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMovieGenres, getMovieList } from "../redux/actions";
import Moviecard from "../../src/components/Moviecard";
import Pagination from "../components/Pagination";
import { AiFillCaretDown } from "react-icons/ai";
const MovieList = () => {
  const [state, setState] = useState({ currentPage: 1 });
  const dispatch = useDispatch();
  const movieList = useSelector((state) => state.movielist);
  const genres = useSelector((state) => state.movieGenres.genres.genres);
  const [genreId, setGenreId] = useState([]);
  const [options, setOptions] = useState("popularity.desc");
  const [menu, setMenu] = useState(false);

  console.log(options);
  const filterOptions = [
    { name: "Popularity ↓", id: "popularity.desc" },
    { name: "Popularity ↑", id: "popularity.asc" },
    { name: "Release date ↑", id: "release_date.asc" },
    { name: "Release date ↓", id: "release_date.desc" },
    { name: "Revenue ↑", id: "revenue.asc" },
    { name: "Revenue ↓", id: "revenue.desc" },
    { name: "Title A-Z", id: "original_title.asc" },
    { name: "Title Z-A", id: "original_title.desc" },
    { name: "Vote average ↑", id: "vote_average.asc" },
    { name: "Vote average ↓", id: "vote_average.desc" },
  ];
  function onClickGenre(genre) {
    let newGenres = [];
    const found = genreId.find((g) => g === genre.id);
    if (found) {
      newGenres = genreId.filter((genre) => genre !== found);
    } else {
      newGenres = [...genreId, genre.id];
    }
    setGenreId(newGenres);
  }

  useEffect(() => {
    dispatch(getMovieList(state.currentPage, genreId, options));
    dispatch(getMovieGenres());
  }, [dispatch, state.currentPage, genreId, options]);

  const nextPage = (pageNumber) => {
    dispatch(getMovieList(pageNumber));
    setState({ currentPage: pageNumber });
  };
  const numberPages = movieList.movielist.total_pages;
  const handleOption = (option) => {
    setOptions(option);
    setMenu(false);
  };
  return (
    <div className="bg-gray-800 text-white">
      <div className="container mx-auto p-4 font-ubuntu">
        <h1 className="text-2xl mb-8 mt-20 font-semibold text-center">
          Movie list
        </h1>
        <div className="flex flex-wrap text-sm gap-4 my-10 items-center ">
          {genres?.map((genre) => (
            <div
              key={genre.id}
              className="flex items-center border border-gray-600 p-2 rounded cursor-pointer"
            >
              <p className="text-yellow-400 text-xs">{genre.name}</p>
              <input
                type="checkbox"
                className="ml-2"
                value={genre.id}
                onChange={() => onClickGenre(genre)}
              />
            </div>
          ))}
          <div className="relative">
            <div
              onClick={() => setMenu(!menu)}
              className="flex items-center cursor-pointer rounded text-xs text-indigo-600 text-bold p-2 bg-yellow-400 hover:bg-yellow-300"
            >
              Sort by
              <span className="px-1">
                <AiFillCaretDown />
              </span>
            </div>
            {menu && (
              <div
                className={`absolute top-full min-w-full w-200 bg-yellow-400 shadow-md mt-0.5 rounded transition z-10   `}
              >
                {filterOptions.map((option) => (
                  <div
                    className="cursor-pointer"
                    key={option.id}
                    onClick={() => handleOption(option.id)}
                  >
                    <p className="p-3 text-indigo-600 hover:bg-yellow-300">
                      {option.name}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        <div className="max-w-screen-2xl flex-wrap flex gap-4 mb-20">
          {movieList?.movielist?.results?.map((movie) => (
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
                  className="bg-yellow-400 font-bold py-1 hover:bg-yellow-500 px-4 text-black text-sm rounded"
                  onClick={() => dispatch({ type: "ADD", payload: movie })}
                >
                  add to favourites
                </button>
              }
            />
          ))}
          {numberPages > 20 && (
            <Pagination
              pages={numberPages}
              nextPage={nextPage}
              currentPage={state.currentPage}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
