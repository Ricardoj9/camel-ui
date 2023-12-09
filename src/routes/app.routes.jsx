import { Route, Routes } from 'react-router-dom'

import Register from '../pages/register'
import Login from '../pages/login'
import Home from '../pages/home'

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Home />} />
    </Routes>
  )
}
