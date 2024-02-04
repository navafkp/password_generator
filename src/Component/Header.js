import React from "react";
import { useNavigate } from "react-router-dom";
import { Logout } from "../Store/authSlice";



import { useDispatch } from "react-redux";

const Header = () => {

const navigate = useNavigate()
const dispatch = useDispatch()

    const handleClick = () => {
        dispatch(Logout());
        navigate('/')
    }
  
return(  <header className="flex items-center justify-between bg-black p-4">
    <div className="flex items-center space-x-2">
      <span
        className="text-white font-bold text-lg cursor-pointer"
        onClick={() => navigate("/login")}
      >
        Password Generator
      </span>
    </div>
    <div className="flex space-x-4">
      

      <button className="text-white font-medium" onClick={handleClick}>
        Logout
      </button>
    </div>
  </header>)
};

export default Header;