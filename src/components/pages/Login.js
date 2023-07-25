import React, { useState } from "react";
import toast from "react-hot-toast";
import { FiEyeOff, FiEye } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const Login = ({ setIsUserLoggedIn }) => {
  const email = "test@gmail.com";
  const password = "test";

  const [showEmailError, setShowEmailError] = useState(false);
  const [showPasswordError, setShowPasswordError] = useState(false);

  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [isChecked, setIsChecked] = useState(true);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // function to handle form's state changes
  function formChangeHandler(event) {
    // making both error texts hide
    setShowEmailError(false);
    setShowPasswordError(false);

    setFormData((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  }

  // function to handle form submission
  function submitHandler(event) {
    // if email id do not match return with error message
    if (formData.email !== email) {
      event.preventDefault();
      setShowEmailError(true);
      return;
    }
    // if password do not match return with error message
    else if (formData.password !== password) {
      event.preventDefault();
      setShowPasswordError(true);
      return;
    }

    // if stay signed in is checked while logging in, setting email into localStorage else into sessionStorage
    if (isChecked) {
      localStorage.setItem("email", formData.email);
    } else {
      sessionStorage.setItem("email", formData.email);
    }

    toast.success("Successfully Logged in!");
    setIsUserLoggedIn(true);
    navigate("/");
  }

  return (
    <div className="w-full h-full flex items-center justify-center">
      {/* login container */}
      <div className="py-[2rem] px-[0.4rem] flex flex-col gap-8 rounded-lg loginContainer">
        <h2 className="text-[1.5rem] md:text-[2rem] font-semibold px-[6.5rem] md:px-[15rem]">
          Seller Log in
        </h2>

        <div className="border-t-2 border-slate-300 flex items-center justify-center">
          {/* form */}
          <form
            className="pt-[1.5rem] w-[80%] flex flex-col gap-5"
            onSubmit={submitHandler}
          >
            {/* email */}
            <div className="flex flex-col gap-1">
              <label htmlFor="email" className="font-semibold ">
                <p>
                  Email ID<span className="text-red-600 text-[1.2rem] ">*</span>
                </p>
              </label>
              {/* email error text */}
              {showEmailError && (
                <p className="text-red-600 text-xs md:text-sm font-medium">
                  This account doesn’t exist. Enter a different account or{" "}
                  <span className="text-blue-500">create a new one</span>
                </p>
              )}

              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                required
                className="rounded-lg border border-slate-300 px-[1rem] py-[0.5rem] outline-none font-normal "
                autoComplete="off"
                placeholder="Enter your email id used to create the account"
                onChange={formChangeHandler}
              />
            </div>

            {/* password */}
            <div className="flex flex-col gap-1">
              <label htmlFor="password" className="font-semibold flex flex-col">
                <p>
                  Password<span className="text-red-600 text-[1.2rem] ">*</span>
                </p>
              </label>

              {/* password error text */}
              {showPasswordError && (
                <p className="text-red-600 text-[0.7rem] md:text-sm font-medium">
                  Your password is incorrect. If you don’t remember your
                  password <span className="text-blue-500">reset it now</span>
                </p>
              )}

              <div className="flex items-center justify-between w-full border border-slate-300 px-[1rem] py-[0.5rem] rounded-lg">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  value={formData.password}
                  required
                  className="w-[90%]  outline-none"
                  onChange={formChangeHandler}
                  placeholder="Enter Password"
                />
                {!showPassword ? (
                  <button type="button" onClick={() => setShowPassword(true)}>
                    <FiEyeOff color="#189AB4" fontSize={"1.2rem"} />
                  </button>
                ) : (
                  <button type="button" onClick={() => setShowPassword(false)}>
                    <FiEye color="#189AB4" fontSize={"1.2rem"} />
                  </button>
                )}
              </div>
            </div>

            {/* stay signed in and forgot password text */}
            <div className="flex flex-col gap-3 md:flex-row md:justify-between items-center">
              <div className="flex flex-row-reverse gap-3">
                <label htmlFor="check" className="font-medium">
                  Stay signed in
                </label>
                <input
                  type="checkbox"
                  id="check"
                  checked={isChecked}
                  className={`checkbox ${
                    isChecked ? " bg-blue-500" : "bg-transparent"
                  }`}
                  onChange={() => setIsChecked(!isChecked)}
                />
              </div>

              {/* forgot password */}
              <button className="text-sm text-blue-600 font-medium">
                Forgot Password?
              </button>
            </div>

            {/* login button */}
            <button
              type="submit"
              className="mt-[2rem] rounded-lg px-[1rem] py-[0.75rem] outline-none font-semibold bg-blue-500 text-white text-lg"
            >
              Log In
            </button>

            {/* text to register */}
            <p className="text-center font-semibold text-[0.875rem] md:text-lg">
              Don’t Have An Account?{" "}
              <span className="text-blue-600"> Create Account</span>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
