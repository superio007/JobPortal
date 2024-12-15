import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/navbar'
const MainLayouts = () => {
  return (
    <div>
        <Navbar />
        <Outlet />
    </div>
  )
}

export default MainLayouts