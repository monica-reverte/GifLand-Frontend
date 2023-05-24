import React, { useContext } from 'react';
import "./UploadImage.css"
import { gifContext } from '../../Context/GifContext';
import { createGifRequest } from '../../api/apiGifs';
import { UsersContext } from '../../Context/UserContext';

export const UploadImage = () => {
  const { user } = useContext(UsersContext);
  const { gifs, setGifs } = useContext(gifContext);
  

  const createGif = async (e) => {
    const data = new FormData();
    
    data.append('file', e.target.files[0]);
    data.append('userId', user.id);
    
    const response = await createGifRequest(data)
    console.log(response)
    if(response.data.ok){
      
      setGifs([...gifs, response.data.gif]);
    }

  };

  return (
    <div>
      <label className="button-container">
        <div className="button">
          <h2>Upload</h2>
        </div>
        <input type="file" name="file" className="input-upload" onChange={createGif} />
      </label>
    </div>
  )
}

