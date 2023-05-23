import React from 'react'
import {BsSearch} from "react-icons/bs"
import "./Search.css";

export const Search = () => {
  return (
    <div className="search-container">
        <input type="text" placeholder="Search..." />
        <div className="search-icon-container">
            <BsSearch className="search-icon"/>
        </div>
    </div>
  )
}
