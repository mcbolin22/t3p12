
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import AboutPage from './pages/about'
import ContactPage from './pages/contact'
import HomePage from './pages/home'

export default function App() {
  

  return(
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/contact' element={<ContactPage />} />
        </Routes>

      </BrowserRouter>   
    </>
  )
}


