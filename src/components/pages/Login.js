import React, { useState } from "react";
import { FiEyeOff, FiEye } from "react-icons/fi";
import { Link } from "react-router-dom";

const Login = ({ setIsUserLoggedIn }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [isChecked, setIsChecked] = useState(true);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  function formChangeHandler(event) {
    setFormData((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  }

  function submitHandler() {
    //todo: on clicking on login check is stay signed in is checked or not, if yes then localStorage else sessionStorage
    //todo: if successful response from server then setIsLoggedIn to true
  }

  return (
    <div className="w-full h-full flex items-center justify-center">
      {/* login container */}
      <div className="py-[2rem] px-[0.4rem] flex flex-col gap-8 rounded-lg loginContainer">
        <h2 className="text-[2rem] font-semibold px-[13rem]">Seller Log in</h2>

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
            <div className="flex justify-between items-center">
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

            {/* text to route to register */}
            <p className="text-center font-semibold text-lg">
              Don’t Have An Account?{" "}
              <Link to={"/register"}>
                <span className="text-blue-600"> Create Account</span>
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
