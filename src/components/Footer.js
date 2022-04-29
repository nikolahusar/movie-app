import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="max-w-screen bg-black  w-full min-h-64">
      <div className="max-w-screen-2xl w-full mx-auto   p-4 text-indigo-400 font-bold  ">
        <div className="flex items-center justify-between">
          <div className="">
            <div className="text-5xl sm:text-base">Moviex</div>
          </div>
          <div className=" flex items-center sm:gap-10  gap-20 py-6">
            <div>
              <h2 className="text-indigo-600 sm:text-sm md:text-sm">EXPLORE</h2>
              <ul className="color-indigo-200 gap-4 flex flex-col mt-5 sm:text-xs md:text-xs text-sm">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/movie-list">Movie List</Link>
                </li>
                <li>
                  <Link to="/tv-show-list">Tv Show List</Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-indigo-600 sm:text-sm md:text-sm">
                FOLLOW US
              </h2>
              <ul className="color-indigo-200 gap-4 flex flex-col mt-5 text-sm  sm:text-xs md:text-xs">
                <li>Instagram</li>
                <li>Facebook</li>
                <li>Twitter</li>
              </ul>
            </div>
            <div>
              <h2 className="text-indigo-600 sm:text-sm md:text-sm">
                LEGAL STUFF
              </h2>
              <ul className="color-indigo-200 gap-4 text-sm flex flex-col mt-5  sm:text-xs md:text-xs">
                <li>Contact Us</li>
                <li>Privacy</li>
                <li>Term Of Use</li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="opacity-30" />
        <div className="flex justify-between items-center">
          <div className="mt-6">
            <p className="m-0 sm:text-sm md:text-sm">Brought to you by:</p>
            <img
              src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
              alt="api logo"
              className=" w-24 h-16 my-0"
            />
          </div>
          <div className="text-xs sm:text-xs md:text-xs">
            &copy; {new Date().getFullYear()} movieFreak, Inc. All rights
            reserved.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
