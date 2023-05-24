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
import '@splidejs/react-splide/css';
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

    const artist = await Promise.all(
    giphyArtist.map( async (giphyArtist)=>{
      return fetchSearched(giphyArtist).then ((res) => res.data.data)

    })
    );

    setArtist(artist.flat());
  }

  const getSearchedGifs= async (query, setState) => {
    const searched = await fetchSearched(query);
    setState(searched.data)
  }
  
  useEffect(() => {
    getTrending();
    getArtist();
    getSearchedGifs("party", setStories);
    

  }, [])

  console.log(trending)
  console.log(stories)


  return (
    <div className="media-container">
      <div className="media-row">
        <div className="row-header">
          <BiTrendingUp className="row-header-icon" />
          <h1>Trending</h1>
        </div>        
        <div className="trending-container">
        <Splide options={{
            perPage: 6,
            arrows: true,
            pagination: false,
            drag: "free",
            gap: "2rem",
          }}>
          {trending.data?.map((trend, index) => {
            return <Trending trend={trend} key={index} />;
          })}
          </Splide>
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
        <div className="storie-container">
          <Storie gifsArray={stories}/>
        </div>
      </div>

    </div>
  )
}
