import { NavLink } from "react-router-dom";
import "../App.css";
import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function Navbar() {
  const logo = useRef();
  const home = useRef();
  const about = useRef();
  const products = useRef();
  const contact = useRef();
  const login = useRef();
  const mobilehome = useRef();
  const mobileabout = useRef();
  const mobileproducts = useRef();
  const mobilecontact = useRef();
  const mobilelogin = useRef();
  const menu = useRef()
  const menu_item_container = useRef()
  const cross = useRef()

  const { contextSafe } = useGSAP();
  // Animation for desktop navbar 
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

  // Animation for mobile navbar 
  useGSAP(() =>
    contextSafe(() => {
      var t2 = gsap.timeline();
      t2.from(menu_item_container.current,{
        right: '-100%',
        duration: 1,
        opacity: 0,
        ease: "circ.out",
    })
      t2.from(
        [
          mobilehome.current,
          mobileabout.current,
          mobileproducts.current,
          mobilecontact.current,
          mobilelogin.current,
        ],
        {
          x: 40,
          duration: 0.7,
          // delay: 0.5,
          opacity: 0,
          stagger: 0.15,
        }
      ),
      t2.from(cross.current,{
        opacity: 0
    })  
    t2.pause()
    menu.current.addEventListener("click", ()=>{
      t2.play()
    })
    cross.current.addEventListener("click", ()=>{
      t2.timeScale(3).reverse()
    })

  })
);

  return (
    <nav className="md:w-full lg:px-8 md: px-4 py-4 flex justify-between items-center bg-gray-900 text-white overflow-x-hidden">

      {/* Logo  */}
      <NavLink
        to="/"
        ref={logo}
        className="font-semibold italic border-none text-2xl p-0"
      >
        Logo
      </NavLink>
      
      <div className="md:flex lg:w-[45%] md:w-[55%] justify-around items-center hidden">
        <div className="flex w-2/3 justify-between items-center">
          <NavLink
            to="/"
            ref={home}
            className="hover-effect"
          >
            Home
          </NavLink>
          <NavLink
            to="about"
            ref={about}
            className="hover-effect"
          >
            About
          </NavLink>
          <NavLink to="products" ref={products} className="hover-effect">
            Products
          </NavLink>
          <NavLink to="contact" ref={contact} className="hover-effect">
            Contact
          </NavLink>
        </div>
        <NavLink to="login" className=" border-none p-0">
          <button
            ref={login}
            className="bg-blue-200 px-6 py-1 rounded-lg text-black font-medium hover:bg-blue-300"
          >
            Login
          </button>
        </NavLink>
      </div>

      {/* Mobile Navbar  */}
      <div className="md:hidden">
      <i className="ri-menu-3-fill" ref={menu}></i>
      <div className="flex flex-col px-8 py-4 h-screen w-2/5 absolute bg-[#070d1a76] top-0 right-0 backdrop-blur" ref={menu_item_container}>
      <div className="flex flex-col">
          <NavLink
            to="/"
            ref={mobilehome}
            className="my-3 py-1 w-fit"
          >
            Home
          </NavLink>
          <NavLink
            to="about"
            ref={mobileabout}
            className="my-3 py-1 w-fit"
          >
            About
          </NavLink>
          <NavLink 
            to="products" 
            ref={mobileproducts} 
            className="my-3 py-1 w-fit"
          >
            Products
          </NavLink>
          <NavLink 
            to="contact" 
            ref={mobilecontact} 
            className="my-3 py-1 w-fit"
            >
            Contact
          </NavLink>
        <NavLink to="login" className=" border-none my-3 py-1 w-fit">
          <button
            ref={mobilelogin}
            className="bg-blue-200 px-6 py-1 rounded-lg text-black font-medium hover:bg-blue-300"
          >
            Login
          </button>
        </NavLink>
        </div>
      <i ref={cross} className="ri-close-line absolute top-[5%] right-[10%] bg-white text-black rounded-full cursor-pointer w-6 h-6 flex items-center justify-center"></i>
      </div>
      </div>
    </nav>
  );
}
