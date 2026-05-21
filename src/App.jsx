import React from 'react'
import Home from "./Pages/Home.jsx"
import Pickup from "./Pages/Pickup.jsx"
import {HashRouter,Routes, Route} from "react-router-dom"

const App = () => {
  return (
    <>
    <HashRouter>
      <Routes>
        <Route path="/" element={ <Home />} />
        <Route path="/pick" element={<Pickup />}/>
      </Routes>
      </HashRouter>
    </>
  )
}

export default App
