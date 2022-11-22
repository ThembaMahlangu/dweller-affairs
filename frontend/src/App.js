import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Header from './pages/Header'
import Dashboard from './pages/dashboard'
import Login from './pages/login'
import Register from './pages/register'
import Home from './pages/home'

function App() {
  return (
    <>
      <Router>
        <div className='container'>
          <Header />
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/dashboard' element={<Dashboard />} />
            <Route exact path='/login' element={<Login />} />
            <Route exact path='/register' element={<Register />} />
          </Routes>
        </div>
      </Router>
      <ToastContainer />
    </>
  )
}

export default App
