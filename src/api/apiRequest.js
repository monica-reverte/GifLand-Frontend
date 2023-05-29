
import axios from "axios";

const GHIPHY_BASE_REQUEST = `https://api.giphy.com/v1/gifs/`;
const VITE_API_KEY= import.meta.env.VITE_API_KEY;



export const getSearchGifs = async (name) => {
    return await axios.get(
      `${GHIPHY_BASE_REQUEST}search?api_key=${VITE_API_KEY}&q=${name}&limit=25&offset=0&rating=g&lang=en`
    );
  };


export const fetchTrending = async() => {
    return await axios.get(
        `${GHIPHY_BASE_REQUEST}trending?api_key=${VITE_API_KEY}&limit=25&offset=0&rating=g&lang=en`
    )

};

export const getArtistRequest = async() => {
    return await axios.get(
        `${GHIPHY_BASE_REQUEST}search?api_key=${VITE_API_KEY}&q="Grande+Dame"&limit=5&offset=0&rating=g&lang=en`
    )

};

export const getStoriesRequest = async() => {
    return await axios.get(
        `${GHIPHY_BASE_REQUEST}search?api_key=${VITE_API_KEY}&q=party&limit=25&offset=0&rating=g&lang=en`
    )

};



