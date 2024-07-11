import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Blog from './pages/Blog.jsx'

const Routes = createBrowserRouter([
{
  path: "",
  element:<App/>,
  children:[
    {
      path:"about",
      element:<About/>
    },
    {
      path:"contact",
      element:<Contact/>
    },
    {
      path:"blog",
      element:<Blog/>
    }
  ]
},
{
  path:"home",
  element:<Home/>
},
{
  path:"about",
  element:<About/>
},
{
  path:"contact",
  element:<Contact/>
}
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={Routes}></RouterProvider>
  </React.StrictMode>,
)
