import React, { useContext, useEffect } from 'react'
import { Header } from '../components/Header/Header'
import { Search } from '../components/Search/Search'
import { Media } from '../components/Media/Media'
import { auth0loginRequest } from '../api/apiUser';
import { useAuth0 } from '@auth0/auth0-react';
import { UsersContext } from '../Context/UserContext';

export const Home = () => {

  const { user } = useAuth0();
  const { auth0Login } = useContext(UsersContext);

  
  useEffect(() => {
    async function fetchData() {
      if (user?.email && user?.name) {
        const { name, email } = user;
        
        const response = await auth0loginRequest({ name, email });
        if (response?.data.user) {
          await auth0Login(response.data.user);
        } else {
          console.log('Error');
        }
      }
    }
    fetchData();
  }, [user]);


  return (
    <div>
        <Header />
        <Search />
        <Media />
    </div>
  )
}
