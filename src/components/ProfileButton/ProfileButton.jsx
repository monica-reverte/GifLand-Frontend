import { useAuth0 } from '@auth0/auth0-react'
import React from 'react'
import { RxAvatar } from 'react-icons/rx';
import { Link } from 'react-router-dom';
import "./ProfileButton.css"

export const ProfileButton = () => {

    const {user} =useAuth0();
  return (
    <Link to="/profile">
    <div className="profile">
        <RxAvatar className="profile-avatar" />
        <h2>{user.name}</h2>
    </div>
    </Link>
  )
}
