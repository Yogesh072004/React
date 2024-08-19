import { Component } from 'react'; 
import Child from './Child';
export default class Parent extends Component {
    ParentMethod=(name)=>{
      alert('Hello from Parent..'+name)
    }
    
  render() {
    console.log("Parent rendered called")
    return (
      <div>
        <Child callMethod={this.ParentMethod}/>
      </div>
    )
  }
}
