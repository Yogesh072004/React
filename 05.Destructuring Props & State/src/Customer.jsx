// import React from 'react'
// 1st way
/*export default function ({name ,age}) {
  return (
    <div>
        <h1>{name}</h1>
        <h1>{age}</h1>
    </div>
  )
}*/


// 2nd way
/*export default function Customer(props) {
  let {name,age}=props
  return (
    <div>
        <h1>{name}</h1>
        <h1>{age}</h1>
    </div>
  )
}*/

// 3rd way
/*import React, { Component } from 'react'

export default class Customer extends Component {
  render() {
    const{name,age}=this.props
    return (
      
        <div>
        <h1>{name}</h1>
        <h1>{age}</h1>
    </div>
      
    )
  }
}*/

//4th way
import React, { Component } from 'react'

export default class Customer extends Component {
  constructor(){
    super();
    this.state={
      name:"Kumar",
      age:27,
    }
  }
  render() {
    const{name,age}=this.state
    return (
      
         <div>
        <h1>{name}</h1>
        <h1>{age}</h1>
    
      </div>
    )
  }
}

