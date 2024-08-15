import React, { Component } from 'react'

export default class Employee extends Component {
    state={
        name:this.props.name, //accessing props
        count:1,
    
        
    }
    // 1.with constructor
    /*constructor(props){

        super (props);
        this.state={
            name:this.props.name, //accessing props
            count:1,
            // class:this.props.class
            
        }
    }*/
    changeName(){
        this.setState({
            name:"mohan",
            count:this.state.count+1
        })
    }
  render() {
    return (
      <div>Hello World {this.state.name} 
      <h2>count:{this.state.count}</h2>
      <p><button onClick={()=>this.changeName()}>click me</button></p>
      </div>
    )  }
}
