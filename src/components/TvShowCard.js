import React from "react";
import { Link } from "react-router-dom";
import { baseImageUrl } from "../services/instances";
import "./movie-card.css";
import { AiFillStar } from "react-icons/ai";

const TvShowCard = (props) => {
  const bg = baseImageUrl + props.image;
  const imgplaceholder = bg && "bg-black";

  return (
    <div className="main-container">
      <div className="card">
        <div
          className={`front rounded-xl ${imgplaceholder}`}
          style={{ backgroundImage: `url(${bg})` }}
        ></div>

        <div
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.9), rgba(0,0,0,0.9)), url(${bg})`,
          }}
          className={`back rounded-xl text-white p-2 flex justify-around flex-col ${imgplaceholder}`}
        >
          <Link to={`/tv/${props.id}`}>
            <h2 className="text-sm py-1 sm:text-xs md:text-xs">{props.name}</h2>
            {props.description ? (
              <p className="text-xs opacity-60 sm:hidden md:hidden ">
                {props.description.slice(0, 80)}...
              </p>
            ) : (
              <p className="text-xs opacity-60 md:hidden sm:hidden">
                description is not available right now.
              </p>
            )}
          </Link>
          <div className="flex items-center">
            <p className="text-sm sm:text-xs md:text-xs">{props.rating}</p>
            <AiFillStar className="text-yellow-400 ml-1 text-base" />
            <p className="ml-auto text-sm sm:text-xs md:text-xs">
              {new Date(props.year).getFullYear()}
            </p>
          </div>
          {props.button}
        </div>
      </div>
    </div>
  );
};

export default TvShowCard;
