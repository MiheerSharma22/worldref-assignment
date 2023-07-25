import React from "react";
import Card from "../Card";

const HomePage = ({ isUserLoggedIn }) => {
  return (
    <div className="w-11/12 mx-auto pt-[3rem]">
      {!isUserLoggedIn && (
        <button className="rounded-lg px-[1rem] py-[0.5rem] bg-blue-500 text-white font-semibold text-sm mb-[1.5rem]">
          Log in/ Sign up to See Matching RFQs
        </button>
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
