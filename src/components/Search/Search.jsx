import React, { useState } from 'react'
import {BsSearch} from "react-icons/bs"
import "./Search.css";
import { useNavigate } from 'react-router-dom';

export const Search = () => {
  
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
      e.preventDefault();
      navigate("/search/" + input)
  };
  return (
    <form onSubmit={handleSubmit}>
    <div className="search-container">
        <input  onChange={(e)=> setInput(e.target.value)} value={input} type="text" placeholder="Search..." />
        <div className="search-icon-container">
            <BsSearch className="search-icon"/>
        </div>
    </div>
    </form>
  )
}
