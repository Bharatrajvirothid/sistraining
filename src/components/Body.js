import React from 'react'
// import Browse from './Browse'
import { createBrowserRouter } from 'react-router-dom'
// import Login from './Login\/Login/'
import { RouterProvider } from 'react-router-dom'
import Login from './Login/Login'
// import React from 'react';
import AboutComp from './AboutComp/AboutComp'
// import './styles.css'
import MainContact from './MainContact/MainContact'

const Body = () => {

    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <Login/>
        },
        
        {
            path: "/contact",
            element:<MainContact/>
        },
        {
          path: "/about-us",
          element:<AboutComp/>
      }
    ])
  return (
    <div>
        
        <RouterProvider router={appRouter}/>
    </div>
  )
}

export default Body