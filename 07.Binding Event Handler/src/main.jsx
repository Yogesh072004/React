import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'
import Binding from './Binding'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <Binding/>

  </StrictMode>,
)
