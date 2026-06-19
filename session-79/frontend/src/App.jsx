import React from 'react'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Service from './pages/Service'
import Records from './pages/Records'
import { Outlet } from 'react-router-dom'
import './App.css'

function Layout() {
  return (
    <>
      <Navbar />
      <Outlet /> {/* This will render Home / Cart */}
    </>
  );
}
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,   // 👈 common layout
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path:"/service",
        element:<Service/>
      },
       {
        path:"/records",
        element:<Records/>
       },
    
    ]
  }
]);




function App()
{
   return <RouterProvider router={router} />;

}


export default App