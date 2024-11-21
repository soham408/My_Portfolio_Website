import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from 'App.jsx'
import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Layout from './components/Layout.jsx'
// import { Route } from 'react-router-dom';
import './index.css';
import Home from './components/Home/Home.jsx';
import Techskills from './components/Techskills/Techskills.jsx';


const router = createBrowserRouter(
  createRoutesFromElements(
   <>
    <Route path="/" element={<Layout />} />
    <Route path=" " element={<Home />} />
    <Route path="Teckskills" element={<Techskills />} />
    {/* <Route path="" element={<Projects />} /> */}
    {/* <Route path=""element={<About />} /> */}
    </>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)



