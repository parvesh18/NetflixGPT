import React from "react";
import { IMG_CDN_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const MovieCard = ({ id, posterPath }) => {
  return (
    <Link to={`${id}`}>
      <div className="w-32 pr-4 hover:scale-110 duration-300 cursor-pointer">
        <img
          className="rounded-sm"
          src={IMG_CDN_URL + posterPath}
          alt="Movie Card"
        />
      </div>
    </Link>
  );
};

export default MovieCard;
