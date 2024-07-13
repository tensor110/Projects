import { useState } from "react";
import "../App.css";
import { ToastContainer } from "react-toastify";
import { NavLink, useNavigate } from "react-router-dom";
import { handleError, handleSuccess } from "../utils";

function Login() {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };
  console.log(loginData);

  const handleSignin = async (e) => {
    e.preventDefault();
    const { username, password } = loginData;
    if (!username || !password) {
      return handleError("Username, Password required");
    }
    try {
      const url = `http://localhost:8080/auth/signin`;
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginData),
      });
      const result = await response.json();
      const { success, message, jwtToken, username, error } = result;
      if (success) {
        handleSuccess(message);
        localStorage.setItem('token', jwtToken);
        localStorage.setItem('loggedInUser', username)
        setTimeout(() => {
          navigate("/");
        }, 1000);
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
  };
  return (
    <div className="flex justify-center items-center w-screen h-screen bg-gradient-to-b from-[#110f27] to-[#242158]">
      <div
        id="glassmorph"
        className="w-1/3 flex flex-col items-center justify-center py-8 text-white gap-6"
      >
        <h3 className="text-4xl font-medium">Login</h3>
        <form action="" onSubmit={handleSignin} className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <label htmlFor="" className="font-extralight">
              Username
            </label>
            <input
              type="text"
              name="username"
              value={loginData.username}
              onChange={handleChange}
              className="rounded-sm px-2 py-1 font-light text-sm text-black focus:outline-none"
              placeholder="Username"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="">Password</label>
            <input
              type="password"
              name="password"
              value={loginData.password}
              onChange={handleChange}
              className="rounded-sm px-2 py-1 font-light text-sm text-black focus:outline-none"
              placeholder="Password"
            />
          </div>
          <NavLink to="/forgot-password" className="flex justify-end -my-2">
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
            type="button"
            className="bg-white w-[300px] px-6 py-1 rounded-sm text-black font-medium hover:bg-[#ffffffda] flex items-center gap-3 justify-center"
          >
            <img
              src="https://www.vectorlogo.zone/logos/google/google-icon.svg"
              alt=""
              className="size-3"
            />
            Login with Google
          </button>
        </form>
        <div>
          <span>
            Not a member?{" "}
            <NavLink
              to="/signup"
              className="font-semibold underline cursor-pointer"
            >
              Register
            </NavLink>{" "}
            Now
          </span>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Login;
