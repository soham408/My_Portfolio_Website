import React from 'react'
import Header from './Header/Header.jsx';
import Footer from '/src/components/Footer/Footer.jsx'
import { Outlet } from 'react-router-dom';
import Home from './Home/Home.jsx';

export default function Layout() {
  return (
    <>
    <Header/>
    <Home />
    <Outlet />
    <Footer />
    </>
  )
}
