import React, { createContext, useState } from 'react'
import Home from './pages/Home'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import SingleProductPage from './pages/SingleProductPage'
import About from './pages/About'


export let Dukaan = createContext();


function App() {
  let [cart, setCart] = useState([]); 
  
  return (
    <Dukaan.Provider value={{cart, setCart}}>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        {/* <Route path="/about" element={<About/>} /> */}
        <Route path="/:id" element={<SingleProductPage/>} />
      </Routes>
      </BrowserRouter>
    </Dukaan.Provider>
  )
}

export default App