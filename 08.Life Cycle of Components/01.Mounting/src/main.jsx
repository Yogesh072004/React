import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import MountingExample from './MountingExample.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MountingExample name="Yogesh"/>
  </StrictMode>,
)
