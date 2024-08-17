// import React from 'react'
// import './App.css'


// function ClickFunction() {
//     function Hello(){
//         alert("Hello Bro")
//     }
//   return (
//     <div className='App'>
//         <h1>hi</h1>
//         <input type='button' onClick={Hello}>Click Me</input>
//     </div>
//   )
// }

// export default ClickFunction;


// import './App.css'
// import React, { Component } from 'react'

// export default class ClickFunction extends Component {

//      Hello(){
//                alert("Hello Bro") 
//              }
//   render() {
//     return (
//       <div className='App'>
//            <input type='button' onClick={Hello}>Click Me</input>
//       </div>
//     )
//   }
// }



import React from 'react'
import './App.css'


function ClickFunction(props) {
    const Hello= (name)=>{
        alert("Hello your name is: "+name)
        
    }
  return (
    <div className='App'>
        <h1>hi</h1>
        <input type='button' onClick={()=>Hello(props.name)}>Click Me</input>
    </div>
  )
}

export default ClickFunction;