import './App.css'
import { RouterProvider } from "react-router";
import { router } from "./routes/router"
import { GifProvider } from './Context/GifContext';
import { UsersProvider } from './Context/UserContext';


function App() {


  return (

    <>
    
      <div className="app">
        <div className="main">
          <UsersProvider>
          <GifProvider>
            <RouterProvider router={router} />
          </GifProvider>
          </UsersProvider>
        </div>
      </div>
      
    </>
  )
}

export default App
