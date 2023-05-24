import React, { useContext, useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Logout } from '../Logout/Logout';
import "./ProfileContainer.css";
import {BsPlusSquare, BsFiletypeGif} from "react-icons/bs"
import { UploadImage } from '../UploadImage/UploadImage';
import { gifContext } from '../../Context/GifContext';
import { getGifRequest } from '../../api/apiGifs';
import { MyGifs } from '../MyGifs/MyGifs';
import { UsersContext } from '../../Context/UserContext';
import userimg from "../../assets/user.gif";


export const ProfileContainer = () => {

    const {isAuthenticated, isLoading} = useAuth0();
    const { user } = useContext(UsersContext);
    const {gifs, setGifs} = useContext(gifContext);

    const getGifs = async() =>{
      const gifs = await getGifRequest(user.id);
      setGifs(gifs.data);
      
  }

  useEffect(() => {
      getGifs();
      

  
  }, [])

  

    if(isLoading) {
        return <div>Loading...</div>
    }

  return (
    isAuthenticated && (
      
          
            <div className="profile-container">
              <div className="img-profile-container">
                <img src={userimg} alt="user" className="img-profile"/>
                <Logout />
              </div>

            <div className="main-container-profile">
              <div className="userinfo">
                <h2>{user.name}</h2>
                <p>{user.email}</p>
              </div>
              <div className="upload-background">
                <div className="upload-container">

                <BsPlusSquare className="plus-icon"/>
                <p>You haven't uploaded anything!</p>
                <UploadImage />
                </div>
              </div>
              <div className="media-row">
                <div className="row-header">
                  <BsFiletypeGif className="row-header-icon" />
                  <h1>My gifs</h1>
                </div>       
              <div className="gifs-container">
              {gifs.length > 0 ? (
            gifs.map(gif => (
                <MyGifs key={gif._id} gif={gif} />
            )
            )):(<p> You don't have any Gif yet</p>)} 
              </div>
            </div>
            </div>
            </div>

            
    )
    
  )
}
