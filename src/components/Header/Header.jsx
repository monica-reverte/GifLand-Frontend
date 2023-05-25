import React, { useContext } from 'react';
import './Header.css';
import  logo  from "../../assets/Giflandlogo.png";
import {  MdMoreVert } from "react-icons/md";
import { UploadImage } from "../UploadImage/UploadImage"
import { LoginButton } from '../Login/LoginButton';
import { ProfileButton } from '../ProfileButton/ProfileButton';
import { NavLink } from 'react-router-dom';
import { UsersContext } from '../../Context/UserContext';


export const Header = () => {

  const { user } = useContext(UsersContext);


  

  return (
    <div className="header">
      <NavLink to="/">
        <img src={logo} alt="logo" />
      </NavLink>
      <div className="menu">
        <div className="button-wrapper entretainment">
          <div className="menu-button hover-entretainment">
            <NavLink to={"/filter/movies"} >
            <h2>Movies</h2>
            </NavLink>
          </div>
        </div>
        <div >
        <div className="button-wrapper sports">
          <div className="menu-button hover-sports">
          <NavLink to={"/filter/sports"} >
            <h2>Sports</h2>
            </NavLink>
          </div>
          </div>
        </div>
        <div className="button-wrapper stickers">
          <div className="menu-button hover-stickers">
          <NavLink to={"/filter/animals"} >
            <h2>Animals</h2>
            </NavLink>
          </div>    
        </div>
        <div className="button-wrapper artist">
          <div className="menu-button hover-artist">
          <NavLink to={"/filter/babies"} >
            <h2>Babies</h2>
          </NavLink>
          </div>
          </div>
        <div className="button-wrapper morevertical">
          <div className="menu-button hover-morevertical">
            <MdMoreVert />
          </div>
        </div>
      </div>

      
    <div>
    {user && <UploadImage />}

    </div>
      
      <div className="profile">
        {user ? <>
        <ProfileButton />
        </>
        : <LoginButton />}
        
      </div>
    </div>
  );
};
