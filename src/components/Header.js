import React, { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { addUser, removeUser } from "../utils/userSlice";
import { useDispatch } from "react-redux";
import { LOGO } from "../utils/constants";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import IMG from "../images/sign-out-logo.png";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((store) => store.user);

  function signOutHandler() {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  }

  useEffect(() => {
    // acts as a event listener [ fires when sign-in / sign-up / sign-out ]
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    // unsubscribe when components unmounts
    return () => unsubscribe;
  }, []);

  return (
    <div className="absolute w-screen bg-gradient-to-b from-black flex justify-between items-start px-10 z-10">
      <img className="w-44 z-10 ml-10 mt-5" src={LOGO} alt="" />
      <div className="mt-5 cursor-pointer group" onClick={signOutHandler}>
        {user && (
          <div>
            <img
              src={IMG}
              className="h-10 w-10 object-cover inline-block pr-1 group-hover:scale-110 group-hover:duration-200"
              alt="user-img"
            />
            <p className="text-white font-semibold inline-block">Sign Out</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
