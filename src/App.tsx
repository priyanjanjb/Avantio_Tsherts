
import { Route, Routes } from 'react-router-dom'
import Home from './pages/homePage'
import Dashboard from './pages/dashboard'
import Signup from './pages/signup'
import Login from './pages/login'
function App() {
  return (
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      // log in path 

    </Routes>
  )
}

export default App
