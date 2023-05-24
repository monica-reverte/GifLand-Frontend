import React, { useContext, useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { gifContext } from '../../Context/GifContext';
import "./DetailsContainer.css"
import { deleteGifRequest, updateGifRequest } from '../../api/apiGifs';

export const DetailsContainer = () => {

    const { id } = useParams();
    const { gifs, setGifs } = useContext(gifContext);
    
    const [isEditing, setIsEditing] = useState(false);

    const gif = gifs.find((gif) => gif._id === id);
    const [currentGif, setCurrentGif] = useState(gif);
  
    if (!gif) {
      return <div>Gif not found</div>;
    }

    const handleDelete = async(id) => {
        const response = await deleteGifRequest(id);
        console.log(response)
        if(response.data.ok){
            const updatedList = gifs.filter(gif => gif._id !== id);
            setGifs(updatedList);
        }
    
    }

const handleEdit = (e) => {
    setCurrentGif({ ...currentGif, title: e.target.value });
    console.log(currentGif)

}

const saveChanges = async (e) => {
    if (e.key === 'Enter') {
      const response = await updateGifRequest(currentGif);
  
      if (response.data.ok) {
        const updatedGif = response.data.updatedGif;
        console.log(updatedGif)
        const newArray = gifs.map((gif) =>
          gif._id === updatedGif._id ? updatedGif : gif
        );
        console.log(newArray)
        setGifs(newArray);
      }
  
      setIsEditing(false);
    }
  };
  
    return (
        <div className="details-container">
      <div className="gif-info">

        <div className="gif-img-container">        
            <img src={gif.file.url} alt={gif.title} />
        </div>
        <div className="gif-info-container">
        {isEditing ? (
                <input onChange={handleEdit} onKeyDown={saveChanges} type="text" value={currentGif.title} />
            ) : (
                <p>{gif.title}</p>
            )}
            {/* <p>{gif.title}</p> */}
            <button onClick={() => setIsEditing(true)}>Edit</button>
            <button onClick={() => handleDelete(id)}>Delete</button>
        </div>
      </div>
      <div className="share-container">
        <p>Share</p>
        <p>Share</p>
        <p>Share</p>
        <p>Share</p>
        
      </div>
      </div>
    );
  };



