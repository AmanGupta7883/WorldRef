import Home from './component/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Notification from './component/Notification'
import Navbar from './component/Navbar'
import Login from './component/Login'
import Register from './component/Register'

function App() {

  return (
    <>
        <Router>
          <Notification />
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </Router>
    </>
  )
}

export default App
