
import { Route, Routes } from 'react-router-dom'
import './App.css'
import AboutPage from './pages/about'
import ContactPage from './pages/contact'
import HomePage from './pages/home'
import PageNotFound from './pages/pageNotFound'

export default function App() {
  

  return(
    <>
      
        <Routes>
          {/* Component-based routing (traditional) */}
          <Route path='/' element={<HomePage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/contact' element={<ContactPage />} />
          {/* Need a page for any not-matched route */}
          <Route path='*' element={<PageNotFound />} />

          {/* Object-based routing (new) */}
          {/* <Route path='/' element={<HomePage />}>
            <Route path='about' element={<AboutPage />}/>
            <Route path='contact' element={<ContactPage />}/>
          </Route> */}
        </Routes>

        
    </>
  )
}


