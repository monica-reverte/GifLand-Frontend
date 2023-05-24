import React from 'react'
import "./MyGifs.css"
import { Link } from 'react-router-dom'

export const MyGifs = ({ gif }) => {
    return (
      <div className="gifs-gif" key={gif._id}>
        <Link to={`/details/${gif._id}`}>
          <img src={gif.file.url} alt={gif.title} />
        </Link>
      </div>
    );
  };
