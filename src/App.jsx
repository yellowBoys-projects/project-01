import React from 'react'
import Home from '../src/compoents/Home/home.jsx'
import Service from '../src/compoents/Service/service.jsx'
import Trending from '../src/compoents/Trending/trending.jsx'
import Top from '../src/compoents/Top/top.jsx'
import { Box } from '@mui/material'
import Categories from '../src/compoents/categories/Categories.jsx'
import Footer from '../src/compoents/Footer.jsx'
import Installed from '../src/compoents/Top_Installed/installed.jsx'

export default function App() {
  return (
    <div>

      <Home />
      <Service />
      <Top />
      <Trending />
      <Installed/>
      <Categories />
      <Footer />
    </div>
  )
}