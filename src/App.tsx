
import { Route, Routes } from 'react-router-dom'
import Home from './pages/homePage'
import Dashboard from './pages/dashboard'
import Signin from './pages/signin'
function App() {
  return (
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/signin" element={<Signin />} />

    </Routes>
  )
}

export default App
