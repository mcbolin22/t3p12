import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App_ComponentRouting.jsx'
// import App from "./App_ObjectRouting"
import './styles/index.css'
import NavBar from './components/navBar.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      {/* NavBar wont work here because it cant reach up and find the components */}
      {/* <NavBar /> */}
      <App />
    
    
  </React.StrictMode>,
)
