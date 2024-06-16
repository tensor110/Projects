import React from "react";
import "../App.css";
import { NavLink } from "react-router-dom";

function Login() {
  return (
    <div className="flex justify-center items-center w-screen h-screen bg-gradient-to-b from-[#110f27] to-[#242158]">
      <div
        id="glassmorph"
        className="h-4/5 w-1/3 flex flex-col items-center justify-center py-8 text-white gap-6"
      >
        <h3 className="text-4xl font-medium">Login</h3>
        <form action="" className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <label htmlFor="" className="font-extralight">Username</label>
            <input type="text" name="" className="rounded-sm px-2 py-1 font-light text-sm text-black focus:outline-none" placeholder="Username"/>
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="">Password</label>
            <input type="password" name="" className="rounded-sm px-2 py-1 font-light text-sm text-black focus:outline-none" placeholder="Password"/>
          </div>
          <NavLink to='forgot-password' className='flex justify-end -my-2'>
            <span className="text-xs font-thin">Forgot Password ?</span>
          </NavLink>
          <button
            type="submit"
            className="bg-blue-200 px-6 py-1 rounded-sm text-black font-medium hover:bg-blue-300 mt-3"
          >
            Login
          </button>
          <div className="flex justify-center -my-2 relative or">or</div>
          <button
            type="submit"
            className="bg-white px-6 py-1 rounded-sm text-black font-medium hover:bg-[#ffffffda] flex items-center gap-3"
          >
            <img src="https://www.vectorlogo.zone/logos/google/google-icon.svg" alt="" className="size-3" />
            Login with Google
          </button>
        </form>
        <div>
            <span>Not a member? <NavLink>Register </NavLink>Now</span>
        </div>
      </div>
    </div>
  );
}

export default Login;
