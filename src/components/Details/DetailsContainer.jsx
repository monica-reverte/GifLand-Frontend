import React, { useContext, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { gifContext } from '../../Context/GifContext';
import './DetailsContainer.css';
import { deleteGifRequest, updateGifRequest } from '../../api/apiGifs';
import { ImFacebook2 } from 'react-icons/im';
import { AiFillInstagram } from 'react-icons/ai';
import { FaTwitterSquare, FaHeart } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const DetailsContainer = () => {
  const { id } = useParams();
  const { gifs, setGifs } = useContext(gifContext);

  const [isEditing, setIsEditing] = useState(false);
  const [isDeletionSuccess, setIsDeletionSuccess] = useState(false);

  const gif = gifs.find((gif) => gif._id === id);
  const [currentGif, setCurrentGif] = useState(gif);
  const navigate = useNavigate();

  if (!gif) {
    return <div>Gif not found</div>;
  }

  const handleDelete = async (id) => {
    const response = await deleteGifRequest(id);
    console.log(response);
    if (response.data.ok) {
      const updatedList = gifs.filter((gif) => gif._id !== id);
      setGifs(updatedList);
      setIsDeletionSuccess(true);
      toast.success('Image deleted successfully!');
      navigate("/profile")
    }
  };

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
          <ToastContainer />
      <div className="gif-info">

        <div className="gif-img-container">        
            <img src={gif.file.url} alt={gif.title} />
        </div>
        <div className="gif-info-container">
        {isEditing ? (
                <input onChange={handleEdit} onKeyDown={saveChanges} className="input-edit" type="text" value={currentGif.title} />
            ) : (
                <p>{gif.title}</p>
            )}
            
            <button className="button-edit" onClick={() => setIsEditing(true)}>Edit</button>
            <button className="button-delete" onClick={() => handleDelete(id)}>Delete</button>
        </div>
      </div>
      <div className="share-container">
        <ImFacebook2 className="facebook" />
        <AiFillInstagram className="instagram" />
        <FaTwitterSquare className="twitter"/>
        <FaHeart className="like"/>
        
      </div>
      </div>
    );
  };



