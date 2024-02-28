import React, { useRef, useState } from "react";
import Header from "./Header";
import { validateFormData } from "../utils/validate";

const Login = () => {
  const [isSignInForm, setIsSignForm] = useState(true);
  const [errorMessage,setErrorMessage] = useState(null);
  const email = useRef(null)
  const password = useRef(null)

  const handleButtonClick = () => {
    const message = validateFormData(email.current.value,password.current.value);
    setErrorMessage(message)
    console.log(message)
    console.log(email.current.value)
    console.log(password.current.value)

  };
  const toggleClick = () => {
    setIsSignForm(!isSignInForm);

  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/2e07bc25-8b8f-4531-8e1f-7e5e33938793/e4b3c14a-684b-4fc4-b14f-2b486a4e9f4e/IN-en-20240219-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="logo"
        />
      </div>
      <form onSubmit={(e)=>e.preventDefault()} className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
        <h1 className="font-bold text-3xl py-4">
          {" "}
          {isSignInForm ? "Sign In" : "Sign Up"}{" "}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-gray-800 rounded-lg"
          />
        )}
        <input
        ref={email}
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-gray-800 rounded-lg"
        />
        <input
        ref={password}
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-800 rounded-lg"
        />
        <p className=" text-red-600">{errorMessage}</p>
        <button
          className="p-4 my-6 bg bg-red-700 w-full rounded-lg"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="p-4 cursor-pointer" onClick={toggleClick}>
          {isSignInForm
            ? "New to Netflix ? Sign Up Now"
            : "Already a User ?  Sign In"}
        </p>
      </form>
    </div>
  );
};

export default Login;
