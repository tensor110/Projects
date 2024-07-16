import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ProfilePic from "../assets/profile.png";
import {handleError} from '../utils'
// import axios from "axios";

function Profile() {
  const [loggedInUser, setLoggedInUser] = useState("");
  const [profilePic, setProfilePic] = useState(ProfilePic);
  const [products, setProducts] = useState([])

  const navigate = useNavigate();
  useEffect(() => {
    setLoggedInUser(localStorage.getItem("loggedInUser"));
  }, []);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setProfilePic(URL.createObjectURL(file));
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("loggedInUser");
    setTimeout(() => {
      navigate("/login");
    });
  };

  const fetchProducts = async() =>{
    try{
      const url = 'http://localhost:8080/products'
      const headers = {
        headers: {
          'Authorization': localStorage.getItem('token')
        }
      }
      const response = await fetch(url, headers)
      const result = await response.json()
      setProducts(result)
    }
    catch(err){
      handleError(err)
    }
  }
  useEffect(()=>{
    fetchProducts()
  },[])

  return (
    <div className="flex flex-col justify-center mt-10 gap-16">
      <div className="flex justify-center">
        <h1 className="text-2xl font-bold">Profile</h1>
      </div>
      <section className="flex justify-center gap-10">
        <div>
          <form>
            <input
              type="file"
              id="fileInput"
              style={{ display: "none" }}
              onChange={handleImageChange}
              placeholder={ProfilePic}
            />
            <label htmlFor="fileInput">
              {profilePic ? (
                <img
                  src={profilePic}
                  alt="Profile"
                  style={{ cursor: "pointer", width: 120, height: 120, borderRadius: '50%' }}
                />
              ) : (
                <img
                  src="placeholder-image-url"
                  alt="Upload Profile"
                  style={{ cursor: "pointer" }}
                />
              )}
            </label>
          </form>
        </div>
        <div className="flex flex-col">
          <h2>@{loggedInUser}</h2>
          <div>
            {
              products.map((item, index) =>(
                <ul key ={index}>
                  <span>{item.name} : {item.price}</span>
                </ul>
              )
            )}
          </div>
        </div>
      </section>
      <div className="flex justify-center">
      <button onClick={handleLogout} className="bg-blue-200 px-6 py-1 rounded-lg text-black font-medium hover:bg-blue-300">Logout</button>
      </div>
    </div>
  );
}

export default Profile;
