import React from "react";
import lang from "../utils/languageConstants";
import { useSelector } from "react-redux";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);

  function formHandler(e) {
    e.preventDefault();
  }

  return (
    <div>
      <form
        onSubmit={formHandler}
        className="absolute top-28 left-72 bg-black p-4 rounded-md bg-opacity-70 "
      >
        <input
          type="text"
          className="border-2 w-[400px] px-6 py-2 rounded-sm text-black focus:outline-none mr-2"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button className="bg-red-600  px-8 py-2 ml-2 selection:border-none font-semibold tracking-wide hover:bg-opacity-80 duration-300">
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
