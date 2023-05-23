import React from 'react';
import './Header.css';
import  logo  from "../../assets/Giflandlogo.png";
import {  MdMoreVert } from "react-icons/md";
import { UploadImage } from "../UploadImage/UploadImage"
import { LoginButton } from '../Login/LoginButton';
import { useAuth0 } from '@auth0/auth0-react';
import { ProfileButton } from '../ProfileButton/ProfileButton';


export const Header = () => {

  const {isAuthenticated} = useAuth0();
  

  return (
    <div className="header">
        <img src={logo} alt="logo" />
      <div className="menu">
        <div className="button-wrapper entretainment">
          <div className="menu-button hover-entretainment">
            <h2>Entertainment</h2>
          </div>
        </div>
        <div className="button-wrapper sports">
          <div className="menu-button hover-sports">
            <h2>Sports</h2>
          </div>
        </div>
        <div className="button-wrapper stickers">
          <div className="menu-button hover-stickers">
            <h2>Stickers</h2>
          </div>    
        </div>
        <div className="button-wrapper artist">
          <div className="menu-button hover-artist">
            <h2>Artist</h2>
          </div>
          </div>
        <div className="button-wrapper morevertical">
          <div className="menu-button hover-morevertical">
            <MdMoreVert />
          </div>
        </div>
      </div>

      <UploadImage />
      
      <div className="profile">
        {isAuthenticated ? <>
        <ProfileButton />
        </>
        : <LoginButton />}
        
      </div>
    </div>
  );
};
