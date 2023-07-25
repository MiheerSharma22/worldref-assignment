import React from "react";
import { MdVerified } from "react-icons/md";
import { FaRegShareSquare } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Card = ({ isUserLoggedIn }) => {
  const navigate = useNavigate();

  function addToDealsClickHandler() {
    if (!isUserLoggedIn) {
      toast.error("Please Log In first!");
      navigate("/login");
    }
  }

  function checkDealsClickHandler() {
    if (!isUserLoggedIn) {
      toast.error("Please Log In first!");
      navigate("/login");
    }
  }

  return (
    <div className="card flex flex-col w-full rounded-xl border border-slate-300">
      {/* upper */}
      <div className="flex border-b border-slate-300">
        {/* left -> date, id and verified */}
        <div className="flex w-[80%] justify-between items-center p-[1.7rem] border-r border-slate-300">
          <p>1 Feb 2023</p>

          {/* id and verified container */}
          <div className="flex justify-between w-[40%]">
            {/* id */}
            <div className="flex gap-5">
              <p className="font-bold">RFQ ID</p>
              <p>01098098</p>
            </div>

            {/* verified */}
            <MdVerified color="green" fontSize={"1.6rem"} />
          </div>
        </div>

        {/* right -> closing date */}
        <div className="w-[20%] flex items-center justify-center gap-5">
          <p className="font-bold">Closing Date</p>
          <p>25 Feb 2023</p>
        </div>
      </div>

      {/* lower */}
      <div className="flex">
        {/* left */}
        <div className="w-[80%] flex flex-col gap-5 p-[1.7rem] border-r border-slate-300">
          {/* deal number and share button */}
          <div className="flex justify-between items-center">
            <p>
              <span className="font-semibold"> Deal No:</span> 1429
            </p>

            <button>
              <FaRegShareSquare color="#189AB4" fontSize={"1.3rem"} />
            </button>
          </div>

          {/* spare parts and live */}
          <div className=" flex gap-5 items-center">
            <p className="font-bold">Spare Parts</p>
            <div className="px-[1rem] bg-blue-500 text-white font-medium text-sm rounded-full">
              Live
            </div>
          </div>

          {/* lorem text */}
          <p>
            Supply AC Stator Coil Dummy Text Lorem Ipsem Dummy Supply AC Stator
            Coil Dummy Text Lorem Supply AC Stator Coil Dummy Text Lorem. Supply
            AC Stator Coil Dummy{" "}
          </p>

          {/* tags */}
          <div className="flex gap-3 mt-[0.5rem]">
            <div className="px-[1rem] py-[0.1rem] bg-blue-100 text-sm rounded-full">
              Product
            </div>
            <div className="px-[1rem] py-[0.1rem] bg-blue-100 text-sm rounded-full">
              Product
            </div>
            <div className="px-[1rem] py-[0.1rem] bg-blue-100 text-sm rounded-full">
              Agriculture
            </div>
            <div className="px-[1rem] py-[0.1rem] bg-blue-100 text-sm rounded-full">
              Product
            </div>
            <div className="px-[1rem] py-[0.1rem] bg-blue-100 text-sm rounded-full">
              Product
            </div>
          </div>
        </div>

        {/* right -> buttons */}
        <div className="w-[20%] flex flex-col items-center justify-center gap-5">
          <button
            className="px-[1.5rem] py-[0.75rem] rounded-lg bg-blue-500 text-white font-medium"
            onClick={addToDealsClickHandler}
          >
            Add to my deals
          </button>
          <button
            className="px-[2rem] py-[0.75rem] rounded-lg border-2 border-blue-500 text-blue-500 font-medium"
            onClick={checkDealsClickHandler}
          >
            Check details
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;