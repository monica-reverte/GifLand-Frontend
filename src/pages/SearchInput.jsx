import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

export const SearchInput = () => {
  const [searchGif, setSearchGif] = useState([]);
  let params = useParams();

  const getSearchInput = async (name) => {
    const data = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=rSFguAwX8sVUt0FRdvijG6kbQ8uXF4WT&q=${name}&limit=25&offset=0&rating=g&lang=en`);
    const gifs = await data.json();
    setSearchGif(gifs.data);
  };

  useEffect(() => {
    getSearchInput(params.search);
  }, [params.search]);

  return (
    <div>
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