import './global.css'
import { Route, Routes } from 'react-router'
import Layout from './layouts/layout'
import Home from './pages/Home'
import CreateProfile from './pages/CreateProfile'
import Profile from './pages/Profile'
import { DevelopersProvider } from './context/DevelopersContext'

function App() {
  return (
    <AuthProvider>
      <DevelopersProvider>
        <Routes>
          <Route element={<Layout />}>
            <Route path='/' element={<Home />} />
            <Route path='/dev/crear' element={<CreateProfile />} />
            <Route path='/profile/:id' element={<Profile />} />
            <Route path='*' element={<h1>404 - Página no encontrada</h1>} />
          </Route>
        </Routes>
      </DevelopersProvider>
    </AuthProvider>
  )
}

export default App
