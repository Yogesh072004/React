

// 1st way

// import './App.css'


// function Click() {
//     function Hello(){
//         alert("Hello Bro")
//     }
//   return (
//     <div className='App'>
//         <h1>hih</h1>
//         <button>onClick={Hello}Click Me</button>
//     </div>
//   )
// }

// export default Click;

// 2nd way
// import './App.css';
// import { Component } from 'react'; // Only import Component if needed

// export default class ClickFunction extends Component {
//     Hello = () => {
//         alert("Hello Bro");
//     }

//     render() {
//         return (
//             <div className='App'>
//                 <button onClick={this.Hello}>Click Me</button>
//             </div>
//         );
//     }
// }




//3rd way
import './App.css'


function ClickFunction() {
    const Hello= (name)=>{
        alert("Hello your name is: "+name)
        
    }
  return (
    <div className='App'>
        <h1>hi</h1>
        <button onClick={()=>Hello("yogesh")}>Click Me</button>
    </div>
  )
}

export default ClickFunction;