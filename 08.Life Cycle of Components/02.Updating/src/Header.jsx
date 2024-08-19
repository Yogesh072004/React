import React from 'react';
import PropTypes from 'prop-types'

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { favoritecolor: "red" };
  }

  // Lifecycle method called before rendering when new props or state are received
  static getDerivedStateFromProps(props, state) {
    
    // eslint-disable-next-line react/prop-types
    return { favoritecolor: props.favcol || state.favoritecolor };
  }

  // Lifecycle method that determines whether the component should update
  shouldComponentUpdate(nextProps, nextState) {
    // Prevent re-render if the color is the same
    return nextState.favoritecolor !== this.state.favoritecolor;
  }

  // Lifecycle method that gets called right before the DOM is updated
  getSnapshotBeforeUpdate(prevProps, prevState) {
    // Capture previous state before update
    if (document.getElementById("div1")) {
      document.getElementById("div1").innerHTML = 
        "Before the update, the favorite was " + prevState.favoritecolor;
    }
    return null;
  }

  // Lifecycle method called immediately after the DOM is updated
  componentDidUpdate() {
    // Update the DOM with new state
    if (document.getElementById("div2")) {
      document.getElementById("div2").innerHTML = 
        "The updated favorite is " + this.state.favoritecolor;
    }
  }

  // Component lifecycle method called when the component is mounted
  componentDidMount() {
    setTimeout(() => {
      this.setState({ favoritecolor: "yellow" });
    }, 1000);
  }

  changeColor = () => {
    this.setState({ favoritecolor: "blue" });
  };

  render() {
    return (
      <div>
        <h1>My Favorite Color is {this.state.favoritecolor}</h1>
        <button type="button" onClick={this.changeColor}>
          Change color
        </button>
        <div id="div1"></div>
        <div id="div2"></div>
      </div>
    );
  }
}
Header.propTypes = {
  name: PropTypes.string.isRequired
};

export default Header;
