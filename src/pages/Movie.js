import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getMovie, getMovieRec } from "../redux/actions";
import { baseImageUrl } from "../services/instances";
import { AiFillStar } from "react-icons/ai";
import Moviecard from "../components/Moviecard";

const Movie = () => {
  const id = useParams();
  const [videoPlayer, setVideoPlayer] = useState(false);
  const dispatch = useDispatch();
  const movie = useSelector((state) => state.movie);
  const movieRecom = useSelector((state) => state.movieRecommendations);
  const recommendations = movieRecom.recom.results?.slice(1, 8);
  const data = movie?.movie;
  const trailer = data?.videos?.results;
  const findTrailer = trailer?.find((video) => video.type === "Trailer");

  const videoSrc = `https://www.youtube.com/embed/${findTrailer?.key}`;

  useEffect(() => {
    dispatch(getMovie(id, setVideoPlayer));
  }, [dispatch, id]);

  useEffect(() => {
    dispatch(getMovieRec(id));
  }, [dispatch, id]);

  const bg = baseImageUrl + data.backdrop_path;
  const poster = baseImageUrl + data.poster_path;
  return (
    <>
      <div className="w-full min-h-screen bg-gray-900 font-ubuntu overflow-x-hidden">
        <div
          className="container mx-auto  bg-cover bg-center relative min-h-screen  p-20 sm:px-4 sm:pt-10"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url(${bg})`,
          }}
        >
          <div className="pt-20 flex text-white relative sm:pt-10">
            <div className="flex sm:flex-col sm:py-4 sm:m-0">
              <div className="flex-1 pb-6 ">
                <img
                  src={poster}
                  alt={data.title}
                  className="w-[220px] h-[300px] sm:w-full sm:object-center "
                />
              </div>
              <div className="flex flex-col ml-10 gap-3 sm:ml-0 flex-4 ">
                <h1 className="text-3xl flex items-center sm:text-lg md:text-lg">
                  {data.title}
                  <span className="text-2xl ml-2 opacity-60 pt-1">
                    ({new Date(data.release_date).getFullYear() || ""})
                  </span>
                </h1>
                <h2 className="sm:text-md md:text-md">{data.tagline}</h2>
                <p className="text-gray-300 sm:text-xs md:text-sm">
                  {data.overview}
                </p>
                <hr className="opacity-30" />
                <div className="flex gap-2 text-sm text-gray-300 sm:text-xs md:text-xs flex-wrap">
                  {data?.genres?.map((genre) => (
                    <div key={genre.id} className="flex">
                      <p>{genre.name}</p>
                    </div>
                  ))}
                  |
                  <p className="flex items-center gap-2">
                    {data.vote_average}
                    <span>
                      <AiFillStar className="text-yellow-500" />
                    </span>
                  </p>
                  |<span>{data.runtime} minutes.</span>
                </div>
                <hr className="opacity-30" />
                <div className="flex gap-2 flex-wrap text-sm text-gray-300">
                  {data?.production_companies?.map((company) => (
                    <div
                      key={company.id}
                      className="flex sm:text-xs md:text-xs"
                    >
                      <p>{company.name}.</p>
                    </div>
                  ))}
                </div>
                {findTrailer?.id && (
                  <button
                    className="p-2 text-white hover:bg-indigo-400 font-bold tracking-wider text-lg transition duration-500 border border-indigo-400 sm:text-sm md:text-sm"
                    onClick={() => setVideoPlayer(true)}
                  >
                    Play trailer
                  </button>
                )}
              </div>
            </div>
            {findTrailer && videoPlayer ? (
              <>
                <iframe
                  className="absolute top-0 left-0 right-0 w-full bottom-0 h-full mx-auto  aspect-video"
                  src={videoSrc}
                  title={findTrailer?.name}
                />
                <button
                  className="absolute bottom-20 right-10 z-10 text-white p-2 border border-black bg-black"
                  onClick={() => setVideoPlayer(false)}
                >
                  Close
                </button>
              </>
            ) : null}
          </div>
          {recommendations?.length > 0 && (
            <>
              <h3 className="text-xl text-white py-10 sm:text-sm md:text-sm">
                People also search for:
              </h3>
              <div className="flex sm:justify-center gap-3 sm:flex-wrap md:flex-wrap sm:gap-6 md:gap-6 lg:flex-wrap lg:gap-6">
                {recommendations?.map((recom) => (
                  <Moviecard
                    key={recom.id}
                    title={recom.title}
                    image={recom.poster_path}
                    year={recom.release_date}
                    description={recom.overview}
                    rating={recom.vote_average.toFixed(1)}
                    id={recom.id}
                    recom={recom}
                    button={
                      <button
                        className="bg-yellow-400 font-bold py-1 hover:bg-yellow-500 px-4 text-black text-sm rounded sm:text-xs md:text-xs"
                        onClick={() =>
                          dispatch({ type: "ADD", payload: recom })
                        }
                      >
                        add to favourites
                      </button>
                    }
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Movie;
