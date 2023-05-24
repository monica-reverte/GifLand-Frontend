import { createBrowserRouter } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Profile } from '../pages/Profile';
import { FilterPage } from '../pages/FilterPage';
import { Details } from '../pages/Details';
import { SearchInput } from '../pages/SearchInput';

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
    {
        path: "/search/:search",
        element: <SearchInput />
    },
])