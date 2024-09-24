import React from "react";
import Header from "./Header";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Browse = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  function signOutHandler() {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  }

  return (
    <div className="w-screen h-screen bg-black flex justify-between items-start px-10">
      <Header />
      <div className="mt-5">
        {user && (
          <img
            src={user.photoURL}
            className="h-10 w-10 object-cover inline-block rounded-full mr-3"
            alt="user-img"
          />
        )}
        <button
          onClick={signOutHandler}
          className="bg-[#E50F14] text-white font-semibold cursor-pointer active:scale-110 duration-200 rounded-lg p-2 px-3 tracking-wider select-none"
        >
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default Browse;
