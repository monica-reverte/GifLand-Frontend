import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { getSearchGifs } from '../../api/apiRequest';
import "./FilterContainer.css";
import { motion } from 'framer-motion';

export const FilterContainer = () => {


  const [filter, setFilter] = useState ([]);
  let params = useParams();



  const getFilter = async (name) => {
    const response = await getSearchGifs(name);
    const gifs = response.data;
    setFilter(gifs.data);
  };

  useEffect(()=> {
    getFilter(params.type)
  }, [params]);



  return (
    <div className="container">
    <motion.div 
      animate={{opacity:1}}
      initial={{opacity: 0}}
      exit={{opacity: 0}}
      transition={{duration: 0.5}}
      className="filter-container"> 

      {filter.map((item)=> {
        return(
          <div className="card" key={item.id}>
            <Link to={"/filter/" + item.id}>
            <img src={item.images.original.url} alt={item.title}/>
            </Link>
          </div>
        )
      })}
      
    
    </motion.div>
    </div>
  )
}
