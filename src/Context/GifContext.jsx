import { useState, createContext, useContext } from 'react'

export const gifContext = createContext()


export function GifProvider({ children }) {
  const [gifs, setGifs] = useState([])


  return (
    <gifContext.Provider value={{ gifs, setGifs }}>
      {children}
    </gifContext.Provider>
  )
}