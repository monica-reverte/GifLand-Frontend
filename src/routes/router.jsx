import { createBrowserRouter } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Profile } from '../pages/Profile';
import { FilterPage } from '../pages/FilterPage';
import { Details } from '../pages/Details';

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/profile",
        element: <Profile />
    },
    {
        path: "/page",
        element: <FilterPage />
    },
    {
        path: "/details/:id",
        element: <Details />
    },
])