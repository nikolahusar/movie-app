import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Pagination from "../components/Pagination";
import TvShowCard from "../components/TvShowCard";
import { getTvShowGenres, getTvShowList } from "../redux/actions";
import { AiFillCaretDown } from "react-icons/ai";

const TvshowList = () => {
  const dispatch = useDispatch();
  const [state, setState] = useState({ currentPage: 1 });
  const [genreId, setGenreId] = useState([]);
  const [menu, setMenu] = useState(false);
  const tvshowList = useSelector((state) => state.tvshowlist);
  const tvShowGenres = useSelector(
    (state) => state.tvShowGenres.tvgenres.genres
  );
  const [options, setOptions] = useState("popularity.desc");

  console.log(options);
  const filterOptions = [
    { name: "Popularity ↓", id: "popularity.desc" },
    { name: "Popularity ↑", id: "popularity.asc" },
    { name: "Release date ↓", id: "first_air_date.desc" },
    { name: "Release date ↑", id: "first_air_date.asc" },
    { name: "Vote average ↓", id: "vote_average.desc" },
    { name: "Vote average ↑", id: "vote_average.asc" },
  ];

  useEffect(() => {
    dispatch(getTvShowList(state.currentPage, genreId, options));
  }, [dispatch, state.currentPage, genreId, options]);
  useEffect(() => {
    dispatch(getTvShowGenres());
  }, [dispatch]);

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

  const nextPage = (pageNumber) => {
    dispatch(getTvShowList(pageNumber));
    setState({ currentPage: pageNumber });
  };
  const numberPages = tvshowList.tvlist.total_pages;
  return (
    <div className="bg-gray-800 text-white min-h-screen w-screen">
      <div className="container mx-auto p-8 font-ubuntu">
        <h1 className="text-2xl mb-8 mt-20 font-semibold text-center">
          Tv Show List
        </h1>
        <div className="flex flex-wrap text-sm gap-4 items-center ">
          {tvShowGenres?.map((genre) => (
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
              className="flex items-center cursor-pointer rounded  text-indigo-600 text-bold p-2 bg-yellow-400 hover:bg-yellow-300 text-xs"
            >
              Sort by
              <span className="px-1">
                <AiFillCaretDown />
              </span>
            </div>
            {menu && (
              <div
                className={`absolute top-full min-w-full w-200 bg-yellow-400 shadow-md mt-0.5 rounded transition z-10  `}
              >
                {filterOptions.map((option) => (
                  <div
                    className="cursor-pointer"
                    key={option.id}
                    onClick={() => setOptions(option.id)}
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
        <div className="max-w-screen-2xl flex-wrap flex gap-4 mb-20 my-10">
          {tvshowList?.tvlist?.results?.map((tvShow) => (
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
                  className="bg-yellow-400 font-bold py-1 hover:bg-yellow-500 px-4 text-black text-sm rounded"
                  onClick={() =>
                    dispatch({ type: "ADD_TV_SHOW", payload: tvShow })
                  }
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

export default TvshowList;
