import { Component } from 'react'; 
import Child from './Child';
export default class Parent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         active:true
      }
    }
    changestate=()=>{
     this.setState({
        active:false
     })
    }
  render() {
    console.log("Parent rendered called")
    return (
      <div>
        {this.state.active?<Child/> :<h1>component deleted</h1>}
        
        <button onClick={this.changestate}>Change state</button>
      </div>
    )
  }
}
