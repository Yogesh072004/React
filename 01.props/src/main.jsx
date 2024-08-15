import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// import './index.css'
import HelloMessage from './HelloMessage'
import House from './house';

let a="yogeshp";
createRoot(document.getElementById('root')).render(

  <StrictMode>
    <HelloMessage name={a} age={29} >
      <button type='button' value="Click">Click</button>
    </HelloMessage>
    
    <HelloMessage name="Kumar" age={29}/>
    <hr></hr>
    <h4>2.Components Passing</h4>
    <House/>
  </StrictMode>,
)
