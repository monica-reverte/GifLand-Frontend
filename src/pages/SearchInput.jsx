import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Header } from '../components/Header/Header';
import { getSearchGifs } from '../api/apiRequest';
import axios from 'axios';


export const SearchInput = () => {
  const [searchGif, setSearchGif] = useState([]);
  let params = useParams();

  const getSearchInput = async (name) => {
    const response = await getSearchGifs(name);
    const gifs = response.data;
    setSearchGif(gifs.data);
  };

  useEffect(() => {
    getSearchInput(params.search);
  }, [params.search]);


  return (
    <div>
      <Header />
      {searchGif.map((item) => (
        <div key={item.id}>
          <Link to={`/search/${item.id}`}>
            
            <img src={item.images.original.url} alt={item.title} />
            <h4>{item.title}</h4>
          </Link>
        </div>
      ))}
    </div>
  );
};