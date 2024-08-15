import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

// 1st way
// import React from 'react'
// class App extends React.Component{
//   render(){
//     return(
//       <h1>hi yogesh</h1>
//     );
//   }
// }

// 2nd way
import React ,{Component}from 'react'
class App extends Component{
  render(){
    return(
      <>
      <h1>hi yogesh</h1>
      <App2/>
      </>
    );
  }
}

export   function App2(){
return(
<h2>Function Component</h2>
);
}
export default App;


