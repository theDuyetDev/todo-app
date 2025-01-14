import React from 'react'
import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom'
import Header from './component/Header'
import Home from './pages/Home'
import Auth from './pages/Auth'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Header/>}>
      <Route index element={<Home/>}/>
      <Route path="auth" element={<Auth/>}/>
    </Route>
  )
)
function App({routes}) {

  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App
