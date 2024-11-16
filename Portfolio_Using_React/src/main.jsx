import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './components/Home/Home.jsx';
import { Route } from 'react-router-dom';
import {RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Header from './components/Header/Header.jsx';


const router = createBrowserRouter(
  createRoutesFromElements(
   <>
    <Route path='' element={<Home />} />
    <Route path='' element={<Header />}/>
    </>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
