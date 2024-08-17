import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ClickFunction from './ClickFunction'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <ClickFunction name="Mohan"/>
  </StrictMode>,
)
