import React, { useEffect, useState } from 'react';
import "./Media.css"
import {BiTrendingUp} from "react-icons/bi";
import {MdFlashOn} from "react-icons/md";
import {FaCloudUploadAlt} from "react-icons/fa";
import { CgStories } from "react-icons/cg"
import { fetchSearched, fetchTrending } from '../../api/apiRequest';
import { Trending } from '../Trending/Trending';
import giphyArtist from '../artist';
import { Artist } from '../Artist/Artist';
import { Splide, SplideSlide} from "@splidejs/react-splide"


export const Media = () => {

  const [trending, setTrending] = useState([]);
  const [artist, setArtist] = useState([]);

  const getTrending = async() => {
    const trending = await fetchTrending();
    setTrending(trending.data);

  }

  const getArtist = async() => {

    const artist = await Promise.all(
    giphyArtist.map( async (giphyArtist)=>{
      return fetchSearched(giphyArtist).then ((res) => res.data.data)

    })
    );

    setArtist(artist.flat());
  }
  
  useEffect(() => {
    getTrending();
    getArtist();
    

  }, [])



  return (
    <div className="media-container">
      <div className="media-row">
        <div className="row-header">
          <BiTrendingUp className="row-header-icon" />
          <h1>Trending</h1>
        </div>        
        <div className="trending-container">
          {trending.data?.map((trend, index) => {
            return <Trending trend={trend} key={index} />;
          })}
        </div>
      </div>

      <div className="media-row">
        <div className="row-header">
          <MdFlashOn className="row-header-icon"/>
          <h1>Artist</h1>
        </div> 
        <div className="artist-container">
          {artist.map((artistGif, index) => {
            return <Artist artist={artistGif} key={index} />
          })}
        </div>
      </div>

      <div className="media-row">
        <div className="row-header">
          <FaCloudUploadAlt className="row-header-icon" />
          <h1>Last Uploads</h1>
        </div>        
        <div className="clips-container">
          <h1>Content</h1>
        </div>
      </div>

    </div>
  )
}
