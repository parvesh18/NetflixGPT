import React from "react";
import useMovieCredits from "../hooks/useMovieCredits";
import { useSelector } from "react-redux";
import { IMG_CDN_URL } from "../utils/constants";
import { GrFormNext } from "react-icons/gr";

const MovieCredits = ({ id }) => {
  const credits = useSelector((store) => store.movies.movieCredits);

  useMovieCredits(id);

  if (!credits) return;

  const cast = credits.cast.slice(0, 11);
  const crew = credits.crew;

  const writer = crew.filter((item) => item.known_for_department === "Writing");

  const director = crew.filter(
    (item) => item.known_for_department === "Directing"
  );

  const producedBy = crew.filter(
    (item) => item.known_for_department === "Production"
  );

  const musicBy = crew.filter((item) => item.known_for_department === "Sound");

  const editingBy = crew.filter(
    (item) => item.known_for_department === "Editing"
  );

  return (
    <div>
      {/* Starcast */}
      <div className="mb-20 text-white px-20 mt-5">
        <h2 className="text-3xl font-bold mb-10 tracking-wide flex">
          <span>Top Cast</span>
          <GrFormNext className="mt-1 text-4xl" />
        </h2>
        <ul className=" flex gap-10 flex-wrap justify-start pl-4">
          {cast.map((actor) => {
            const { id, profile_path, original_name, character } = actor;
            const path =
              profile_path === null
                ? "/bgOGxlpen6HoJUXPEkL1kZrCvdR.jpg"
                : profile_path;
            return (
              <div
                key={id}
                className="flex flex-col gap-2 justify-center items-center hover:scale-110 duration-300"
              >
                <img
                  className="w-28 object-cover rounded-lg"
                  src={IMG_CDN_URL + path}
                  alt="actor-name"
                />
                <p className="font-semibold">{original_name}</p>
                <p className="text-gray-400 text-sm -mt-2">
                  {character.split("/")[0]}
                </p>
              </div>
            );
          })}
        </ul>
      </div>
      {/* Details */}
      <div className="text-white mx-28 mb-20 flex flex-col gap-y-7">
        {/* Director */}
        <div>
          <span className="font-semibold pr-4">
            Directors <GrFormNext className="text-xl inline-block" />
          </span>
          <div className="inline-block">
            {director.slice(0, 4).map((item, index) => (
              <div className="inline-block">
                <span className="text-sm text-gray-400 px-2">{item.name}</span>
                {director.slice(0, 4).length === index + 1 ? (
                  ""
                ) : (
                  <span className=" text-gray-400"> • </span>
                )}
              </div>
            ))}
          </div>
        </div>
        {/* Writers */}
        <div>
          <span className="font-semibold pr-4">
            Writers <GrFormNext className="text-xl inline-block" />
          </span>
          <div className="inline-block">
            {writer.slice(0, 4).map((item, index) => (
              <div className="inline-block">
                <span className="text-sm text-gray-400 px-2">{item.name}</span>
                {writer.slice(0, 4).length === index + 1 ? (
                  ""
                ) : (
                  <span className=" text-gray-400"> • </span>
                )}
              </div>
            ))}
          </div>
        </div>
        {/* Producers */}
        <div>
          <span className="font-semibold pr-4">
            Producers <GrFormNext className="text-xl inline-block" />
          </span>
          <div className="inline-block">
            {producedBy.slice(0, 4).map((item, index) => (
              <div className="inline-block">
                <span className="text-sm text-gray-400 px-2">{item.name}</span>
                {producedBy.slice(0, 4).length === index + 1 ? (
                  ""
                ) : (
                  <span className=" text-gray-400"> • </span>
                )}
              </div>
            ))}
          </div>
        </div>
        {/* Music */}
        <div>
          <span className="font-semibold pr-4">
            Music By <GrFormNext className="text-xl inline-block" />
          </span>
          <div className="inline-block">
            {musicBy.slice(0, 6).map((item, index) => (
              <div className="inline-block">
                <span className="text-sm text-gray-400 px-2">{item.name}</span>
                {musicBy.slice(0, 6).length === index + 1 ? (
                  ""
                ) : (
                  <span className=" text-gray-400"> • </span>
                )}
              </div>
            ))}
          </div>
        </div>
        {/* Editing */}
        <div>
          <span className="font-semibold pr-4">
            Editing By <GrFormNext className="text-xl inline-block" />
          </span>
          <div className="inline-block">
            {editingBy.slice(0, 6).map((item, index) => (
              <div className="inline-block">
                <span className="text-sm text-gray-400 px-2">{item.name}</span>
                {editingBy.slice(0, 6).length === index + 1 ? (
                  ""
                ) : (
                  <span className=" text-gray-400"> • </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="w-screen border-[0.5px] border-gray-600 mb-16"></div>
    </div>
  );
};

export default MovieCredits;
