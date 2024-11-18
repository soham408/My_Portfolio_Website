import React from 'react'
// import Header from './components/Header/Header';
import Header from './Header/Header.jsx';
// import Footer from './Footer/Footer.jsx'
// import Footer from '/src/components/Footer/Footer.jsx'
import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <>
    <Header/>
    <Outlet />
    {/* <Footer /> */}
    </>
  )
}

