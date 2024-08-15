import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
// import './index.css'
const friends=["Yogesh","Mohan","Patil"]
createRoot(document.getElementById('root')).render(

  <StrictMode>
    <App  name="yogesh" age={22} isMarried={false} arr={friends}/>
  </StrictMode>,
)
