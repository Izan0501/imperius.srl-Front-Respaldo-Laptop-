import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
const Layout = ({ cartProducts }) => {
  return (
    <>
      <Header cartProducts={cartProducts} />
      <Outlet />
      <Footer />
    </>
  )
}

export default Layout