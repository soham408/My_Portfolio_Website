import React from 'react';
import ReactDOM from 'react-dom/client';
import {RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Layout from './components/Layout.jsx'
import { Route } from 'react-router-dom';
import './index.css';
import Home from './components/Home/Home.jsx';


const router = createBrowserRouter(
  createRoutesFromElements(
   <>
    <Route path='/' element={<Layout />} />
    <Route path='' element={<Home />} />
    </>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)



