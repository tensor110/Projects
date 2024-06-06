"use client"
import React, { useState, useEffect } from "react";
import axios from 'axios'
import { useRouter } from 'next/router';


export default function login() {
  const [name, setName] = useState<string | undefined>(undefined);
  const [password, setPasssword] = useState<string | undefined>(undefined);
  
  const handleSubmit= (e: React.FormEvent<HTMLFormElement>) =>{
    e.preventDefault()
    axios.post('http://localhost:3001/login', {name, password})
    .then(res => {
      console.log(res)
      const router = useRouter();
      useEffect(() => {
        if (res.data === "Success") {
          router.push('/');
        }
      }, [res.data, router]);
    })
    .catch(err => console.log(err))
  }

  return (
    <div className="flex flex-col h-[90%] w-1/3 items-center py-[2%] gap-[7%] rounded-2xl shadow-2xl justify-center">
      <div className="text-3xl font-bold">Login</div>
      <span className="text-sm font-semibold -mt-[2%]">
        Enter your credentials to login
      </span>
      <form action="" className="flex flex-col gap-3 w-4/5" >
        <input
          type="text"
          name=""
          id=""
          placeholder="Username"
          className="border-[1px] px-7 py-2 rounded-xl bg-[#f0e4f2]"
          onChange={(e)=>setName(e.target.value)}
        />
        <input
          type="password"
          name=""
          id=""
          placeholder="Password"
          className="border-[1px] px-7 py-2 rounded-xl bg-[#f0e4f2]"
          onChange={(e)=>setPasssword(e.target.value)}
        />
      </form>
      <button
        type="submit"
        className="bg-[#9c28b1] w-4/5 py-2 rounded-xl text-white font-semibold"
      >
        Login
      </button>
      <a href="">Forgot Password?</a>
      <span className="flex gap-[5%] w-4/5 justify-center">
        Don't have an account?{" "}
        <a href="/signup" className="text-[#9c28b1] font-semibold">
          Sign Up
        </a>
      </span>
    </div>
  );
}
