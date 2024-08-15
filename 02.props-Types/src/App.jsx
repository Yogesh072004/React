import PropTypes from 'prop-types'
function App(props) {

  return (
    <>
      <h2>Hello {props.name} and your age is:{props.age} isMarried {String(props.isMarried)}</h2>
      <h3>Friends Are:{props.arr}</h3>
      <h3>Friends Are:{props.arr[1]}</h3>
      
     </>
  )
}
App.propTypes={
name:PropTypes.string.isRequired,
age:PropTypes.number,
isMarried:PropTypes.bool,
arr:PropTypes.array,

}
App.defaultProps=
{
  age:18
}


export default App;
