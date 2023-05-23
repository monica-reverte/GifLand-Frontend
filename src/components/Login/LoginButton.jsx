import React from 'react'
import "./LoginButton.css"
import { RxAvatar } from 'react-icons/rx';
import { useAuth0 } from '@auth0/auth0-react';

export const LoginButton = () => {

  const { loginWithRedirect} = useAuth0();

  return (
    <div className="profile" onClick={()=> loginWithRedirect()}>
        <RxAvatar className="profile-avatar" />
        <h2>Login</h2>
    </div>
  )
}
