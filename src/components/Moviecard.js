import React from "react";
// import { Link } from "react-router-dom";
import { baseImageUrl } from "../services/instances";
import { AiFillStar } from "react-icons/ai";
import "./movie-card.css";
import { Link } from "react-router-dom";
const Moviecard = (props) => {
  const bg = baseImageUrl + props.image;
  const imgplaceholder = bg && "bg-black";

  return (
    <div className="main-container">
      <div className="card ">
        <div
          className={`front rounded-xl ${imgplaceholder}`}
          style={{ backgroundImage: `url(${bg})` }}
        ></div>
        <div
          className={`back rounded-xl text-white p-2 flex justify-around flex-col ${imgplaceholder}`}
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.9), rgba(0,0,0,0.9)), url(${bg})`,
          }}
        >
          <Link to={`/movie/${props.id}`}>
            <h2 className="text-sm py-1 sm:text-xs md:text-xs">
              {props.title}
            </h2>
            <p className="text-xs opacity-60 sm:hidden md:hidden">
              {props.description.slice(0, 80)}...
            </p>
          </Link>
          <div className="flex items-center">
            <p className="text-sm sm:text-xs md:text-xs">
              {props.rating || ""}
            </p>
            <AiFillStar className="text-yellow-400 ml-1 text-base" />
            <p className="ml-auto text-sm sm:text-xs md:text-xs">
              {new Date(props.year).getFullYear() || ""}
            </p>
          </div>
          {props.button}
        </div>
      </div>
    </div>
  );
};

export default Moviecard;
