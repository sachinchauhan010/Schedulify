import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Login from "./components/Login.jsx"
import Register from './components/Register.jsx'
import App from './App.jsx'
import './index.css'


const router= createBrowserRouter([
  {
    path:'/',
    element: <App/>
  },

  {
    path:'/login',
    element: <Login/>
  },

  {
    path:'/register',
    element: <Register/>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
