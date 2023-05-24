import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { getSearchGifs } from '../../api/apiRequest';

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
    <div> 
      {filter.map((item)=> {
        return(
          <div key={item.id}>
            <Link to={"/filter/" + item.id}>
            <img src={item.images.original.url} alt={item.title}/>
            <h4>{item.title}</h4>
            </Link>
          </div>
        )
      })}
      
    
    </div>
  )
}
