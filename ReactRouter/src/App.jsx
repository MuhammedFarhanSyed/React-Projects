import React from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import About from './components/About'
import Navbar from './components/Navbar'



const router = createBrowserRouter([
  {
    path : '/',
    element:<About />
  },
  {
path:'/navbar',
element:<Navbar />
  }
])













function App() {








  return (
    <div>  <RouterProvider router ={router}  /></div>


  )
}

export default App