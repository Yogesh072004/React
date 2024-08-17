import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Click from './Customer.jsx'
// import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Click />
    
  </StrictMode>,
)
