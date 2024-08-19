//1.Using bind() method
/*import { Component } from 'react'; // Only import Component if needed

export default class Binding extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message:'Welcome'
      }
    }
    clickHandler(){
        this.setState(
            {
              message:'Farewell'  
            }
        )
    }
  render() {
    return (
      <div>
        <h3>{this.state.message}</h3>
        <button onClick={this.clickHandler.bind(this)}>Click</button>
      </div>
    )
  }
}
*/

//2.using arrow function
/*import { Component } from 'react'; // Only import Component if needed

export default class Binding extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message:'Welcome'
      }
    }
    clickHandler(){
        this.setState(
            {
              message:'Farewell'  
            }
        )
    }
  render() {
    return (
      <div>
        <h3>{this.state.message}</h3>
        <button onClick={()=>this.clickHandler()}>Click</button>
      </div>
    )
  }
}
*/

//3.Event Binding in Constructor
/*import { Component } from 'react'; // Only import Component if needed

export default class Binding extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message:'Welcome'
      }
      this.clickHandler=this.clickHandler.bind(this);
    }
    clickHandler(){
        this.setState(
            {
              message:'Farewell'  
            }
        )
    }
  render() {
    return (
      <div>
        <h3>{this.state.message}</h3>
        <button onClick={this.clickHandler}>Click</button>
      </div>
    )
  }
}*/

//4.using arrow function as class property
import { Component } from 'react'; // Only import Component if needed

export default class Binding extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message:'Welcome'
      }
      this.clickHandler=this.clickHandler.bind(this);
    }
    clickHandler=()=>{
        this.setState(
            {
              message:'Farewell'  
            }
        )
    }
  render() {
    return (
      <div>
        <h3>{this.state.message}</h3>
        <button onClick={this.clickHandler}>Click</button>
      </div>
    )
  }
}

