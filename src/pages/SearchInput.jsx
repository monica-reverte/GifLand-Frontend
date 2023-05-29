import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Header } from '../components/Header/Header';
import { getSearchGifs } from '../api/apiRequest';
import "../components/Search/SearchInput.css";
import { motion } from 'framer-motion';


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
    <div >
      <Header />
      <div className="container">
    <motion.div 
      animate={{opacity:1}}
      initial={{opacity: 0}}
      exit={{opacity: 0}}
      transition={{duration: 0.5}}
      className="filter-container"> 
      {searchGif.map((item) => (
        <div className="card" key={item.id}>
          <Link to={`/search/${item.id}`}>
            
            <img src={item.images.original.url} alt={item.title} />
            
          </Link>
        </div>
      ))}
      </motion.div></div>

    </div>
  );
};