import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'

export const Logout = () => {

    const { logout } = useAuth0();

  return (
    <div>
        <div className="button" onClick={() => logout({returnTo: window.location.origin})}>Logout</div>
    </div>
  )
}
