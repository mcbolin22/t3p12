
import { BrowserRouter, Route, RouterProvider, Routes, createBrowserRouter } from 'react-router-dom'
import './App.css'
import AboutPage from './pages/about'
import ContactPage from './pages/contact'
import HomePage from './pages/home'
import PageNotFound from './pages/pageNotFound'

// Object Routing (new)
// Used for preloading data from server, more complicated way of doing Component based Routing.
const someRouterBlahBlah = createBrowserRouter(
  [
    {
      path:"/",
      element: <HomePage />,
      errorElement: <PageNotFound />
    },
    {
      path:"/about",
      element: <AboutPage />

    },
    {
      path:"/contact",
      element: <ContactPage />
    }
  ]
);

export default function App() {
  

  return(
    <>
      <RouterProvider router={someRouterBlahBlah} />

        
    </>
  )
}


