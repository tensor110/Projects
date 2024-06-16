import { useRef } from 'react';
import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
    const logo = useRef();
    const login = useRef();

  return (
    <nav className="md:w-full lg:px-8 md: px-4 py-4 flex justify-between items-center bg-gray-900 text-white overflow-x-hidden">
      <NavLink to='/' ref={logo} className="font-semibold italic border-none text-2xl p-0">Logo</NavLink>
      <NavLink to="login" className=" border-none p-0">
        <button className="bg-blue-200 px-6 py-1 rounded-lg text-black font-medium hover:bg-blue-300">Login</button>
      </NavLink>
    </nav>
  )
}

export default Navbar
