import { Component } from 'react';
import PropTypes from 'prop-types';
export default class MountingExample extends Component {
    constructor(props) {
        super(props);

        this.state = {
            message: 'initial message',
            name: props.name
        };
        console.log('Constructor Component being initialised');
    }

   /* static getDerivedStateFromProps(nextProps, currentState) {
        console.log('getDerivedStateFromProps');
        if (nextProps.name !== currentState.name) {
            return {
                name: nextProps.name
            };
        }
        console.log('null returning')
        return null;
    }*/

    componentDidMount() {
        console.log('componentDidMount has been mounted');
        setTimeout(() => {
            this.setState({
                message: 'updated after mounting'
            });
        }, 2000);
    }

    render() {
        console.log('Render component is rendering');
        return (
            <div>
                <h1>Mounting Phase</h1>
                <p>Message: {this.state.message}</p>
                <p>Name: {this.state.name}</p>
            </div>
        );
    }
}
// Define propTypes for the component
MountingExample.propTypes = {
    name: PropTypes.string.isRequired
};
