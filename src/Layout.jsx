import React, { useEffect } from 'react'
import HeaderMain from './Components/Header/HeaderMain'
import {Outlet} from 'react-router-dom'
import Footer from './Components/Footer/Footer'
import axios from 'axios'
import product from './Components/Products/product'
function Layout() {
  
  useEffect(()=>{
   product()
  
  },[])
  return (
    <div>
      <HeaderMain/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default Layout
