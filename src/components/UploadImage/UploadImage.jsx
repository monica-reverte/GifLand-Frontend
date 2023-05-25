import React, { useContext, useState } from 'react';
import './UploadImage.css';
import { gifContext } from '../../Context/GifContext';
import { createGifRequest } from '../../api/apiGifs';
import { UsersContext } from '../../Context/UserContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const UploadImage = () => {
  const { user } = useContext(UsersContext);
  const { gifs, setGifs } = useContext(gifContext);
  const [isLoading, setIsLoading] = useState(false);
  const [isUploadSuccess, setIsUploadSuccess] = useState(false);

  const createGif = async (e) => {
    const data = new FormData();
    data.append('file', e.target.files[0]);
    data.append('userId', user.id);
    setIsLoading(true);

    const response = await createGifRequest(data);
    if (response.data.ok) {
      setGifs([...gifs, response.data.gif]);
      setIsUploadSuccess(true);
      toast.success('Image uploaded successfully!');
    }

    setIsLoading(false);
  };

  return (
    <div>
      <label className="button-container">
        <div className="button">
          <h2>Upload</h2>
        </div>
        <input type="file" name="file" className="input-upload" onChange={createGif} />
      </label>
      <div className="loader-container">
      {isLoading && <span class="loader"></span>}
      <ToastContainer />
      </div>
    </div>
  );
};