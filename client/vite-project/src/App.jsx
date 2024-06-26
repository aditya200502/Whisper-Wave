import React, { lazy } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";


const Home = lazy(() => import('./pages/Home') )
const Login = lazy(() => import('./pages/Login'))
const Chats = lazy(() => import ('./pages/Chat'))
const Groups = lazy(() => import('./pages/Groups'))

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/chats/:chatId' element={<Chats/>} />
        <Route path='/groups' element={<Groups/>} />
        <Route path='/login' element={<Login/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App