import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route,RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'

import Contact from './components/Contact.jsx'
import About from './components/About.jsx'
import Home from './components/Home.jsx'
import User from './components/User.jsx'

import Git, { loader } from './components/Git.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    
    <Route path='/' element={<Layout />} >
    <Route path='' element={<Home/>} />
    <Route path='about' element={<About/>}/>
<Route path='contact' element={<Contact/>}/>
<Route path='user/:userId' element={<User/>}/>
<Route loader={loader} path='github' element={<Git/>}/>
</Route>
    

  )
)
createRoot(document.getElementById('root')).render(
<StrictMode>
  <RouterProvider router={router}/>
</StrictMode>

 
)
