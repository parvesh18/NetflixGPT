import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [signInForm, setSignInForm] = useState(false);

  function toggleSignInForm() {
    setSignInForm(!signInForm);
  }

  return (
    <div>
      <Header />
      {/* Background Image */}
      <div>
        <img
          className="brightness-50 w-screen h-screen object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/47c2bc92-5a2a-4f33-8f91-4314e9e62ef1/web/IN-en-20240916-TRIFECTA-perspective_72df5d07-cf3f-4530-9afd-8f1d92d7f1a8_large.jpg"
          alt="background-img"
        />
      </div>
      {/* Form section */}
      <form className="absolute w-4/12 top-32 left-[27rem] bg-black p-10 py-15 bg-black/60 rounded-md text-white">
        <h2 className="font-bold text-3xl m-2 mb-7">
          {signInForm ? " Sign In" : "Sign Up"}
        </h2>
        {!signInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className=" p-3 m-2 my-5 block w-full mb-6 bg-black border-[1px] border-white rounded-md"
            required
          />
        )}
        <input
          type="email"
          placeholder="Email or mobile number"
          className=" p-3 m-2 my-5 block w-full mb-6 bg-black border-[1px] border-white rounded-md"
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="p-3 m-2 block w-full mb-6 bg-black border-[1px] border-white rounded-md"
          required
        />
        <button className="p-2 m-2 block w-full bg-[#E50F14] font-bold rounded-md">
          {signInForm ? " Sign In" : "Sign Up"}
        </button>
        <p className="py-4 mt-6 cursor-pointer" onClick={toggleSignInForm}>
          {signInForm
            ? "New to Netflix? Sign Up Now."
            : "Already Registered? Sign In Now."}
        </p>
      </form>
    </div>
  );
};

export default Login;
