import Footer from '../Footer/Footer'
import NavBar from '../Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import React from 'react'

export default function Layout() {
  return (
    <div className='vh-100 d-flex flex-column'>
      <NavBar />
      <Outlet />
      <Footer/>
    </div>
  )
}
