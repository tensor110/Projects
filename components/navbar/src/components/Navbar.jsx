import { NavLink } from "react-router-dom";
import "../App.css";
import { useEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import React from "react";

export default function Navbar() {
  const logo = useRef();
  const home = useRef();
  const about = useRef();
  const products = useRef();
  const contact = useRef();
  const login = useRef();

  const { contextSafe } = useGSAP();

  useGSAP(() =>
    contextSafe(() => {
      var t1 = gsap.timeline();
      t1.from(
        [
          logo.current,
          home.current,
          about.current,
          products.current,
          contact.current,
          login.current,
        ],
        {
          y: 40,
          duration: 0.7,
          delay: 0.5,
          opacity: 0,
          stagger: 0.15,
        }
      );
    })
  );
  return (
    <nav className="w-full px-8 py-4 flex justify-between items-center bg-gray-900 text-white">
      <NavLink
        to="/"
        ref={logo}
        className="font-semibold italic border-none text-2xl"
      >
        Logo
      </NavLink>
      <div className="md:flex lg:w-[45%] md:w-[55%] justify-around items-center hidden">
        <div className="flex w-2/3 justify-between items-center">
          <NavLink
            to="/"
            ref={home}
            className="hover:border-b-[1px] hover:border-b-blue-100"
          >
            Home
          </NavLink>
          <NavLink
            to="about"
            ref={about}
            className="hover:border-b-[1px] hover:border-b-blue-100"
          >
            About
          </NavLink>
          <NavLink to="products" ref={products} className="hover:border-b-[1px] hover:border-b-blue-100">
            Products
          </NavLink>
          <NavLink to="contact" ref={contact} className="hover:border-b-[1px] hover:border-b-blue-100">
            Contact
          </NavLink>
        </div>
        <NavLink to="login" className=" border-none">
          <button
            ref={login}
            className="bg-blue-200 px-6 py-1 rounded-lg text-black font-medium hover:bg-blue-300"
          >
            Login
          </button>
        </NavLink>
      </div>
      {/* <div className="md:hidden flex flex-col">
      <i class="ri-menu-3-fill"></i>
      <div className="flex flex-col w-2/3 justify-between items-center">
          <NavLink
            to="/"
            ref={home}
            className="hover:border-b-[1px] hover:border-b-blue-100"
          >
            Home
          </NavLink>
          <NavLink
            to="about"
            ref={about}
            className="hover:border-b-[1px] hover:border-b-blue-100"
          >
            About
          </NavLink>
          <NavLink to="products" ref={products} className="hover:border-b-[1px] hover:border-b-blue-100">
            Products
          </NavLink>
          <NavLink to="contact" ref={contact} className="hover:border-b-[1px] hover:border-b-blue-100">
            Contact
          </NavLink>
        </div>
        <NavLink to="login" className=" border-none">
          <button
            ref={login}
            className="bg-blue-200 px-6 py-1 rounded-lg text-black font-medium hover:bg-blue-300"
          >
            Login
          </button>
        </NavLink>
      </div> */}
    </nav>
  );
}
