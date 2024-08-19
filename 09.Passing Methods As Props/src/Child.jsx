// import { Component } from 'react'; // Only import Component if needed
// import PropTypes from 'prop-types';


// export default class Child extends Component {


//   render() {
//     return (
//       <div>
//         {/* <button onClick={this.props.callMethod}>Click Me</button>  */}
//         <button onClick={()=>this.props.callMethod('yogesh')}>Click Me</button> 
        
//       </div>
//     )
//   }
// }

// Child.propTypes = {
//   callMethod: PropTypes.string
// };

// 2.using functional component
import PropTypes from 'prop-types'
export default function Child(props) {
  return (
    <div>
      <button onClick={()=>props.callMethod('yogesh')}>Click Me</button> 
    </div>
  )
}
Child.propTypes = {
   callMethod: PropTypes.string
   };