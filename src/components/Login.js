import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidation } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BG_URL } from "../utils/constants";

const Login = () => {
  const [signInForm, setSignInForm] = useState(false);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  function toggleSignInForm() {
    setSignInForm(!signInForm);
  }

  function buttonHandler() {
    const message = checkValidation(
      email.current.value,
      password.current.value
    );
    setError(message);

    if (message) return;

    // Sign In / Sign Up Form
    if (!signInForm) {
      // Sign Up Logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          // add displayName & profile picture
          updateProfile(user, {
            displayName: name.current.value,
          })
            .then(() => {
              const { uid, email, displayName } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                })
              );
            })
            .catch((error) => {
              setError(error.message);
              console.log(error);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setError(errorCode + " " + errorMessage);
        });
    } else {
      // Sign In Logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setError(errorCode + " " + errorMessage);
        });
    }
  }

  return (
    <div>
      <Header />
      {/* Background Image */}
      <img
        className="brightness-50 w-screen h-screen object-cover"
        src={BG_URL}
        alt="background-img"
      />
      {/* Form section */}
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute w-4/12 top-20 left-[25rem] bg-black p-10 py-15 bg-black/60 rounded-md text-white"
      >
        <h2 className="font-bold text-3xl m-2 mb-7">
          {signInForm ? " Sign In" : "Sign Up"}
        </h2>
        {!signInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className=" p-3 m-2 my-5 block w-full mb-6 bg-black border-[0.5px] border-white rounded-md"
          />
        )}
        <input
          ref={email}
          type="email"
          placeholder="Email or mobile number"
          className=" p-3 m-2 my-5 block w-full mb-6 bg-black border-[0.5px] border-white rounded-md"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-3 m-2 block w-full mb-6 bg-black border-[0.5px] border-white rounded-md"
        />
        <p className="text-red-500 font-semibold">{error}</p>
        <button
          onClick={buttonHandler}
          className="p-2 m-2 block w-full bg-[#E50F14] hover:bg-[#d21f22] duration-200 font-bold rounded-md tracking-wider"
        >
          {signInForm ? " Sign In" : "Sign Up"}
        </button>
        <p
          className="py-4 mt-6 cursor-pointer text-gray-200 hover:text-gray-300 duration-200"
          onClick={toggleSignInForm}
        >
          {signInForm
            ? "New to Netflix? Sign Up Now."
            : "Already Registered? Sign In Now."}
        </p>
      </form>
    </div>
  );
};

export default Login;
