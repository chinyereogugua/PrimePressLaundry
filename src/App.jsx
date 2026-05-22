import React from 'react'
import Home from "./Pages/Home.jsx"
import Pickup from "./Pages/Pickup.jsx"
import {HashRouter,Routes, Route} from "react-router-dom"
import ServiceAndPricing from './Pages/ServiceAndPricing.jsx'
import Signup from "./Pages/Auth/Signup.jsx"

const App = () => {
  return (
    <>
    <HashRouter>
      <Routes>
        <Route path="/" element={ <Home />} />
        <Route path="/pick" element={<Pickup />}/>
        <Route path="/service" element={<ServiceAndPricing />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
      </HashRouter>
    </>
  )
}

export default App
