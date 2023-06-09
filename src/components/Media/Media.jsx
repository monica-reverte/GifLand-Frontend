import React, { useEffect, useState } from 'react';
import "./Media.css"
import {BiTrendingUp} from "react-icons/bi";
import {MdFlashOn} from "react-icons/md";
import {FaCloudUploadAlt} from "react-icons/fa";
import {  fetchTrending, getArtistRequest, getStoriesRequest } from '../../api/apiRequest';
import { Trending } from '../Trending/Trending';
import { Splide} from "@splidejs/react-splide"
import "@splidejs/splide/dist/css/splide.min.css";
import { Artist } from '../Artist/Artist';
import { Storie } from '../Storie/Storie';



export const Media = () => {

  const [trending, setTrending] = useState([]);
  const [artist, setArtist] = useState([]);
  const [stories, setStories]  = useState([]);

  const getTrending = async() => {
    const trending = await fetchTrending();
    setTrending(trending.data);

  }


  const getArtist = async() => {
    const artist = await getArtistRequest();
    setArtist(artist.data);

  }

  
  const getStories = async() => {
    const storie = await getStoriesRequest();
    setStories(storie.data);

  }




  
  useEffect(() => {
    getTrending();
    getArtist();
    getStories();
    

  }, [])




  return (
    <div className="media-container">
      <div className="media-row">
        <div className="row-header">
          <BiTrendingUp className="row-header-icon" />
          <h1>Trending</h1>
        </div>        
        <Splide options={{
            perPage: 8,
            breakpoints: {
              1024: {
                perPage: 5,
              },
              767: {
                perPage: 3,
            
              },
              640: {
                perPage: 2,
          
              },
            },
            arrows: true,
            pagination: false,
            drag: "free",
            gap: "1rem",
          }}>
  
          {trending.data?.map((trend, index) => {
            return <Trending trend={trend} key={index} />;
          })}
          </Splide>
        
      </div>

      <div className="media-row">
        <div className="row-header">
          <MdFlashOn className="row-header-icon"/>
          <h1>Popular Users</h1>
        </div> 
        <div className="artist-container">
          {artist.data?.map((artistGif, index) => {
            return <Artist artist={artistGif} key={index} />
          })}
        </div>
      </div>

      <div className="media-row">
        <div className="row-header">
          <FaCloudUploadAlt className="row-header-icon" />
          <h1>Last Uploads</h1>
        </div>        
        <div className="storie-container">
          <Storie gifsArray={stories.data}/>
        </div>
      </div>

    </div>
  )
}
