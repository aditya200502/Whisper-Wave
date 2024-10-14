import React, { lazy } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectRoute from './components/auth/ProtectRoute';


const Home = lazy(() => import('./pages/Home'))
const Login = lazy(() => import('./pages/Login'))
const Chats = lazy(() => import('./pages/Chat'))
const Groups = lazy(() => import('./pages/Groups'))

let user = true;

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<ProtectRoute user={user} />}>
          <Route path='/' element={<Home />} />
          <Route path='/chats/:chatId' element={<Chats />} />
          <Route path='/groups' element={<Groups />} />
        </Route>

        <Route path='/login' element={
          <ProtectRoute user={!user} redirect='/'>
            <Login />
          </ProtectRoute>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App