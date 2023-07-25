import React from "react";
import Card from "../Card";
import { useNavigate } from "react-router-dom";

const HomePage = ({ isUserLoggedIn }) => {
  const navigate = useNavigate();
  return (
    <div className="w-11/12 mx-auto pt-[3rem]">
      {!isUserLoggedIn ? (
        <button
          className="rounded-lg px-[1rem] py-[0.5rem] bg-blue-500 text-white font-semibold text-sm mb-[1.5rem]"
          onClick={() => navigate("/login")}
        >
          Log in/ Sign up to See Matching RFQs
        </button>
      ) : (
        <div className="w-full text-right">
          <button
            className="rounded-lg px-[1rem] py-[0.5rem] bg-blue-500 text-white font-semibold text-sm mb-[1.5rem]"
            onClick={() => {
              sessionStorage.clear();
              localStorage.clear();
              navigate("/login");
            }}
          >
            Log out
          </button>
        </div>
      )}

      {/* cards container */}
      <div className="flex flex-col gap-10 pb-[2rem]">
        <Card isUserLoggedIn={isUserLoggedIn} />
        <Card isUserLoggedIn={isUserLoggedIn} />
        <Card isUserLoggedIn={isUserLoggedIn} />
        <Card isUserLoggedIn={isUserLoggedIn} />
      </div>
    </div>
  );
};

export default HomePage;
