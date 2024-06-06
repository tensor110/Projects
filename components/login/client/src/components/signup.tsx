"use client"
import React, { useState } from "react";
import axios from 'axios'

export default function signup() {
  const [name, setName] = useState<string | undefined>(undefined);
  const [email, setEmail] = useState<string | undefined>(undefined);
  const [password, setPasssword] = useState<string | undefined>(undefined);
  const [confirmpassword, setConfirmpasssword] = useState<string | undefined>(
    undefined
  );

  const handleSubmit= (e: React.FormEvent<HTMLFormElement>) =>{
    e.preventDefault()
    axios.post('http://localhost:3001/signup', {name,email, password, confirmpassword})
    .then(res => console.log(res))
    .catch(err => console.log(err))
  }

  return (
    <div className="flex flex-col h-[90%] w-1/3 items-center py-[2%] gap-[4%] rounded-2xl shadow-2xl justify-center">
      <div className="text-3xl font-bold">Sign Up</div>
      <span className="text-sm font-semibold -mt-[2%]">
        Create Your Account
      </span>
      <form action="" className="flex flex-col gap-3 w-4/5" onSubmit={handleSubmit}>
        <input
          type="text"
          name=""
          id=""
          placeholder="Username"
          className="border-[1px] px-7 py-2 rounded-xl bg-[#f0e4f2]"
          onChange={(e)=>setName(e.target.value)}
        />
        <input
          type="email"
          name=""
          id=""
          placeholder="Email"
          className="border-[1px] px-7 py-2 rounded-xl bg-[#f0e4f2]"
          onChange={(e)=>setEmail(e.target.value)}
        />
        <input
          type="password"
          name=""
          id=""
          placeholder="Password"
          className="border-[1px] px-7 py-2 rounded-xl bg-[#f0e4f2]"
          onChange={(e)=>setPasssword(e.target.value)}
        />
        <input
          type="password"
          name=""
          id=""
          placeholder="Confirm Password"
          className="border-[1px] px-7 py-2 rounded-xl bg-[#f0e4f2]"
          onChange={(e)=>setConfirmpasssword(e.target.value)}
        />
        <input type="submit" value="Sign Up" className="bg-[#9c28b1] py-2 rounded-xl text-white font-semibold"/>
      </form>
      <span>or</span>
      <button className="border-[1px] border-[#9c28b1] text-[#9c28b1] font-semibold w-4/5 py-2 rounded-xl">
        Sign in with Google
      </button>
      <span className="flex gap-[5%] w-4/5 justify-center">
        Already hava an account?{" "}
        <a href="/login" className="text-[#9c28b1] font-semibold">
          Login
        </a>
      </span>
    </div>
  );
}
