import { Component } from 'react'; // Only import Component if needed

export default class Child extends Component {
  componentWillUnmount(){
    console.log("componentwill unmount called..")
  }
  render() {
    return (
      <div>
        <h1>Hey mohan bro</h1>
      </div>
    )
  }
}
