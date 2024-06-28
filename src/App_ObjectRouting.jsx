
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import AboutPage from './pages/about'
import ContactPage from './pages/contact'
import HomePage from './pages/home'
import PageNotFound from './pages/pageNotFound'
import BaseLayout from './pages/_baseLayout'

// Object Routing (new)
// Used for preloading data from server, more complicated way of doing Component based Routing.
const someRouterBlahBlah = createBrowserRouter(
  [
    {
      path:"/",
      element: <BaseLayout />,
      errorElement: <PageNotFound />,
      children: [
        {
          index: true,
          element: <HomePage />
        },
        {
          path:"about",
          element: <AboutPage />
    
        },
        {
          path:"contact",
          element: <ContactPage />
        }
      ]
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


