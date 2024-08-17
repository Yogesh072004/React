import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
// import './index.css'
import Customer from './Customer'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <Customer name="Yogesh" age={25}/>
  </StrictMode>,
)
