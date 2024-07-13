import { useState } from "react";
import "../App.css";
import { ToastContainer } from 'react-toastify';
import { NavLink, useNavigate } from "react-router-dom";
import { handleError, handleSuccess } from "../utils";

function Signup() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) =>{
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }
  console.log(formData)

  const handleSignup = async (e) =>{
    e.preventDefault()
    const { username, email, password, confirmPassword } = formData 
    if(!username || !email || !password || !confirmPassword){
      return handleError("Username, Email ,Password required")
    }
    if (password !== confirmPassword) {
      return handleError("Passwords do not match");
    }
    try {
      const url = `http://localhost:8080/auth/signup`;
      const { confirmPassword, ...dataToSend } = formData;
      const response = await fetch(url, {
          method: "POST",
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(dataToSend)
      });
      const result = await response.json();
      const { success, message, error } = result;
      if (success) {
          handleSuccess(message);
          setTimeout(() => {
              navigate('/login')
          }, 1000)
      } else if (error) {
          const details = error?.details[0].message;
          handleError(details);
      } else if (!success) {
          handleError(message);
      }
      console.log(result);
  } catch (err) {
      handleError(err);
  }
  }

  return (
    <div className="flex justify-center items-center w-screen h-screen bg-gradient-to-b from-[#110f27] to-[#242158]">
      <div
        id="glassmorph"
        className="w-1/3 flex flex-col items-center justify-center py-8 text-white gap-6"
      >
        <h3 className="text-4xl font-medium">Sign Up</h3>
        <form action="" onSubmit={handleSignup} className="flex flex-col gap-3">
          <div className="flex flex-col gap-1">
            <label htmlFor="" className="font-extralight">
              Username
            </label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="rounded-sm px-2 py-1 font-light text-sm text-black focus:outline-none"
              placeholder="Username"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="" className="font-extralight">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="rounded-sm px-2 py-1 font-light text-sm text-black focus:outline-none"
              placeholder="Email"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="rounded-sm px-2 py-1 font-light text-sm text-black focus:outline-none"
              placeholder="Password"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="rounded-sm px-2 py-1 font-light text-sm text-black focus:outline-none"
              placeholder="Password"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-200 px-6 py-1 rounded-sm text-black font-medium hover:bg-blue-300 mt-3"
          >
            Sign Up
          </button>
          <div className="flex justify-center -my-2 relative or">or</div>
          <button
            type="button"
            className="bg-white w-[300px] px-6 py-1 rounded-sm text-black font-medium hover:bg-[#ffffffda] flex items-center gap-3 justify-center"
          >
            <img
              src="https://www.vectorlogo.zone/logos/google/google-icon.svg"
              alt=""
              className="size-3"
            />
            Signup with Google
          </button>
        </form>
        <div>
          <span>
            Already have an account?{" "}
            <NavLink
              to="/login"
              className="font-semibold underline cursor-pointer"
            >
              Login
            </NavLink>{" "}
            Now
          </span>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Signup;
