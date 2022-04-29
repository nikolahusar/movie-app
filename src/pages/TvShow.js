import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getTvShow, getTvShowRec } from "../redux/actions";
import { AiFillStar } from "react-icons/ai";
import { baseImageUrl } from "../services/instances";
import TvShowCard from "../components/TvShowCard";

const TvShow = () => {
  const id = useParams();
  const [videoPlayer, setVideoPlayer] = useState(false);

  const dispatch = useDispatch();
  const tvShow = useSelector((state) => state.tvShow);
  const data = tvShow.tvShow;
  const bg = baseImageUrl + data.backdrop_path;
  const poster = baseImageUrl + data.poster_path;
  const tvShowRecom = useSelector((state) => state.tvShowRecommendations);
  const recommendations = tvShowRecom.recom.results?.slice(1, 8);
  const trailer = data?.videos?.results;
  const findTrailer = trailer?.find((video) => video.type === "Trailer");

  const videoSrc = `https://www.youtube.com/embed/${findTrailer?.key}`;
  useEffect(() => {
    dispatch(getTvShow(id, setVideoPlayer));
  }, [dispatch, id]);
  useEffect(() => {
    dispatch(getTvShowRec(id));
  }, [dispatch, id]);
  return (
    <div className="w-full min-h-screen bg-gray-900 font-ubuntu">
      <div
        className="max-w-7xl mx-auto  bg-cover bg-center relative min-h-screen  p-20 "
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url(${bg})`,
        }}
      >
        <div className="pt-20 flex text-white relative">
          <img
            src={poster}
            alt={data.name}
            className="w-52 h-80 sm:w-36 sm:h-48"
          />
          <div className="flex flex-col ml-10 gap-3">
            <h1 className="text-3xl flex items-center sm:text-lg md:text-lg">
              {data.name}
              <span className="text-2xl ml-2 opacity-60 pt-1">
                ({new Date(data.first_air_date).getFullYear() || ""})
              </span>
            </h1>
            <h2 className="sm:text-md md:text-md">{data.tagline}</h2>
            <p className="text-gray-300 sm:text-xs md:text-sm">
              {data.overview}
            </p>
            <hr className="opacity-30" />
            <div className="flex gap-2 text-sm text-gray-300 sm:text-xs md:text-xs">
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
              |<span>{data.episode_run_time} minutes.</span>
            </div>
            <hr className="opacity-30" />
            <div className="flex gap-2 text-sm text-gray-300 sm:text-xs md:text-xs">
              {data?.production_companies?.map((company) => (
                <div key={company.id} className="flex">
                  <p>{company.name}.</p>
                </div>
              ))}
            </div>
            {findTrailer?.id && (
              <button
                className="p-2 text-white hover:bg-indigo-400 font-bold tracking-wider text-lg transition duration-500 border border-indigo-400  sm:text-sm md:text-sm"
                onClick={() => setVideoPlayer(true)}
              >
                Play trailer
              </button>
            )}
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
            <div className="flex gap-3 sm:flex-wrap md:flex-wrap sm:gap-6 md:gap-6 lg:flex-wrap lg:gap-6">
              {recommendations?.map((recom) => (
                <TvShowCard
                  key={recom.id}
                  name={recom.name}
                  image={recom.poster_path}
                  year={recom.first_air_date}
                  description={recom.overview}
                  rating={recom.vote_average.toFixed(1)}
                  id={recom.id}
                  recom={recom}
                  button={
                    <button
                      className="bg-yellow-400 font-bold py-1 hover:bg-yellow-500 px-4 text-black text-sm rounded sm:text-xs md:text-xs"
                      onClick={() =>
                        dispatch({ type: "ADD_TV_SHOW", payload: recom })
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
  );
};

export default TvShow;
