import React from 'react';
import "./Artist.css"

export const Artist = ({ artist }) => {
  return (
    <div className="artist-gif">
        <img src={artist.images.downsized.url} alt={artist.title} />
    </div>
  )
}
