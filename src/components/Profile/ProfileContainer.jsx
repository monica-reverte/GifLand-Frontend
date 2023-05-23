import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Logout } from '../Logout/Logout';
import "./ProfileContainer.css";
import {BsPlusSquare, BsFiletypeGif} from "react-icons/bs"
import { UploadImage } from '../UploadImage/UploadImage';


export const ProfileContainer = () => {

    const {user, isAuthenticated, isLoading} = useAuth0();

    if(isLoading) {
        return <div>Loading...</div>
    }

  return (
    isAuthenticated && (
          
            <div className="profile-container">
              <div className="img-profile-container">
                <img src={user.picture} alt="user" className="img-profile"/>
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
                <h1>Content</h1>
              </div>
            </div>
            </div>
                
            </div>
            
            
    )
    
  )
}
