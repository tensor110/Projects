import React from "react";
import "../App.css";
import { NavLink } from "react-router-dom";

function ResetPassword() {
  return (
    <div className="flex justify-center items-center w-screen h-screen bg-gradient-to-b from-[#110f27] to-[#242158]">
      <div
        id="glassmorph"
        className="w-1/3 flex flex-col items-center justify-center py-8 text-white gap-6"
      >
        <h3 className="text-4xl font-medium">Reset Password</h3>
        <form action="" className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <label htmlFor="" className="font-extralight">
              Enter Verification Code
            </label>
            <input
              type="number"
              name=""
              className="rounded-sm px-2 py-1 font-light text-sm text-black focus:outline-none"
              placeholder="Verifiation Code"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="" className="font-extralight">
              Password
            </label>
            <input
              type="password"
              name=""
              className="rounded-sm px-2 py-1 font-light text-sm text-black focus:outline-none"
              placeholder="Password"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="" className="font-extralight">
              Confirm Password
            </label>
            <input
              type="password"
              name=""
              className="rounded-sm px-2 py-1 font-light text-sm text-black focus:outline-none"
              placeholder="Confirm Password"
            />
          </div>
          <NavLink to="/reset-password">
            <button
              type="submit"
              className="bg-blue-200 px-6 py-1 rounded-sm text-black font-medium hover:bg-blue-300 mt-3 w-[300px]"
            >
              Reset Password
            </button>
          </NavLink>
        </form>
        <div>
          <span>
            Back to{" "}
            <NavLink
              to="/login"
              className="font-semibold underline cursor-pointer"
            >
              Login
            </NavLink>
          </span>
        </div>
      </div>
    </div>
  );
}

export default ResetPassword;
