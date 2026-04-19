import './global.css'
import { Route, Routes } from 'react-router'
import Layout from './layouts/layout'
import Login from './pages/Login'
import Home from './pages/Home'
import CreateProfile from './pages/CreateProfile'
import Profile from './pages/Profile'
import { DevelopersProvider } from './context/DevelopersContext'
import { AuthProvider } from './context/AuthContext'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'


function App() {
  return (
    <AuthProvider>
      <DevelopersProvider>
        <Routes>
          <Route element={<Layout />}>
            <Route path='/login' element={<Login />} />
            <Route path='/' element={<Home />} />
            <Route path='/dev/crear' element={<ProtectedRoute> <CreateProfile/> </ProtectedRoute>} />
            <Route path='/profile/:id' element={<Profile />} />
            <Route path='*' element={<h1>404 - Página no encontrada</h1>} />
          </Route>
        </Routes>
      </DevelopersProvider>
    </AuthProvider>
  )
}

export default App
