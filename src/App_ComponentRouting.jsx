
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './styles/App.css'
import AboutPage from './pages/about'
import ContactPage from './pages/contact'
import HomePage from './pages/home'
import PageNotFound from './pages/pageNotFound'
import BaseLayout from './pages/_baseLayout'
import NavBar from './components/navBar'

export default function App() {
  

  return(
    <>
      <BrowserRouter>
      {/* NavBar does work here and will generate the navbar before the page will display */}
        <NavBar />

        <Routes>

          <Route path='/' element={<BaseLayout />}>
            <Route index element={<HomePage />} />
            <Route path='/about' element={<AboutPage />} />
            <Route path='/contact' element={<ContactPage />} />
            <Route path='*' element={<PageNotFound />} />
          </Route>

          {/* Component-based routing (traditional)
          <Route path='/' element={<HomePage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/contact' element={<ContactPage />} />
          {/* Need a page for any not-matched route */}
          {/* <Route path='*' element={<PageNotFound />} /> */}

          {/* Nested routing */}
          {/* <Route path='/' element={<HomePage />}>
            <Route path='about' element={<AboutPage />}/>
            <Route path='contact' element={<ContactPage />}/>
          </Route> */}
        </Routes>
      </BrowserRouter>

        
    </>
  )
}


